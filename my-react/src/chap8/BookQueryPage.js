import { useSearchParams } from "react-router-dom";

/**
 * 書籍クエリページを表示するコンポーネント。
 * URLのクエリパラメータからISBNコードを取得し、
 * そのISBNコードに基づいたメッセージを表示する。
 * @returns ISBNコードに基づくメッセージを表示するJSX要素
 */
export default function BookQueryPage() {
    // クエリパラメータを取得
    const [params, setParams] = useSearchParams(
        { isbn: '978-4-8156-0182-9（デフォルト値）' } // クエリ情報にisbnがなかった場合のデフォルト値
    );
    return <p>ISBNコード「{params.get('isbn')}」のページです。</p>;
}
/**
 * useSearchParams関数
 * クエリパラメーターを取得する。
 * 変数paramsの実体は、ブラウザ標準のURLSearchParamsオブジェクト。
 * そのため、getメソッドでクエリパラメータにアクセスできる。
 */