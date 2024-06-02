import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoAtom, todoLastIdSelector } from "../store/atom"

/**
 * 
 * @returns 
 */
export default function RecoilTodo() {
    const [title, setTitle] = useState('');
    // Todoリスト、最大値idをそれぞれRecoilから取得
    const [todo, setTodo] = useRecoilState(todoAtom);
    const maxId = useRecoilValue(todoLastIdSelector);

    const handleChangeTitle = e => setTitle(e.target.value);
    // 追加ボタンでTodo項目を追加
    const handleAdd = () => {
        setTodo([
            ...todo,
            {
                id: maxId + 1,
                title,
                idDone: false
            }
        ]);
    };

    // 済みボタンでTodo項目を作業済みに更新
    const handleDone = e => {
        setTodo(todo.map(item => {
            // 更新したidをTodoリストから検索
            if (item.id === Number(e.target.dataset.id)) {
                // 実行済みに更新
                return {
                    ...item,
                    isDone: true
                };

                // 更新したidがTodoリストに存在しない場合、現状のTodoリストを返す
            } else {
                return item;
            }
        }));
    };

    // 削除ボタンでTodo項目を削除
    const handleRemove = e => {
        // 選択した項目以外の項目のみを残したTodoリストを返す
        setTodo(todo.filter(item => item.id !== Number(e.target.dataset.id)));
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
                    <li key={item.id} className={item.idDone ? "done" : ""}>
                        {item.title}
                        <button type="button" onClick={handleDone}>済</button>
                        <button type="button" onClick={handleRemove}
                            data-id={item.id}>削除</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
/**
 * useRecoilValue
 * State値そのものを取得する。
 */