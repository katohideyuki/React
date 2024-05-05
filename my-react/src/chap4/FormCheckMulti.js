import { useState } from "react";

/**
 * 入力値をログに出力する。
 * @export
 * @return {*} チェックボックス
 */
export default function FormCheckMulti() {
    // Stateを初期化（チェック状態を管理）
    const [form, setForm] = useState({
        animal: ['dog']
    });

    // チェックボックスの変更時に入力値をStateに反映
    const handleForm = e => {
        // イベントオブジェクトから情報を取得
        const value = e.target.value;
        const isChecked = e.target.checked;

        // 元のStateをコピーして、更新用の新しいStateを作成
        const updateState = isChecked
            ? [...form.animal, value]                       // 要素を追加
            : form.animal.filter(item => item !== value);   // 要素を削除

        // 最終的な結果をStateに反映
        setForm({
            ...form,
            [e.target.name]: updateState
        });
    };

    // 送信ボタンをクリックで入力値をログに出力
    const show = () => console.log(`animal : ${form.animal}`);

    return (
        <form>
            <fieldset>
                <legend>好きな動物は？</legend>
                <label htmlFor="animal">犬 : </label>
                <input type="checkbox" name="animal" value="dog" checked={form.animal.includes("dog")} onChange={handleForm} /><br />
                <label htmlFor="animal">猫 : </label>
                <input type="checkbox" name="animal" value="cat" checked={form.animal.includes("cat")} onChange={handleForm} /><br />
                <label htmlFor="animal">ハムスター : </label>
                <input type="checkbox" name="animal" value="hamster" checked={form.animal.includes("hamster")} onChange={handleForm} /><br />
                <label htmlFor="animal">ウサギ : </label>
                <input type="checkbox" name="animal" value="rabbit" checked={form.animal.includes("rabbit")} onChange={handleForm} />
            </fieldset>
            <button type="button" onClick={show}>送信</button>
        </form>
    );
}
/**
 * チェックボックスの選択状態は、ラジオボタン同様にchecked属性のtrue/falseで制御。
 * 参考書の記載方法では、State更新処理が動く前に、Stateを変更しているので、
 * handleFormの処理内容を独自に変更した。配列は参照型なので。
 * （良いか悪いかは別として）
 */