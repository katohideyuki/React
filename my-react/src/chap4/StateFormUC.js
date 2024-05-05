import { useRef } from "react";

/**
 * 入力値から挨拶メッセージを生成する。
 * @export
 * @return {*} 挨拶メッセージ
 */
export function StateFormUC() {
    // React要素への参照を準備（Refオブジェクトを生成する）
    const name = useRef(null);
    const age = useRef(null);

    // 要素（参照）経由で入力値を準備
    // 参照はRefオブジェクト.currentプロパティ.valueで参照する
    const show = () => console.log(`こんにちは、${name.current.value}(${age.current.value}歳)さん！`);

    // フォームを描画
    return (
        <form>
            {/* 準備したRefオブジェクトを各要素に紐づける */}
            <div>
                <label htmlFor="name">名前:</label>
                <input type="text" name="name" ref={name} defaultValue="佐藤理央" />
                {/* value属性だと値がロックされ、入力変更できない */}
                {/* <input type="text" name="name" ref={name} value="佐藤理央" /> */}
            </div>
            <div>
                <label htmlFor="age">年齢</label>
                <input type="text" name="age" ref={age} defaultValue="18" />
            </div>
            <div>
                <button type="button" onClick={show}>送信</button>
            </div>
        </form>
    );
}

/**
 * 非制御コンポーネント
 * 入力値をStateで保持しないコンポーネント。
 * Stateを利用しないので、<input>/<select>など要素に直接アクセスする必要がある。
 * メリット
 * - Stateを利用しないので、再描画が発生しない、非Reactな仕組み（JavaScript標準）で
 * - アクセスできるので簡単。
 * デメリット
 * - 値の変化を即座に検知できないため、リアルタイムな入力値検証やフォームの操作は苦手。
 * 
 * Stateを利用しないので、デフォルト値を設定する場合defaultValue属性に設定する。
 * value属性に設定した場合、値はロックされ変更できなくなる（入力すらできない）。
 */