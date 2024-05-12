import { Suspense, lazy } from 'react';

/**
 * コンポーネントを遅延ロードする。
 * @returns ただのボタン要素
 */
export default function LazyMulti() {
    // Suspense要素の動作確認のためのスリープ処理
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    // LazyButton.js、LazyButton2を遅延ロード
    // JSX式のReact要素として使用するため、変数名はパスカルケース
    const LazyButton = lazy(() => sleep(2000).then(() => import('./LazyButton')));
    const LazyButton2 = lazy(() => sleep(5000).then(() => import('./LazyButton2')));

    return (
        <Suspense fallback={<p>Now Loading...</p>}>
            <LazyButton />
            <LazyButton2 />
        </Suspense>
    );
}
/**
 * 複数の遅延コンポーネントの場合、すべてのコンポーネントがロードされたところで、
 * 配下の内容を表示する。
 */