import { Suspense } from "react";
import ThrowPromise from "./ThrowPromise";

/**
 * 非同期処理の遅延ロードを確認する。
 * @returns ThrowPromiseコンポーネント
 */
export default function SuspenseSimple() {
    return(
        <Suspense fallback={<p>Now Loading...</p>}>
            <ThrowPromise />
        </Suspense>
    );
}