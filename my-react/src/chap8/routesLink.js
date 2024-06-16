import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import TopPage from "./TopPage";
import ArticlePage from "./ArticlePage";
import AboutPage from "./AboutPage";
import RouterApp from "./RouterApp";

// ルーティングテーブルを定義
const routesLink = createBrowserRouter(
    createRoutesFromElements(
        // トップルートRouteAppを追加
        <Route path="/" element={<RouterApp />}>
            <Route index element={<TopPage />}></Route>
            <Route path="article" element={<ArticlePage />}></Route>
            <Route path="about" element={<AboutPage />}></Route>
        </Route>
    )
);

export default routesLink;
/**
 * index属性
 * デフォルトルートのこと。
 * TopPageコンポーネントは「/」--親ルートと同じパスで無条件に呼び出される規定ルート。
 * これをいちいち「path=""」で定義するのは冗長のため、indexと定義するのが一般的。
 */