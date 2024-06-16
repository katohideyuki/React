import { useLoaderData } from "react-router-dom";

/**
 * 天気情報コンポーネント。
 * 天気アイコンとその説明を表示する。
 * 
 * @returns {JSX.Element} 天気情報を表示するJSX要素
 */
export default function WeatherPage() {
    // ローダー経由で取得したデータを取得
    const data = useLoaderData();
    return (
        <>
            <figure>
                {/* 取得したデータから必要な情報をURLパラメータに設定し、天気情報を表示する */}
                <img src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`} alt={data?.weather?.[0]?.main} />
                <figcaption>{data?.weather?.[0]?.description}</figcaption>
            </figure>
        </>
    );
}
/**
 * useLoaderData関数：
 * 
 * ローダーで取得したデータを取得する。
 * ローダーからの直接の戻り値はPromiseだが、
 * React Routerが内部的に解決からResponse#jsonメソッドによる解析までを賄ってくれるため、
 * この例の場合、天気情報に直接アクセスできている。
 * 
 */