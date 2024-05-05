import { useEffect, useRef } from 'react';
import './EventPassive.css';
/**
 * wheelイベントでpreventDefaultメソッドで呼び出すが、
 * 間違った記述のためエラーとなる。
 * safari環境ではエラーは発生しないが、wheelは有効のまま
 * スクロールができる。
 * @export
 * @return {*} 
 */
// export default function EventPassive() {
//     const handleWheel = e => e.preventDefault();
//     return (
//         <div className="box" onWheel={handleWheel}>
//             たとえばwheelイベントをハンドラーで...
//         </div>
//     );
// }


/**
 * wheelイベントでpreventDefaultメソッドで呼び出し、
 * スクロールができないようにする。
 * @export
 * @return {*} スクロールができないdiv要素
 */
export default function EventPassive() {
    const handleWheel = e => e.preventDefault();
    // div要素の参照を取得
    const divRef = useRef(null);
    useEffect(() => {
        // コンポーネント起動時にリスナーを設定
        const div = divRef.current;
        // ピュアなJavaScriptの機能から、Passiveモードをオフに設定
        div.addEventListener('wheel', handleWheel, {passive: false});
        return (() => {
            // コンポーネント破棄時にリスナーも破棄
            div.removeEventListener('wheel', handleWheel);
        });
    });

    return (
        <div ref={divRef} className="box">
            たとえばwheelイベントをハンドラーで...
        </div>
    );
}
/**
 * useRef関数は別途、学習するため、この時点では説明を省略
 */