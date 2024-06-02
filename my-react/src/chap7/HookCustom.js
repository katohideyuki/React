import UseCounter from "./UseCounter";

/**
 * HookCustomコンポーネント。
 * カスタムフックであるUseCounterを使用して
 * カウンター機能を提供し、カウントの増減およびリセット操作を行う。
 * @returns {JSX.Element} HookCustomコンポーネントのJSX要素
 */
export default function HookCustom() {
    // カスタムフックUseCounterを使用してカウンターの状態と操作関数を取得
    const [state, handleUp, handleDown, handleReset] = UseCounter(0, 1);
    return (
        <>
            {/* カウントアップ、ダウン、リセットボタン */}
            <button onClick={handleUp}>カウントアップ</button>
            <button onClick={handleDown}>カウントダウン</button>
            <button onClick={handleReset}>リセット</button>
            {/* カウンターの状態を表示 */}
            <p>{state.count}回、クリックされました。</p>
        </>
    );
}