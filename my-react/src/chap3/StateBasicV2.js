import { useState } from "react";

/**
 * カウントアップするボタンを作成
 * 
 * ただし、State値の更新用の関数内で、何回もState値を更新しても、
 * State値に反映されるのはハンドラー終了後なので意味がない。
 * @export
 * @param {*} { init } State値の初期値
 * @return {*} カウントアップするボタン要素とメッセージ
 */
export default function StateBasicV2({ init }) {
    const [count, setCount] = useState(init);
    // カウントボタンクリック時にカウント値をインクリメント
    const handleClick = () => {
        setCount(count + 1);    // 1回目の更新 ※参照しているcount変数は「2回目の更新」と同じなので、この処理は意味がなくなる
        setCount(count + 10);   // 2回目の更新 ※参照しているcount変数は「1回目の更新」が反映される前なので、ただ10プラスされるだけになる
    };
    return (
        <>
            <button onClick={handleClick}>カウント</button>
            <p>{count}回、クリックされました。</p>
        </>
    );
}

/**
 * 2ずつカウントアップするボタンを作成
 * 
 * アロー式にすることで、常に最新のState値を参照するため、
 * 定義通りにカウントアップされる。
 * ただし、更新タイミングを意識しなければならないため、非推奨。
 * @export
 * @param {*} { init } State値の初期値
 * @return {*} カウントアップするボタン要素とメッセージ
 */
// export default function StateBasicV2({ init }) {
//     const [count, setCount] = useState(init);
//     // カウントボタンクリック時にカウント値をインクリメント
//     const handleClick = () => {
//         setCount(c => c + 1);    // 1回目の更新
//         setCount(c => c + 1);    // 2回目の更新
//     };
//     return (
//         <>
//             <button onClick={handleClick}>カウント</button>
//             <p>{count}回、クリックされました。</p>
//         </>
//     );
// }