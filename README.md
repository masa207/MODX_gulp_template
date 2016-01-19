MODX用gulpテンプレート
======================
gulpを使ってejs、sass、画像などをコンパイルするためのテンプレートです。

# タスクリスト
* gulp-uglify（js minify）
* gulp-cssmin,gulp-rename（CSS minify）
* gulp-autoprefixer（ベンダープレフィックス自動付与）
* gulp-ejs（HTMLテンプレート）
* gulp-sass（sassのコンパイル）
* gulp-spritesmith（CSSsprite）
* gulp-frontnote（スタイルガイド）
* gulp-imagemin,imagemin-pngquant（画像圧縮）
* gulp-plumber（エラーが起きても監視を続ける）
* browser-sync（LiveReload）

# 使い方
1.[Node.js](https://nodejs.org/en/)をインストール

2.gulpをコマンドでインストール

`npm install gulp -g`

2.コマンドでフォルダごと移動

`cd フォルダ名`

3.コマンドで各gulpプラグインをインストール

`npm install`

# タスク実行コマンド
* gulp-sass,gulp-ejs,gulp-autoprefixer,gulp-frontnote,gulp-plumber,browser-sync
`gulp`

* gulp-cssmin
`gulp cssmin`

* gulp-uglify
`gulp js`

* gulp-imagemin
`gulp imagemin`

* gulp-sprite
`gulp sprite`

# フォルダ
## 入力・出力
* dist
出力先（サーバーにデータを上げるときはこの中のデータを上げる）
* src
入力先（編集データ（sass、ejsはこの中でまとめる））


## sass
###　_rule.scss
CSSコメントアウトの記述、サイト情報など残すフォルダです

###　pc.scss
PCのみのスタイルの場所です（基本は書かないです）

###　sp.scss
SPのみのスタイルの場所です

###　base
基本となるスタイルを入れるフォルダです
* base > defaultフォルダ

reset.css,mixin,extendフォルダ

* base > basic.scss

基本的なスタイルはここに書きます

* base > contents.scss

固有CSSはここに書きます

###　layout

フレームなどのスタイルを入れるフォルダです

### module

パーツ（部品）となるスタイルを入れるフォルダです

* module > _other.scss

button,heading,link,list,media以外のコードはここに書きます

* module > _style_guide.scss
スタイルガイドはここに書きます（アークダウン記法）

### state

JS関係のスタイルはここに書きます※本来のstateとは少し違います


ライセンス
----------
Copyright &copy; 2016 kurokawa
Licensed under the [Apache License, Version 1.0][Apache]
Distributed under the [MIT License][mit].
Dual licensed under the [MIT license][MIT] and [GPL license][GPL].
