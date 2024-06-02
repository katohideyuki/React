import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { amber, grey } from "@mui/material/colors";
import { useState } from "react";
import ThemeContextSample from "./ThemeContextSample";

const RIGHT_COLOR = 'light';
const DARK_COLOR = 'dark';

/**
 * カラースキーマを定義する。
 * @returns 
 */
export default function MyThemeProvider({ children }) {
    // 色の状態
    const [mode, setMode] = useState(RIGHT_COLOR);
    // コンテキスト
    const themeConfig = {
        mode,
        toggleMode: () => setMode(prev => prev === RIGHT_COLOR ? DARK_COLOR : RIGHT_COLOR)
    };

    // テーマを定義
    const theme = createTheme({
        palette: {
            mode,
            // mode値に応じてパレッドを取得
            ...(getPalette(mode))
        }
    });

    return (
        <ThemeContextSample.Provider value={themeConfig}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContextSample.Provider>

        // ThemeContextSampleの既定値が使用されていることを確認する場合
        // <ThemeProvider theme={theme}>
        //     <CssBaseline />
        //     {children}
        // </ThemeProvider>
    );
}

/**
 * モード値に応じてパレット値を取得する。
 * @param {*} mode モード値
 * @returns パレット配下の値
 */
function getPalette(mode) {
    // ライトモードの場合
    if (RIGHT_COLOR === mode) {
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