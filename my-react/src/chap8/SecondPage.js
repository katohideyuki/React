import { Link } from "react-router-dom";

/**
 * セカンドページを表示するコンポーネント。
 * ページにはタイトル、セパレーター、空のスペース、
 * およびファーストページへのリンクが含まれています。
 * 
 * @returns {JSX.Element} - セカンドページを表示する JSX 要素
 */
export default function SecondPage() {
    return (
        <>
            <h2>SecondPage</h2>
            <hr />
            <p style={{ height: 800 }}></p>
            <p><Link to="/">Firstページ</Link></p>
        </>
    );
}