import Download from "./Download";

/**
 * 個々の書籍リスト項目を処理する。
 * @export
 * @param {*} { book } 一つの書籍情報
 * @return {*} 整形した書籍情報
 */
export default function ForItem({ book }) {
    return (
        <>
            <dt>
                <a href={`https://wings.msn.to/books/${book.isbn}/${book.isbn}.jpg`}>
                    {book.title} ({book.price}円)
                </a>
            </dt>
            <dd>
                {book.summary}
                {/* 条件演算子を利用 */}
                {/* {book.download ? <Download isbn={book.isbn}/> : null} */}

                {/* trueの時だけ実行すればよい */}
                {book.download && <Download isbn={book.isbn}/>}
            </dd>
        </>
    );
}
/**
 * JSX式内にif文を埋め込むことはできないため、
 * 条件演算子（三項演算子みたいなもの）を利用する。
 * nullは「出力がない」という意味。
 * 
 * 短絡評価を活用して、以下のような条件にすることも可能。
 * - 式がtrueの場合にだけ出力したい場合、「&&」演算子を利用
 * - 式がfalseの場合にだけ出力したい場合、「||」演算子を利用
 */