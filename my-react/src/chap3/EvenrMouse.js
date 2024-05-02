import { useState } from "react";
/**
 * 画像にマウスポインターが出入りしたタイミングで画像を差し替えるイベントを設定
 * @export
 * @param {*} { beforeSrc, afterSrc, alt } 変更前の画像、変更後の画像、
 * @return {*} onMouseEnter/onMouseLeaveが設定された画像要素
 */
export default function EvenrMouse({ beforeSrc, afterSrc, alt }) {
    // 現在表示している画像
    const [current, setCurrent] = useState(beforeSrc);

    // mouseover/mouseleaveイベントハンドラーを準備
    const handleEnter = () => setCurrent(afterSrc);     // マウスが入っている状態なら変更後の画像を表示
    const handleLeave = () => setCurrent(beforeSrc);    // マウスが入っていない状態なら変更前の画像を表示

    return (
        // 画像要素
        <img src={current} alt={alt}
            onMouseEnter={handleEnter} onMouseLeave={handleLeave} />
    );
}
