import { useLocation } from "react-router-dom";

/**
 * 書籍の状態ページを表示するコンポーネント。
 * locationオブジェクトからISBNコードを取得し、
 * そのISBNコードに基づいたメッセージを表示します。
 * @returns ISBNコードに基づくメッセージを表示するJSX要素
 */
export default function BookStatepage() {
    // Locationオブジェクトを取得
    const { state: isbn = '978-4-8156-0182-9（デフォルト値）'} = useLocation();
    return(
        <>
            <p>ISBNコード「{isbn}」のページです。</p>
        </>
    );
}
/**
 * useLocation関数
 * 現在の場所に関する情報（Locationオブジェクト）を取得する。
 * 
 * 静的な---しかも、ページの内容を左右するようなキー情報を受け渡しするためには利用しない。
 * ページを区別するならば、アドレスにも反映させるべき。
 * また、state属性を利用するのは、あとから画面を復元するために利用する不特定情報（文字列で表現
 * できない情報）を受け渡しする場合に限られる。
 * 不特定情報を文字列で表現できる場合、それはクエリ情報で十分。
 */