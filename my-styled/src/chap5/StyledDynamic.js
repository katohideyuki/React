/**
 * ダイナミックスタイル
 * @param {*} param0 スタイルオブジェクト
 * @returns スタイルが反映されたメッセージ
 */
export default function StyledDynamic({ theme }) {
    return (
        <>
            <style jsx>{`
                .panel {
                    width: 300px;
                    padding: 10px;
                    border: 1px, solid #000;
                    border-radius: 5px;
                    background-color: royalblue;
                    color: white;
                }
            `}</style>
            <style jsx>{`
                {/* Propから動的に設定値を生成 */}
                .panel {
                    border-radius: ${theme.radius ? '10px' : '0px'};
                    background-color: ${theme.color};
                }
                `}</style>
            <div className="panel"><b>Styled JSX</b>はJSX式にスタイル定義を...</div>
        </>
    );
}