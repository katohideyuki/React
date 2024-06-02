import { forwardRef, useImperativeHandle, useRef } from 'react'

/**
 * テキストフィールドを表示する。
 * 親コンポーネントから渡されるrefオブジェクトを参照できる。
 * @returns テキストフィールド
 */
const MyTextBox2 = forwardRef(({ label }, ref) => {
    // テキストボックスへの参照を準備
    const input = useRef(null);

    // 親コンポーネントに対して公開するオブジェクトを生成
    useImperativeHandle(ref/*Refオブジェクト*/, () => {
        return {
            setFocus() {
                input.current.focus();
            }
        };
    }/*ref経由で公開するオブジェクトを生成する関数*/, []/*依存する値*/);

    return (
        <label>
            {label}:<input type='text' size="15" ref={input} />
        </label>
    );
});
export default MyTextBox2;

/**
 * useImperativeHandle関数
 * 定義したメソッドを親コンポーネントに対して公開する。
 * forwardRef関数との併用が前提。
 * useImperativeHandle使用する意図として、呼び出し元に渡す機能を制限している点。
 * 
 * - useImperativeHandleを使用しない場合、呼び出し元に要素の参照を公開しているので、
 *   要素の背景色やサイズなど、色々と自由に変更できてします。
 * - useImperativeHandleを使用した場合、要素の参照そのものではなく、機能だけを公開しているので、
 *   呼び出し元の自由度を制限できる。
 * 
 * そもそもの話、useRef
 */