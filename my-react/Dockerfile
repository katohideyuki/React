# 書式：FROM [イメージ] [タグ]
# node.js version 20.12.2
FROM node:20.12.2
# 絶対パスを指定することで，この命令を書いた行以降はこのディレクトリで操作が行われる
WORKDIR /my-react
# 
ENV PATH /my-react/node_modules/.bin:$PATH
# npm installを行う前に、package.jsonとpackage-lock.jsonをマウントさせる
# キャッシュを有効に活用するためであり、パッケージの追加変更がない場合は、npm inatallをスキップする
COPY package.json ./
# npmのバージョンを10.5.1以上？に明示的に指定しないとタイムアウトでエラーになる
RUN npm install -g npm@10.7.0
COPY . ./
# 書式：RUN [コマンド] ※Dockerイメージのビルド時にシェルコマンドを実行するための命令
# RUN npm install
# デフォルトの設定だと、Dockerのコンテナはポートを公開していない？ので、特定のポートを公開する
EXPOSE 3000
# 
CMD ["npm", "start"]