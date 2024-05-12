import { action } from '@storybook/addon-actions';
import MyButton from "./MyButton";
import { userEvent, within } from '@storybook/test';
import { expect } from '@storybook/jest';

/**
 * MyButtonコンポーネントのストーリーを定義したファイル
 */

/** 基本情報を宣言 */
export default {
    title: 'MyApp/MyButton',
    component: MyButton,
    argTypes: {
        // サイズ属性を規定のラジオボタンではなく、セレクトボタンで表示させる
        size: {
            control: { type: 'select' }
        },
        // handleClick属性を有効にすることで、Actionタブへ表示される
        handleClick: { action: 'clicked' }
    }
}

/** Indexストーリーを追加 */
export const Index = {
    // renderオプションを使用した場合
    // render: () => <MyButton
    //     primary
    //     size="medium"
    //     label='ボタン'
    //     onclick={() => console.log('Hello, Storybook!')} />

    // argsオプションを使用した場合
    args: {
        primary: true,
        size: "medium",
        label: 'ボタン',
        // onClick: () => console.log('Hello, Storybook!')
    },
    // Interactionの挙動を設定
    play: async ({ args/*引数値*/, canvasElement/*キャンバス要素*/ }) => {
        // コンポーネント操作のための前準備
        const canvas = within(canvasElement);
        const button = canvas.getByRole('button');

        // ボタンを2回クリック
        await userEvent.click(button);
        await userEvent.click(button);

        // 自動テストの結果確認
        // 現時点でtoHaveBeenCalledTimesメソッドが上手く処理されない。
        // 後述のjestを学習した後に対応してみる。
        await expect(args.onClick).toHaveBeenCalledTimes(2);
    }
};

/** Whiteストーリーを追加 */
export const White = {
    // renderオプションを使用した場合
    // render: () => <MyButton
    //     size='small'
    //     label='ボタン'
    //     backgroundColor='#fff' />

    // argsオプションを使用した場合
    args: {
        size: 'small',
        label: 'ボタン',
        backgroundColor: '#fff',
        // ストーリ単位でActionを有効にする
        handleClick: action('clicked')
    }
};

/** WhiteストーリーをベースにYellowストーリーを追加 */
export const Yellow = {
    args: {
        ...White.args,
        backgroundColor: 'lightYellow'
    }
}


/**
 * ストーリーは拡張子を.stories.jsとする。
 * /srcフォルダの配下に配置するのが基本。
 * 
 * MyButtonコンポーネントと、本ファイルを定義すれば、以下Storybookに追加される。
 * http://localhost:6006
 * 
 * argsオプション
 * プロパティを引き渡すだけのシンプルなストーリーであれば、
 * renderオプションを利用するよりもシンプル。
 * また、argsオプションの場合、何もしなくても定義した情報がストーリーボードに反映される。
 * 
 * Interaction
 * ストーリーボードに単に表示するだけではなく、ユーザーの操作を伴う動作確認をするため、
 * 自動で確認テストを行う。
 * 内部的には Jest + Testing Library を利用している。
 */

