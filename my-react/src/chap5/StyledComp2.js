import styled from "styled-components";

/**
 * 既存のコンポーネントにスタイル付けする。
 * @param {*} param0 クラス名、子要素 
 * @returns スタイル付けされたMyButtonコンポーネント
 */
export function MyButton({ className, children }) {
    return (
        <button type="button" className={className}>
            {children}
        </button>
    );
}

// MyButtonにスタイル付けしたMyStyledButton
export const MyStyledButton = styled(MyButton)`
    display: block;
    background-color: royalblue;
    color: white;
    font-weight: bold;
    width: 80px;
    height: 50px;
`;
/**
 * MyButtonコンポーネントのPropsであるclassNameは、styled-componentsが自動的に渡す。
 * styled-components側でランダムな値が自動生成されるため。
 */