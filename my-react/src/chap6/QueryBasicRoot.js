import { useState } from "react";
import QueryBasic from "./QueryBasic";
import QueryInputApiKey from "./QueryInputApiKey";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/** React Query のインスタンス生成(準備) */
const cli = new QueryClient();

/**
 * 天気予報コンポーネントを制御する
 * @returns QueryBasicコンポーネント
 */
export default function QueryBasicRoot() {

    // State管理
    const [apiKey, setApiKey] = useState('');                           // APIキーの入力値
    const [canShowQueryScreen, setShowQueryScreen] = useState(false);   // 天気予報表示コンポーネントの表示を管理

    // APIキー入力コンポーネント側で呼び出してもらうï
    const handleSetApiKeyToRoot = (key) => {
        setApiKey(key);             // APIキーを更新
        setShowQueryScreen(true);   // 天気予報コンポーネントの表示を許可
    };

    return (
        <div>
            {/* APIキー入力コンポーネントを表示 */}
            <QueryInputApiKey handle={handleSetApiKeyToRoot} />
            {/* APIキーが入力されている場合、天気予報コンポーネントを表示 */}
            {canShowQueryScreen &&
                <QueryClientProvider client={cli}>
                    <QueryBasic apiKey={apiKey} />
                </QueryClientProvider>
            }
        </div>
    );
}
/**
 * React Query
 * 呼び出し側で利用の準備として、QueryClientオブジェクトを生成しておく。
 * QueryClientProviderコンポーネントにQueryClientオブジェクトを渡す。
 */