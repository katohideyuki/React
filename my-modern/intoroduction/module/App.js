/** 
 * 一部をエクスポートして、他jsファイルからインポートしてもらう想定
 */

/** 記事タイトル */
const APP_TITLE = 'Reactアプリ';

/**
 * 面積を取得する。
 * @export
 * @param {*} base 底辺
 * @param {*} height 高さ
 * @return {*} 面積
 */
export function getTriangle(base, height) {
    return base * height / 2;
}

/**
 * 記事クラス
 * @export
 * @class Article
 */
export class Article {
    
    /**
     * 記事タイトルを取得する。
     * @return {*} 記事タイトル
     * @memberof Article
     */
    getAppTitle() {
        return APP_TITLE;
    }
}

/**
 * モジュールの外からアクセスするには、exportキーワードを付与して、
 * 明示的にアクセスを許可する。
 */