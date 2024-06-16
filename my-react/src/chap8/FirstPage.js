import { Link } from "react-router-dom";

/**
 * 最初のページを表示するコンポーネント。
 * ページにはタイトル、セパレーター、空のスペース、
 * およびセカンドページへのリンクが含まれています。
 * 
 * @returns {JSX.Element} - 最初のページを表示する JSX 要素
 */
export default function FirstPage() {
    return (
        <>
            <h2>FirstPage</h2>
            <hr />
            <p style={{ height: 800 }}></p>
            <p><Link to="/second">Secondページ</Link></p>
        </>
    );
}