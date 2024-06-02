import { useEffect, useState } from "react";
import './HookTimer.css';

/**
 * 1秒ごとのカウントダウンを表示する。
 * 
 * @returns 
 */
export default function HookTimer({ init }) {
    // カウントをState管理
    const [count, setCount] = useState(init);

    // コンポーネント初期起動時に一度だけ実行
    useEffect(() => {
        // 1秒ごとのカウントダウンするタイマーを準備
        const t = setInterval(() => {
            setCount(c => c - 1);
        }, 1_000);
        
        // コンポーネント破棄時にタイマーも破棄
        return () => clearInterval(t);

    }, []/*あえて空配列を宣言*/);

    return (
        // カウンターが0未満になった場合、スタイルを適用
        <div className={count < 0 ? 'warn' : ''}>
            現在のカウント: {count}
        </div>
    );
}

/**
 * あえて、useEffect関数の第二引数を空配列で定義することで、
 * コンポーネント初期起動時にのみ処理が実行されるようにしている。
 * ※こういう使い方は良いのか？
 * 
 * setInterval関数で作成したタイマーは、既定ではコンポーネントが破棄された後も
 * そのまま動き続けるので、明示的に破棄する必要がある。
 * 
 */