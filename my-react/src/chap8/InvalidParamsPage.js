import { useRouteError } from "react-router-dom";

/**
 * 無効なパラメータページを表示するコンポーネント。
 * ルート上で発生したエラーを取得し、そのエラーメッセージを赤色のテキストで表示します。
 * 
 * @returns {JSX.Element} - エラーメッセージを表示する JSX 要素
 */
export default function InvalidParamsPage() {
    // ルート上で発生したエラーを取得
    const error = useRouteError();
    return (
        <p style={{ color: "red" }}>{error.message}</p>
    );
}