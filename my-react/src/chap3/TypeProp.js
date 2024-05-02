import PropTypes from 'prop-types';

export function Member() { }
/**
 * プロパティをログに出力する
 * @param {*} prop プロパティ
 * @return {*} メッセージ
 */
function TypeProp(prop) {
    console.log(prop);
    return <p>結果はコンソールを確認してください。</p>;
}

/**
 * 型情報はMember型
 */
TypeProp.propTypes = {
    // Member型のインスタンスであること
    prop1: PropTypes.instanceOf(Member),

    // 指定した列挙値の中のいずれかであること
    prop2: PropTypes.oneOf(['男性', '女性', 'その他']),

    // 指定した型(stringまたはnumberまたはbool)の中のいずれかであること
    prop3: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
    ]),

    // 配列内の要素の型がnumber型であること
    prop4: PropTypes.arrayOf(PropTypes.number),

    // オブジェクトのプロパティが一律number型であること
    // オブジェクトを連想配列として利用する時に利用
    prop5: PropTypes.objectOf(PropTypes.number),

    // 各プロパティに設定した型であること
    prop6: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        sex: PropTypes.oneOf(['男性', '女性', 'その他'])
    }),

    // 未定義のプロパティが存在しないこと(nameまたはageまたはsex以外のプロパティは認めない)
    prop7: PropTypes.exact({
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        sex: PropTypes.oneOf(['男性', '女性', 'その他'])
    })
};

export default TypeProp;