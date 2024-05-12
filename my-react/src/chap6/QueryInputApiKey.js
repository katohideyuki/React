import React, { useState } from 'react';
import './QueryInputApiKey.css';
import { Button, Grid, TextField } from '@mui/material';

/**
 * APIキー入力欄をモーダルで表示する。
 * 入力されたAPIキーを親コンポーネントへ渡す。
 * @param {*} param0 親コンポーネントへ入力値を渡すためのState更新関数
 * @returns APIキーの入力欄
 */
export default function QueryInputApiKey({ handle }) {
    // State管理
    const [apiKey, setApiKey] = useState('');   // 入力値(APIキー)
    const [modal, setModal] = useState(true);   // モーダル
    const [message, setMessage] = useState(''); // 文言

    // 入力値(APIキー)を更新
    const handleInputChange = (e) => {
        setApiKey(e.target.value);
    };

    // 確定ボタン
    const handleSubmit = () => {
        handle(apiKey);  // 親コンポーネントにapiKeyを渡す
        setApiKey('');   // 入力値(APIキー)をクリア
        setModal(false); // モーダルを閉じる
    };

    // キャンセルボタン
    const handleCloseModal = () => {
        setModal(false);                 // モーダルを閉じる
        setMessage('処理を終了しました。'); // キャンセル時の表示文言をセット
    };

    return (
        <>
            <div>
                {
                    // モーダル画面
                    modal && (
                        <div className='modal-overlay'>
                            <div className='modal-content'>
                                <h2>Open Weather APIキーを入力してください。</h2>

                                {/* APIキー入力欄 */}
                                <TextField margin="normal" label="Api Key" value={apiKey}
                                    onChange={handleInputChange} variant='outlined' fullWidth multiline />

                                {/* 確定/キャンセルボタン */}
                                <Grid container justify="space-between" spacing={1}>
                                    <Grid item>
                                        <Button className='modal-button' type='button' variant="contained"
                                            onClick={handleSubmit}>確定</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button className='modal-button' type='button' variant="contained"
                                            onClick={handleCloseModal}>キャンセル</Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    )
                }
            </div>
            {/* モーダルのキャンセルボタンが表示されたら文言表示 */}
            <p>{message}</p>
        </>
    );
}
/**
 * APIキーを定義した状態でGitにコミットしたくなかったので、
 * 入力コンポーネントをモーダルで作成した。
 */