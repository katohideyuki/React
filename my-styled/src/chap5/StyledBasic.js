/**
 * JSX式に<style>要素を埋め込む
 * @returns 
 */
export default function StyledBasic() {
    return (
        <>
            {/* Styled JSXによるスタイル定義 */}
            <style jsx>{`
                .panel {
                    width: 300px;
                    padding: 10px;
                    border: 1px, solid #000;
                    border-radius: 5px;
                    background-color: royalblue;
                    color: white;
                }
                {/* 一部だけグローバルスタイルにする場合 */}
                :global(h3) {
                    color: red;
                }
            `}</style>
            {/* グローバルスタイルを定義する場合 */}
            {/* <style jsx global>{`
                h3 {
                    background-color: yellow;
                }
            `}</style> */}
            <div className="panel"><b>Styled JSX</b>は、JSX式にスタイル定義を...</div>
        </>
    );
}
/**
 * Styled JSXによるスタイル定義。
 * 以下のようにするだけ。
 * <style jsx>{` スタイルを定義 `}</style>
 * 
 * グローバルスタイルは、以下のようにするだけ。
 * <style jsx global>{` スタイルを定義 `}</style>
 * 
 * ローカルスタイルの一部だけをグローバルにするには、
 * :global疑似セレクターを利用する
 */