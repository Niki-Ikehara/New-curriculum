// 以下の Person インターフェースの age プロパティはオプショナルにし、age プロパティの値を省略して下さい。
interface Person {
  name: string;
  age: number;
}

//使用例
const p1: Person = { name: 'Taro', age: 100 };  // OK
const p2: Person = { name: 'Jiro' };  // OK
console.log(p1.age);  //=> 100
console.log(p2.age);  //=> undefined

// 以下のコードはコンパイルエラーが起きます。
{ name: "kenji", age: 90 }; // が代入できるように修正してください。
interface Foo {
  name: string;
}
let obj: Foo = { name: "kenji", age: 90 };