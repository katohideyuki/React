// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// ■ chap2
// import AppClass from './chap2/AppClass'; // ファイル拡張子が不要なのはCreateReactApp（webpack)が拡張子を補っているため
import './chap2/class.css';
// ■ chap3
// import MyHello from './chap3/MyHello';
// import EventBasic from './chap3/EventBasic';
// import StateBasic from './chap3/StateBasic';
// import ForList from './chap3/ForList';
import books from './chap3/books';
// import ForNest from './chap3/ForNest';
// import SelectStyle from './chap3/SelectStyle';
// import StyledPanel from './chap3/StyledPanel';
import TitledPanel from './chap3/TitledPanel';
import ListTemplate from './chap3/ListTemplate';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ■ chap2-2-5
// setInterval(() => {
//   root.renpnder(
//     <p>現在時刻：{(new Date()).toLocaleDateString()}</p>
//   );
// }, 1000);

/**
 * ■ chap2-2-6
 * クラスコンポーネントの場合
 */
// root.render(
//   <React.StrictMode>
//     <AppClass />
//   </React.StrictMode>
// );

/**
 * chap2-3-1 JSXのルール
 * 複数の要素を列挙することはできない。コンパイルエラーになる。
 * その場合、ダミー要素として<React.Fracment>要素で囲む。
 * もしくは<React.Fracment>要素の省略形として<>〜</>で囲む。
 * ※<React.Fracment>要素は、特に意味は持たず、複数の要素を束ねるだけの形式的な要素
 */
// root.render(
//   <> 
//     <p>こんにちは、世界！</p>
//     <p>はじめまして、React！</p>
//   </>
// );

/**
 * ===========================================================================
 * chap2-3-2 JSXにJavaScript式を埋め込む
 * ===========================================================================
 */
// const name = '鈴木';
// root.render(
//   <p>こんにちは、{name}です！</p>
// );

/**
 * {...}構文では式はエスケープ処理される
 * タグをそのまま埋め込んでもただの文字列が表示される。
 * dangerouslySetInnerHTML属性の__htmlキーで指定されたテキストは
 * エスケープ処理されずに表示される。
 * ※ただし、セキュリティの観点では危険な操作であるため、使用する際は安全であることを保証すること。
 */
// const content = `<h3>WINGSプロジェクト</h3>
//   <img src="https://wings.msn.to/image/wings.jpg" />`;
// root.render(
//   <>
//     <p>{content}</p>  {/*ただの文字列が表示*/}
//     <p dangerouslySetInnerHTML={{__html: content}}></p>{/* タグも画像も正しく表示される */}
//   </>
// );

/**
 * 実体参照の埋め込みに注意
 * 文字列リテラルに含まれる実体参照(&...)
 */
// root.render(
//   <>
//     <div>{'Tom &amp; Jerry'}</div> {/* Tom &amp; Jerry と表示 */}
//     <div>Tom &amp; Jerry</div> {/* Tom & Jerry と表示 */}

//     {/* どうしても{...}構文で実体参照を表現したい場合 */}
//     <div>{'Tom \u0026 Jerry'} : エスケープシーケンス</div>
//     <div>{`Tom ${String.fromCodePoint(38)} Jerry`} : Unicodeコードポイントから取得</div>
//     <div dangerouslySetInnerHTML={{__html: 'Tom &amp; Jerry'}} />{/* dangerouslySetInnerHTML属性を使用 */}
//   </>
// );

/**
 * ブール値、undefined/nullは無視される
 * {...}構文でtrue/false/undefined/nullは出力されない。
 * これらを表示したい場合、String関数で文字列化を行う。
 */
// root.render(
//   <ul>
//     {/* 表示されない */}
//     <li>{true}</li>
//     <li>{false}</li>
//     <li>{undefined}</li>
//     <li>{null}</li>
//     {/* 表示される */}
//     <li>{0} : 0は問題なく表示される </li>
//     <li>{String(true)} : String関数で文字列化</li>
//   </ul>
// );

/**
 * ===========================================================================
 * chap2-3-3 {...}構文で属性値を設定する
 * ただし、属性値をクォートで括らない
 * ===========================================================================
 */
// const dest = 'https://ja.react.dev';
// root.render(
//   <>
//     <a href={dest}>React本家サイト</a>  {/* 問題なし */}
//     <a href="{dest}">React本家サイト</a>  {/* <a href="{dest}">React本家サイト</a> と表示される*/}
//     <a href="{dest}/docs">React本家サイト</a> {/* <a href="{dest}/docs">React本家サイト</a> と表示される */}
//     <a href={`${dest}/docs`}>React本家サイト</a>  {/* 問題なし : テンプレート文字列 */}
//   </>
// );

/**
 * 複数の属性をまとめて設定する
 */
// const attrs = {
//   href: 'https://wings.msn.to',
//   download: false,
//   target: '_blank',
//   rel: 'help'
// };
// root.render(
//   <>
//     {/* あまりよくない例（冗長なコード） */}
//     <a href={attrs.href} download={attrs.download} target={attrs.target} rel={attrs.rel}>サポートページ</a>

//     {/* よい例（スプレッド構文） */}
//     <a {...attrs}>サポートページ</a>
//   </>
// );

/**
 * 属性値のデフォルトはtrue
 */
// root.render(
//   // download属性はtrueとなる
//   <a href='index.hrml' download>トップへ</a>
// );

/**
 * ===========================================================================
 * chap2-3-4 スタイルシートを設定する - style属性
 * style属性だけはオブジェクト形式で指定する。
 * ただし、js内ではclassName属性のみ使用を推奨。jsファイル、cssファイルどちらもスタイル情報が混在すると
 * 管理が大変なため。スタイル情報はcssに定義する。
 * ===========================================================================
 */
