// 以下のコードで定義される関数 sumOfPos は、数値の配列を受け取って、そのうち 0 以上の値の和を返す関数です。適切な型アノテーションをつけてください。
function sumOfPos(arr) {
  return arr.filter((num) => num >= 0).reduce((acc, num) => acc + num, 0);
}

// 使用例
const sum: number = sumOfPos([1, 3, -2, 0]);

// エラー例
sumOfPos(123, 456);
sumOfPos([123, "foobar"]);