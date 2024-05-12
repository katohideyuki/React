import { Suspense, lazy } from 'react';

/**
 * コンポーネントを遅延ロードする。
 * @returns ただのボタン要素
 */
export default function LazyBasic() {
    // Suspense要素の動作確認のためのスリープ処理
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    // LazyButton.jsを遅延ロード
    const LazyButton = lazy(() => sleep(2000).then(() => import('./LazyButton')));
    return (
        // LazyButton.jsが読み込まれるまで表示する内容をfallback属性で設定
        <Suspense fallback={<p>Now Loading...</p>}>
            <LazyButton />
        </Suspense>
    );
}
/**
 * Suspense要素
 * 一時的にフォールバック（代替コンテンツ）を表示するのが、<Suspense>要素（コンポーネント）の役割。
 * 一般的に以下のような状況で利用する。
 * - コンポーネントを遅延ロード
 * - ネットワーク経由での処理
 * 
 * Suspense要素のfallback属性に非同期処理が完了するまでの間に表示されるコンポーネントや要素を指定する。
 * 
 * 遅延ロードする目的（lazy関数）
 * Create React APPの設定では、すべてのコードはmain.XXXXX.js(※1)にハンドルされたうえで実行される。
 * アプリ規模が大きくなるにつれ、jsファイルも肥大化し、起動時間も増加する。
 * 巨大な、またはアクセス頻度が低いモジュールは、動的インポートさせることで、main.XXXXX.jsから分割し、
 * 必要になった時にロードするようにする。
 * lazy関数を使用することで、遅延コンポーネント（=動的インポートしたコンポーネント）を通常コンポーネント
 * と同じように扱える。
 * ※1)XXXXXXはハッシュ値で、実行する度に変化する。
 */