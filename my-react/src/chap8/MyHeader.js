import { Helmet } from "react-helmet-async";
import { useMatches } from "react-router-dom";

/**
 * ヘッダーコンポーネント
 * ドキュメントヘッドの情報を設定する。
 * ルートマッチから取得したhandleオブジェクトのデフォルト値を使用し、propsから渡された値で
 * プレースホルダーを置換する。
 *
 * @param {object} props - コンポーネントに渡されるプロパティ。
 * @param {string} props.title - タイトルに使用する文字列。
 * @param {string} props.keywords - キーワードに使用する文字列。
 * @param {string} props.description - 説明に使用する文字列。
 *
 * @returns {JSX.Element} ドキュメントヘッドを設定するためのHelmet要素を返す。
 */
export default function MyHeader(props) {
    // デフォルト値を設定し、handleオブジェクトから各プロパティを分割代入
    let {
        title = "React入門",
        keywords = "React, JavaScript, フレームワーク",
        description = "React入門のサンプルです。"
    } = useMatches().at(-1).handle ?? {};

    // Propsの値をプライスホルダーに置換して反映
    title = title.replace("%s", props.title);
    keywords = keywords.replace("%s", props.keywords);
    description = description.replace("%s", props.description);

    return (
        // <head>要素に埋め込む要素
        <Helmet>
            <title>{title}</title>
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
        </Helmet>
    );
}