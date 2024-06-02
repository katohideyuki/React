import { useDeferredValue, useState } from "react";

/**
 * テキストボックスを表示するコンポーネント。
 * テキストボックスに入力した値を遅延して取得し、
 * その値を使用して多くの段落をレンダリングする。
 * @return {JSX.Element} コメントリストを表示するJSX要素
 */
export default function HookDeferred() {
    // 入力したテキスト値をState管理
    const [text, setText] = useState('');
    // 変数textの遅延バージョンを生成
    const deferText = useDeferredValue(text);

    /**
     * テキストボックスの変更イベントハンドラー
     * テキストボックスに入力した値を更新し、`text`と`deferText`をコンソールにログ出力する。
     * @param {Object} e - イベントオブジェクト
     */
    const handleChange = e => {
        setText(e.target.value);
        // textは常に最新の値、deferTextは最新の値じゃない時もある
        console.log(`${text} / ${deferText}`);
    };

    return (
        <>
            {/* テキストボックス */}
            <input type="text" value={text} onChange={handleChange} />
            {/* 10,000個の段落をレンダリングしReactに負荷をかけ、遅延テキストを表示 */}
            {[...Array(10_000)].map((e, index) => <p key={index}>{deferText}</p>)}
        </>
    );
}
/**
 * useDeferredValue関数
 * 頻繁に更新される値に対して、変更を即座に反映せずに、Reactに余裕があるときにだけ反映する。
 */