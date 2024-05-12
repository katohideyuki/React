import { ErrorBoundary } from "react-error-boundary";
import ErrorRetryThrow from "./ErrorRetryThrow";

/**
 * 例外処理を行う。
 * 例外がスローされた場合のハンドリングを行う。
 * @returns 
 */
export default function ErrorRetryRoot() {
    // エラー時に実行される処理
    const handleFallback = ({ error/*エラー情報*/, resetErrorBoundary/*リセットするための関数*/ }) => {

        // resetErrorBoundary()メソッドを呼び出すだけでリトライする
        const handleClick = () => resetErrorBoundary();

        return (
            <div>
                <h4>以下のエラーが発生しました。</h4>
                <p>{error.message}</p>
                <button type="button" onClick={handleClick}>Retry</button>
            </div>
        );
    };

    // リセット時に実行される処理（エラー発生後、リトライされる前に実行される）
    const handleReset = () => console.log('Retry!');

    return (
        <>
            <h3>Error Boundaryの基本</h3>
            <ErrorBoundary onReset={handleReset} fallbackRender={handleFallback}>
                <ErrorRetryThrow />
            </ErrorBoundary>
        </>
    );
}

/**
 * onReset属性
 * リセットする前に実行される処理。一般的には、エラーの原因となったリソースを初期化するなど。
 * 
 * fallbackRender属性
 * エラー発生時に何らかの処理を行う。
 * 
 * resetErrorBoundary()
 * 引数として受け取ったresetErrorBoundary関数を呼び出すだけで、ErrorBoundaryをリセットし
 * 画面の再描画を試みる（ここではErrorRetryThrowコンポーネントの再描画）
 * 
 */
