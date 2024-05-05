import { useState } from "react";

/**
 * 入力値をログに出力する。
 * @export
 * @return {*} ラジオボタン
 */
export default function FormRadio() {
    // Stateを初期化（選択状態を管理）
    const [form, setForm] = useState({
        os: 'windows'
    });

    // ラジオボタンの変更時に入力値をStateに反映
    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // 送信ボタンをクリックで入力値をログに出力
    const show = () => console.log(`使用OS : ${form.os}`);

    return (
        <form>
            <fieldset>
                <legend>使用OS : </legend>
                <label htmlFor="os_win">windows</label>
                <input type="radio" name="os" onChange={handleForm} value="windows" checked={form.os === "windows"} />
                <br />
                <label htmlFor="os_mac">mac</label>
                <input type="radio" name="os" onChange={handleForm} value="mac" checked={form.os === "mac"} />
                <br />
                <label htmlFor="os_linux">linux</label>
                <input type="radio" name="os" onChange={handleForm} value="linux" checked={form.os === "linux"} />
            </fieldset>
            <button type="button" onClick={show}>送信</button>
        </form>
    );
}
/**
 * Stateの値とラジオボタンの値を比較し、等しいものをchecked状態にする。
 */