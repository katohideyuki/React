/** @jsxImportSource @emotion/react */
import { Button } from "@mui/material";
import { css } from '@emotion/react';

/**
 * ボタンを表示する。
 * @returns ボタン要素
 */
export default function MaterialBasic() {
    // MUIデフォルトのテキスト変換を無効化
    const font = css`
        text-transform: none; 
    `;

    return (
        <>
            <Button variant="text" css={font}>Text</Button>
            <Button variant="contained" color="primary">Contained</Button>
            <Button variant="outlined" color="secondary">Outlined</Button>
        </>
    );
}


/**
 * Material UI(MUI) 
 * Reactアプリで利用できるコンポーネントを集めたライブラリ。
 * - MUI Core:基本コンセプト群（無償）
 * - MUI X:複雑なユースケースに対応したコンポーネント群（一部有償）
 * - Templates:MUIベースで構築されたテンプレート群
 * 
 * MUIでは内部的に Emotionを利用している。
 * 
 * variant属性は、ボタンの見た目を指定する。
 * color属性のデフォルトはprimary。
 * 
 * MUIのデフォルトの挙動で、画面に表示されるアルファベットが全て大文字になる。
 */