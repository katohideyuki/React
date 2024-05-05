import { useState } from "react";

/**
 * 入力値をログに出力する。
 * @export
 * @return {*} チェックボックス
 */
export default function FormCheck() {
    // Stateを初期化（チェック状態を管理）
    const [form, setForm] = useState({
        agreement: true
    });

    // チェックボックスの変更時に入力値をStateに反映
    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked   // valueではなくcheckedプロパティ
        });
    };

    // 送信ボタンをクリックで入力値をログに出力
    const show = () => console.log(`同意確認 : ${form.agreement ? '同意' : '反対'}`);

    return (
        <form>
            <label htmlFor="agreement">同意します</label>
            <input type="checkbox" name="agreement" checked={form.agreement} onChange={handleForm} />
            <button type="button" onClick={show}>送信</button>
        </form>
    );
}
/**
 * チェックボックスの選択状態は、ラジオボタン同様にchecked属性のtrue/falseで制御。
 */