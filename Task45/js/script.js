//Task 1
//1. Элемент: #first-element. 
let firstElement = document.querySelector("#first-element");
//- поменяйте "Я сосед" на "Я хороший сосед"

//- добавить к каждому соседу его номер, например, "Я хороший сосед №2"
let n2 = " №2"
firstElement.insertAdjacentText("beforeend", 'N2');
firstElement.insertAdjacentText("afterend", 'N3');
//- оберните текст в элементах с классом "neighbor" в тег span

firstElement.neighbor.insertAdjacentHTML
//- замените теги span на тег b
//- замените текст "Я хороший сосед" на "Я последний хороший сосед" у элемента с классом "fourth-neighbor"

//2. Элемент: #second-element.
//- добавить маркированный список из 10 элементов с текстом "Пункт 1", "Пункт 2" и т.д.
//- каждый четный пункт покрасить в красный цвет
//- каждому нечетному пункту добавить класс odd-element
//- элементам кратным 3 с классом odd-element увеличить шрифт в 2 раза.

//3. Элемент: #third-element.
//- заменить теги b на strong
//- удалить в тегах strong все теги, т.е. должен остаться только текст
//- обернуть каждое слово в тег span 

//4. Элемент: #fourth-element
//- Выведите на экран текст из всех тегов div
//- Поменяйте местами содержимое тегов div в обратном порядке, при этом теги остаются на месте, меняется только текст
//- удалить третьего "соседа"
//- добавить "пятого" соседа после четвертого
//- пятому соседу добавить границу, внутренние отступы и фон
//let firstElement = document.querySelector("#first-element");