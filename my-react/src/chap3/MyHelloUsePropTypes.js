// PropTypesをインポート
import PropTypes from 'prop-types';

function MyHelloUsePropTypes(prop) {
    return (
        <div>こんにちは、{prop.myName}さん！</div>
    );
}

// 
/**
 * 型チェックのための型情報を宣言
 * isRequiredでmyNameプロパティが必須であることを表す
 */
MyHelloUsePropTypes.propTypes = {
    myName: PropTypes.string.isRequired
};

// 型情報の宣言の後に定義
export default MyHelloUsePropTypes;