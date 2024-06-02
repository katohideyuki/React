import { useDebugValue, useReducer } from "react";

/**
 * UseCounterカスタムフック
 * カウンターの値を管理するための機能を提供する。
 * 初期値とステップ値を受け取り、カウントの増減およびリセット操作を行う。
 * @param {number} init - カウンターの初期値
 * @param {number} step - カウンターの増減ステップ
 * @returns {[Object, function, function, function]} カウンターの状態とカウント操作の関数を含む配列
 * @returns {Object} 0番目の要素はカウンターの状態オブジェクト
 * @returns {function} 1番目の要素はカウントを増加させる関数
 * @returns {function} 2番目の要素はカウントを減少させる関数
 * @returns {function} 3番目の要素はカウントをリセットする関数
 */
export default function UseCounter(init, step) {
    // カウンターを管理するためのState/Reducerを準備
    const [state, dispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case 'update':
                    return { count: state.count + action.step };
                case 'reset':
                    return { count: action.init };
                default:
                    return state;
            }
        },
        {
            count: init
        }
    );

    // デバッグ
    useDebugValue(state.count >= 10 ? '10 Over': '10 Less');

    // それぞれのボタンに対応したハンドラー
    /**
     * カウンターを増加させるハンドラー。
     * カウンターの値を指定されたステップ値だけ増加する。
     */
    const handleUP = () => dispatch({ type: 'update', step });

    /**
     * カウンターを減少させるハンドラー。
     * カウンターの値を指定されたステップ値だけ減少させる。
     */
    const handleDown = () => dispatch({ type: 'update', step: -step });

    /**
     * カウンターを初期値にリセットするハンドラー。
     * カウンターの値を初期値にリセットする。
     */
    const handleReset = () => dispatch({ type: 'reset', init });
    return [state, handleUP, handleDown, handleReset];
}
/**
 * フック関数を作成
 * 関数コンポーネントから呼び出し可能なJavaScript関数のこと。
 * 条件
 *  - 関数名はuseXXXX形式
 *  - 関数内で他のフックを利用している
 *  - コンポーネントで再利用したい値/コード を戻り値として返却
 * 
 * useDebugValue関数
 * React Developer Toolsでコンポーネントのデバッグ情報を表示するために使用。
 * 通常、このフックはカスタムフック内で使用され、開発者が独自のデバッグ情報を提供するために利用されるらしい。
 */