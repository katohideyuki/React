import ForItem from "./ForItem";
import books from "./books";

/**
 * 書籍情報リストを管理する。
 * 
 * @export
 * @param {*} { src } 書籍情報リスト
 * @return {*} 整形した書籍情報リスト
 */
export default function ForNest({ src }) {
    return (
        <dl>
            {
                src.map(elem =>
                    // ForItemコンポーネントを使用して書籍情報を整形する
                    <ForItem book={elem} key={elem.isbn} />
                )
            }
            <p>{books.length > 0 && `${books.length}件のデータがあります。`}</p>
        </dl>
    );
}