/**
 * メッセージを表示する。
 * 60%の確立で例外をスローする。
 * @returns メッセージ
 */
export default function ErrorRetryThrow() {
    // 60%の確立で例外をスロー
    if (Math.random() < 0.6) {
        console.log('例外発生');
        throw new Error('Error is occured in MyApp.');
    }

    return (
        <p>正しく実行されました。</p>
    );
}