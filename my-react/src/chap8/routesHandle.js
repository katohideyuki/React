import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RouterParam from "./RouterParam";
import BookPage from "./BookPage";
import TopPage from "./TopPage";

/**
 * React Routerのルート設定を作成するための定義。
 *
 * 各ルートには、`handle`プロパティを使用してメタデータが
 * 追加されています。これにより、ページタイトル、キーワード、説明文を指定します。
 *
 * ルート設定:
 * - ルートパス `/`
 *   - コンポーネント: `TopPage`
 *   - handleプロパティ:
 *     - title: "トップ"
 *     - keywords: "React, Router, JavaScript"
 *     - description: "React Routerの解説サンプルです。"
 *
 * - ルートパス `/book/:isbn?`
 *   - コンポーネント: `BookPage`
 *   - handleプロパティ:
 *     - title: "書籍詳細 - %s" （`%s`は動的に埋め込まれるプレースホルダー）
 *     - keywords: "React, %s" （`%s`は動的に埋め込まれるプレースホルダー）
 *     - description: "%s" （`%s`は動的に埋め込まれるプレースホルダー）
 *
 * @returns {BrowserRouter} 設定されたルートを持つブラウザルーター。
 */
const routesHandle = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RouterParam />}>
            <Route path="/" element={<TopPage />} handle={{
                title: "トップ",
                keywords: "React, Router, JavaScript",
                description: "React Routerの解説サンプルです。"
            }} />
            <Route path="/book/:isbn?" element={<BookPage />} handle={{
                title: "書籍詳細 - %s", // 「%s」は個別のページから値へ置換する
                keywords: "React, %s",
                description: "%s"
            }} />
        </Route>
    )
);

export default routesHandle;
/**
 * 
 */