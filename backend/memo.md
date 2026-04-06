http://localhost:3001/
https://github.com/zakzakst/nestjs-practice3/tree/main/src

nest g resource xxxxxs

### 勉強の計画
- 一旦nestjs側は下記でやる
  - テストコード書かない
  - ローカルdbは後回し（固定値のモックを利用）
  - コードの共通化や保守性は考えない
- やる順番
  - [x] 作成日・更新日をデータに持たせる
  - [x] 一覧getのクエリ反映（keyword, page）
  - [ ] swaggerでの仕様記載
  - [ ] ログイン
  - [ ] 画像登録
  - [ ] データのバリデーション

### ControllerとServiceの使い分け

Controller は HTTP の処理だけをします。
- URL
- HTTP メソッド
- Request 取得
- Response 返却

Service は アプリのロジックを書く場所です。
- ビジネスロジック
- DB 操作
- 外部 API
- 計算処理