import './EventPropagation.css';

/**
 * 入れ子になっているアラート処理を設定する。
 * @export
 * @return {*} アラート処理が設定されたdiv要素
 */
export default function EventPropagation() {
    // 入れ子のアラート処理を設定
    const handleParent = () => alert('#parent run...'); // 親要素の処理
    const handleMy = () => alert('#my run...');         // 現在要素の処理
    const handleChild = () => alert('#child run...');   // 子要素の処理
    const handleChildNotPropagate = e => {
        e.stopPropagation();                            // 伝搬させない
        alert('#childNotPropagate run...');
    };
    const handleChildCancel = e => {
        e.preventDefault();
        alert('#cancel run...');
    };

    // バブリングフェーズでイベントを処理（規定） ※子要素から親要素の順に処理が動く
    return (
        <div id='parent' onClick={handleParent}>
            親要素

            {/* 現在要素の処理が動くと、次に「親要素」の処理も動く */}
            <div id='my' onClick={handleMy}>
                現在要素
                
                {/* 子要素の処理が動くと、順に「現在要素→親要素」の処理も動く */}
                <div id='child' onClick={handleChild}>
                    子要素

                    {/* 子要素（伝搬しない）の処理が動いても、処理は伝搬しない */}
                    <div id='childNotPropagate' onClick={handleChildNotPropagate}>
                        子要素（伝搬しない）
                    </div>
                </div>

                {/* リンク要素の処理が動くと、独自で設定したアラート処理は親要素を含め動くが、規定のリンク処理は動かず、ページは移動しない */}
                <a id='cancel' href="https://wings.msn.to" onClick={handleChildCancel}>
                    リンク
                </a>
            </div>
        </div>
    );

    // キャプチャフェーズでイベントを処理(onXxxCapture属性) ※親要素から子要素の順に処理が動く
    // return (
    //     <div id='parent' onClickCapture={handleParent}>
    //         親要素

    //         {/* 現在要素の処理が動く前に「親要素」の処理が先に動く */}
    //         <div id='my' onClickCapture={handleMy}>
    //             現在要素

    //             {/* 子要素の処理が動く前に「親要素→現在要素」の処理が先に動く */}
    //             <div id='child' onClickCapture={handleChild}>
    //                 子要素
    //             </div>
    //         </div>
    //     </div>
    // );
}

/**
 * イベントの伝搬の過程で、対応するハンドラーが存在する場合、それらも順に実行される。
 * ハンドラー自体にイベントオブジェクトの「stopPropagate()」メソッドを定義すれば、
 * イベントは伝搬されない。
 * 
 * ハンドラー自体に「preventDefault()」メソッドを定義すれば、
 * イベント規定の動作は実行されない。※伝搬はする
 */