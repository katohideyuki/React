import { Grid, Button } from "@mui/material";
import { useReducer } from "react";

/**
 * Reducer経由でStateの更新パターンを複数定義する。
 * @returns 
 */
export default function HookReducerUp({ init }) {
    const [state, dispatch] = useReducer(
        /** Stateを更新する関数 */
        (state, action) => {
            switch (action.type) {
                // Action型に定義したstate値分を加算
                case 'update':
                    return {
                        count: state.count + action.step,
                        show: action.isShow
                    };
                // Action型に定義したresetValで初期化
                case 'reset':
                    return {
                        count: action.resetVal,
                        show: action.isShow
                    };
                // 既定の挙動(Stateをそのまま返す)
                default:
                    return state;
            }
        },
        /** Stateの初期値 */
        {
            count: init
        }
    );

    // それぞれのボタンに対応したハンドラー
    const handleUp = () => dispatch({ type: 'update', step: 1, isShow: false });
    const handleDown = () => dispatch({ type: 'update', step: -1, isShow: false });
    const handleReset = () => dispatch({ type: 'reset', resetVal: init, isShow: true });

    return (
        <>
            <Grid container justify="space-between" spacing={1}>
                <Grid item>
                    <Button type='button' variant="contained"
                        onClick={handleUp}>カウントアップ</Button>
                </Grid>
                <Grid item>
                    <Button type='button' variant="contained"
                        onClick={handleDown}>カウントダウン</Button>
                </Grid>
                <Grid item>
                    <Button type='button' variant="contained"
                        onClick={handleReset}>リセット</Button>
                </Grid>
            </Grid>
            <p>{state.count}回、クリックされました。</p>

            {/* リセットに表示する文言 */}
            {state.show &&
                <p>リセットされました。</p>
            }
        </>
    );
}