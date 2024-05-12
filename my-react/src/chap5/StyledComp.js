import styled from "styled-components";

// 標準の<div>要素を拡張したMyPanelコンポーネント
// ※コンポーネントとして扱いたいので、変数名はパスカルケース
const MyPanel = styled.div`
    width: 300px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: royalblue;
    color: white
`;

/**
 * Styled Componentsでスタイルを反映する。
 * @returns スタイルが反映されたメッセージ
 */
export default function StyledComp() {
    return (
        <MyPanel><b>Styled JSX</b>は、JSX式にスタイル定義を...</MyPanel>
    );
}
/**
 * Styled Components
 * CSS-in-JSに分類されるライブラリ。
 * 「特定の要素に対してスタイルを適用する」のではなく、
 * 「既存の要素にスタイル付けしたコンポーネントを作成する」
 * 
 * Styled Componentsでは、styledオブジェクトを利用してスタイル定義するのが基本。
 */
