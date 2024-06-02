import { useState } from "react";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'



/**
 * 入力フォームを表示する。
 * @returns 
 */
export default function HookCallbackRef() {
    // ボタンを表示/非表示を管理
    const [show, isShow] = useState(false);
    const handleClick = () => isShow(!show);

    // ref属性に渡すコールバック関数
    const callbackRef = elem => elem?.focus();

    return (
        <>
            <div>
                <TextField id="name" label="名前" />
            </div>
            <div>
                <TextField id="email" label="メールアドレス" />
                <Button variant="contained" color="primary" onClick={handleClick}>拡張表示</Button>
            </div>
            {/* State値(show)に応じて住所欄を表示 */}
            {show &&
                <div>
                    <TextField id="address" label="住所" inputRef={callbackRef} />
                </div>
            }
        </>
    );
}
/**
 * コールバックRef
 * ref属性に対してrefオブジェクトではなく、関数を渡す。
 * 紐付いた要素オブジェクトが生成/破棄されるタイミングで関数が実行される。
 */