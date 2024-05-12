import { useState } from "react";
import QueryPre from "./QueryPre";
import QueryInputApiKey from "./QueryInputApiKey";

/**
 * 天気予報コンポーネントを制御する
 * @returns QueryPreコンポーネント
 */
export default function QueryPreRoot() {

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
            {canShowQueryScreen && <QueryPre apiKey={apiKey} />}
        </div>
    );
}
/**
 * 子コンポーネントで入力された値にアクセスしたいため、
 * State更新関数を子コンポーネントに渡して、呼び出してもらう。
 */
