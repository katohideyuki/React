/** 
 * 他jsファイルをインポートする。
 * モジュールをインポートする側は、現在のjsファイルから相対パスでインポートするファイルを指定する。
 * 
 * html側では、モジュール型のコードであることを宣言すること。
 * <script>要素のtype属性に「type="module"」を指定。
 */

// インポート
import { Article, getTriangle } from "./App.js";

// 面積を取得
console.log(getTriangle(10, 5));    // 25

// 記事タイトル取得
const a = new Article();
console.log(a.getAppTitle());   // Reactアプリ

/**
 * node.jsの環境で実行する場合は、package.jsonファイルを作成する必要がある。
 * 生成されたpackage.jsonを直接修正し、以下を追加。（本来は、直接修正しない方がよい）
 * "type": "module"
 * 
 * 以下、vscode上で作成した手順
 * 1. 生成したいフォルダ内で「npm init -y」コマンドを実行
 * 2. typeフィールドを追加し、値にmuduleを指定。
 */
