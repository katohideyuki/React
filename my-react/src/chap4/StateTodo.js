import { useState } from "react";
import './StateTodo.css';

/* Todo項目idの最大値（登録都度にインクリメント） */
let maxId = 0;

/**
 * TODOリストの新規作成し、表示する。
 * @returns TODOリスト
 */
export default function StateTodo() {
    // 入力値（title）, Todoリスト（todo）をStateで管理
    const [title, setTitle] = useState('');
    const [todo, setTodo] = useState([]);

    // ソート方向（true:降順)
    const [isDesc, setIsDesc] = useState(true);

    // テキストボックスへの入力値をStateに反映
    const handleChangeTitle = e => {
        setTitle(e.target.value);
    };

    // Todoリストへの入力値をStateに反映
    const handleClick = () => {
        // 新規のTodoを追加
        setTodo([
            ...todo,
            {
                id: ++maxId,            // id
                title,                  // Todo本体
                created: new Date(),    // 作成日時
                isDone: false           // 実行済みフラグ
            }
        ]);
    };

    // 「済」ボタンでTodo項目を完了状態
    const handleDone = e => {
        setTodo(todo.map(item => {
            // todo配列内で同じidがある場合
            if (item.id === Number(e.target.dataset.id)) {
                return {
                    ...item,
                    isDone: true    // 実行済みフラグを更新
                };
            }
            return item;
        }));
    };

    // 削除ボタンで該当するTodo項目を削除
    const handleRemove = e => {
        setTodo(todo.filter(item => item.id !== Number(e.target.dataset.id)));
    };

    // ソート処理
    const handleSort = e => {
        // 既存のTodoリストを複製の上でソート
        const sorted = [...todo];
        sorted.sort((m, n) => {
            // 降順の場合、昇順を表示
            if (isDesc) {
                return n.created.getTime() - m.created.getTime();
            }

            // 上記以外の場合、降順を表示
            return m.created.getTime() - n.created.getTime();
        });
        // desc値を反転
        setIsDesc(d => !d);
        // ソート済みのリストを再セット
        setTodo(sorted);
    };

    return (
        <div>
            <label >
                やること :
                <input type="text" name="name" id="name" value={title} onChange={handleChangeTitle} />
            </label>
            <button type="button" onClick={handleClick}>追加</button>
            <button type="button" onClick={handleSort}>ソート ({isDesc ? '↑' : '↓'})</button>
            <hr />
            {/* TODOリストを整形 */}
            <ul>
                {todo.map(item => (
                    <li key={item.id} className={item.isDone ? 'done' : ''}>
                        {item.title}
                        {/* 各ボタンにID(data-id)を割り振り、識別できるようにする */}
                        <button type="button" onClick={handleDone} data-id={item.id}>済</button>
                        <button type="button" onClick={handleRemove} data-id={item.id}>削除</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
/**
 * map(() => ())
 * アロー関数で直接returnされる式を囲むために使う。
 * return文を書かずにすぐに式を返すことができます。
 */