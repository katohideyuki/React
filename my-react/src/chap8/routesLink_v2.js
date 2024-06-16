import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import TopPage from "./TopPage";
import ArticlePage from "./ArticlePage";
import AboutPage from "./AboutPage";
import RouterNav from "./RouterNav";

// ルーティングテーブルを定義
const routesLink_v2 = createBrowserRouter(
    createRoutesFromElements(
        // トップルートRouterNavを追加
        <Route path="/" element={<RouterNav />}>
            <Route index element={<TopPage />}></Route>
            <Route path="article" element={<ArticlePage />}></Route>
            <Route path="about" element={<AboutPage />}></Route>
        </Route>
    )
);

export default routesLink_v2;
