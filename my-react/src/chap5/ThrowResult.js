import WrapPromise from "./WrapPromise";

/* Promiseの状態を管理するオブジェクトを取得 */
const info = getInfo();

/**
 * 非同期処理を実行し、処理結果を表示するコンポーネント
 * @returns 非同期処理の結果
 */
export default function ThrowResult() {
    const result = info.get();
    return <p>{result}</p>;
}

/**
 * 非同期でデータを取得する
 * @returns WrapPromiseオブジェクト
 */
function getInfo() {
    return WrapPromise(new Promise((resolve, reject) => {
        // 2000ミリ秒後に50%の確立で成功/失敗メッセージを作成
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve('Success!');
            } else {
                reject('Error!');
            }
        }, 2_000);
    }));
}
/**
 * 実際は、アプリ開発者がPromiseを直接スローするようなコードを書く機会はほぼない。
 */