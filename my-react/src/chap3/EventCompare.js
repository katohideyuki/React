import { useState } from "react";
import './EventCompare.css';

/**
 * 領域にマウスポインターが出入りしたタイミングでメッセージを追加するイベントを設定
 * @export
 * @return {*} 
 */
export default function EvenrMouse() {
    const [result, serResult] = useState('');
    // mouseover/mouseleaveイベントハンドラーを準備
    const handleIn = e => serResult(r => `${r}Enter:${e.target.id}<br />`);     // イベント発生元のid値
    const handleOut = e => serResult(r => `${r}Leave:${e.target.id}<br />`);

    return (
        <>
            {/* onMouseEnter/onMouseLeaveの場合 */}
            {/* <div id="outer" onMouseEnter={handleIn} onMouseLeave={handleOut}> */}
            {/* onMouseOver/onMouseOutの場合 */}
            <div id="outer" onMouseOver={handleIn} onMouseOut={handleOut}>
                外（outer）
                <p id="inner">
                    内（inner）
                </p>
            </div>
            <div dangerouslySetInnerHTML={{__html: result}}></div>
        </>
    );
}
/**
 * onMouseEnter/onMouseLeaveの場合、入れ子の要素は反映されず、外側の要素にのみ反映
 * onMouseOver/onMouseOutの場合、入れ子の要素も反映される
 */