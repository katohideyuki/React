import { resolve } from 'styled-jsx/css';
import css, { globalCss, resolveCss } from './StyledCss.css'

/**
 * 外部のスタイル定義ファイルを読み込む
 * @returns スタイルが反映されたメッセージ
 */
export default function StyledCss() {
    return (
        <>
            {/* 外部スタイルをインポート */}
            <style jsx>{css}</style>
            <style jsx>{globalCss}</style>
            {/* 特定の要素にのみスタイルを反映 */}
            <div className={`panel ${resolveCss.className}`}><b>Styled JSX</b>はJSX式にスタイル定義を...</div>
        </>
    );
}
/**
 * 
 * 
 */