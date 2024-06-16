import { useParams } from "react-router-dom";
import books from "../chap7/books";
import MyHeader from "./MyHeader";

/**
 * 書籍ページを表示するコンポーネント。
 * URLパラメータからISBNコードを取得し、表示する。
 * @returns {JSX.Element} 書籍のページを表示するJSX要素
 */
export default function BookPage() {
    // URLパラメータを取得
    // オブジェクトごと取得したパターン
    // const params = useParams();
    // return <p>ISBNコード「{params.isbn}」のページを表示しています。</p>;

    // 分割代入で取得し、デフォルト値を設定したパターン
    const { isbn = '978-4-8156-0182-9' } = useParams();

    // ISBNコードの形式でなければ例外をスロー
    if (!/978-4-[0-9]{2,7}-[0-9]{2,7}-[0-9X]/.test(isbn)) {
        throw new RangeError("ISBN is invalid!!");
    }

    // クリックしたISBNコードに対応する書籍情報を取得し、タイトル、説明情報を取得
    const { title, summary } = books.find(b => isbn === b.isbn);

    return (
        <>
            <MyHeader title={title} keywords={title}
                description={summary} />
            <p>ISBNコード「{isbn}」のページを表示しています。</p>
        </>
    );
}
/**
 * usePrams関数
 * URLパラメータを取得する。
 * 以下のように、オブジェクトごと受け取らずに、分割代入でisbnプロパティのみ取得することも可能。
 * const { isbn } = useParams();
 */