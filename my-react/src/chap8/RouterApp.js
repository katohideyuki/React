import { Link, Outlet } from "react-router-dom";

/**
 * RouterAppコンポーネント。
 * アプリケーションのルーティングとナビゲーションリンクを提供する。
 * @return {JSX.Element} ルーティングとナビゲーションリンクを提供するJSX要素
 */
export default function RouterApp() {
    return (
        <>
            <ul>
                {/* ルーティング対応のリンクを生成 */}
                <li><Link to="/">トップ</Link></li>
                <li><Link to="/article">公開記事</Link></li>
                <li><Link to="/about">このサイトについて</Link></li>
            </ul>
            <hr />
            {/* Outlet要素に対して、リンク先のコンポーネントが表示される */}
            <Outlet />
        </>
    );
}
/**
 * ルーター経由でページ遷移する場合には、標準的な<a>タグではなく、
 * <Link>タグを使用する。
 * <Outlet>タグに対して、リンク先が表示されるようになる。
 * <a>タグを使用した場合、<Outlet>タグだけではなく、ページ全体がリフレッシュされる。
 */