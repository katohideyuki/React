import dl_icon from '../image/dl.png';

/**
 * ダウンロード用のアイコンを表示する。
 * @export
 * @param {*} { isbn } アイコン名
 * @return {*} アイコンを含むReact要素
 */
export default function Download({ isbn }) {
    return (
        <a href={`https://wings.msn.to/index.php/-/A-07/${isbn}/`}>
            <img src={dl_icon} alt='Sample Download' />
        </a>
    );
}