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
// import books from './chap3/books';
// import ForNest from './chap3/ForNest';
// import SelectStyle from './chap3/SelectStyle';
// import StyledPanel from './chap3/StyledPanel';
// import TitledPanel from './chap3/TitledPanel';
// import ListTemplate from './chap3/ListTemplate';
// import MyHelloUsePropTypes from './chap3/MyHelloUsePropTypes';
// import TypeProp, { Member } from './chap3/TypeProp';
// import StateBasicV2 from './chap3/StateBasicV2';
// import StateParent from './chap3/StateParent';
// import EvenrMouse from './chap3/EvenrMouse';
// import EventCompare from './chap3/EventCompare';
// import EventError from './chap3/EventError';
// import EventObj from './chap3/EventObj';
// import EventPoint from './chap3/EventPoint';
// import EventKey from './chap3/EventKey';
// import EventArgs from './chap3/EventArgs';
// import EventArgsV2 from './chap3/EventArgsV2';
// import EventPropagation from './chap3/EventPropagation';
// import EventOnce from './chap3/EventOnce';
// import EventPassive from './chap3/EventPassive';
// ■ chap4
import StateForm from './chap4/StateForm';
import { StateFormUC } from './chap4/StateFormUC';
import FormTextarea from './chap4/FormTextarea';
import FormSelect from './chap4/FormSelect';
import FormList from './chap4/FormList';
import FormRadio from './chap4/FormRadio';
import FormCheck from './chap4/FormCheck';
import FormCheckMulti from './chap4/FormCheckMulti';





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
// root.render(
//   <ListTemplate src={books}>
//     {/* ListTemplateコンポーネント側で定義されている書籍情報elemを参照する */}
//     {elem => (
//       <>
//         <dt>
//           <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
//             {elem.title} ({elem.price}円)
//           </a>
//         </dt>
//         <dd>{elem.summary}</dd>
//       </>
//     )}
//   </ListTemplate>
// );

/**
 * ===========================================================================
 * chap3-3-4 プロパティ型の検証（PropTypes）
 * JavaScriptは変数/引数に型を持たない。
 * 型チェックを行うために「TypeScript、Flow、PropTypes」などの言語/ライブライを検討する。
 * ===========================================================================
 */

/**
 * PropTypesの基本
 */
// root.render(
//   // myName属性が指定されていないので、コンソールに警告が出力される
//   // Warning: Failed prop type: The prop `myName` is marked as required in `MyHelloUsePropTypes`, but its value is `undefined`.
//   <MyHelloUsePropTypes />
// );

/**
 * PropTypesの特殊なデータ型
 */
// root.render(
//   <>
//     {/* OK */}
//     <TypeProp prop1={new Member()} />
//     {/* NG Member型ではなく、String型のため */}
//     {/* <TypeProp prop1='hoge' /> */}

//     {/* OK */}
//     <TypeProp prop2="男性" />
//     {/* NG 列挙値のいずれかではないため*/}
//     {/* <TypeProp prop2="hoge" /> */}

//     {/* OK */}
//     <TypeProp prop3='文字列型なので大丈夫' />
//     {/* NG 指定した型のいずれかではないため */}
//     {/* <TypeProp prop3={new Member()} /> */}

//     {/* OK */}
//     <TypeProp prop4={[999, 888]} />
//     {/* NG 配列内の要素にstring型が含まれているため */}
//     {/* <TypeProp prop4={[999, '文字列']} /> */}

//     {/* OK */}
//     <TypeProp prop5={{'key1': 15, 'key2': 20}} />
//     {/* NG オブジェクトのプロパティにstring型が含まれているため */}
//     {/* <TypeProp prop5={{'key1': 15, 'key2': '文字列'}} /> */}

//     {/* OK */}
//     <TypeProp prop6={{name: '鈴木花子', age: 35, sex: '女性', blood: 'A'}} />
//     {/* NG 必須プロパティであるname属性がないため*/}
//     {/* <TypeProp prop6={{age: 35, sex: '女性'}} /> */}

