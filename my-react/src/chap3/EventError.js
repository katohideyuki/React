import { useState } from "react";

export default function EventError({ src, alt }) {
    const [path, setPath] = useState(src);
    // 画像を読み込めなかった場合、エラー画像を表示
    const handleError = () => setPath('./image/noimage.jpg');
    return (
        <img src={path} alt={alt} onError={handleError} />
    );
}

/**
 * reactはbuildされると全てのコンポーネントが1つのJSファイルに集約されるため、このパス指定では画像が表示されない
 * setPath('../../public/image/noimage.jpg');
 * 
 * これで表示させるか、画像をあらかじめimportする
 * setPath('./image/noimage.jpg');
 */