// import PropTypes from 'prop-types';
// export default function MyHello(props) {
//     return (
//         <div>こんにちは、{props.myName}さん！</div>
//     );
// }

/**
 * Propsの分割代入
 * Propsを受け取る際は、分割代入を利用する。
 * @export
 * @param {*} { myName } 
 * @return {*} 
 */
export default function MyHello({ myName = 'デフォルト値'}) {
    return (
        <div>こんにちは、{myName}さん！</div>
    );
}

// MyHello.propTypes = {
//     myName: PropTypes.string.isRequired
// };

// MyHello.propTypes = {
//   myName: PropTypes.string.isRequired
// };

// export default MyHello;