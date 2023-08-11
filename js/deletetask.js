// Получите кнопку удаления по её идентификатору
var deleteButton = document.getElementById('delete-task-btn');

// Добавьте обработчик события клика на кнопку удаления
deleteButton.addEventListener('click', function() {
  // Отобразите окно выбора имени сотрудника (например, через prompt или модальное окно)
  var taskName = prompt('Введите название задачи, которую нужно удалить:');

  // Проверьте, что имя было введено
  if (taskName !== null && taskName !== '') {
    // Создайте новый экземпляр объекта XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Установите метод и URL для отправки запроса
    xhr.open('POST', 'http://localhost/deleteTask.php', true);

    // Установите заголовок Content-Type для отправки данных в формате x-www-form-urlencoded
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Определите функцию обратного вызова, которая будет вызвана при получении ответа от сервера
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Обработайте ответ сервера, если удаление прошло успешно
          var response = JSON.parse(xhr.responseText);
          if (response.success) {
            alert('Задача успешно удалена');
            window.location.href = "http://127.0.0.1:5501/Administrator%20pages/index2.html";
            // Ваш код для обновления списка сотрудников или выполнения других действий после удаления
          } else {
            alert('' + response.error);
          }
        } else {
          // Обработайте ошибку, если запрос не удалось выполнить
          alert('Ошибка при отправке запроса на сервер');
        }
      }
    };

    // Отправьте запрос на сервер с именем задачи
    xhr.send('taskName=' + encodeURIComponent(taskName));
  }
});
