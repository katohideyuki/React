import { useQuery } from '@tanstack/react-query';

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
export default function QuerySuspense({ apiKey }) {

    // fetchWeather関数でデータを取得
    const { data } = useQuery({
        queryKey: ['weather'],              // クエリキー(一意)
        queryFn: () => fetchWeather(apiKey) // クエリ関数
    });

    // ロード中でも通信エラーでもない場合、天気予報を表示
    return (
        <figure>
            <img src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}
                alt={data?.weather?.[0]?.main} />
            <figcaption>{data?.weather?.[0]?.description}</figcaption>
        </figure>
    );
}