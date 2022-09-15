// 次の関数 isPositive は、数値を受け取ってそれが 0 以上なら true、0 未満なら false を返す関数です。
// この関数に正しく型アノテーションを付けてください。型アノテーションとは、引数や返り値の型をソースコード中に明示することです。

function isPositive(num) {
  return num >= 0;
}

// 使用例
isPositive(3);

// エラー例
isPositive("123");