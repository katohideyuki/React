import { ErrorBoundary } from "react-error-boundary";
import ErrorRetryThrow from "./ErrorRetryThrow";
import ErrorFallback from "./ErrorFallback";

/**
 * 例外処理を行う。
 * 例外がスローされた場合のハンドリングを行う。
 * 代替えコンテンツをレンダラーではなく、コンポーネントとして指定した場合
 * @returns 
 */
export default function ErrorRetryRoot2() {
    // リセット時に実行される処理（エラー発生後、リトライされる前に実行される）
    const handleReset = () => console.log('Retry!');

    return (
        <>
            <h3>Error Boundaryの基本</h3>
            {/* エラー時に描画するコンテンツをコンポーネントとして指定 */}
            <ErrorBoundary onReset={handleReset} FallbackComponent={ErrorFallback}>
                <ErrorRetryThrow />
            </ErrorBoundary>
        </>
    );
}

/**
 * FallbackComponent属性
 * 代替えコンテンツをレンダラーではなく、コンポーネントに切り出す場合
 */
