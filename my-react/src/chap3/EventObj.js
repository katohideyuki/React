/**
 * クリック時にイベントオブジェクトをログに出力するボタンを生成
 * @export
 * @return {*} クリック時にイベントオブジェクトをログに出力するボタン要素
 */
export default function EventObj() {
    // クリック時にイベントオブジェクトをログに出力
    const handleClick = (e) => console.log(e);
    return (
        <button onClick={handleClick}>クリック</button>
    );
}

/**
 * イベントにかかわる情報を管理するためのオブジェクトで、
 * JavaScriptによって自動生成される。
 * ただし、Reactでのイベントオブジェクトは、ただしくは
 * JavaScriptのそれではなく、ブラウザ間の使用差を吸収した
 * SyntheticEvent（合成イベント）が生成される。
 */