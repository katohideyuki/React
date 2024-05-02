import React from "react";
import logo from "../logo.svg"
import "../App.css"

/**
 * AppClassコンポーネントを定義
 * クラスコンポーネントを定義するためには、React.Componentを継承する。
 * @class AppClass
 * @extends {React.Component}
 */
class AppClass extends React.Component {
    // 描画する内容
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

// AppClassコンポーネントをエクスポート
export default AppClass;