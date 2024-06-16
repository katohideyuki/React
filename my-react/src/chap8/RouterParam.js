import { NavLink, Outlet, useNavigation } from "react-router-dom";
import "./RouterNav.css";
import { useState } from "react";
import QueryInputApiKey from "../chap6/QueryInputApiKey";
import { TextField } from "@mui/material";

/**
 * RouterParamコンポーネント。
 * リンクのリストと、リンク先を表示する。
 * @returns {JSX.Element} ルーター内で表示されるJSX要素
 */
export default function RouterParam() {
    // トップページ画面へのアクセス数をState管理
    const [topPageCount, setTopPageCount] = useState(0);
    // 天気予報APIキーをState管理
    const [apiKey, setApiKey] = useState('');
    // 遷移情報を取得
    const navigation = useNavigation();

    /**
     * 天気予報APIキーを更新する関数。
     * @param {Object} e - イベントオブジェクト。
     * @param {Object} e.target - イベントが発生した要素。
     * @param {string} e.target.value - 入力されたAPIキーの値。
     */
    const handleInputApiKey = (e) => {
        setApiKey(e.target.value);
    };

    return (
        <>
            <p>トップページ画面へのアクセス数:{topPageCount}</p>
            <ul>
                <li><NavLink to="/">トップ</NavLink></li>
                <li><NavLink to="/book/form">書籍登録フォーム</NavLink></li>
                <li><NavLink to="/book/978-4-8156-1336-5">
                    これからはじめるVue.js 3実践入門</NavLink></li>
                <li><NavLink to="/book/978-4-297-13288-0">
                    改訂3版 JavaScript本格入門</NavLink></li>
                <li><NavLink to="book" end>既定の書籍</NavLink></li>
                <li><NavLink to="/search/react/router/remix">検索結果</NavLink></li>
                {/* クエリパラメータとしてisbnを送信 */}
                <li><NavLink to="/bookQuery?isbn=978-4-8156-1336-5">
                    これからはじめるVue.js 3実践入門（クエリ版）</NavLink></li>
                {/* state属性としてisbnを送信 */}
                <li><NavLink to="/bookState" state="978-4-8156-1336-5">
                    これからはじめるVue.js 3実践入門（State版）</NavLink></li>
                {/* APIキーをクエリパラメータに設定してリクエストを送信 */}
                <li><NavLink to={`/weather/Tokyo?apiKey=${apiKey}`} >
                    東京の天気（APIキーを入力してからクリックしてください）</NavLink>
                </li>
                {/* APIキー入力欄 */}
                <TextField margin="normal" label="Api Key" value={apiKey}
                    onChange={handleInputApiKey} variant='outlined' fullWidth multiline />
            </ul>
            <hr />
            {/* State管理をコンテキストに挿入（子ルートに渡す） */}
            {
                // 遷移情報に応じて出力を分岐
                navigation.state === "loading" ?
                    <p>Loading...</p> :
                    <Outlet context={[topPageCount, setTopPageCount]} />
            }
        </>
    );
}