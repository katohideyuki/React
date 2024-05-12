import css from "styled-jsx/css";

/** スタイル定義ファイル */
export default css`
.panel {
    width: 300px;
    padding: 10px;
    border: 1px, solid #000;
    border-radius: 5px;
    background-color: royalblue;
    color: white;
}`;

/** グローバルスタイル */
export const globalCss = css.global`
h3 {
    background-color: yellow;
}`;

/** 埋め込み式のスタイル */
export const resolveCss = css.resolve`
.panel {
    margin: : 50%;
}`

/**
 * スタイル定義を外部化は、css関数を利用することで、スタイル定義を定数として切り出すことができる。
 * 関数が付与されたテンプレート文字列`...`をタグ付きテンプレート文字列。
 * 
 * グローバルスタイルを定義する場合は、css.global
 * className属性に埋め込む場合、css.resolve
 */