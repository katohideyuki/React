import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import MyHeader from "./MyHeader";

/**
 * トップページを表示するコンポーネント。
 * リクエストURLが/（ルート）の場合に表示する。
 * 親ルートから状態管理関数を取得し、コンポーネントが描画されるたびにカウントを更新。
 * @return {JSX.Element} トップページを表示するJSX要素
 */
export default function TopPage() {
    // 親ルートからstate管理を取得
    // 更新関数のみ使用するため、topPageCount変数は取得しない
    const [count, setTopPageCount] = useOutletContext();

    // コンポーネント描画時に更新関数を実行
    useEffect(() => setTopPageCount(c => c + 1), [setTopPageCount]);
    return (
        <>
            <MyHeader />
            <p>トップページです。</p>
        </>
    );
}
/**
 * useOutletContext関数：
 * 
 * 上位ルートで用意されたコンテキストを取得する。
 */

/** 
 * useEffect関数の第二引数に更新関数を渡している理由：
 * 
 * useEffectの第二引数は、依存配列と呼ばれ、この配列に含まれる値が変化した場合にのみ
 * エフェクトが再実行されます。この場合、setTopPageCountが依存配列に含まれているため、
 * この関数が変わった時にのみuseEffectが再実行されます。
 * 
 * 通常、関数は再定義されるたびに異なる参照を持つため、依存配列に含めることで
 * setTopPageCountが更新された場合にのみエフェクトがトリガーされることを保証します。
 */