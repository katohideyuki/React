import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useForm } from "react-hook-form";

/* 汎用的な検証ルールを追加 */
yup.addMethod(yup.string/*データ型*/, 'ng'/*検証名*/, function () {/*検証ルール*/
    return this.test('ng', ({ label }) => `${label}にNGワードが含まれています。`,
        value => {
            // 不適切ワードを準備
            const ngs = ['暴力', '死', 'グロ'];
            // 入力文字列に不適切ワードが含まれているかを判定
            for (const ng of ngs) {
                if (value.includes(ng)) {
                    return false;
                }
            }
            return true;
        });
});

/* 検証ルール準備 */
/* eslint-disable no-template-curly-in-string */
const schema = yup.object({
    name: yup
        .string()                                                 // データ型
        .label('名前')                                            // フィールド名
        .trim().lowercase()                                       // 入力値の変換
        .required('${label}は必須入力です。')                      // 検証ルール1
        .max(20, '${label}は${max}文字以内で入力してください。'),   // 検証ルール2
    gender: yup
        .string()
        .label('性別')
        .required('${label}は必須入力です。'),
    email: yup
        .string()
        .label('メールアドレス')
        .required('${label}は必須入力です。'),
    memo: yup
        .string()
        .label('備考')
        .transform((value/*ここまでの変換済みの値*/, orgValue/*元の値*/) => value.normalize('NFKC'))    // 独自で作成した変換メソッド
        .required('${label}は必須入力です。')
        .min(10, '${label}は${min}文字以上で入力してください。')
        .ng()   // 独自で作成した検証ルールメソッド
});
/* eslint-enable no-template-curly-in-string */

/**
 * 検証機能付きフォーム。
 * 検証ライブラリのYupを使用する。
 * @returns 検証機能付きフォーム
 */
export default function FormYup() {

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

                {/* バリデーションエラーの場合のみ、エラーメッセージを表示（オプショナル演算子） */}
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
                {/* フォームが変更されていない、検証に失敗している場合、ボタンを非活性 */}
                <button type="submit">送信</button>
            </div>
        </form >
    );
}
/**
 * 検証ルールを個々の要素に埋め込んでいるため、コードの見通しが良くない。
 * Yupライブラリを使用し、検証ルールを別のオブジェクトに宣言する。
 * yup.objectで、オブジェクトのプロパティとその値の検証ルールを定義する。
 * 
 * Yup検証ルール内に定義する際に、「テンプレート文字列を使用して」という
 * 警告が出力されるため、以下のコメントを定義し、警告を無視する。
 * - eslint-disable no-template-curly-in-string ※定義始め
 * - eslint-enable no-template-curly-in-string  ※定義終わり
 * 
 * 独自の検証ルールを実装するには、test(検証名, 検証メッセージ, 検証ルール)を作成する。
 * - 引数は検証コンテキストオブジェクト
 * - 戻り値は検証エラーメッセージ、またはBool値
 * 
 * 複数のフィールドに検証ルールを実装するなら、検証ルールメソッドを作成する。
 * yup.addMethod(データ型, 検証名, 検証ルール)
 * - アロー関数は使用不可
 * - 戻り値はSchemaオブジェクト
 * 
 * 入力値は変換できる。また、独自の変換方法も可能。
 * transform(変換ルール関数)
 * - 変換ルール関数は、引数としてここまでの変換済みの値、元の値を受け取る
 * - 戻り値は変換済みの値
 */
