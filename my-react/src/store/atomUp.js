import { atom, atomFamily, selector } from "recoil";

/**
 * TodoリストのID管理Atom
 * Todo項目がいくつ存在するのか、使われているid値はなにか、を把握する。
 */
export const idsAtom = atom({
    key: 'idsAtom',
    default: []
});

/**
 * 個々のTodo項目を管理するAtom。
 */
export const todoAtom = atomFamily({
    key: 'todoAtom',
    default: null
});

/**
 * Todo項目をリストとして束ね、操作するためのセレクター。
 */
export const todoListSelector = selector({
    /** ストアを一意に特定するキー */
    key: 'todoListSelector',

    /**
     * Todo項目を取得する。
     * TodoリストのID管理Atomに設定されているidに紐づくTodoを取得し、
     * リスト化して返却する。
     * @param {*} param0 atomやセレクターを操作する関数
     * @returns Todoリスト
     */
    get: ({ get }) => {
        // TodoリストのID管理Atomから、IDリストを取得
        const ids = get(idsAtom);
        // IDリストに紐づくTodo項目をリスト化して返却
        return ids.map(id => get(todoAtom(id)));
    },

    /**
     * typeで指定した処理内容に応じてTodoリストを更新する。
     * 
     * @param {*} param0 atomやセレクターを操作する関数
     * @param {*} param1 設定情報
     */
    set: ({ set, reset }/*操作する関数*/, { type, id, newItem }/*設定情報*/) => {
        // typeに応じて追加/完了済み/削除
        switch (type) {

            // 追加
            case 'add':
                // 新たなTodo項目(todoAtom)を生成
                set(todoAtom(newItem.id),           // IDに紐づくTodo項目(新規なので存在しない)
                    newItem);                       // 追加するアトム

                // TodoリストのID管理Atomにも、追加対象のidを追加
                set(idsAtom,                        // IDリスト
                    ids => [...ids, newItem.id]);   // 現在のIDリストを基に新しいIDを追加したリスト
                console.log('追加されました');
                break;

            // 完了済み
            case 'done':
                // 既存のTodo項目(idであるtodoAtom)のisDoneプロパティをtrueに設定
                set(todoAtom(id),                         // IDに紐づくTodo項目を取得
                    todo => ({ ...todo, isDone: true })); // 実行済みを更新
                break;

            // 削除
            case 'remove':
                // 既存のTodo項目を削除し、TodoリストのID管理Atomからも、削除対象のidを削除
                reset(todoAtom(id));
                set(idsAtom, ids => ids.filter(e => e !== id));
                break;

            // 上記以外の場合エラー
            default:
                throw new Error('Type is invalid.');
        }
    }
});
/**
 * atomFamily関数
 * Atom群を生成する。
 * 個々のAtomにアクセスするには「todoAtom(一意キー)」のように、Atom群からAtomを特定する
 * ためのキーを指定する。対応するAtomがない場合、新規のAtomが作成される。
 * 
 * Selector
 * setプロパティは、値を更新時にAtomの値を加工/演算する処理を設定。
 * 引数として、Atomやセレクターにアクセスするのためのget/set/reset関数を引数にとる。
 */

