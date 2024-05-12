import { Suspense } from "react";
import ThrowResult from "./ThrowResult";

/**
 * 遅延ロードを呼び出すコンポーネント
 * @returns ThrowResulコンポーネント
 */
export default function SuspenseResult() {
    return (
        <Suspense fallback={<p>Now Loading...</p>}>
            <ThrowResult />
        </Suspense>
    );
}