/**
 * ボタン押下時に現在日時を表示する
 * @export
 * @return {*} ボタン押下時に現在日時を表示するボタン要素
 */
export default function EventArgsV2() {
    // 独自の引数を追加したイベントハンドラー
    const current = e => {
        // 独自データ属性を取得
        const type = e.target.dataset.type;
        const d = new Date();
        switch (type) {
            case 'date':
                console.log(`${e.target.id} : ${d.toLocaleDateString()}`);
                break;
            case 'time':
                console.log(`${e.target.id} : ${d.toLocaleTimeString()}`);
                break;
            default:
                console.log(`${e.target.id} : ${d.toLocaleString()}`);
                break;
        }
    };

    return (
        <div>
            <button id="dt" data-type='datetime' onClick={current}>現在日時</button>
            <button id="date" data-type='date' onClick={current}>現在日時</button>
            <button id="time" data-type='time' onClick={current}>現在日時</button>
        </div>
    );
}
/**
 * 独自データ属性とは、任意のタグにdata-XXXXの形式で指定できる属性のこと。
 * （カスタムデータ属性のこと）
 */