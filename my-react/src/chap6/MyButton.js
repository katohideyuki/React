import PropTypes from 'prop-types';
import '../stories/button.css';

/**
 * Storybook規定で用意されたButtonコンポーネントを
 * 一部修正したボタンを提供する。
 * @param {*} param0 Buttonコンポーネントを組み立てるProps
 * @returns ボタン要素
 */
export default function MyButton({
    // Buttonコンポーネントを組み立てるProps
    primary = false,
    backgroundColor = null,
    size = 'medium',
    label = 'Button',
    handleClick,
    ...props
}) {
    // primary属性に応じてスタイルクラスを決定
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        // Propsをもとにbutton要素を組み立てる
        <button
            type="button"
            className={['storybook-button', `storybook-button--${size}`, mode].join(' ')} style={backgroundColor && { backgroundColor }}
            onClick={handleClick}
            {...props}
        >
            {label}
        </button>
    );
};

/**
 * Propsの型情報
 */
MyButton.propTypes = {
    /** Primaryカラーを有効にするか */
    primary: PropTypes.bool,
    /** 背景色 */
    backgroundColor: PropTypes.string,
    /** ボタンの大きさ */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** ボタンのキャプション */
    label: PropTypes.string.isRequired,
    /** clickハンドラー */
    handleClick: PropTypes.func
}

/**
 * storybook
 * アプリ内のコンポーネントをカタログ化し、ブラウザ上で閲覧できるためのライブラリ
 * 
 * storybookのControlsタブの制御
 * XXXX.stories.jsに定義するストーリに関して、argsプロパティだけだと以下のデメリットが
 * 発生する。
 * - argsプロパティで指定していない属性は表示されない。
 * - size属性のように、指定できる値が限定されている属性でも、手入力しなければならない。
 * 解決するためにPropTypesを使用する。
 */