/**
 * スリープし、スリープ時間を表示するコンポーネント。
 * @param {*} delay スリープ時間（ミリ秒）
 * @returns スリープ時間を表示する
 */
export default function HeavyUI({delay}) {
    sleep(delay);
    return <p>遅延時間は{delay}ミリ秒</p>;
}

/**
 * 指定時間スリープする。
 * @param {*} delay スリープ時間（ミリ秒）
 */
function sleep(delay) {
    let start = Date.now();
    while (Date.now() - start < delay);
}
