import { Form, useActionData } from "react-router-dom"

/**
 * BookFormPageコンポーネント。
 * 書籍情報を入力するためのフォームを提供。
 * @returns {JSX.Element} - 書籍情報入力フォームのJSX要素
 */
export default function BookFormPage() {
    // アクションからの戻り値を取得
    const errors = useActionData();


    return (
        <Form method="POST" noValidate>
            <ul>
                {/* 検証失敗の場合、エラー情報を表示 */}
                {errors?.map(msg => <li key={msg}>{msg}</li>)}
            </ul>
            <div>
                <label htmlFor="title">書名 : </label><br />
                <input id="title" name="title" type="text" size="20" />
            </div>
            <div>
                <label htmlFor="price">価格 : </label><br />
                <input id="price" name="price" type="number" />円
            </div>
            <div>
                <label htmlFor="published">刊行日 : </label><br />
                <input id="published" name="published" type="date" />
            </div>
            <div>
                <button type="submit">登録</button>
            </div>
        </Form>
    );
}
/**
 * noValidate:
 * 
 * 独自のバリデーションを作成するため、ブラウザのデフォルトバリデーションを無効にする
 */

/**
 * useActionData関数:
 * 
 * アクションからの戻り値を取得する。
 */