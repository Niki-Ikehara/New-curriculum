// 以下のコードで定義される関数 isPositive は、数値を受け取ってその数値が 0 以上なら true を、
// 0 未満なら false を返す関数です。以下のコードに合うように適切な型 IsPositiveFunc を定義してください。
const isPositive: IsPositiveFunc = (num) => num >= 0;

// 使用例
isPositive(5);

// エラー例
isPositive("foo");
const res: number = isPositive(123);