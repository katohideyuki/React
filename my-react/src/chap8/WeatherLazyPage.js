import { Component } from "react";
import { isRouteErrorResponse, useLoaderData, useRouteError } from "react-router-dom";


/**
 * ********************************************
 * lazy属性の解説に留めているため、
 * 処理は一部未実装にしている。めんどくさかったため。
 * そのため、このコンポーネントはどこからも呼び出されない。
 * ********************************************
 */

/**
 * 天気情報コンポーネント。
 * 天気アイコンとその説明を表示する。
 * ※
 * @returns {JSX.Element} 天気情報を表示するJSX要素
 */
export function WeatherLazyPage() {
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
// コンポーネント名を設定
Component.displayName = 'WeatherLazyPage';

export function ErrorBoundary() {
    const error = useRouteError();
    if (isRouteErrorResponse(error)) {
        // Response形式のエラーの場合
        if (isRouteErrorResponse(error)) {
            switch (error.status) {
                case 404:
                    return <p>目的のページが見つかりませんでした。</p>;
                case 401:
                    return <p>認証に失敗しています。</p>;
                case 501:
                    return <p>サービスが一時的に停止しています。</p>;
                default:
                    return <p>不明なエラー : {error.data.message}</p>
            }
        }
    }

    // Response形式ではないエラーの場合
    return (
        <div>
            <h3>問題が発生しました。</h3>
            <p>詳細な問題 : {error.message}</p>
        </div>
    );
}
// コンポーネント名を設定
Component.displayName = 'ErrorBoundary';

/**
 * Component.displayNameプロパティ:
 * 
 * デバッグや開発者ツール（ReactDeveloperTools）での表示名を設定するためのプロパティ。
 * 通常、関数名やクラス名から自動的に推測するが、明示的に設定することが可能。
 * 
 */