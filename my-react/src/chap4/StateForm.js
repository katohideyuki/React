import { useState } from "react";

/**
 * 入力値から挨拶メッセージを生成する。
 * @export
 * @return {*} 挨拶メッセージ
 */
export default function StateForm() {
    // フォームとして扱う値をStateで管理
    const [form, setForm] = useState({
        name: '山田太郎',
        age: 18
    });

    // フォーム要素の変更をStateに反映
    const handleForm = e => {
        setForm({
            ...form,    // 現在のStateを新しいStateにコピー
            [e.target.name]: e.target.value // 変更対象の値のみ変更
        });
    };

    // 送信ボタンでログに出力
    const show = () => console.log(`こんにちは、${form.name}(${form.age}歳)さん！`);

    return(
        <form>
            {/* State値を個々のフォーム要素に割り当て */}
            <div>
                <label htmlFor="name">名前:</label>
                <input type="text" name="name" onChange={handleForm} value={form.name} />
            </div>
            <div>
                <label htmlFor="age">年齢</label>
                <input type="text" name="age" onChange={handleForm} value={form.age} />
            </div>
            <div>
                <button type="button" onClick={show}>送信</button>
            </div>
            <p>こんにちは、{form.name}({form.age})さん！</p>
        </form>
    );
}
/**
 * コンポーネントでフォームから入力値を扱う場合にも、Stateを用いるのが基本。
 * 以下のルールに準じておくと、管理しやすくなる。
 * - フォームに関わる値はひとつのオブジェクトに束ねる。
 * - フォーム要素の名前（name属性)とState上のプロパティ名は一致。
 *   - 算出プロパティが活用できるため。
 * 
 * ReactのonChange属性はJavaScript標準のinputイベントに紐づいている。
 * changeイベントではないので、注意する。
 * changeイベントはReactの標準に存在しないので、addEventListenerメソッドなど
 * 独自で代用する。
 */