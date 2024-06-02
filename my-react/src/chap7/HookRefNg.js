import { useState } from "react";
import Button from '@mui/material/Button'

/**
 * 1秒ごとにカウントアップする。
 * ※タイマーを正しく制御できず、不具合が発生する。
 * @returns 
 */
export default function HookRefNg() {
    // タイマーのON/OFFをState管理
    let id = null;
    const [count, setCount] = useState(0);

    /**
     * 開始ボタンでタイマー生成
     */
    const handleStart = () => {
        // タイマー稼働していない場合
        if (id === null) {
            id = setInterval(() => setCount(c => c + 1), 1_000);
        }
    };

    /**
     * 終了ボタンでタイマー破棄
     */
    const handleEnd = () => {
        clearInterval(id);
        id = null;
    };

    return (
        <>
            <Button variant="contained" color="primary" onClick={handleStart}>開始</Button>
            <Button variant="contained" color="primary" onClick={handleEnd}>終了</Button>
            <p>{count}秒経過</p>
        </>
    );
}
/**
 * 関数コンポーネントは再描画のたび（この例ではState値が更新されるたび）に、
 * 再実行される。ローカル変数の生存期間は関数が終了するまでなので、setIntervalが実行された時のidと、
 * clearInterval関数が実行される時のidが違う。
 */