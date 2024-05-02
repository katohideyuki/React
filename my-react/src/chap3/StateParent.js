import { useState } from 'react';
import StateCounter from './StateCounter';

/**
 * 総カウント数とカウンターボタン要素を表示する
 * @export
 * @return {*} カウント数とカウンターボタン要素
 */
export default function StateParent() {
    // カウント合計を表すcountを初期化
    const [count, setCount] = useState(0);

    // State値 {count} を更新するためのupdate関数
    const update = step => setCount(c => c + step);
    return (
        <>
            {/* update関数をStateCounterコンポーネントに引き渡す */}
            <p>総カウント：{count}</p>
            <StateCounter step={1} onUpdate={update} />
            <StateCounter step={5} onUpdate={update} />
            <StateCounter step={-1} onUpdate={update} />
        </>
    );
}