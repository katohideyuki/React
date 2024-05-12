import { useRef } from "react";

/**
 * 入力値をログに出力する。
 * @export
 * @return {*} ファイル入力ボックス
 */
export default function FormFile() {
    // ファイル入力ボックスへの参照
    const file = useRef(null);

    // 送信ボタンをクリックで入力値をログに出力
    const show = () => {
        // FileListオブジェクトを取得し、個別のファイル情報を出力
        const fs = file.current.files;
        for (const f of fs) {
            console.log(`ファイル名：${f.name}`);
            console.log(`種類：${f.type}`);
            console.log(`サイズ：${Math.trunc(f.size / 1024)}KB`);  // 小数点を切り捨て
        }
    };
    return (
        <form>
            <input type="file" ref={file} multiple />
            <br />
            <button type="button" onClick={show}>送信</button>
        </form>
    );
}