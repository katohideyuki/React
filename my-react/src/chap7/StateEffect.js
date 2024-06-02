import { useEffect, useState } from "react";
import Button from '@mui/material/Button'

/**
 * 日付とカウントアップを表示する。
 * @returns 
 */
export default function StateEffect({ init }) {
    // State管理
    const [count, setCount] = useState(init);
    const [hoge, setHoge] = useState('hoge');

    // State値が変化した場合にログを出力
    useEffect(() => {
        console.log(`count is ${count}.`);
    }/*描画すべき処理*/, [count]/*依存する変数(配列)*/);

    // ボタン押下時にカウントアップするハンドラー
    const handleClick = () => setCount(count + 1);
    return (
        <>
            {/* ボタンにタイムスタンプ値を反映 ※ボタンを押下しても、ログに出力されない*/}
            <Button variant="contained" color="primary"
                onClick={() => setHoge(Date.now())}>Hoge ({hoge})</Button>
            {/* カウントアップボタン ※監視対象なので、ボタンを押下すると、ログに出力される*/}
            <Button variant="contained" color="primary" onClick={handleClick}>カウント</Button>
            <p>{count}回、クリックされました。</p>
        </>
    );
}

/**
 * useEffect
 * 本項のサンプルはuseEffectの動作を確認するための例。
 * useEffectの利用はReactの外側との連携時（以下例）にとどめるべき。
 * - ブラウザAPI、文書ツリーへのアクセルを伴う操作
 * - ネットワークからのデータ取得
 * - 非Reactアプリで管理された領域との同期
 * 
 * 
 * useEffect関数の第二引数「依存する変数（配列）」は、常に明示的に定義すべき。
 * なぜなら、以下仕様のため。
 * - useEffect関数の「依存する変数（配列）」を省略した場合
 *   - コンポーネントが再描画される度に常に実行される。
 * - useEffect関数の「依存する変数（配列）」に空の配列を定義した場合
 *   - コンポーネントの初期描画時にのみ実行される。
 *     再描画時は実行されない。
 * 
 * 
 * フック(useXXXX)の一般的なルールで、以下に場合にはフックを呼び出すことはできない。
 * - 条件分岐、ループ、入れ子となった関数の配下
 * - 普通の関数（関数コンポーネントではない）
 */