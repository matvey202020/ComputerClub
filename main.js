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
    