// 文字列指定では反映されず、エラーになる
// const props = 'color: White; background-color: Blue; padding: 3px';

// オブジェクト形式で指定する
// const props = {
//   color: 'White',
//   backgroundColor: 'Blue',
//   padding: '3' // 数値は暗黙的に「px」単位
// };
// root.render(
//   <>
//     <p style={props}>WINGSプロジェクト</p>
//   </>
// );

/**
 * style属性はあくまで手軽名スタイル操作の手段と割り切り、className属性を利用すること
 * スタイル情報はcssファイルに定義しインポートする。(上段にimport文を定義)
 */
// root.render(
//   <p className='hoge'>WINGSプロジェクト</p>
// );

/**
 * ===========================================================================
 * chap2-3-5 JSX式の実体を理解する
 * JSXのコードは、ブラウザで実行される前にJavaScriptに変換される。（トランスパイラ）
 * 変換された際、以下のようJavaScriptコードに変換される。
 * ===========================================================================
 */
// const title = 'これから始めるVue.js 3実践入門';
/* JSXコード */
// root.render(
//   <div className='main'>
//     <p>「{title} （SBクリエイティブ刊）」</p>
//     <img src='https://wings.msn.to/books/978-4-8156-1336-5/978-4-8156-1336-5.jpg' alt={title} />
//     絶賛発売中！
//   </div>
// );

/* 上記JSXコードがJavaScriptに変換されると、以下のようなコードになる */
// root.render(
//   // 上位の<div>要素を生成
//   React.createElement(
//     'div'/*タグ名*/,
//     { className: 'main' }/*属性*/,
//     React.createElement(/*子要素(可変長) 子要素の<p>、<img>、テキストを列挙*/
//       'p',
//       null, // 属性は省略
//       `「${title} （SBクリエイティブ刊）」`
//     ),
//     React.createElement(
//       'img',
//       {
//         src: 'https://wings.msn.to/books/978-4-8156-1336-5/978-4-8156-1336-5.jpg',
//         alt: title
//       }
//     ),
//     '絶賛発売中！'
//   )
// );

/**
 * ===========================================================================
 * chap3-1-2 Propsの基本
 * ざっくりで言うと、
 * コンポーネントにパラメータを渡すための引数、Propsで外から値を受け取る。など。
 * ===========================================================================
 */
// root.render(
//   // MyHelloコンポーネントを呼び出し、パラメータを渡す
//   <>
//     <MyHello myName='鈴木' /> {/*文字列*/}
//     <MyHello myName={['山田', '鈴木', '佐藤']} /> {/*配列*/}
//     <MyHello myName={() => { console.log('Hoge'); }} /> {/*関数*/}
//     <MyHello myName={{ name: '鈴木', age: 48 }} /> {/*オブジェクト*/}
//   </>
// );

/**
 * ===========================================================================
 * chap3-1-3 イベント処理の基本
 * ===========================================================================
 */
// root.render(
//   <EventBasic type='time'/>
// );

/**
 * ===========================================================================
 * chap3-1-4 Stateの基本
 * コンポーネント内の状態を表す変数のこと。
 * ===========================================================================
 */
// root.render(
//   <StateBasic init={0} />
// );

/**
 * ===========================================================================
 * chap3-2-1 配列をリスト化する - 繰り返し処理
 * ===========================================================================
 */
// root.render(
//   // <ForList src={books}/>

//   // 複数コンポーネントで表現した場合
//   <ForNest src={books} />
// );

/**
 * ===========================================================================
 * chap3-2-2 スタイルを選択的に適用する
 * ===========================================================================
 */
// root.render(
//   <SelectStyle mode='light'/>
// );


/**
 * ===========================================================================
 * chap3-3-1 コンポーネント配下のコンテンツをテンプレートに反映させる
 * props.childrenプロパティを用いることで、呼び出し元要素配下のコンテンツを取得できる。
 * ===========================================================================
 */
// root.render(
//   <StyledPanel>
//     <p>メンバー募集中！</p>
//     <p>ようこそ、WINGSプロジェクトへ！！</p>
//   </StyledPanel>
// );


/**
 * ===========================================================================
 * chap3-3-2 複数のchildrenを引き渡す
 * 複数のchildrenを区別するためのしくみを標準では持っていない。
 * ===========================================================================
 */

/**
 * Propsを利用する
 */
// root.render(
//   <TitledPanel title={<p>メンバー募集中！</p>} body={<p>ようこそ、WINGSプロジェクトへ！！</p>} />
// );

/**
 * 属性値を変数に切り出す
 */
// const title = <p>メンバー募集中！</p>;  // タイトル
// const body = <p>ようこそ、WINGSプロジェクトへ！！</p>;  // ボディ
// root.render(
//   <TitledPanel title={title} body={body}/>
// );

/**
 * childrenから目的の要素を取得
 * children（配列）からkey属性をキーに、目的の要素を取得する。
 */
// root.render(
//   <TitledPanel>
//     {/* key属性を設定 */}
//     <p key='title'>メンバー募集中！</p>
//     <p key='body'>ようこそ、WINGSプロジェクトへ！！</p>
//   </TitledPanel>
// );

/**
 * ===========================================================================
 * chap3-3-3 childrenに対してパラメーターを引き渡す
 * ===========================================================================
 */
root.render(
  <ListTemplate src={books}>
    {/* ListTemplateコンポーネント側で定義されている書籍情報elemを参照する */}
    {elem => (
      <>
        <dt>
          <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
            {elem.title} ({elem.price}円)
          </a>
        </dt>
        <dd>{elem.summary}</dd>
      </>
    )}
  </ListTemplate>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
