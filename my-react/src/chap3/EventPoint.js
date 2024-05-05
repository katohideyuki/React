import { useState } from "react";
import './EventPoint.css';

/**
 * ポインター位置情報を表示する
 * @export
 * @return {*} ポインター位置情報を表示する要素
 */
export default function EventPoint() {
    const [screen, setScreen] = useState({ x: 0, y: 0 });   // イベント発生座標（画面上での座標）
    const [page, setPage] = useState({ x: 0, y: 0 });       // イベント発生座標（ページ上での座標）
    const [client, setClient] = useState({ x: 0, y: 0 });   // イベント発生座標（ブラウザ上での座標）
    const [offset, setOffset] = useState({ x: 0, y: 0 });   // イベント発生座標（要素上の座標）

    // ポインター位置をそれぞれの基準に基づいて表示
    const handleMousemove = (e) => {
        setScreen({ x: e.screenX, y: e.screenY });
        setPage({ x: e.pageX, y: e.pageY });
        setClient({ x: e.clientX, y: e.clientY });
        setOffset({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });  // offsetのみ生のイベントオブジェクトから取得
    };

    return (
        <div id="main" onMouseMove={handleMousemove}>
            screen: {screen.x}/{screen.y}<br />
            page: {page.x}/{page.y}<br />
            client: {client.x}/{client.y}<br />
            offset: {offset.x}/{offset.y}<br />
        </div>
    );
}

/**
 * SyntheticEvent（合成イベント）では、要素内の位置を示す offsetX/Yプロパティを
 * サポートしていない。
 * そのため、nativeEventプロパティで生のイベントオブジェクトを取得したうえで、
 * offsetX/Yプロパティにアクセスしている。
 */