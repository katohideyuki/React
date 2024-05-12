import { useState } from "react";

/**
 * 個人情報の入力フォームを生成する。
 * @returns 個人情報の入力フォーム
 */
export default function StateNest() {
    // 入れ子の配列をStateとして宣言
    const [form, setForm] = useState({
        name: '山田太郎',               // 名前
        address: {
            prefecture: '広島県',       // 都道府県
            city: '榛原町'              // 市区町村
        }
    });

    // 1段目の要素（name）を更新するためのハンドラー
    const handleForm = e => {
        setForm({
            ...form,                            // 既存のStateを複製
            [e.target.name]: [e.target.value]   // 更新部分のみ上書き
        });
    };

    // 2段目の要素（prefecture, city）を更新するためのハンドラー
    const handleFormNest = e => {
        setForm({
            ...form,                                // 既存のStateを複製
            address: {
                ...form.address,                    // 既存のState（ネスト部分）を複製
                [e.target.name]: [e.target.value]   // 更新部分のみ上書き
            }
        });
    };

    // 送信ボタンをクリックで入力値をログに出力
    const show = () => console.log(`${form.name}(${form.address.prefecture}・${form.address.city})`);

    return (
        <form>
            <div>
                <label htmlFor="name">名前 : </label>
                <input name="name" type="text" value={form.name} onChange={handleForm} />
            </div>
            <div>
                <label htmlFor="prefecture">住所（都道府県） : </label>
                <input name="prefecture" type="text" value={form.address.prefecture} onChange={handleFormNest} />
            </div>
            <div>
            <label htmlFor="city">住所（市区町村） : </label>
                <input name="city" type="text" value={form.address.city} onChange={handleFormNest} />
            </div>
            <button type="button" onClick={show}>送信</button>
        </form>
    );
}
/**
 * スプレッド構文によるオブジェクトの複製は「浅い」複製。
 * そのため、階層ごとに複製する必要がある。
 * なお、複雑化を避けるため、Stateは極力フラットに作成すること。
 */