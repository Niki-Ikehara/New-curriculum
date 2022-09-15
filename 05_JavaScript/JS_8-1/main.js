// 【JS_8-1】 以下の通常の関数を、arrow 関数で置き換えて提出してください。
// ※arrow にすることにより省略できる部分は極力省略してください。

function janken() {
	let number = rand(1, 3);
	let hand = "";
	switch (rand) {
		case 1:
			hand = "グー";
			break;
		case 2:
			hand = "チョキ";
			break;
		case 3:
			hand = "パー";
			break;
	}

	let message = "あなたは" + hand + "を出しました。";
	return message;
}