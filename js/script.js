//Задание №1
var obj = {};
function f(num){
	var nums = String(num).split('');
	while (nums.length < 3){
		nums.unshift(0)
	}
	obj.ed = nums[2];
	obj.des = nums[1];
	obj.sot = nums[0];
	return obj
}

var x = +prompt('Введите число');
if(x>0 && x < 1000){
	alert('Сотни - '+f(x).sot+' ,десятки - '+f(x).des+' ,еденицы - '+f(x).ed)
}
else{
	alert('Число не корректно!')
}
//Задание 2
var game = true;
var garantWin = 0;
win = 0;
for (quest of questions){
	if(game === false){
		break
	}
	do {
		var correct = true;
		var answer = +prompt('Вопрос: '+quest.question+'\nОтветы:\n  1. '+quest.answer_1+'\n  2. '+quest.answer_2+'\n  3. '+quest.answer_3+'\n  4. '+quest.answer_4+'\n-1. Выйти из игры!\nВаш ответ:');
		if (answer === -1){
			alert('Вы выграли '+win+' рублей!\nПоздравляем!');
			break
		}
		else if (answer<1 || answer>4){
			alert('Ошибка ввода!');
			correct = false
		}
		else if(answer === quest.correctAnswer){
			if(quest.price[0]){
				alert('Поздравляем! Вы дошли до несгараемой суммы '+quest.price[1]+' рублей.\nЧто будем делать?\n1. Рискнуть и продолжить.\n2. Забрать деньги и выйти.');
				garantWin = quest.price[1];
			}
			else{
				alert('Поздраляем! Вы правильно отвеили на вопрос! Сумма вашего выгрыша '+quest.price[1]+' рублей!\nНажмите ОК что бы продолжить!');
				win = quest.price[1]
			}
		}
		else{
			alert('Ответ не верный. Вы выграли ' + garantWin+' рублей!');
			game = false;
			break
		}
	}while(!correct)

}