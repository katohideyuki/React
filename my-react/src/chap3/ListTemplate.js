import React from "react";

/**
 * 書籍情報を整形する。
 * @export
 * @param {*} { src } 書籍情報
 * @return {*} テーブルに整形した書籍情報
 */
export default function ListTemplate({ src, children }) {
    return (
        <dl>
            {
                src.map(elem => (
                    // テーブル内の各項目に一意なkey属性を持たせる
                    <React.Fragment key={elem.isbn}>
                        {/* 呼び出し元で各書籍情報を参照するためにelemを渡す */}
                        {children(elem)}
                    </React.Fragment>
                ))
            }
        </dl>
    );
}