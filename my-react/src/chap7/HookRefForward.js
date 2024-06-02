import { useEffect, useRef } from "react";
import MyTextBox from "./MyTextBox";

/**
 * MyTextBoxコンポーネントを制御する。
 * MyTextBoxがフォーカスされていれば、親コンポーネントから子コンポーネントを参照できているとする。
 * @returns 
 */
export default function HookRefForward() {
    const text = useRef(null);

    // 起動時にテキストボックスにフォーカス
    useEffect(() => {
        text.current?.focus();
        console.log(text);
    }, []);

    return (
        // 子コンポーネントにRefオブジェクトを渡す
        <MyTextBox label="名前" ref={text} />
    );
}
/**
 * Refコンポーネント配下の要素にフォワードする。
 * コンポーネントをまたいで(=子コンポーネント配下の要素)を参照する方法。
 * HookRefForward（親）からMyTextBox（子）を要素を参照。
 */