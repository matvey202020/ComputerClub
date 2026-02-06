document.addEventListener('DOMContentLoaded', () => {       /* DOMContentLoaded Запускаем функцию после полной загрузки страницы */
    const burger = document.querySelector('.chicken__burger');
    const menu = document.querySelector('.nav__menu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active'); /* При нажатии на элемент 'бургер' - добавляется класс 'active' */
        menu.classList.toggle('active');
    });

    /* Закрытие меню при клике вне его */
    document.addEventListener('click', (event) => {
        /* event.targer - элемент по которому кликнули
        .closest(header) - ищет самого близкого предка, у которого есть тег header
        если предка нет, closest вернет null
        Если кликнули не внутри header и не по самому header, то условие истинно
        "!" - логическое отрицание. Превращает ложь в правду и наоборот */
        if (!event.target.closest('header')) {
            /* classList.remove('название класса') Удаляет класс указанный в круглых скобках */
            burger.classList.remove('active');
            menu.classList.remove('active');
        }
    });

})

/* Программирование логики фильтрации и сортировки */

document.addEventListener('DOMContentLoaded', () => {
    const modelsSection = document.querySelector('.models_section');
    /* Находим все элементы на странице, собираем их в список и делаем из этого списка полноценный массив */
    const cards = Array.from(document.querySelectorAll('.computer_card'));
    const gpuSelect = document.getElementById('gpuFilter');
    const cpuSelect = document.getElementById('cpuFilter');
    const applyBtn = document.getElementById('applyFilters');
    const resetBtn = document.getElementById('resetFilters');

    // Извлекаем данные из карточек и создаем массив обЪектов
    // map - берет массив и создает новый массив в котором каждый элемент прошел через нашу функцию
    let cardData = cards.map(card => {
        const name = card.querySelector('h3').textContent.trim();   // textContetn - берет весь текстовый контект внутри тега h3
        //.trim() - уберает все пробелы, переносы строк, табуляции с начала и конца
        const priceStr = card.querySelector('table tr:nth-child(1) td:nth-child(2)').textContent.trim().replace('₽', '') // replace - заменяет один элемент на другой
        const price = parseInt(priceStr,10) // parseInt - превращает строку в нормальное число в указанной системе исчесления
    })

})
