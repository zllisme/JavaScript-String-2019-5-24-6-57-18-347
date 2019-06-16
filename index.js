// 阅读以上推荐链接，了解所有的JavaScript字符串方法。


// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。
var name = 'hello';
// TODO write your code here...
console.log(name.toUpperCase());

// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var arr1 = sentence.split(", ");
var result = [];
for(var i = 0;i < arr1.length; i++){
	arr2 = arr1[i].split(" ");
	let subresult = [];
	for(var j = 0;j < arr2.length; j++){
		let newarr2 = arr2[j].replace(arr2[j].charAt(0), arr2[j].charAt(0).toUpperCase());
		subresult.push(newarr2);

	}
	result.push(subresult.join(" "));
}
console.log(result.join(", "));


// 完成下面程序，将money变量中的金额提取出来，输出：20。
var money = '￥20';
//TODO write your code here...
console.log(money.replace("￥", ""));