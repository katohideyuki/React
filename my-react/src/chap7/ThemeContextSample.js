import { createContext } from "react";

/**
 * コンテキストファイル
 * @returns コンテキストオブジェクト
 */
export default createContext({
    mode: 'light',
    toggleMode: () => { }
});
/**
 * コンテキストの準備として、一般的にファイルとして独立して作成する。
 * コンテキストファイルの用途として、
 * コンテキストに値が渡されたなかった場合(<XxxxContext.Provider>要素そのものが明記されなかった場合の備え)
 * に利用される値。
 * ※<XxxxContext.Provider>要素のvalue属性が省略できるわけではない。
 * 
 * MyThemeProviderコンポーネントで<ThemeContextSample>要素をコメントアウトした状態で
 * 実行すると、コンテキストファイルファイルが使用されている事がわかる。
 */