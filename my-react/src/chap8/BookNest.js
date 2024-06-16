import React from "react";
import books from "../chap7/books";
import { NavLink, Outlet, useParams } from "react-router-dom";

/**
 * 書籍リストページコンポーネント。
 * 書籍のタイトル一覧を表示し、各タイトルは `NavLink` を使用して
 * 個別の書籍ページにリンクされている。
 * @component
 * @returns {JSX.Element} 書籍リストページのJSX要素
 */
export function BookListPage() {
    return (
        <>
            {/* 書籍タイトルを一覧表示（キーはisbnコード） */}
            {books.map(b => (
                <React.Fragment key={b.isbn}>
                    [<NavLink to={`/books/${b.isbn}`}>{b.title}</NavLink>] |
                </React.Fragment>
            ))}
            {/* 子ルートを表示するための領域 */}
            <Outlet />
        </>
    );
}

/**
 * 書籍詳細ページコンポーネント。
 * ルートパラメーター `isbn` を使用して、該当する書籍を検索し表示する。
 * @component
 * @return 書籍情報
 */
export function BookDetailPage() {
    const { isbn = '978-4-8156-0182-9' } = useParams();
    // ルートパラメーター:isbnをキーに書籍を検索
    const book = books.find(b => isbn === b.isbn);

    return (
        <ul>
            <li>ISBNコード:{book.isbn}</li>
            <li>書名:{book.title}</li>
            <li>価格:{book.price}</li>
            <li>概要:{book.summary}</li>
        </ul>
    );
}
/**
 * ひとつのモジュール（jsファイル）に複数のコンポーネントが含まれているので、
 * ComponentやErrorBoundaryなどの名前は利用できない。
 */