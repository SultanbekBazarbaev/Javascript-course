// 1. Имеется фрагмент программы в виде оператора цикла с параметром, обеспечивающий вывод на экран «столбиком» всех целых чисел от 10 до 30. Оформить этот фрагмент в виде:
// а) оператора цикла с предусловием;
// б) оператора цикла с постусловием.

// 2. Имеется фрагмент программы в виде оператора цикла с параметром, обеспечивающий вывод на экран «столбиком» всех целых чисел от 100 до 80. Оформить этот фрагмент в виде:
// а) оператора цикла с предусловием;
// б) оператора цикла с постусловием.

// 3. Имеется фрагмент программы в виде оператора цикла с параметром, обеспечивающий вывод на экран «столбиком» квадратного корня из всех целых чисел от a до b (a > b). Оформить этот фрагмент в виде:
// а) оператора цикла с предусловием;
// б) оператора цикла с постусловием.

// 4. Дано натуральное число. Определить:
// а) количество цифр в нем;
// б) сумму его цифр;
// в) произведение его цифр;
// г) среднее арифметическое его цифр;
// д) сумму квадратов его цифр;
// е) сумму кубов его цифр;
// ж) его первую цифру;
// з) сумму его первой и последней цифр.

// let number = +prompt('Enter the number')
// let sum = 0
// let count = 0
// let times = 1
// let arif = 0
// let square = 1
// let cube = 1
// let firstN = 0
// for (let i = 0; i < number; i++) {
// firstN = number % 10
// lastN = number / 10
// sum += number % 10
// times *= number % 10
// count++
// number = parseInt(number / 10)
// }
// arif = sum / 2
// square = sum ** 2
// cube = sum ** 3
// console.log('sum ' + sum);
// console.log('count ' + count);
// console.log('times ' + times);
// console.log('arif ' + arif);
// console.log('square ' + square);
// console.log('cube ' + cube);
// console.log('first ' + firstN);

// 5. Известны оценки по информатике каждого из 20 учеников класса. В начале списка перечислены все пятерки, затем все остальные оценки. Сколько учеников имеют по информатике оценку «5»? Условный оператор не использовать. Рассмотреть два случая:
// 1) известно, что пятерки имеют не все ученики класса;
// 2) допускается, что пятерки могут иметь все ученики класса.

// let countFive = 0
// let countFour = 0
// let countThree = 0
// for (let i = 0; i < 20; i++) {
// let number = +prompt()
// if(number == 5){
//     countFive++
// }else if(number == 4){
//     countFour++
// }else if(number == 3){
//     countThree++
// }
// }
// alert(countFive)
// alert(countFour)
// alert(countThree)

// 6. Известны сведения о количестве осадков, выпавших за каждый день мая. Первого мая осадков не было. Определить, в течение какого количества первых дней месяца непрерывно, начиная с первого мая, осадков не было? Условный оператор не использовать. Рассмотреть два случая:
// 1) известно, что в какие-то дни мая осадки выпадали;
// 2) допускается, что осадков могло не быть ни в какой день мая.

// 7. Напечатать минимальное число, большее 200, которое нацело делится на 17.

// let number = 200
// while (number != 0) {
// number--
// if (number % 17 == 0) {
//     console.log(number);
//     break
// }
// }

// 8. Найти максимальное из натуральных чисел, не превышающих 5000, которое нацело делится на 39.

// let number = 5000
// while (number) {
// number++
// if (number % 39 == 0) {
//     console.log(number);
//     break
// }
// }

// 9. Известны данные о росте 15 юношей класса, упорядоченные по убыванию. Нет ни одной пары учеников, имеющих одинаковый рост. В начале учебного года в класс поступил новый ученик. Какое место в перечне ростов займет рост этого ученика? Известно, что его рост не совпадает с ростом ни одного из учеников класса, превышает рост самого низкого ученика и меньше роста самого высокого. Условный оператор не использовать.

// 10. Известно количество очков, набранных каждой из 20-ти команд-участниц первенства по футболу. Перечень очков дан в порядке убывания (ни одна пара команд не набрала одинаковое количество очков). Определить, какое место заняла команда, набравшая N очков (естественно, что значение N имеется в перечне). Условный оператор не использовать.

// for (let i = 0; i < 5; i++) {
// let num = +prompt()
// if(num ==  20){
//     console.log('1 '+num);
// }else if(num>15){
//     console.log('2  ' + num);
// }else if(num>10){
//     console.log('3 '+num);
// }
// }

// 11. Гражданин 1 марта открыл счет в банке, вложив 1000 руб. Через каждый месяц размер вклада увеличивается на 2% от имеющейся суммы. Определить:
// а) за какой месяц величина ежемесячного увеличения вклада превысит 30 руб.;
// б) через сколько месяцев размер вклада превысит 1200 руб.

// let number=1000
// let val=0
// let per=0.02
// while(true){
// number=number+(number*per)
// val++
// if(number>1200){
// console.log(number);
// console.log(val);
// break
// }
// }

