# frontend_workspace
フロントエンドカリキュラムのワークスペースです。

## ドキュメント（運用マニュアル）
https://github.com/autumn-backend/autumn_curriculum_docs

### !! 命名規則もあるので必ず上記リポジトリのREADMEは一読すること !!
<br /><br />

## 管理スプレッドシート
https://docs.google.com/spreadsheets/d/1U9LFo-4XtFK7y10jNKO7snRLKP6k1mmWKzxaAkMWv1I/edit?usp=sharing
<br /><br />


## フォルダ構成
#### Section2 : HTML, CSS 基礎
#### Section3 : Web サイト, Sass 対応
#### Section4 : JavaScript
#### Section5 : TypeScript
#### Section6 : React

<br><br>

## 環境構築

適宜課題の進捗に応じて実行してください。
<br><br>

## カリキュラムの導入
### 1.作業フォルダの作成 & 移動
1. リポジトリをcloneする
2. VSCodeでcloneしたフォルダを開く
3. 左下でブランチ切り替えもしくは以下のコマンドでブランチを切り替え、作業を行う。

各コマンドは以下の通りです。
```
// cloneする
git clone リポジトリURL

#### パスワードを要求された場合
パスワードを要求された場合は、Githubのパスワードではなくアクセストークンを入力するようにしてください。
<br>
手順は以下のサイトを参考にしてください。
https://docs.github.com/ja/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

// ブランチ切り替え
git checkout ブランチ名
```

ーこれ以降の環境構築はカリキュラムの進捗に合わせて適宜行ってください。
<br />


#  Sass環境構築
## （１）gulpのインストール
gulpというタスクランナーをインストールし、簡単にSass環境を構築します。
```
$ npm install gulp --save-dev
```
## （２）gulpsassのインストール
```
$ npm install gulp-sass --save-dev
```
## （３）gulpfile.jsの作成
```
$ touch gulpfile.js
```
## （４）gulpfile.jsの編集
```
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp
    .src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('./css'));
});
```

## （５）完了！
コンパイルは、npx gulp sassでSassを CSSに変換して実行してくれます。

# TypeScript環境構築
## （１）Node.jsの確認
まずは、Node.jsが使えることを確認します。
```
$ nodebrew -v
```
もしバージョンが表示されない場合、（３）の作業をもう一度実施してください。

## （２）作業フォルダに移動
TypeScriptの課題の作業フォルダに移動してください。

## （３）TypeScriptのインストール
```
$ npm install --save-dev typescript tslint @types/node
```
## （４）tsconfig.jsonの設定
まずは、tsconfig.jsonファイルを作成しましょう。
```
$ touch tsconfig.json
```
## （５） 以下の内容をコピペ
tsconfig.jsonの内容を以下の通り書き換えてください

```
{
  "compilerOptions": {
    "module": "commonjs",
        "target": "es2015",
    "outDir": "dist",
    "sourceMap": true,
        "strict": true
  },
    "include": [
        "src"
    ],
  "exclude": [
    "node_modules"
  ]
}
```

## （６） tslintのインストール
```
$ ./node_modules/.bin/tslint --init
```

## （７）　完了！
コンパイル方法は、 `$ tsc （ファイル名）.ts `でコンパイル（動作確認）ができます！




