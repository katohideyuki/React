import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormHelperText from '@mui/material/FormHelperText'
import RadioGroup from '@mui/material/RadioGroup'
import { FormControlLabel, Radio, Button } from "@mui/material";


/**
 * 個人情報を入力フォームを提供するコンポーネント
 * @returns 個人情報を入力フォーム要素
 */
export default function FormMui() {
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

    // サブミット処理
    const onsubmit = data => console.log(data);
    const onerror = err => console.log(err);

    return (
        <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate >
            {/* 性別 */}
            <div>
                <TextField label="名前" margin="normal"
                    {...register('name'/*フィールド名*/, {
                        required: '名前は必須入力です。',
                        maxLength: {
                            value: 20,
                            message: '名前は20字いないにしてください。'
                        }
                        /*動作オプション*/
                    })}
                    error={'name' in errors}           // エラー時にラベルを表示するか(Bool値)
                    helperText={errors.name?.message}  // ラベルに表示すべきコンテンツ
                />
            </div>

            {/* 性別 */}
            <div>
                <FormControl>
                    <FormLabel component="legend">性別 : </FormLabel>
                    <RadioGroup name="gender" row>
                        <FormControlLabel value="male" control={<Radio />} label="男性"
                            {...register('gender', {
                                required: '性別は必須入力です。',
                            })} />

                        <FormControlLabel value="female" control={<Radio />} label="女性"
                            {...register('gender', {
                                required: '性別は必須入力です。',
                            })} />
                    </RadioGroup>
                    {/* <RadioGroup>タグにはerror/helperText属性がないため、
                        別途、<FormHelperText>タグで代用 */}
                    <FormHelperText error={'gender' in errors}>
                        {errors.gender?.message}
                    </FormHelperText>
                </FormControl>
            </div>

            {/* メールアドレス */}
            <div>
                <TextField type="email" label="メールアドレス" margin="normal"
                    {...register('email', {
                        required: 'メールアドレスは必須入力です。',
                        pattern: {
                            value: /([a-z\d+\-.]+)@([a-z\d-]+(?:\.[a-z]+)*)/i,
                            message: 'メールアドレスの形式が不正です。'
                        }
                    })}
                    error={'email' in errors}
                    helperText={errors.email?.message} />
            </div>

            {/* 備考 */}
            <div>
                <TextField label="メモ" margin="normal" multiline
                    {...register('memo', {
                        required: '備考は必須入力です。',
                        minLength: {
                            value: 10,
                            message: '備考は10文字以上にしてください。'
                        }
                    })}
                    error={'memo' in errors}
                    helperText={errors.memo?.message} />
            </div>

            {/* 送信ボタン */}
            <div>
                <Button variant="contained" type="submit">送信</Button>
            </div>
        </form >
    );
}
/**
 * React Hook Form + MUI を連携した場合
 * register関数に以下属性が追加される。
 * - error属性:エラー時にラベルを表示するか(Bool値)
 * - helperText属性:ラベルに表示すべきコンテンツ
 */