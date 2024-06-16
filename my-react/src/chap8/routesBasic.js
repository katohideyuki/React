import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import TopPage from "./TopPage";
import ArticlePage from "./ArticlePage";
import AboutPage from "./AboutPage";

// ルーティングテーブルを定義

// オブジェクト配列で表現したパターン
// const routesBasic = createBrowserRouter([
//     { path: '/', element: <TopPage /> },
//     { path: '/article', element: <ArticlePage /> },
//     { path: '/about'/**URL*/, element: <AboutPage />/**コンポーネント*/ }
// ]);

// タグ形式で表現したパターン（分かりやすいので、この書き方を推奨）
const routesBasic = createBrowserRouter(
    // タグ形式で表現されたルート定義をオブジェクト配列に変換
    createRoutesFromElements(
        <>
            <Route path="/" element={<TopPage />}></Route>
            <Route path="/article" element={<ArticlePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
        </>
    )
);

export default routesBasic;
/**
 * React Router
 * リクエストURLから対応するコンポーネントを呼び出すためのマッピング定義みたいなもの。
 * 
 * Reactでは基本的に初回のアクセスでページ全体を取得し、以降のページ更新は、JavaScriptで行う。
 * そのため、ブラウザの戻る機能やURLの変化がなく、それらを提供する必要がある。
 * その際に活用するヤツがこれ。
 * 
 * createBrowserRouter関数
 * ルート情報を定義する。
 * ルート情報を定義する方法は複数あるようだが、Webアプリ開発であれば、この関数を使うのが一般的。
 * 
 * createRoutesFromElements関数
 * タグ形式で表現されたルート定義をオブジェクト配列に変換する。
 * タグ形式で表現されたルート定義は、そのままcreateBrowserRouter関数に渡せないため。
 */