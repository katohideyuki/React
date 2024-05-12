import { useForm } from "react-hook-form";

/**
 * 検証機能付きフォーム
 * @returns 検証機能付きフォーム
 */
export default function FormBasic() {
    // デフォルト値
    const defaultValue = {
        name: '名無権兵衛',
        email: 'admin@example.com',
        gender: 'male',
        memo: ''
    };

    // フォームを初期化
    const { register, handleSubmit, formState: { errors, isDirty, isValid, isSubmitting } } = useForm({
        defaultValue
    });

    // サブミット処理（検証のため4秒遅延）
    const onsubmit = data => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
                console.log(data);;
            }, 4_000);
        });

    };
    const onerror = err => console.log(err);

    return (
        <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate >
            {/* 検証ルールなどをフォームに紐づけ */}
            {/* 名前 */}
            <div>
                <label htmlFor="name">名前 : </label><br />
                <input id="name" type="text"
                    {...register('name', {
                        required: '名前は必須入力です。',                  // 検証1
                        maxLength: {                                      // 検証2
                            value: 20,
                            message: '名前は20文字以内にしてください。'
                        }
                    })} />

                {/* バリデーションエラーの場合のみ、エラーメッセージを表示（オプショナル演算子） */}
                <div>{errors.name?.message}</div>
            </div>

            {/* 性別 */}
            <div>
                <label htmlFor="gender">性別 : </label><br />
                <label>
                    <input type="radio" value="male"
                        {...register('gender', {
                            required: '性別は必須です。'    // 検証1
                        })} />男性
                </label>
                <label>
                    <input type="radio" value="female"
                        {...register('gender', {
                            required: '性別は必須です。'    // 検証1
                        })} />女性
                </label>
                <div>{errors.gender?.message}</div>
            </div>

            {/* メールアドレス */}
            <div>
                <label htmlFor="ElementInternals">メールアドレス</label><br />
                <input type="email" id="email"
                    {...register('email', {
                        required: 'メールアドレスは必須入力です。',    // 検証1
                        pattern: {                                   // 検証2
                            value: /([a-z\d+\-.]+)@([a-z\d-]+(?:\.[a-z]+)*)/i,
                            message: 'メールアドレスの形式が不正です。'
                        }
                    })} />
                <div>{errors.email?.message}</div>
            </div>

            {/* 備考 */}
            <label htmlFor="memp">備考 : </label><br />
            <textarea name="memo" id="memo" cols="30" rows="10"
                {...register('memo', {
                    required: '備考も必須入力です。',                // 検証1
                    minLength: {                                    // 検証2
                        value: 10,
                        message: '備考は10文字以上にしてください。',
                    },
                    // 独自の検証ルール
                    validate: {                                     // 検証3
                        ng: (value, formValues) => {
                            // 不適切ワードを準備
                            const ngs = ['暴力', '死', 'グロ'];
                            // 入力文字列に不適切ワードが含まれているか判定
                            for (const ng of ngs) {
                                if (value.includes(ng)) {
                                    return '備考にNGワードが含まれています。';
                                }
                            }
                            return true;
                        }
                    }
                })} />
            <div>{errors.memo?.message}</div>

            <div>
                {/* フォームが変更されていない、検証に失敗している場合、ボタンを非活性 */}
                <button type="submit" disabled={!isDirty || !isValid}>送信</button>
                {/* サブミット押下後、フォーム送信中のみ表示する */}
                {isSubmitting && <div>...送信中</div>}
            </div>
        </form >
    );
}
/**
 * useForm関数でフォームを初期化
 * - useForm関数の戻り値は、フォーム生成に必要な変数/関数を含んだオブジェクト
 * 
 * register関数
 * - inputなどに入力された値を参照するために使う
 */