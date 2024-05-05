/**
 * ボタン押下時に現在日時を表示する
 * @export
 * @return {*} ボタン押下時に現在日時を表示するボタン要素
 */
export default function EventArgs() {
    // 独自の引数を追加したイベントハンドラー
    const current = (e, type) => {
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
            <button id="dt" onClick={e => current(e, 'datetime')}>現在日時</button>
            <button id="date" onClick={e => current(e, 'date')}>現在日時</button>
            <button id="time" onClick={e => current(e, 'time')}>現在日時</button>
        </div>
    );
}
/**
 * onEvent属性に渡すのは「関数呼び出しではなく」「関数そのもの」なので、
 * ハンドラーを紐づけるために以下のような記述は不可。
 * <button id="dt" onClick={current(e, 'datetime')}>現在日時</button>
 */