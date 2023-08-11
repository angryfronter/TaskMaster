document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки на элементы
    var addEmployeeBtn = document.getElementById('add-employee-btn');

    // Обработчик события нажатия на кнопку "Добавить сотрудника"
    addEmployeeBtn.addEventListener('click', function() {
      $('#addEmployeeModal').modal('show'); // Открываем модальное окно
    });
  });