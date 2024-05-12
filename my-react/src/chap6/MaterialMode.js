import { Button, CssBaseline, ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import { grey, amber } from "@mui/material/colors";
import { useState } from "react";

/**
 * モード値に応じてテーマを切り替えるボタンを提供する
 * コンポーネント
 * @returns モード値に応じてテーマを切り替えるボタン要素
 */
function MaterialMode() {
    // ユーザのシステム環境設定の値と比較してモードを変更

    // 現在のモード状態を管理するState(light/dark)
    const [mode, setMode] = useState('light');
    // State値を反転(light ⇔ dark )するハンドラー
    const toggleMode = () => setMode(prev => 'light' === prev ? 'dark' : 'light');

    // テーマを定義 ※すごい見づらい...
    const theme = createTheme({
        palette: {
            mode,
            // mode値に応じてパレッドを取得（スプレッド構文）
            ...(getPalette(mode))
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Button variant="contained" onClick={toggleMode}>
                Mode {mode}
            </Button>
        </ThemeProvider>
    );
}

/**
 * ユーザーのシステム環境設定の値と比較して
 * テーマを切り替えるボタンを提供するコンポーネント。
 * @returns モード値に応じてテーマを切り替えるボタン要素
 */
function MaterialMode2() {
    // ユーザのシステム環境設定の値と比較してモードを変更
    const mode = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';

    // テーマを定義 ※すごい見づらい...
    const theme = createTheme({
        palette: {
            mode,
            // mode値に応じてパレッドを取得（スプレッド構文）
            ...(getPalette(mode))
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Button variant="contained" >
                Mode {mode}
            </Button>
        </ThemeProvider>
    );
}

/**
 * モード値に応じてパレット値を取得する。
 * @param {*} mode モード値
 * @returns パレット配下の値
 */
function getPalette(mode) {
    // ライトモードの場合
    if ('light' === mode) {
        return {
            primary: amber
        };
    }

    // ダークモードの場合
    return {
        primary: {
            main: grey[500],
            contrastText: '#fff'
        },
        background: {
            default: grey[900],
            paper: grey[900],
        },
    };
}
export {MaterialMode, MaterialMode2};