import { NavLink, Outlet } from "react-router-dom";
import "./RouterNav.css";

// NavLink要素のclassName属性に渡す関数
const isCurrent = ({ isActive }) => isActive ? 'active' : '';

/**
 * RouterNavコンポーネント。
 * アプリケーションのルーティングとナビゲーションリンクを提供する。
 * @return {JSX.Element} ルーティングとナビゲーションリンクを提供するJSX要素
 */
export default function RouterNav() {
    return (
        <>
            <ul>
                {/* ルーティング対応のリンクを生成 */}
                <li><NavLink className={isCurrent} to="/">トップ</NavLink></li>
                <li><NavLink className={isCurrent} to="/article">公開記事</NavLink></li>
                <li><NavLink className={isCurrent} to="/about">このサイトについて</NavLink></li>
            </ul>
            <hr />
            {/* Outlet要素に対して、リンク先のコンポーネントが表示される */}
            <Outlet />
        </>
    );
}
/**
 * <NavLink>タグ
 * ナビゲーションメニューに特化した要素。
 * リンク先が現在のアドレスと同じである（=アクティブである）場合に、
 * 特別なスタイルを適用できる。
 */