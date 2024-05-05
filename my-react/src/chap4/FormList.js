import { useState } from "react";

/**
 * 入力値をログに出力する。
 * @export
 * @return {*} リストボックス
 */
export default function FormList() {
    // Stateを初期化
    const [form, setForm] = useState({
        animal: ['dog, hamster']
    });

    // リストボックスの変更時に入力値をStateに反映
    const handleForm = e => {
        // 選択肢を格納するための配列
        const data = [];
        // option要素を順に取得し、選択状態にある値のみ配列に追加
        const opts = e.target.options;
        for (const opt of opts) {
            if (opt.selected) {
                data.push(opt.value);
            }
        }
        // 最終的な結果をStateに反映
        setForm({
            ...form,
            [e.target.name]: data
        });
    };

    // 送信ボタンをクリックで入力値をログに出力
    const show = () => console.log(`好きな動物：${form.animal}`);

    return (
        <form>
            <label htmlFor="animal">好きな動物</label><br />
            <select name="animal" multiple size="4" value={form.animal} onChange={handleForm}>
                <option value="dog">イヌ</option>
                <option value="cat">ネコ</option>
                <option value="hamster">ハムスター</option>
                <option value="rabbit">ウサギ</option>
            </select>
            <button type="button" onClick={show}>送信</button>
        </form>
    );
}
/**
 * 複数選択可にするには
 * - multiple属性を設定。
 * - value属性を配列にする。
 * - リストボックスの値を取得するにはe.target.optionプロパティの配列を取得し、
 *   selectedが設定された値を取得する。
 */