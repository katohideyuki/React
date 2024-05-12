
/* Promiseの完了フラグ */
let isPromiseCompleted = false;

/**
 * Promiseインスタンスを返却する。
 * @returns Promiseインスタンス
 */
export default function ThrowPromise() {

    // Promiseが完了している場合、本来の結果を表示
    if (isPromiseCompleted) {
        return <p>正しく表示できました。</p>;
    }

    // ロード中の場合、Promiseをスロー
    // 3秒後Promiseが実行され、<Suspense>要素は改めてThrowPromise>要素を再描画する
    throw new Promise((resolve, reject) => {
        setTimeout(() => {
            isPromiseCompleted = true;
            resolve('Success!');
        }, 3000);
    });
}
/**
 * <Suspense>要素は、子要素から投げられたPromiseを補足すると、フォールバックを表示する仕様。
 */