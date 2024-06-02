import { useState, useTransition } from "react";
import books from "./books";
import commentList from "./comments";
import BookDetails, { CommentList } from "./BookDetails";

/**
 * 書籍選択とそれに関連するコメントを管理するコンポーネント。
 * @return {JSX.Element} 書籍選択とコメントを表示するJSX要素
 */
export default function HookTransition() {
    // 選択された書籍(isbn)と対応するコメント(comments)を管理するState
    const [isbn, setIsbn] = useState('');
    const [comments, setComments] = useState([]);
    // トランジションを利用するための準備
    const [isPending/*更新中はtrue*/, startTransition/*非同期に更新処理を行う*/] = useTransition();

    /**
     * 選択ボックスの変更に応じてStateを更新する関数。
     * コメントの更新は処理時間がかかるため、非同期で処理を行う。
     * @param {Object} e - イベントオブジェクト
     */
    const handleChange = e => {
        const isbn = e.target.value;
        setIsbn(isbn);
        // トランジションの配下でStateを更新
        startTransition(() => {
            setComments(commentList.filter(c => c.isbn === isbn));
        });
        
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
            <CommentList src={comments} isPending={isPending}/>
        </>
    );
}
/**
 * isbnの更新で書籍情報を更新してから、改めてcommentsの更新をコメントリストに
 * 反映させるわけではなく、isbn、commentsの更新をまとめてページに反映する。
 * そのため、isbnの更新がすぐ完了しても、commentsの更新に時間がかかる場合、
 * isbnの反映も遅延してしまう。
 * 
 * useTransition関数
 * 非同期の更新を行う。
 * 優先度の高い更新(isbn)を先にページに反映したいので、優先度の低い更新(comments)は
 * 後回しにすることができる。
 * startTransition関数を呼び出すと、非同期に更新処理が開始される。
 * isPending変数はstartTransition関数による更新処理中はtrueで、
 * 完了するとfalseになる。
 */