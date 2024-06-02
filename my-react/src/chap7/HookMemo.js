import { useCallback, useMemo, useState } from "react";
import { MyButton, MyCounter } from "./HookMemoChild";

/**
 * 指定された時間(ミリ秒)だけ処理を停止する。
 * @param {number} deley - ミリ秒単位のスリープ時間
 */
const sleep = deley => {
    const now = Date.now();
    while (Date.now() - now < deley);
};

/**
 * HookMemoコンポーネント。
 * 2つのカウンターを管理し、インクリメントとデクリメントを行うボタンを提供する。
 * @returns {JSX.Element} HookMemoコンポーネントのJSX要素
 */
export default function HookMemo() {
    // カウント値を管理するState
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    /**
     * インクリメント関数。
     * HookMemoコンポーネントが再描画された場合、increment関数に変更がないため、再生成されない。
     * @returns count1の値を1増加する。
     */
    const increment = useCallback(() => setCount1(c => c + 1), []);

    /**
     * デクリメント関数。
     * count2の値を1減少する。
     * HookMemoコンポーネントが再描画された場合、decrement関数に変更がないため、再生成されない。
     */
    const decrement = useCallback(() => setCount2(c => c - 1), []);

    /**
     * 重い処理を模倣する関数。
     * 1秒処理を停止し、count1に100を加えた値を返却する。
     * count1が変更された場合にのみ再計算する。
     * @returns {number} count1に100を加えた値。
     */

    const heavyProcess = useMemo(() => {
        sleep(1_000);
        return count1 + 100;
    }, [count1]);

    return (
        <>
            {/* 値を1ずつインクリメントするカウンター */}
            <div>
                <MyButton id="btn1" handleClick={increment}>カウントアップ</MyButton>
                <MyCounter id="c1" value={count1} />
                {/* 重い処理を実行 */}
                {heavyProcess}
            </div>
            <div>
                {/* 値を1ずつデクリメントするカウンター */}
                <MyButton id="btn2" handleClick={decrement}>カウントダウン</MyButton>
                <MyCounter id="c2" value={count2} />
            </div>
        </>
    );
}
/**
 * useMemo関数
 * パフォーマンスを最適化する。
 * 計算コストが高い値のメモ化（再計算を避けるために値をキャッシュする）を行うことで、
 * 依存する値が変更されたときにのみ関数を再実行し、それ以外の場合ににはキャッシュされた値を
 * 返すようにする。
 * 
 * ただし、パフォーマンス上の問題が起きてからメモ化を検討すること。
 * メモ化そのもののオーバーヘッドがあるため。
 * 不要な時にわざわざメモ化をした場合、逆にパフォーマンスが落ちる。
 * 
 * useCallBack関数
 * パフォーマンスを最適化する。
 * 関数の中で参照している変数が変更された場合のみ、再実行する。
 */