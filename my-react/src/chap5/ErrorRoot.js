import { ErrorBoundary } from "react-error-boundary";
import ErrorThrow from "./ErrorThrow";

/**
 * Error Boundaryを実装。
 * @returns ErrorThrowコンポーネント
 */
export default function ErrorRoot() {
    return (
        <>
            <h3>Error Boundaryの基本</h3>
            <ErrorBoundary fallback={<div>エラーが発生しました。</div>}>
                <ErrorThrow />
            </ErrorBoundary>
        </>
    );
}
/**
 * Error Boundary
 * エラーが発生する可能性がある領域を括り、fallback属性にエラー発生時のコンテンツ(React要素)を
 * 指定すること。catch構文みたいなこと。
 * Error Boundaryを設置すべきどうかは、そこにフォールバックUI(エラーメッセージ)を表示するのが
 * 妥当かどうか、を一つの基準とする。
 * 
 * エラー時に何らかの処理を行う場合は、onError属性に設定する。
 * <Error Boundary onError={err => alert(err.message)}/>
 */