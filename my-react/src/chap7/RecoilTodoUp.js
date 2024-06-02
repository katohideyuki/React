import { useState } from "react";
import { useRecoilState } from "recoil";
import { idsAtom, todoListSelector } from "../store/atomUp";
import '../chap4/StateTodo.css';

/**
 * 
 * @returns 
 */
export default function RecoilTodoUp() {
    const [title, setTitle] = useState('');
    // atom.jsに定義したAtom/Selectorから、値とセッターを取得
    const [todo, setTodo] = useRecoilState(todoListSelector/*セレクターのキー*/);
    const [ids, setIds] = useRecoilState(idsAtom/*アトムのキー*/);

    // テキストボックスへの入力をStateに反映
    const handleChangeTitle = e => setTitle(e.target.value);

    // 追加ボタンでTodo項目を追加
    const handleAdd = () => {
        // TodoリストのID管理Atomから次の最大値を取得(idsが空の場合、[0]の配列を渡す)
        const newId = Math.max(...(ids.length ? ids : [0])) + 1;

        // 更新情報を設定(設定情報のプロパティはatomUp.jsに予め定義)
        setTodo({
            // 処理内容
            type: 'add',
            // Todo項目
            newItem: {
                id: newId,
                title,
                isDone: false
            }
        });
    };

    // 済みボタンでTodo項目を作業済みに更新
    const handleDone = e => {
        setTodo({
            type: 'done',
            id: Number(e.target.dataset.id)
        });
    };

    // 削除ボタンでTodo項目を削除
    const handleRemove = e => {
        setTodo({
            type: 'remove',
            id: Number(e.target.dataset.id)
        });
    };

    return (
        <div>
            <label>
                やること:
                <input type="text" name="todo" value={title} onChange={handleChangeTitle} />
            </label>
            <button type="button" onClick={handleAdd}>追加</button>
            <hr />
            <ul>
                {/* Todoリストを順に出力 */}
                {todo.map(item => (
                    <li key={item.id} className={item.isDone ? "done" : ""}>
                        {item.title}
                        <button type="button" onClick={handleDone}
                            data-id={item.id}>済</button>
                        <button type="button" onClick={handleRemove}
                            data-id={item.id}>削除</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
/**
 * Math.max関数には配列をそのまま渡せないので、スプレッド構文を使用して配列を渡すこと。
 */