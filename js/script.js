var input = document.getElementsByTagName("input");
// 0 - Сумма кредита
// 1 - Процент
// 2 - Срок

var output_tag = document.getElementsByTagName("output");

var output = new Array(5); 
// 0 Ежемесячный платёжь
// 1 Сумма процентов
// 2 Сумма погашения
// 3 Сумма кредита
// 4 Срок кредита

function output_0 () // Ежемесячный платежь
{
	output[0] = output[2] / output[4];

	if (output_4 () == false || output_2 () == false || output[0] == NaN || output[0] == Infinity) { output_tag[0].innerHTML = 0; return false; }

	output[0] = output[0].toFixed(2);

	output_tag[0].innerHTML = output[0] + '₽';
}

function output_1 () // Сумма процентов
{
	output[1] = (input[0].value / 100) * input[1].value;

	if (input[1].value > 100 || input[1].value < 0) return false;

	output[1] = output[1].toFixed();

	output_tag[1].innerHTML = output[1] + ' ₽';
}

function output_2 () // Сумма погашения
{
	output[2] = Number(output[2]); ///////////////////////////
	output[3] = Number(output[3]); ///// Приведение типа /////
	output[1] = Number(output[1]); ///////////////////////////

	output[2] = output[3] + output[1];

	if (input[1].value > 100 || input[0].value > 10000000000 || output[1] < 0 || input[0].value < 0) return false;

	output_tag[2].innerHTML = output[2] + '₽';
}

function output_4 () // Срок кредита
{
	output[4] = input[2].value * 12;

	if (input[2].value > 100 || output[4] <= 0) { output_tag[4].innerHTML = 0 + ' (мес)'; return false; }

	output_tag[4].innerHTML = output[4] + ' (мес)';
}

function output_3 () // Сумма кредита
{
	output[3] = input[0].value;

	if (output[3] > 10000000000 || output[3] < 0) return false;

	if (output[3] == '') output[3] = 0;

	output_tag[3].innerHTML = output[3] + '₽';
}

//////// Caling functions ////////
setInterval (output_0, 1);
setInterval (output_1, 1);
setInterval (output_4, 1);
setInterval (output_3, 1);
setInterval (output_2, 1);

document.querySelector("#getWidth").textContent = window.innerWidth;

window.onresize = function () {
	document.querySelector ("#getWidth").textContent = window.innerWidth;
}