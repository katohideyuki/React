import { Suspense, useState } from "react";
import QuerySuspense from "./QuerySuspense";
import QueryInputApiKey from "./QueryInputApiKey";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from 'react-error-boundary';

/** React Query のインスタンス生成(準備) */
const cli = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true,
        }
    }
});

/**
 * 天気予報コンポーネントを制御する
 * @returns QueryBasicコンポーネント
 */
export default function QuerySuspenseRoot() {

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
                // ロード中の場合
                <Suspense fallback={<p>Loading...</p>}>
                    {/* エラーの場合 */}
                    <ErrorBoundary fallback={<div>エラーが発生しました。</div>}>
                        <QueryClientProvider client={cli}>
                            <QuerySuspense apiKey={apiKey} />
                        </QueryClientProvider>
                    </ErrorBoundary>
                </Suspense>
            }
        </div>
    );
}
/**
 * React Query で Suspenseモードを有効にするには、
 * - defaultOptions
 *   - queries
 *     - suspense: true に設定するだけ。
 * 
 * クエリ単位でSuspenseモードを有効にするには、useQuery関数のsuspenseプロパティを設定すればよい。
 * 
 * 
 */