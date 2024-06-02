import { memo } from "react";
import books from "./books";

/**
 * 指定された時間(ミリ秒)だけ処理を停止する。
 * @param {number} deley - ミリ秒単位のスリープ時間
 */
const sleep = deley => {
    const now = Date.now();
    while (Date.now() - now < deley);
};

/**
 * 書籍の詳細情報を表示するコンポーネント。
 * @param {Object} props - コンポーネントに渡されるプロパティ
 * @param {string} props.isbn - 書籍のISBN情報
 * @return {JSX.Element} 書籍の詳細情報を表示するJSX要素
 */
export default function BookDetails({ isbn }) {
    const book = books.find(b => b.isbn === isbn);
    return (
        <ul>
            <li>ISBN:{book?.isbn}</li>
            <li>書名:{book?.title}</li>
            <li>価格:{book?.price}</li>
            <li>概要:{book?.summary}</li>
            <li>配布サンプル:{(book?.download) ? "あり" : "なし"}</li>
        </ul>
    );
}

/**
 * コメントリストを表示するコンポーネント。
 * @param {Object} props - コンポーネントに渡されるプロパティ
 * @param {Array<Object>} props.src - コメント情報リスト
 * @param {boolean} props.isPending - ローディング状態を示すフラグ
 * @return {JSX.Element} コメントリストを表示するJSX要素
 */
export const CommentList = memo(function ({ src, isPending }) {
    // isPendingがtrueの場合、ローディングメッセージを表示
    if (isPending) {
        return <p>Noe Loading...</p>;
    }

    // 受け取ったコメント情報をリスト表示
    return (
        <ol>
            {src.map(c => <CommentItem key={c.id} src={c} />)}
        </ol>
    );
});

/**
 * コメントアイテムを表示するコンポーネント。
 * 1秒処理を停止し、BookDetailsコンポーネントの描画よりも
 * 処理時間を遅くする。
 * @param {Object} props - コンポーネントに渡されるプロパティ
 * @param {Object} props.src - コメント情報オブジェクト
 * @return {JSX.Element} コメントアイテムを表示するJSX要素
 */
function CommentItem({ src }) {
    sleep(1000);
    return <li>{src.body} ({src.rank})</li>
};