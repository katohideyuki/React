import { Outlet, useNavigation } from "react-router-dom";
import { MyLink } from "./MyLink";
import { useState } from "react";

/**
 * カスタムルーターコンポーネント。
 * 自作リンクを使用してメニュー部分を置き換える。
 * @returns {JSX.Element} - メニューとルーターのアウトレットを含む JSX 要素。
 */
export default function RouterCustom() {
    // 遷移情報を取得
    const navigation = useNavigation();
    // トップページ画面へのアクセス数をState管理
    const [topPageCount, setTopPageCount] = useState(0);
    return (
        <>
            <p>トップページ画面へのアクセス数:{topPageCount}</p>
            {/* 自作リンクでメニュー部分を置き換え */}
            <ul>
                <li><MyLink to="/">トップ</MyLink></li>
                <li><MyLink to="/article">公開記事</MyLink></li>
                <li><MyLink to="/about">このサイトについて</MyLink></li>
            </ul>
            <hr />
            {
                // 遷移情報に応じて出力を分岐
                navigation.state === "loading" ?
                    <p>Loading...</p> :
                    <Outlet context={[topPageCount, setTopPageCount]} />
            }
        </>
    );
}