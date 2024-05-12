import { Button } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'

/**
 * グリッドレイアウトされたボタンを提供する。
 * @returns グリッドレイアウトされたボタン要素
 */
export default function MaterialGrid() {
    return (
        <Grid container spacing={2}/*カラム間の余白*/>
            <Grid xs={12} sm={9} md={6}>
                <Button variant="contained" fullWidth>1</Button>
            </Grid>
            <Grid xs={12} sm={3} md={2}>
                <Button variant="contained" fullWidth>2</Button>
            </Grid>
            <Grid xs={12} sm={4} md={3}>
                <Button variant="contained" fullWidth>3</Button>
            </Grid>
            <Grid xs={12}>
                <Button variant="contained" fullWidth>4</Button>
            </Grid>
        </Grid>
    );
}
/**
 * グリッド
 * コンポーネントをグリッド状に配置できる。レイアウトを決めるための
 * コンポーネントの中でも特に利用される一種。
 * また、レスポンシブに対応している。
 * 
 * <Grid>
 * container属性でグリッド全体を括る。
 * container属性以外の<Grid>要素で個々の項目を括る。
 * 1行を12列(分割)で表示するのが基本。
 * xs属性で、横幅12列のうち何列分を利用するのかを指定する。
 * 12列を溢れる場合は次の行に追い出される。← レスポンシブ対応
 * 
 * xs, sm, mdなどの属性
 * 画面サイズに合わせて、属性値を設定できる。
 * 属性 : 画面サイズ
 * - px : 0～599pxの場合に適応される
 * - sm : 600～899pxの場合に適応される
 * - md : 900～1199pxの場合に適応される
 * ...など
 */
