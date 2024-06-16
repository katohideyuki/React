import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RouterCustom from "./RouterCustom";
import TopPage from "./TopPage";
import ArticlePage from "./ArticlePage";
import AboutPage from "./AboutPage";

/**
 * MyLink コンポーネントを使用したカスタムルーターの定義。
 * @returns {ReactElement} - ルート定義を含む React 要素。
 */
const routesMyLink = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RouterCustom />}>
            <Route path="/" element={<TopPage />} />
            <Route path="/article" element={<ArticlePage />} />
            <Route path="/about" element={<AboutPage />} />
        </Route>
    )
);

export default routesMyLink;