//     {/* OK */}
//     <TypeProp prop7={{name: '鈴木花子', age: 35, sex: '女性'}} />
//     {/* NG 未定義のプロパティ「blood」が含まれているため */}
//     {/* <TypeProp prop7={{name: '鈴木花子', age: 35, sex: '女性', blood: 'A'}} /> */}
//   </>
// );

/**
 * ===========================================================================
 * chap3-3-5 State値更新のための2つの構文
 * 
 * ===========================================================================
 */
// root.render(
//   <StateBasicV2 init={0} />
// );

/**
 * ===========================================================================
 * chap3-3-6 子コンポーネントから親コンポーネントへの情報伝達
 * ===========================================================================
 */
// root.render(
//   <StateParent />
// );

/**
 * ===========================================================================
 * chap3-4-1 Reactで利用できるイベント
 * ===========================================================================
 */
/**
 * 画像にマウスポインターが出入りしたタイミングで画像を差し替える
 */
// root.render(
//   // <EvenrMouse
//   //   alt="ロゴ"
//   //   beforeSrc="https://www.web-deli.com/image/linkbanner_l.gif"
//   //   afterSrc="https://www.web-deli.com/image/home_chara.gif" />

//     /**
//      * onMouseEnter/onMouseLeaveとonMouseOver/onMouseOutの相違点
//      * onMouseEnter/onMouseLeaveの場合、入れ子の要素には反映されず、外側の要素にのみ反映
//      * onMouseOver/onMouseOutの場合、入れ子の要素にも反映される
//      */
//     <EventCompare />
// );

/**
 * 画像が読み込めない場合にダミー画像を表示する
 */
// root.render(
//   // reactはbuildされると全てのコンポーネントが1つのJSファイルに集約されるため、このパス指定では画像が表示されない
//   // <EventError src="../public/image/wings.jpg" alt="サンプル画像"/>

//   // これで表示される
//   // <EventError src="./image/wings.jpg" alt="サンプル画像" />

//   // 明示的に不正なファイルパスを指定し、読み込みエラー用の画像を表示
//   // <EventError src="./image/_wings.jpg" alt="サンプル画像" />
// );


/**
 * ===========================================================================
 * chap3-4-2 イベントオブジェクト
 * ===========================================================================
 */
// root.render(<EventObj />);

/**
 * イベント発生時のマウス情報を取得
 */
// root.render(<EventPoint />);

/**
 * キーイベントでのキーを識別
 * 要素内でctrl + qを押下すると、ヘルプメッセージを表示
 */
// root.render(<EventKey />);

/**
 * イベントハンドラーに任意の引数を渡す
 */
// root.render(<EventArgs />);

/**
 * 独自データ属性を利用
 */
// root.render(<EventArgsV2 />);

/**
 * ===========================================================================
 * chap3-4-3 イベントの伝搬を抑制
 * ===========================================================================
 */
// root.render(<EventPropagation />);

/**
 * ===========================================================================
 * chap3-4-4 イベントハンドラーのオプションを設定
 * ===========================================================================
 */
// root.render(<EventOnce />);
/**
 * イベントハンドラーを初回のみを実行
 */
// root.render(<EventPassive />);

/**
 * ===========================================================================
 * chap4-1-1 フォーム管理の基本
 * ===========================================================================
 */
// root.render(<StateForm />);

/**
 * ===========================================================================
 * chap4-1-3 非制御コンポーネントによるフォーム管理
 * ===========================================================================
 */
// root.render(<StateFormUC />);

/**
 * ===========================================================================
 * chap4-1-4 入力要素に応じたフォーム
 * ===========================================================================
 */
/** テキストエリア */
// root.render(<FormTextarea />);

/** 選択ボックス */
// root.render(<FormSelect />);

/** リストボックス */
// root.render(<FormList />);

/** ラジオボタン */
// root.render(<FormRadio />);

/** チェックボックス（単一選択） */
// root.render(<FormCheck />);

/** チェックボックス（複数選択） */
root.render(<FormCheckMulti />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
