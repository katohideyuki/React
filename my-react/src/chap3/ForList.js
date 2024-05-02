import React from "react";

/**
 * 書籍情報を整形する。
 * @export
 * @param {*} { src } 書籍情報
 * @return {*} テーブルに整形した書籍情報
 */
export default function ForList({ src }) {
    return (
        <dl>
            {
                src.map(elem => (
                    // テーブル内の各項目に一意なkey属性を持たせる
                    <React.Fragment key={elem.isbn}>
                        <dt>
                            <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
                                {elem.title} ({elem.price}円)
                            </a>
                        </dt>
                        <dd>{elem.summary}</dd>
                    </React.Fragment>
                ))
            }
        </dl>
    );
}
/**
 * key属性を持たせないと、ブラウザのコンソール画面に以下警告が出力される。
 * 「Warning: Each child in a list should have a unique "key" prop.」
 * また、項目追加/削除した場合、変更箇所以外の項目も更新扱いとなり、メモリの無駄使いとなる。
 */