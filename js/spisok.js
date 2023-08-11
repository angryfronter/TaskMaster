$(document).ready(function() {
    //Загрузка списка сотрудников при загрузке страницы
loadEmployees();

// Обработчик события при выборе поля исполнителя
$('#executor').on('click', function() {
loadEmployees();
});

// Функция для загрузки списка сотрудников из базы данных
function loadEmployees() {
$.ajax({
url: 'http://localhost/getEmployees.php',
type: 'POST',
dataType: 'json',
success: function(data) {
var options = '<option value="">Выберите исполнителя</option>';
for (var i = 0; i < data.length; i++) {
options += '<option value="' + data[i].id + '">' + data[i].name + '</option>';
}
$('#executor').html(options);
},
error: function(_xhr, _status, error) {
console.log('Error: ' + error);
}
});
}
});
  