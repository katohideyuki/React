import styled from "styled-components";

/** Props経由で動的なスタイルを設定 */
const MyPanel = styled.div`
    width: 300px;
    padding: 10px;
    border: 1px solid #000;
    color: white;
    border-radius: ${props => (props.theme.radius ? '10px' : '0px')};
    background-color: ${props => props.theme.color};
`;

/**
 * Styled Componentsでスタイルを反映する。
 * @returns スタイルが反映されたメッセージ
 */
export default function StyledProps() {
    return (
        <MyPanel theme={{
            radius: true,
            color: 'royalblue'
        }}><b>Styled JSX</b>は、JSX式にスタイル定義を...</MyPanel>
    );
}
/**
 * Propsへのアクセスはアロー関数を介する点がポイント。
 * ${props => Propsのアクセスコード}
 */