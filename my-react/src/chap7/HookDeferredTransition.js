import { useDeferredValue, useState } from "react";
import books from "./books";
import commentList from "./comments";
import BookDetails, { CommentList } from "./BookDetails";

/**
 * 書籍選択とそれに関連するコメントを管理するコンポーネント。
 * @return {JSX.Element} 書籍選択とコメントを表示するJSX要素
 */
export default function HookDeferredTransition() {
    // 選択された書籍(isbn)と対応するコメント(comments)を管理するState
    const [isbn, setIsbn] = useState('');
    const [comments, setComments] = useState([]);
    // commentsの遅延バージョンを作成
    const deferredComments = useDeferredValue(comments);
    // commentsの遅延バージョンが異なる場合(Reactに余裕がまだない)、ペンディング状態
    const isPending = comments !== deferredComments;

    /**
     * 選択ボックスの変更に応じてStateを更新する関数。
     * コメントの更新は処理時間がかかるため、非同期で処理を行う。
     * @param {Object} e - イベントオブジェクト
     */
    const handleChange = e => {
        const isbn = e.target.value;
        setIsbn(isbn);
        setComments(commentList.filter(c => c.isbn === isbn));
    };

    return (
        <>
            <select onChange={handleChange}>
                <option value="">選択してください。</option>
                {books.map(b => (
                    <option key={b.isbn} value={b.isbn}>{b.title}</option>
                ))}
            </select>
            {/* BookDetailsコンポーネントの再描画はすぐ終わる */}
            <BookDetails isbn={isbn} />
            <hr />
            {/* CommentListコンポーネントの再描画は遅い。 */}
            <CommentList src={deferredComments} isPending={isPending} />
        </>
    );
}