import { useNavigate } from "react-router-dom";

/**
 * AboutPageコンポーネント。
 * リクエストURLが/aboutの場合に表示する。
 * @return {JSX.Element} アバウトページを表示するJSX要素
 */
export default function AboutPage() {
  // navigate関数を取得
  const navigate = useNavigate();

  /**
   * トップページに移動する。
   * @returns {void}
   */
  const handleClick = () => navigate('/'/**リンク先のパス*/);
  return (
    <>
      <p>Aboutページです。</p>
      <button type="button" onClick={handleClick}>トップへ移動</button>
    </>
  );
}
/**
 * useNavigate関数
 * 静的リンクではなく、プログラムからルート間を移動する場合に使用する。
 */