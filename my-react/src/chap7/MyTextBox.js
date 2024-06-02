import { forwardRef } from 'react'

/**
 * テキストフィールドを表示する。
 * 親コンポーネントから渡されるrefオブジェクトを参照できない。
 * @returns テキストフィールド
 */
// export default function MyTextBox({ label, ref }) {
//     return (
//         <label>
//             {label}:<input type='text' size="15" ref={ref} />
//         </label>
//     );
// }

/**
 * テキストフィールドを表示する。
 * 親コンポーネントから渡されるrefオブジェクトを参照できる。
 * @returns テキストフィールド
 */
const MyTextBox = forwardRef(({ label }, ref) => (
    <label>
        {label}:<input type='text' size="15" ref={ref} />
    </label>
));
export default MyTextBox;

/**
 * forwardRef関数
 * ref属性に渡されたRefオブジェクトを配下の要素に引き渡す(転送する)。
 */