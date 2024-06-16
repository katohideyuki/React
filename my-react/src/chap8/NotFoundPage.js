import { useParams } from "react-router-dom";

/**
 * 404 Not Found ページを表示するコンポーネント。
 * 存在しないURLパスにアクセスされた場合、
 * URLパラメータから取得したパスをメッセージとして表示する。
 * @returns 存在しないパスに関するメッセージを表示するJSX要素
 */
export default function NotFoundPage() {
    const { '*': paths } = useParams();
    return <p>指定されたパス「{paths}」は存在しません。</p>;
}