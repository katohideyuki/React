// export default function TitledPanel({ title, body }) {
//     return (
//         <div style={{
//             margin: 50,
//             padding: 20,
//             border: '1px solid #000',
//             width: 'fit-content',
//             boxShadow: '10px 5px 5px #999',
//             backgroundColor: '#fff'
//         }}>
//             {title}
//             <hr/>
//             {body}
//         </div>
//     );
// }

/**
 * 要素本体のスタイル情報を設定する
 * @export
 * @param {*} { children } 要素
 * @return {*} スタイル情報が設定された要素
 */
export default function TitledPanel({ children }) {
    // key属性がtitle/bodyである要素を取得
    // childrenはJSX配列なので、Array#findメソッドを利用できる
    const title = children.find(elem => elem.key === 'title');
    const body = children.find(elem => elem.key === 'body');

    return (
        <div style={{
            margin: 50,
            padding: 20,
            border: '1px solid #000',
            width: 'fit-content',
            boxShadow: '10px 5px 5px #999',
            backgroundColor: '#fff'
        }}>
            {title}
            <hr />
            {body}
        </div>
    );
}