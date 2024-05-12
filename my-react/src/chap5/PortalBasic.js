import { useState } from "react";
import { createPortal } from "react-dom";
import "./PortalBasic";

/**
 * ダイアログを設定し、ダイアログの要素は切り離す
 * @returns ダイアログを表示するフォーム
 */
export default function PortalBasic() {
    // ダイアログの開閉状態を管理するState(falseで閉じた状態)
    const [show, setShow] = useState(false);
    // ボタンクリック時のハンドラー(Stateをオン/オフ)
    const handleDialog = () => setShow(s => !s);

    return (
        <form>
            <button type="button" onClick={handleDialog} disabled={show}>ダイアログを表示</button>
            {show && createPortal(
                <div className="dialog">
                    <p>Potalで生成されたダイアログ</p>
                    <button type="button" onClick={handleDialog}>閉じる</button>
                </div>/*埋め込みたい要素*/,
                document.getElementById('dialog')/*埋め込み先の要素（ここではidに'dialog'を持つ要素）*/
            )}
        </form>
    );
}
/**
 * ポータル。
 * コンポーネントを記述した場所に表示させるのではなく、
 * 事前に指定した別の場所に表示させる。
 */