import './StateCounter.css';

/**
 * 加算処理
 * @export
 * @param {*} { step, onUpdate } 加算値、加算用の関数
 * @return {*} 加算処理が行われるボタン要素
 */
export default function StateCounter({ step, onUpdate }) {
    // ボタンクリックで親State {count} にstep値だけの加算を行う
    const handleClick = () => onUpdate(step);
    return (
        <button className='cnt' onClick={handleClick}>
            <span>{step}</span>
        </button>
    );
}