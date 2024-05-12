import { useEffect, useState } from "react";

/** 天気予報取得APIのURL */
const OPEN_WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=Tokyo&lang=ja&appid=';

/**
 * スリープする。
 * 確認用としてローディングメッセージを表示させるため。
 * @param {*} delay ミリ秒 
 * @returns 未使用
 */
const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));

/**
 * 天気予報を取得する。
 * 外部API(Open Weather API)を使用。
 * @returns json形式の天気予報データ
 * @throws Error 天気予報を取得できなかった場合
 */
const fetchWeather = async (apiKey) => {
    // スリープ
    await sleep(2_000);
    const res = await fetch(`${OPEN_WEATHER_API_URL}${apiKey}`);

    // 天気予報を取得できなかった場合、例外をスロー
    if (!res.ok) {
        throw new Error(res.statusText);
    };

    // 天気予報を返却
    return res.json();
};

/**
 * 天気予報の画像を表示する。
 * @param {*} param0 Open Weather APIキー
 * @returns 天気予報の画像要素
 */
export default function QueryPre({ apiKey }) {

    // State管理
    const [data, setData] = useState(null);             // 天気予報データ
    const [isLoading, setLoading] = useState(true);     // ロード中か？
    const [error, setError] = useState('');             // エラー情報

    // コンポーネント起動時に天気予報を取得
    useEffect(() => {
        // ロード中のためロードStateを更新
        setLoading(true);
        // 天気予報APIを実行
        fetchWeather(apiKey)
            .then(result => setData(result))    // 成功の場合、天気予報データStateを更新
            .catch(err => setError(err.message))        // エラーの場合、エラー情報Stateを更新
            .finally(() => setLoading(false));  // 成否にかからわず、ロード終了のためロードStateを更新
    }, []);

    // ロード中の場合、ローディングメッセージを表示
    if (isLoading) {
        return <p>Loading...</p>;
    }

    // 通信エラーの場合、エラーメッセージを表示
    if (error) {
        return <p>Error: {error}</p>;
    }

    // ロード中でも通信エラーでもない場合、天気予報を表示
    return (
        <figure>
            <img src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}
                alt={data?.weather?.[0]?.main} />
            <figcaption>{data?.weather?.[0]?.description}</figcaption>
        </figure>
    );
}