//Задание №1
function prostoe(num) {
	var i = 2;
	if(num == 1 ||num == 0){
		i++;
		return false;
	}
	if(num == 2){
		i++;
		return true;
	}
	while (i<num){
		if(num%i != 0){
			i++;
			continue;
		}
		else{
			return false;
		}
	}
	return true;
}

var idx = 0;
while (idx < 100){
	if(prostoe(idx)){
		document.write(idx+'<br>')
		idx++;
	}
	else{
		idx++;
	}
}
//Задание №2
function summ(mas){
	var sum = 0;
	for(num of mas){
		sum += num;
	}
	return sum;
}
var mas = []
for(var i = 0;i<100;i++){
	mas[i] = parseInt(Math.random()*9500+500);
}
alert(summ(mas))
//Задание №3
for(var x = 0; x<10; console.log(x++)){
}
//Задание №4
var str = 'x';
for(var y = 0;y<20;y++){
	console.log(str);
	str+='x'
}