// 12.. Начав тренировки, лыжник в первый день пробежал 10 км. Каждый следующий день он увеличивал пробег на 10% от пробега предыдущего дня. Определить:
// а) в какой день он пробежит больше 20 км;
// б) в какой день суммарный пробег за все дни превысит 100 км.
// let number = 10
// let val = 1
// let per = 0.10
// while (true) {
// val++
// number = number + (number * per)
// if (number > 20) {
//     console.log(val + ' 20km');
//     break
// }
// }
// while (true) {
// val++
// number = number + (number * per)
// if (number >= 100) {
//     console.log(val + ' 100km');
//     break
// }
// }
// 13. В некотором году (назовем его условно первым) на участке в 100 гектаров средняя урожайность ячменя составила 20 центнеров с гектара. После этого каждый год площадь участка увеличивалась на 5%, а средняя урожайность на 2%. Определить:
// а) в каком году урожайность превысит 22 центнера с гектара;
// б) в каком году площадь участка станет больше 120 гектаров;
// в) в каком году общий урожай, собранный за все время, начиная с первого года, превысит 800 центнеров.

// let number = 100
// let yield = 20
// let per1 = 0.05
// let per2 = 0.02
// let year = 0
// while (true) {
// year++
// yield = yield + (yield * per2)
// if (yield >= 22) {
//     console.log(year + ' 22s');
//     break
// }
// }
// while (true) {
// year++
// number = number + (number * per1)
// if (number >= 120) {
//     console.log(year + ' 120g');
//     break
// }
// }
// while(true){
// year++
// yield = yield + (yield * per2)
// if (yield >= 800) {
//     console.log(year + ' 800g');
//     break
// }
// }

// 14. Найти наибольший общий делитель двух заданных натуральных чисел, используя алгоритм Евклида.

// let number1 = 10
// let number2 = 15
// let count = 1
// let max = 1
// while (number1 != 0 && number2!=0) {
// count++
// if (number1>number2) {
//    number1%=number2
// }else if(number2>number1){
//     number2%=number1
// }
// }console.log(number1+number2);

// 15. Найти наименьшее общее кратное двух заданных натуральных чисел.

// 16. Даны натуральные числа a и b, обозначающие соответственно числитель и знаменатель дроби. Сократить дробь, т. е. найти такие натуральные числа p и q, не имеющие общих делителей, что p/q = a/b.

// 17. Дан прямоугольник с размерами 425 х 131 . От него отрезают квадраты со стороной 131, пока это возможно. Затем от оставшегося прямоугольника вновь отрезают квадраты со стороной, равной 425 — 131·3 = 32, и т. д. На какие квадраты и в каком их количестве будет разрезан исходный прямоугольник?

// 18. Дан прямоугольник с размерами a x b. От него отрезают квадраты максимального размера, пока это возможно. Затем от оставшегося прямоугольника вновь отрезают квадраты максимально возможного размера и т. д. На какие квадраты и в каком их количестве будет разрезан исходный прямоугольник?

// 19. Даны целые числа a и b (a > b). Определить:
// а) результат целочисленного деления a на b, не используя стандартную операцию целочисленного деления;
// б) остаток от деления a на b, не используя стандартную операцию вычисления остатка.

// 20. Даны натуральные числа m и n. Получить все кратные им числа, не превышающие m·n. Условный оператор не использовать. Задачу решить двумя способами.

// 21. В некоторой стране используются денежные купюры достоинством в 1, 2, 4, 8, 16, 32 и 64. Дано натуральное число n. Как наименьшим количеством таких денежных купюр можно выплатить сумму n (указать количество каждой из используемых для выплаты купюр)? Предполагается, что имеется достаточно большое количество купюр всех достоинств.

// 22. Дано натуральное число (пусть запись этого числа в десятичной системе имеет вид akak-1…a0 ). Найти:
// а) знакочередующуюся сумму цифр этого числа a0 — a1 +… + (-1)kak;
// б) знакочередующуюся сумму цифр этого числа ak — ak—1 +… + (-1)ka0;
// Примечание. В обеих задачах условный оператор и операцию возведения в степень не использовать.

// 23. Дано натуральное число. Найти:
// а) число, получаемое при прочтении его цифр справа налево;
// б) число, получаемое в результате приписывания по двойке в начало и конец записи исходного числа;
// в) число, получаемое в результате удаления из него всех цифр а;
// г) число, получаемое из исходного перестановкой его первой и последней цифр;
// д) число, образованное из исходного приписыванием к нему такого же числа.



// 24. Дано натуральное число. Определить номер цифры 3 в нем, считая от конца числа. Если такой цифры нет, ответом должно быть число 0, если таких цифр в числе несколько — должен быть определен номер самой правой из них.

// 25. Дано натуральное число. Определить сумму m его последних цифр. Если заданное число — менее чем m-значное, то «недостающие» цифры при решении задачи не обрабатывать.

// 26. Дано натуральное число. Найти его наименьший делитель, отличный от 1.

// 27. Используя метод деления отрезка пополам, найти приближенное (с точностью 0,001) значение корня уравнения f(x)=0 на отрезке [a, b]:
// а) f(x) = x4 + 2x3 — x -1; a=0, b=1;
// б) f(x) = x3 — 0,2x2 — 0,2x -1,2; a=1, b=1,5.






/// NOT END FILE 3 OF 2 