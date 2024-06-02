import { createContext } from "react";
import HookContextChild from "./HookContextChild";

/** コンテキストオブジェクト生成 */
export const MyAppContext = createContext();
/** コンテキスト */
const config = {
    title: 'React入門',
    lang: 'Ja-JP'
};

/**
 * 親コンポーネント
 * @returns 
 */
export default function HookContext() {
    return (
        <MyAppContext.Provider value={config}>
            {/* コンテキスト参照範囲 */}
            <div id="c_main">
                <HookContextChild />
            </div>
            {/* コンテキスト参照範囲 */}
        </MyAppContext.Provider>
    );
}
/**
 * コンポーネントの複数階層で値を受け渡しする方法
 * useContext関数
 * 上位コンポーネントで用意された値を、任意の子孫コンポーネントで参照できる。(グローバルなStateとも言える)
 * ただし、コンテキストを利用することは、コンポーネントの再利用性を損なうことにもなるので注意。
 * 
 * <MyAppContext.Provider>要素で囲んだ範囲内であれば、どこからでもコンテキストを参照できる。
 */