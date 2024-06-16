import { useParams } from "react-router-dom";

/**
 * 検索ページを表示するコンポーネント。
 * URLパラメータから検索ワードを取得し、その検索ワードに基づいたメッセージを表示する。
 * @returns 検索ワードに基づくメッセージを表示するJSX要素
 */
export default function SearchPage() {
    // 別名を使用した分割代入
    const { '*': keywords/*任意の名前*/ } = useParams();
    return <p>検索ワード「{keywords}」のページです。</p>;
}

/**
 * 「*」が付与されたパラメータを取得
 * 分割代入の場合、別名を使用する。
 * 分割代入ではない場合、以下のように取得する。
 * params['*']
 */