import { atom, selector } from 'recoil'

/**
 * Atom定義ファイル
 */

/** 
 * Atomファイル
 * カウンター
 */
export const counterAtom = atom({
    key: 'counterAtom', // ストアを一意に特定するキー
    default: 0          // ストアの規定値
});

/** 
 * Atomファイル
 * TODOリスト
 */
export const todoAtom = atom({
    key: 'todoAtom',
    default: [
        {
            id: 1,                        // id値
            title: 'WINGS会議の資料作成',   // Todo本体
            isDone: false                 // 実行済みか
        },
        {
            id: 2,
            title: '報酬料の振込',
            isDone: true,
        },
        {
            id: 3,
            title: 'A書籍のサポートページ作成',
            isDone: true,
        },
        {
            id: 4,
            title: '読者質問への回答',
            isDone: false,
        },
        {
            id: 5,
            title: 'B出版社と打ち合わせ',
            isDone: false,
        }
    ]
});

/**
 * Selector
 * Todoリストの末尾のアイテムのidを取得する。
 * 取得できなかった場合、0を返却する。
 */
export const todoLastIdSelector = selector({
    key: 'todoLastIdSelector',  // ストアを一意に特定するキー
    get: ({ get }) => {         // セレクターの本体(get関数を渡すTodoリストを取得)
        const todo = get(todoAtom);
        return todo.at(-1)?.id ?? 0;
    }
});

/**
 * Recoil
 * 状態管理ライブラリのこと。
 * 
 * Atom
 * Stateを管理するストアのこと。
 * アプリを一意なキーで管理するのが基本。
 * 粒度はできるだけ小さくするのがお作法。
 * Recoilを利用したアプリでは、Atomは複数設置するのが一般的。
 * 
 * Array.prototype.at()メソッド
 * 指定したインデックスの要素を取得する。末尾から数える場合は負の整数を渡す。
 * 
 * Selector
 * Atomから取得したデータを加工/演算し、その結果を返却する。
 * Atomのためのゲッター/セッターみたいなもの。
 * getプロパティは、値を取得時にAtomの値を加工/演算する処理を設定。
 * 引数として、Atomやセレクターにアクセスするのためのget関数を引数にとる。(お約束）
 * 
 */