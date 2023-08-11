const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Отменяем стандартное действие формы
  const formData = new FormData(form); // Создаем объект FormData
  const email = formData.get('email'); // Получаем значение поля email
  const data = { email: email }; // Создаем объект с данными
  const jsonData = JSON.stringify(data); // Преобразуем объект в JSON
  console.log(jsonData); // Выводим JSON в консоль
});
