// 【JS_6-1】 以下の条件を満たす処理を実装してください。
// くじ引きの配列 lotoを用意しました。以下の条件に従い、処理を実装しましょう。
// うまく条件分岐を用いて短いコードで実装するよう心がけてください。

// 配列 loto からランダムで取り出した値を変数に代入する
// 変数の値が null であった場合、代わりに 9 を代入する
// 変数が１の場合 => あたりと出力
// 変数が 0 の場合 => はずれと出力
// 変数が 9 の場合 => エラーが生じましたと出力
let loto = [0, 1, null];
// ランダムな数字を出力する
let key = Math.floor(Math.random() * 3);