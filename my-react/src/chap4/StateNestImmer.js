import { useImmer } from "use-immer";

/**
 * 個人情報の入力フォームを生成する。
 * （Immerライブラリを使用した場合）
 * @returns 個人情報の入力フォーム
 */
export default function StateNestImmer() {
    // 入れ子の配列をStateとして宣言
    const [form, setFrom] = useImmer({
        name: '山田太郎',               // 名前
        address: {
            prefecture: '広島県',       // 都道府県
            city: '榛原町'              // 市区町村
        }
    });

    // 1段目の要素（name）を更新するためのハンドラー
    const handleForm = e => {
        setFrom(form => {
            form[e.target.name] = e.target.value    // 更新部分を上書き
        });
    };

    // 2段目の要素（prefecture, city）を更新するためのハンドラー
    const handleFormNest = e => {
        setFrom(form => {
            form.address[e.target.name] = e.target.value    // 更新部分を上書き
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
                <input name="city" type="text" onChange={handleFormNest} value={form.address.city} />
            </div>
            <div>
                <button type="button" onClick={show}>送信</button>
            </div>
        </form>
    );
}
/**
 * useImmer関数で生成されたセッターでは、
 * - 引数としてStateを受け取る
 * - 関数配下で、Stateを更新できる
 */