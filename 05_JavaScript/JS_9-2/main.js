// 【JS_9-2】 以下のコードを用いて、最終的に「こんにちは。私はハルクです。年齢は 40 歳で趣味は裁縫です。」と出力させてください。
function Person(name, age) {
	this.name = name;
	this.age = age;

	this.self_introduction = function () {
		console.log(
			"こんにちは、" + this.name + "です。年齢は、" + this.age + "歳です。"
		);
	};
}

function Dog(name, age) {
	this.name = name;
	this.age = age;
}

let taro = new Person("太郎", 23); // 太郎という人間
let hachi = new Dog("ハチ", 5); // ハチというイヌ

taro.self_introduction.bind(hachi)();