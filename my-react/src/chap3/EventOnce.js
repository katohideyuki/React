import { useState } from "react";

/**
 * 今日の運勢を表示する
 * 初回クリック時に一度だけ表示し、2回目以降は表示しない
 * @export
 * @return {*} クリック時に今日の運勢を表示するボタン要素
 */
export default function EventOnce() {
    // クリック済みかどうかを管理するためのフラグ
    const [clicked, setClicked] = useState(false);
    // 今日の運勢（点数）
    const [result, setResult] = useState('-');
    const handleClick = e => {
        // 未クリックの場合のみ運勢を算出
        if (!clicked) {
            setResult(Math.floor(Math.random() * 100 + 1)); // 運勢を判定
            setClicked(true);                               // フラグを更新
        }
    };
    // 未クリックの状態に戻す
    const handleReset = e => {
        setResult('-');
        setClicked(false);
    };
    return (
        <>
            <button onClick={handleClick}>結果表示</button>
            <button onClick={handleReset}>リセット</button>
            <p>今日の運勢は{result}点です。</p>
        </>
    );
}