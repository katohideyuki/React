import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import yup from "./Yup.jp";

/* 検証ルール準備 */
const schema = yup.object({
    name: yup
        .string()               // データ型
        .label('名前')          // フィールド名
        .trim().lowercase()     // 入力値の変換
        .required()             // 検証ルール1（エラーメッセージは外部ファイルに定義）
        .max(20),               // 検証ルール2（エラーメッセージは外部ファイルに定義）
    gender: yup
        .string()
        .label('性別')
        .required(),
    email: yup
        .string()
        .label('メールアドレス')
        .required()
        .email(),
    memo: yup
        .string()
        .label('備考')
        .required()
        .min(10)
});

/**
 * 検証機能付きフォーム。
 * 検証ライブラリのYupを使用する。
 * @returns 検証機能付きフォーム
 */
export default function FormJapan() {

    // フォームを初期化
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValue: {
            name: '名無権兵衛',
            email: 'admin@example.com',
            gender: 'male',
            memo: ''
        },
        // 検証ルールをReact Hook Formに紐づける(Yupに検証を委ねる)
        resolver: yupResolver(schema)
    });

    // サブミット処理（検証のため4秒遅延）
    const onsubmit = data => console.log(data);
    const onerror = err => console.log(err);

    return (
        <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate >
            {/* 検証ルールなどをフォームに紐づけ */}
            {/* 名前 */}
            <div>
                <label htmlFor="name">名前 : </label><br />
                <input id="name" type="text"
                    {...register('name')} />
                <div>{errors.name?.message}</div>
            </div>

            {/* 性別 */}
            <div>
                <label htmlFor="gender">性別 : </label><br />
                <label>
                    <input type="radio" value="male"
                        {...register('gender')} />男性
                </label>
                <label>
                    <input type="radio" value="female"
                        {...register('gender')} />女性
                </label>
                <div>{errors.gender?.message}</div>
            </div>

            {/* メールアドレス */}
            <div>
                <label htmlFor="ElementInternals">メールアドレス</label><br />
                <input type="email" id="email"
                    {...register('email')} />
                <div>{errors.email?.message}</div>
            </div>

            {/* 備考 */}
            <label htmlFor="memp">備考 : </label><br />
            <textarea name="memo" id="memo" cols="30" rows="10"
                {...register('memo')} />
            <div>{errors.memo?.message}</div>

            <div>
                <button type="submit">送信</button>
            </div>
        </form >
    );
}
