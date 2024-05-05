import { useState } from "react";

/**
 * 入力値をログに出力する。
 * @export
 * @return {*} テキストエリア
 */
export default function FormTextarea() {
    // Stateを初期化
    const [form, setForm] = useState({
        comment: 'さまざまなフォーム要素を...'
    });

    // テキストエリアの変更時に入力値をStateに反映
    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // 送信ボタンをクリックで入力値をログに出力
    const show = () => console.log(form.comment);

    return (
        <form>
            <textarea name="comment" cols="30" rows="10" onChange={handleForm} value={form.comment}></textarea>
            <button type="button" onClick={show}>送信</button>
        </form>
    );
}