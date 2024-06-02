import { useContext } from "react";
import ThemeContextSample from "./ThemeContextSample";
import Button from '@mui/material/Button'

/**
 * コンテキストを参照して、ボタンを表示する。
 * @returns ボタン
 */
export default function HookThemeButton() {
    // コンテキストファイルからコンテキストオブジェクトを作成
    const { mode, toggleMode } = useContext(ThemeContextSample);
    return (
        <Button variant="contained" color="primary" onClick={toggleMode}>
            Mode {mode}
        </Button>
    );
}