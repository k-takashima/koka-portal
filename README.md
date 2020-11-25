# koka-portal

## 開発事前準備
- `src`が開発用のディレクトリで、`dist`ディレクトリ配下のファイルは基本的に直接編集しません。
- タスクランナーとしてgulpを採用しており、sassでマークアップを行っています。
- 以下の記述は、node.jsがインストールされていることを前提としています。
- nodeのバージョン`10.16.0`

#### 1. 必要なモジュールのインストール
本リポジトリをcloneし、以下を実行
```
npm install
```
#### 2. デフォルトタスクの実行
```
npx gulp
```
デフォルトタスクは
- sassのコンパイル
- jsのバンドル化

#### ディレクトリ構造
```
koka-portal
├─ dist
│ ├─ css
│ │ └─ main.css
│ ├─ detail
│ │ └─ 01.html
│ ├─ images
│ │ ├─ icon.png
│ │ ├─ img-cat01.jpg
│ │ ├─ img-cat02.jpg
│ │ ├─ img-cat03.jpg
│ │ ├─ img-cat04.jpg
│ │ ├─ img-thm01.png
│ │ ├─ img-thm02.png
│ │ ├─ img-thm03.png
│ │ ├─ img-thm04.png
│ │ ├─ img-thm05.png
│ │ └─ main.jpg
│ ├─ index.html
│ ├─ js
│ │ └─ scripts.js
├─ gulpfile.js
├─ node_modules
├─ package-lock.json
├─ package.json
├─ README.md
└─ src
  ├─ images
  │ ├─ icon.png
  │ ├─ img-cat01.jpg
  │ ├─ img-cat02.jpg
  │ ├─ img-cat03.jpg
  │ ├─ img-cat04.jpg
  │ ├─ img-thm01.png
  │ ├─ img-thm02.png
  │ ├─ img-thm03.png
  │ ├─ img-thm04.png
  │ ├─ img-thm05.png
  │ └─ main.jpg
  ├─ js
  │ └─ scripts.js
  ├─ pug
  │ ├─ detail
  │ │ └─ 01.pug
  │ ├─ include
  │ │ └─ _layout.pug
  │ └─ index.pug
  └─ scss
    ├─ layout
    │ ├─ _base.scss
    │ ├─ _detail.scss
    │ ├─ _reset.scss
    │ ├─ _top.scss
    │ └─ _variable.scss
    └─ main.scss
```

#### 命名規則
- BEMを使用
```
1. BlockとElementをつなぐ場合は、アンダースコア2つでつなぐ
2. Modifierにつなぐ場合は、ハイフン2つでつなぐ
```