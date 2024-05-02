// スタイルをインポート
import './SelectStyle.css';
// classnamesライブラリをインポート
import cn from 'classnames';

/**
 * メッセージを表示する。
 * @export
 * @param {*} { mode } スタイルのクラス名
 * @return {*} メッセージ
 */
export default function SelectStyle({ mode }) {
    /* 通常のパターン */
    // return (
    //     <div className={`box ${mode === 'light' ? 'light' : 'dark'}`}>
    //         こんにちは、世界！
    //     </div>
    // );

    /* classnamesライブラリを使用したパターン */
    return (
        // 文字列
        // <div className={cn('box', mode === 'light' ? 'light' : 'dark')}>
        //     こんにちは、世界！
        // </div>

        // 文字列とオブジェクト混在
        // <div className={cn(
        //     'box',
        //     {
        //         light/*スタイル名*/: mode === 'light'/*条件式*/,    // trueの場合のみスタイルが適応
        //         dark: mode === 'dark'
        //     }
        // )}>
        //     こんにちは、世界！
        // </div>


        // 文字列と配列とオブジェクト混在
        // 入れ子となった配列が平坦化され、「box panel light」のような属性値が生成される
        <div className={cn(
            'box',
            [
                'panel',
                {
                    light: mode === 'light',
                    dark: mode === 'dark'
                }
            ]
        )}>
            こんにちは、世界！
        </div>
    );


}