import { createGlobalStyle } from "styled-components";

/** グローバルスタイルを定義 */
export default createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    background-color: yellow;
}
`;
/**
 * グローバルスタイルを定義するには、createGlobalStyle関数を利用。
 * Reactアプリのルートに対して、コンポーネント呼び出しの要領で
 * グローバルスタイル（ここでは<GlobalStyle>を追加する。
 */