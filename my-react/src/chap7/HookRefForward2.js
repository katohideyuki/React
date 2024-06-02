import { useEffect, useRef } from "react";
import MyTextBox2 from "./MyTextBox2";

/**
 * MyTextBoxコンポーネントを制御する。
 * MyTextBoxがフォーカスされていれば、親コンポーネントから子コンポーネントを参照できているとする。
 * @returns 
 */
export default function HookRefForward2() {
    const text = useRef(null);

    useEffect(() => {
        text.current?.setFocus();
        console.log(text);
    }, []);

    return (
        // 子コンポーネントにRefオブジェクトを渡す
        <MyTextBox2 label="名前" ref={text} />
    );
}
/**
 * Refコンポーネント配下の要素にフォワードする。
 * コンポーネントをまたいで(=子コンポーネント配下の要素)を参照する方法。
 * HookRefForward（親）からMyTextBox（子）を要素を参照。
 */