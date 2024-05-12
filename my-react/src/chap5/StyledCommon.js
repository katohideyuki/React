import styled from "styled-components";
import PanelBase from './StyledCommon.css';

const MyPanel = styled.div`
    ${PanelBase}    
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
export default function StyledCommon() {
    return (
        <MyPanel><b>Styled JSX</b>は、JSX式にスタイル定義を埋め込む形式のライブラリです。</MyPanel>
    );
}