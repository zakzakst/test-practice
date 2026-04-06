http://localhost:3001/
https://github.com/zakzakst/nestjs-practice3/tree/main/src

nest g resource xxxxxs

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