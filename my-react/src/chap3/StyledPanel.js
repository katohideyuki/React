/**
 * 要素本体のスタイル情報を設定する
 * 
 * @export
 * @param {*} {children} 要素
 * @return {*} スタイル情報が設定された要素
 */
export default function StyledPanel({children/*引数名はchildrenじゃないとコンテンツ配下を取得できない*/}) {
    return (
        <div style={{
            margin: 50,
            padding: 20,
            border: '1px solid #000',
            width: 'fit-content',
            boxShadow: '10px 5px 5px #999',
            backgroundColor: '#fff'
        }}>
            {children}
        </div>
    );
}