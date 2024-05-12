import { ErrorBoundary } from "react-error-boundary";
import ErrorEvent from "./ErrorEvent";

/**
 * 例外処理を行う。
 * @returns ErrorEventコンポーネント
 */
export default function ErrorEventRoot() {

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

    return (
        <ErrorBoundary fallbackRender={handleFallback}>
            <ErrorEvent />
        </ErrorBoundary>
    );
}
/**
 * Error Boundary はあくまでレンダリング過程でのエラーを補足するもので、
 * イベントハンドラー、非同期コードなどのエラーは補足の対象外。
 * 
 * Error Boundary 自体がスローした例外も処理の対象外。
 * その場合は、上位のError Boundary で処理される。
 */