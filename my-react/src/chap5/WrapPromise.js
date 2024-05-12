/**
 * Promiseのラッパーコンポーネント
 * @param {*} promise 
 * @returns 処理結果に応じて値を取得できるオブジェクト
 */
export default function WrapPromise(promise) {

    // Promiseの状態を管理(pendding, fullfilled, rejected)
    let status = 'pendding';
    // Promiseから取得したデータ
    let data;
    // 引数で受け取った元のPromiseに、後処理を追加する
    let wrapper = promise.then(
        // 処理成功の場合、statusをfullfilled（成功）、dataに取得したデータを設定
        result => {
            status = 'fullfilled';
            data = result;
        },
        // 処理失敗の場合、statusをrejected（失敗）、dataにエラーオブジェクトを設定
        e => {
            status = 'rejected';
            data = e;
        }
    );

    // 戻り値はProimseの状態に応じて値を返すgetメソッドを持つオブジェクト
    return {
        get() {
            switch (status) {
                /* 処理成功の場合、実データを返却 */
                case 'fullfilled':
                    return data;
                    break;
                /* 処理失敗の場合、エラーをスロー */
                case 'rejected':
                    throw data;
                    break;
                /* 完了前の場合、Promiseをスロー */
                case 'pendding':
                    throw wrapper;
                    break;
                default:
                    break;
            }
        }
    };
}
