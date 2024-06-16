import { Route, createBrowserRouter, createRoutesFromElements, json, redirect } from "react-router-dom";
import RouterParam from "./RouterParam";
import TopPage from "./TopPage";
import BookPage from "./BookPage";
import SearchPage from "./SearchPage";
import NotFoundPage from "./NotFoundPage";
import BookQueryPage from "./BookQueryPage";
import BookStatepage from "./BookStatepage";
import InvalidParamsPage from "./InvalidParamsPage";
import WeatherPage from "./WeatherPage";
import CommonErrorPage from "./CommonErrorPage";
import yup from '../chap4/Yup.jp';
import { date, number, string } from "yup";
import BookFormPage from "./BookFormPage";

/** 天気予報取得APIのURL */
const OPEN_WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";

/** スリープ関数 */
const sleep = ms => new Promise(res => setTimeout(res, ms));

/**
 * 天気データを取得するための非同期関数。
 * @param {Object} options - オプションオブジェクト。
 * @param {Object} options.params - パラメータオブジェクト。city: 都市名。
 * @param {Object} options.request - リクエストオブジェクト。
 * @returns {Promise<Response>} - レスポンスを含むプロミス。
 * @throws {Error} - city または apiKey が欠落している場合にエラーをスローする。
 */
const fetchWeatheData = async ({ params, request }) => {
    // ローディングメッセージを表示させるために2秒スリープ
    sleep(2_000);

    // リクエストURLからAPIキーを取得
    const url = new URL(request.url);
    const apiKey = url.searchParams.get("apiKey");
    // URLパラメータから都市名を取得
    const city = params.city;

    // 天気予報API実行
    const res = await fetch(`${OPEN_WEATHER_API_URL}${city}&lang=ja&appid=${apiKey}`);

    // API実行結果が成功の場合、そのままレスポンスを返却
    if (res.ok) {
        return res;
    };
    // API実行結果が成功以外の場合、ステータスに応じてエラー情報をスロー
    switch (res.status) {
        case 404:
            throw json({ message: "city is invalid!!" }, { status: 404 });
        case 401:
            throw json({ message: "api key is invalid!!" }, { status: 401 });
        default:
            throw json({ message: "api server is in trouble..." }, { status: 501 });
    }
};

/**
 * フォームから送信された入力値を検証する非同期関数。
 * フォームから送信された書籍データを検証し、検証が成功した場合はリダイレクト、
 * 失敗した場合はエラーメッセージを返却する。
 * @param {Object} request - フォームリクエストオブジェクト
 * @returns {Promise<Object|Array>} - 検証成功:リダイレクトオブジェクト、検証失敗:エラーメッセージ配列
 */
const bookAction = async ({ request }) => {
    // リクエストからフォームデータを取得
    const form = await request.formData();

    // 入力値を検証する為のスキーマ
    const bookSchema = yup.object({
        title: string().label('書名').required().max(100),
        price: number().label('価格').positive().integer(),
        published: date().label('刊行日').max(new Date(2100, 0, 1))
    });

    let info;

    // 入力値の検証を実行
    try {
        info = await bookSchema.validate({
            // フォームから入力値を取得
            title: form.get('title'),
            price: form.get('price') || 0,
            published: new Date(form.get('published') || Date.now())
        }, {
            // 検証に失敗した場合、すべてのエラーを取得
            abortEarly: false
        });

        console.log(info);
        return redirect('/');
    } catch (e) {
        // エラーメッセージの配列を返却
        return e.errors;
    }
};

// ルーティングテーブルを定義
const routesParam = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RouterParam />}
            errorElement={<CommonErrorPage />}>
            <Route path="/" element={<TopPage />} />
            {/* 動的にコンポーネントをインポートする */}
            <Route path="/books" lazy={async () => {
                // BookNestコンポーネントをインポートし、BookListPageコンポーネントを返却
                const { BookListPage } = await import('./BookNest');
                return { Component: BookListPage }
            }} />
            {/* 動的にコンポーネントをインポートする */}
            <Route path=":isbn" lazy={async () => {
                // BookNestコンポーネントをインポートし、BookListPageコンポーネントを返却
                const { BookDetailPage } = await import('./BookNest');
                return { Component: BookDetailPage }
            }} />
            {/* 入力値を検証 */}
            <Route path="/book/form" element={<BookFormPage />}
                action={bookAction} />
            {/* 任意のURLパラメータを:isbnに格納 */}
            <Route path="/book/:isbn?" element={<BookPage />}
                // エラー時に表示するコンポーネント
                errorElement={<InvalidParamsPage />} />
            {/* 可変長パラメーターを定義 */}
            <Route path="/search/*" element={<SearchPage />} />
            {/* 任意のページに対応するルート */}
            <Route path="*" element={<NotFoundPage />} />
            {/* クエリパラメータとしてisbnを送信 */}
            <Route path="/bookQuery" element={<BookQueryPage />} />
            {/* state属性としてisbnを送信 */}
            <Route path="/bookState" element={<BookStatepage />} />
            <Route path="/weather/:city" element={<WeatherPage />}
                loader={fetchWeatheData} />
            {/* lazy属性を使用してコンポーネントを遅延ロードする（解説だけに留めているので処理は未実装） */}
            {/* <Route path="/weather/:city" lazy={() => import('./WeatherLazyPage')}></Route> */}
        </Route>
    )
);

export default routesParam;

/**
 * :名前
 * パラメータの置き場所（プレイスホルダー）で、「:名前」の部分に
 * 任意の値を埋め込める。
 * 
 * :名前?
 * 「?」を付けることで、省略可能なパラメータにする。
 * 
 * 「*」を付けることで、「/」をまたいで残りのパスをすべて取得する。 
 */

/**
 * json関数：
 * 
 * 引数で取得したオブジェクトをjson形式に変換したうえで、Responseオブジェクトにラップした状態を返却する。
 * また、第二引数のinitで、ステータス、レスポンスヘッダーなどを指定できる。
 */

/**
 * validate関数:
 * 
 * 変換&検証を実施し、検証に成功した場合は変換済みのオブジェクトを返却する。
 * 検証に失敗した場合は例外をスローする。
 */

/**
 * lazy属性:
 * 
 * lazy属性で指定されたコンポーネントは別バンドルとして切り出され、
 * 起動後に動的にロード（遅延ロード）することが可能。
 * ルート情報を取得するための関数を渡すが、import命令文そのものを渡すのではなく、
 * import命令を呼び出すための関数を渡す。
 * 
 * Reactアプリでは、配下のアプリをバンドルするのが一般的だが、
 * アプリが大きくなればjsファイルも肥大化し、起動時間も増加する。
 * そのため、アプリを適切に分割したり、バンドルサイズを小さく保つことが必要になってくる。
 * ※バンドルとは、インポートによるモジュールの関係を辿って、
 *  アプリを構成するファイル群をひとるにまとめる作業のこと
 */

