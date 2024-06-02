import { useRecoilState, useResetRecoilState } from "recoil";
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { counterAtom } from "../store/atom";

/**
 * Atomを参照する。
 * @returns 
 */
export default function RecoilCounter() {
    // Recoil管理下の値とセッターを取得
    const [counter, setCounter] = useRecoilState(counterAtom);
    // State値を初期化
    const resetCounter = useResetRecoilState(counterAtom);
    const handleClick = () => setCounter(c => c + 1);

    return (
        <>
            <Grid container justify="space-between" spacing={1}>
                <Grid item>
                    <Button variant="contained" color="primary"
                        onClick={handleClick}>カウント</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary"
                        onClick={() => resetCounter()}>リセット</Button>
                </Grid>
            </Grid>
            <p>{counter}回クリックされました。</p>
        </>
    );
}
/**
 * useRecoilState
 * ストアを参照する。戻り値は現在のState値とStateを更新するためのセッター。
 * useState関数と同じ構造なので、使い方も同じ。
 * 
 * useResetRecoilState
 * State値を初期化するための関数を生成する。
 */