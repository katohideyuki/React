import { memo } from "react";

/**
 * MyButtonコンポーネント。
 * カウンターを増減するためのボタン。
 * Propsの値が変更された場合に再実行する。
 * @param {Object} props - コンポーネントのプロパティ
 * @param {String} props.id - ID
 * @param {Function} props.handleClick - ボタンのハンドラー
 * @param {React.ReactNode} props.children - ボタンキャプション
 * @returns {JSX.Element} ボタンのJSX要素
 */
export const MyButton = memo(({ id, handleClick, children }) => {
    // 再描画時にログ出力
    console.log(`MyButton is called: ${id}`);
    return (
        <button onClick={handleClick}>{children}</button>
    );
});

/**
 * MyCounterコンポーネント
 * カウンター値を表示するラベル。
 * Propsの値が変更された場合に再実行する。
 * @param {Object} props - コンポーネントのプロパティ
 * @param {String} props.id - ID
 * @param {String} props.id - カウンター値
 * @returns {JSX.Element} ラベルのJSX要素
 */
export const MyCounter = memo(({ id, value }) => {
    // 再描画時にログ出力
    console.log(`MyCounter is called: ${id}`);
    return (
        <p>現在値 : {value}</p>
    );
});
/**
 * memo関数
 * パフォーマンスを最適化する。
 * useMemo関数とは異なり、依存する変数を指定しない。
 * 無条件にPropsの変化でもって再業がの要否を判定する。
 * (新旧のPropsが等価でない場合にだけ再描画)
 */