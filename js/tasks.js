// Загрузка задач из БД с использованием PHP
function loadTasksFromDB() {
  // Очищаем текущие задачи
  var taskContainers = document.getElementsByClassName("col-md-4");
  for (var i = 0; i < taskContainers.length; i++) {
    var taskList = taskContainers[i].querySelector("ul.list-group");
    taskList.innerHTML = "";
  }

  // Загружаем задачи из БД
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost/getTask.php", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Успешно получены задачи из БД
        var tasks = JSON.parse(xhr.responseText).tasks;

        // Отображаем задачи на странице
        for (var i = 0; i < tasks.length; i++) {
          var task = tasks[i];
          var taskElement = createTaskElement(task);
          var status = task.status;
          var targetContainer = document.querySelector(`[data-status="${status}"]`);

          if (targetContainer) {
            var taskList = targetContainer.querySelector("ul.list-group");
            var taskListItem = document.createElement("li");
            taskListItem.classList.add("list-group-item");
            taskListItem.appendChild(taskElement);
            taskList.appendChild(taskListItem);
          }
          // Создание элемента задачи
function createTaskElement(task) {
  var topicElement = document.createElement("span");
  topicElement.innerHTML = task.topic;
  topicElement.style.fontWeight = "bold";
  topicElement.style.fontSize = "20px";
///////////////////////
  var status = task.status;
  if (status === 0) {
    topicElement.style.color = "#08376a"; // Красный цвет для статуса 0
  } else if (status === 1) {
    topicElement.style.color = "#FFFF00"; // Зеленый цвет для статуса 1
  } else if (status === 2) {
    topicElement.style.color = "#00FF00"; // Синий цвет для статуса 2
  }

  var taskElement = document.createElement("div");
  //console.log(task);
  // Остальной код остается без изменений
  taskElement.style.border = "1px solid rgba(0,0,0,.125)";
  taskElement.style.padding = "0.75rem 1.25rem";
  taskElement.appendChild(document.createTextNode(""));
  taskElement.appendChild(topicElement);
  taskElement.appendChild(document.createElement("br"));
  taskElement.appendChild(document.createTextNode("Сроки: " + task.deadline));
  taskElement.appendChild(document.createElement("br"));
  taskElement.appendChild(document.createTextNode("Исполнитель: " + task.executor));
  taskElement.appendChild(document.createElement("br"));  
  taskElement.appendChild(document.createTextNode("Комментарий: " + task.comment));
  taskElement.appendChild(document.createElement("br"));

  return taskElement;
}
        }
      } else {
        // Ошибка при получении задач из БД
        console.log("Ошибка при получении задач: " + xhr.responseText);
      }
    }
  };
  xhr.send();
}



// Загрузка задач из БД при загрузке страницы
window.addEventListener("load", function() {
  loadTasksFromDB();

});


function createTask()
{
  var fileInput = document.getElementById("file");
  $.ajax({
    url : 'http://localhost:80/addTask.php',
    contentType: "application/x-www-form-urlencoded; charset=utf-8",
    data: JSON.stringify({
        topic: document.getElementById("topic").value,
        deadline: document.getElementById("deadline").value,
        executor: document.getElementById("executor").value,
        comment: document.getElementById("textarea").value,
        file: fileInput.files[0],
        status: document.getElementById("status").value
    }),
    type : 'POST',
    success : function (result) {
      if (result.message = "ok")
      {
          window.location.href = "http://127.0.0.1:5501/Administrator%20pages/index2.html";
      }
    },
    error : function () {
       console.log ('error');
    }
  });
}

// function deleteTask(taskId) {
//   $.ajax({
//     url: 'http://localhost:80/deleteTask.php',
//     contentType: "application/x-www-form/urlencoded; charset=utf-8",
//     data: JSON.stringify({
//       taskId: task.id 
//     }),
//     type: 'POST',
//     success: function(result) {
//       if (result.message = "ok")
//       {
//         window.location.href = "http://127.0.0.1:5501/index2.html"
//       }
//     },
//     error: function() {
//       console.log('error')
//     }
//   });  
// }

