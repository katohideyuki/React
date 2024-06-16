import { Outlet, ScrollRestoration } from "react-router-dom";

/**
 * ルーターのスクロールコンポーネント。
 * 子ルートのコンテンツを表示するためのアウトレットを提供。
 * @returns {JSX.Element} - 子ルートのコンテンツを含むアウトレットを返却する JSX 要素
 */
export default function RouterScroll() {
    return (
        <>
            <ScrollRestoration />
            <Outlet />
        </>
    );
}
/**
 * ScrollRestoration要素:
 * 
 * ページ移動時にスクロール位置がページ上部に移動する（=リセットされる）。
 * コンポーネントの任意の場所に配置できるが、アプリ全体のスクロールを管理するものなので、
 * ルートコンポーネントに配置するのが一般的。
 */