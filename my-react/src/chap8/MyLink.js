import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./RouterNav.css";

/**
 * 現在のパスとリンク先がマッチした場合はテキストを表示し、それ以外はリンクを表示するコンポーネント。
 * @param {Object} props - プロパティとして、to (リンク先パス)、children (リンクのテキスト) を受け取る。
 * @returns {JSX.Element} - マッチした場合はテキストを含む span 要素、それ以外はリンクを含む Link コンポーネントを返す。
 */
export function MyLink({ to, children, ...props }) {
    // 指定のパスを正規化
    const resolvedPath = useResolvedPath(to);
    // 現在のパスとリンク先がマッチしているか判定
    const isMatch = !!useMatch({
        path: resolvedPath.pathname,    // 比較するパス
        end: true                       // パスを厳密に判定するか
    });

    // マッチしたかどうかに応じて、リンクか平文（テキスト）を返却
    return isMatch ?
        <span className="active">{children}</span> :
        <Link to={to}{...props}>{children}</Link>;
}
/**
 * useResolvedPath関数:
 * 
 * 指定のパスを正規化する。
 */

/**
 * useMatch関数:
 * 
 * 与えられたパスと現在のパスが一致するか判定する。
 * 現在のパスとマッチした場合、PathMatchオブジェクトを返却し、
 * マッチしなかった場合、nullやundifinedを返却する。
 */

/**
 * !!:
 * 
 * 任意の値をboolean値に変換する。
 * useMath関数との仕組みは、
 * trueになる場合、useMatch関数の返却値がPathMatchオブジェクト。
 * falseになる場合、useMatch関数の返却値がnullやundifined。
 * 
 */