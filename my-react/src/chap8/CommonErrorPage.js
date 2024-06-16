import { isRouteErrorResponse, useRouteError } from "react-router-dom";

/**
 * 共通のエラーページコンポーネント。
 * ルート上で発生したエラーを表示する。
 * @returns {JSX.Element} - エラーページのJSX要素
 */
export default function CommonErrorPage() {
    // ルート上で発生したエラーを取得
    const error = useRouteError();
    // Response形式のエラーの場合
    if (isRouteErrorResponse(error)) {
        switch (error.status) {
            case 404:
                return <p>目的のページが見つかりませんでした。</p>;
            case 401:
                return <p>認証に失敗しています。</p>;
            case 501:
                return <p>サービスが一時的に停止しています。</p>;
            default:
                return <p>不明なエラー : {error.data.message}</p>
        }
    }

    // Response形式ではないエラーの場合
    return (
        <div>
            <h3>問題が発生しました。</h3>
            <p>詳細な問題 : {error.message}</p>
        </div>
    );
}
/**
 * useRouteError関数 : 
 * 
 * 取得した例外がResponseオブジェクトの場合、ErrorResponseオブジェクトとして処理する。
 */