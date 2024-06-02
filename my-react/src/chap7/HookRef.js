import { Button } from "@mui/material";
import { useRef, useState } from "react";

/**
 * 1秒ごとにカウントアップする。
 * @returns 
 */
export default function HookRef() {
    // タイマーのON/OFFをState管理
    let id = useRef(null);
    const [count, setCount] = useState(0);

    // タイマー稼働中のメッセージをState管理
    const [msg, setMsg] = useState('');

    /**
     * 開始ボタンでタイマー生成
     */
    const handleStart = () => {
        // タイマー稼働していない場合、タイマースタート
        if (id.current === null) {
            id.current = setInterval(() => setCount(c => c + 1), 1_000);

            // タイマー稼働している場合、メッセージを表示
        } else {
            setMsg('タイマー稼働中のため開始ボタンは動作しません。');
        }
    };

    /**
     * 終了ボタンでタイマー破棄
     */
    const handleEnd = () => {
        clearInterval(id.current);
        id.current = null;
        setMsg('');
    };

    return (
        <>
            <Button variant="contained" color="primary" onClick={handleStart}>開始</Button>
            <Button variant="contained" color="primary" onClick={handleEnd}>終了</Button>
            <p>{count}秒経過</p>
            <p>{msg}</p>
        </>
    );
}
/**
 * useRef
 * useRef関数の戻りは指定された値を内部に保持するRefオブジェクトで、
 * コンポーネントが破棄されるまで維持される。関数の終了までではない。
 */