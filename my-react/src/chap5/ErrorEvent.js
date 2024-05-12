import { useErrorBoundary } from "react-error-boundary";

/**
 * 例外をスローするボタン要素を提供する。
 * @returns ボタン要素
 */
export default function ErrorEvent() {
    // showBoundary関数を取得するため、分割代入
    const { showBoundary } = useErrorBoundary();
    // 例外をスローするハンドラー
    const handleClick = () => {
        try {
            throw new Error('Error is occured in MyApp.');
        } catch (e) {
            // Error Boundary に例外を伝播
            showBoundary(e);
        }
    };

    return (
        <div>
            <button type="button" onClick={handleClick}>例外スロー</button>
        </div>
    );
}
/**
 * Error Boundary が補足できない例外を、Error Boundary に補足する方法。
 * useErrorBoundary関数で Error Boundary を操作するためのオブジェクトを取得し、
 * showBoundary(例外オブジェクト)を呼び出し、Error Boundary に例外を伝播する。
 */