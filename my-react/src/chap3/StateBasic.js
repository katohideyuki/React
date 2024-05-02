import { useState } from "react";

/**
 * 
 *
 * @export
 * @param {*} { init } Props
 * @return {*} 
 */
export default function StateBasic({ init }) {
    // Stateを初期化
    const [count/*State値を格納する変数*/, setCount/*State値を更新するための関数*/] = useState(init);
    // カウントボタンクリック時にカウント値をインクリメント
    const handleClick = () => setCount(count + 1);
    return (
        <>
            <button onClick={handleClick}>カウント</button>
            <p>{count}回、クリックされました。</p>
        </>
    );
}

/**
 * State値を初期化するには、useState関数を使用
 */