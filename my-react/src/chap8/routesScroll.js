import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RouterScroll from "./RouterScroll";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

/**
 * ブラウザルーターのルート定義。
 * トップレベルのルートはRouterScrollコンポーネントをレンダリングし、 
 * その下にネストされたルートとしてFirstPageとSecondPageを含みます。
 * 
 * @constant {Router} routesScroll - ルート定義を持つブラウザルーターインスタンス。
 */
const routesScroll = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RouterScroll />} >
            <Route index element={<FirstPage />} />
            <Route path="/second" element={<SecondPage />} />
        </Route >
    )
);

export default routesScroll;