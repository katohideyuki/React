import { AccountTree, Home, Info, Mail } from "@mui/icons-material"; // 必要なアイコンのみインポート
import { useState } from "react";
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

/* ドロワー表示用のメニュー情報 */
const menu = [
    { title: 'ホーム', href: 'home.html', icon: Home },
    { title: '問い合わせ', href: 'contact.html', icon: Mail },
    { title: '会社概要', href: 'company.html', icon: Info },
    { title: 'サイトマップ', href: 'sitemap.html', icon: AccountTree }
];

/**
 * ドロワーメニューを提供するコンポーネント
 * @returns ドロワーメニュー
 */
export default function MaterialDrawer() {
    // ドロワー開閉のためのフラグ
    const [show, setShow] = useState(false);
    // ドロワー開閉オン/オフを行うハンドラー(showを反転)
    const handleDraw = () => setShow(!show);

    return (
        <>
            <Button variant="contained" onClick={handleDraw}>ドロワー</Button>
            <Drawer anchor="left" open={show}>
                {/* 配下のコンポーネントに対して、まとめてスタイル情報を設定 */}
                <Box sx={{ height: '100vh' }} onClick={handleDraw}>
                    <List>
                        {/* あらかじめ用意したメニュー情報の配列を展開 */}
                        {menu.map(obj => {
                            // アイコンはタグ形式でしか呼び出せないため、パスカルケースの変数にセット
                            const Icon = obj.icon;
                            return (
                                <ListItem key={obj.title}>
                                    <ListItemButton href={obj.href}>
                                        <ListItemIcon><Icon /></ListItemIcon>
                                        <ListItemText primary={obj.title} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                </Box>
            </Drawer>
        </>
    );
}
/**
 * <Drawer>
 * open属性でドロワー開閉の制御を行う。
 * 
 * <Box>
 * 配下のコンポーネントに対して、スタイル情報を設定するときなどに利用。
 * デフォルトで配下のコンテンツを<div>要素で括るが、component属性で括る要素を変更できる。
 * 
 * <List>
 * リスト全体を管理。
 * 
 * <ListItem>
 * 個々のリスト項目を管理。
 * 
 * <ListItemButton>
 * リスト項目をボタンとして描画。
 * ※ボタンにする必要なければ省略
 * 
 * <ListItemIcon>
 * リスト項目配下のアイコン。
 * ※不要なら省略
 * <obj.icon />のような呼び出しができないため、タグ形式<Icon />で呼び出す。
 * 
 * その他情報は割愛。
 */
