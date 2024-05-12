import { Profiler } from "react";
import HeavyUI from "./HeavyUI";

/**
 * コンポーネントのパフォーマンスを測定するコンポーネント
 * @returns HeavyUIコンポーネント
 */
export default function ProfilerBasic() {
    // パフォーマンス計測用の関数（onRender関数）
    const handleMeasure = (id, phase, acrualDuration, baseDuration, startTime, endTime) => {
        console.log('id ', id);
        console.log('phase ', phase);
        console.log('acrualDuration ', acrualDuration);
        console.log('baseDuration ', baseDuration);
        console.log('startTime ', startTime);
        console.log('endTime ', endTime);
    };

    return(
        <Profiler id="heavy" onRender={handleMeasure}>
            <HeavyUI delay={1500} />
            <HeavyUI delay={500} />
            <HeavyUI delay={2000} />
        </Profiler>
    );
}