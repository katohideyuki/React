import { useReducer } from "react";
import Button from '@mui/material/Button'

/**
 * Reducer経由でStateを更新する。
 * @returns 
 */
export default function HookReducer({ init }) {
    // State + Reducerの準備
    const [state, dispatch] = useReducer(
        /*Stateを更新する関数*/
        (state, action) => {
            switch (action.type) {
                // 更新したStateを返却
                case 'update':
                    return {
                        count: state.count + 1
                    };
                // 現在のStateを返却
                default:
                    break;
            }
        },

        /*Stateの初期値*/
        {
            count: init
        });

    // Reducer経由でStateを更新
    const handleClick = () => {
        // dispatch関数にAction(指示書)を渡す
        dispatch({
            type: 'update'  // 更新の種別
        });
    };

    return (
        <>
            <Button variant="contained" color="primary" onClick={handleClick}>カウント</Button>
            <p>{state.count}回、クリックされました。</p>
        </>
    );
}
/**
 * useReducer
 * 状態(State)と状態を操作するための手段(関数)の双方を管理する。
 * ※useStateは状態(値)のみを管理
 * 
 * useReducerに関するキーワード
 * - Reducer
 *   State更新に利用する関数。Stateの更新は必ずReducer経由で行う。
 * - dispatch
 *   Reducerを呼び出す関数。
 * - Action
 *   dispatch関数に渡すオブジェクト。Reducerに渡す指示書のようなもの。
 */