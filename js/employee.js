// Получение списка сотрудников из базы данных и отображение их на странице
function loadEmployeesFromDB() {
    // Очищаем текущий список сотрудников
    var employeeList = document.getElementById("employee-list");
    employeeList.innerHTML = "";
  
    // Загружаем сотрудников из БД
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost/employee.php", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Успешно получены данные о сотрудниках из БД
          var employees = xhr.responseText;
  
          // Отображаем сотрудников на странице
          employeeList.innerHTML = employees;
  
          // Назначаем обработчики событий для каждого элемента списка
          var employeeItems = employeeList.getElementsByTagName("li");
          for (var i = 0; i < employeeItems.length; i++) {
            employeeItems[i].addEventListener("click", showEmployeeDetails);
          }
        } else {
          // Ошибка при получении данных о сотрудниках из БД
          console.log("Ошибка при получении данных о сотрудниках: " + xhr.responseText);
        }
      }
    };
    xhr.send();
  }
  
  // Показать модальное окно с подробной информацией о сотруднике
  function showEmployeeDetails() {
    var employeeName = this.getElementsByTagName("span")[0].innerHTML;
    var employeePosition = this.getElementsByTagName("span")[1].innerHTML;
  
    // Создание модального окна
    var modal = document.createElement("div");
    modal.classList.add("modal");
  
    var modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
  
    var modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");
    modalHeader.innerHTML = "<h5 class='modal-title'>" + employeeName + "</h5><button type='button' class='close' data-dismiss='modal'>&times;</button>";
  
    var modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");
    modalBody.innerHTML = "<p><strong>Должность:</strong> " + employeePosition ;
  
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modal.appendChild(modalContent);
  
    // Добавление модального окна в документ
    document.body.appendChild(modal);
  
    // Отображение модального окна
    modal.style.display = "block";
    modal.style.top = "44.8%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
  
    // Закрытие модального окна при клике на кнопку "Закрыть" или вне модального окна
    modal.addEventListener("click", function(event) {
      if (event.target === modal || event.target.classList.contains("close")) {
        modal.style.display = "none";
        document.body.removeChild(modal);
      }
    });
  }
  
  // Загрузка списка сотрудников из БД при загрузке страницы
  window.addEventListener("load", function() {
  loadEmployeesFromDB();
  });