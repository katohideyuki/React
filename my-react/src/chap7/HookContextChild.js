import { useContext } from "react";
import { MyAppContext } from "./HookContext";

/**
 * 子コンポーネント
 * @returns 
 */
export default function HookContextChild() {
    return (
        <div id="c_child">
            <HookContextChildGrand />
        </div>
    );
}

/**
 * 子孫コンポーネント
 * コンテキストを参照する。
 * @returns 
 */
export function HookContextChildGrand() {
    const { title, lang} = useContext(MyAppContext);
    return (
        <div id="c_chlid_grand">
            {title} ({lang})
        </div>
    );
}
/**
 * コンテキストを参照する場合は、上位コンポーネントで生成されたコンテキストオブジェクトを引数に
 * useContext関数を呼び出す。
 */