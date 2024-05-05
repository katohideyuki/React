/**
 * Ctrl + qが押下されたとき、ヘルプメッセージを表示する
 * @export
 * @return {*} Ctrl + qが押下されたとき、ヘルプメッセージを表示するテキストボックス要素
 */
export default function EventKey() {
    // Ctrl + q でヘルプメッセージを表示
    const handleKey = e => {
        if (e.ctrlKey && e.key === 'q') {
            alert('名前は20文字以内で入力してください。');
        }
    }

    return (
        <form>
            <label>
                名前 :
                <input type="text" size="20" onKeyDown={handleKey} />
            </label>
        </form>
    );
}