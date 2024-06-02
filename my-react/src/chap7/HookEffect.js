// import { useEffect } from "react";
import { useLayoutEffect, useState } from "react";


/**
 * delay秒だけ処理を休止する。
 * @param {*} delay スリープ時間(ミリ秒)
 */
const sleep = delay => {
    // 現在時刻取得
    const start = Date.now();
    // 現在時刻がstart(開始時刻)を超えるまでループを継続
    while (true) {
        if (Date.now() - start > 1_000) { break; }
    };
};


/**
 * ボタンを押下する度にカウントアップする。
 * useStateの初期値に渡せばよいが、今回は動作確認のため。
 * @param {*} param0 Props
 * @returns 
 */
export default function HookEffect({ init }) {
    // State管理 ※useEffectの場合、先に初期値0で画面を描画
    const [count, setCount] = useState(0);

    // カウントボタンクリック時にカウント値をインクリメント
    const handleClick = () => setCount(count + 1);

    // useEffectの場合
    // 2_000ミリ秒後にState(count)を設定
    // useEffect(() => {
    //     sleep(2_000);
    //     setCount(init);
    // }, []);

    // useLayoutEffectの場合
    // 2_000ミリ秒後にState(count)を設定
    useLayoutEffect(() => {
        sleep(2_000);
        setCount(init);
    }, []);

    return (
        <>
            <p>初期構築画面からスリープ後の再描画で表示される画面を確認する</p>
            <button onClick={handleClick}>カウント</button>
            <p>{count}回、クリックされました。</p>
        </>
    );
}
/**
 * useEffectの場合
 * useStateで最初に設定した初期値0で画面が表示され、2_000ミリ秒後、init値に置き換わる。
 * 
 * useLayoutEffectの場合
 * useStateで最初に設定した初期値0で画面が表示されず(白い画面のまま)、2_000ミリ秒後、init値で画面が表示される。
 * 画面構築されるまでスリープ秒分の遅延が発生する。
 * 
 * useEffect、useLayoutEffectの使い分け
 * 基本的にはuseEffectを使用する。
 * useLayoutEffectは積極的に使用する場面はあまりない。同期的に実行されることで、同期中は画面の描画を止めて
 * しまうため。
 * useLayoutEffectを使用するとしたら、描画に関わる情報をブラウザーなどから取得する必要がある場合。
 * 
 */