<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
// Подключение к базе данных
$servername = "localhost:3306";
$username = "root";
$password = "skin2003";
$database = "diplom";

$conn = mysqli_connect($servername, $username, $password, $database);

// Проверяем соединение
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Получение параметра sortOrder из запроса
// $sortOrder = $_POST['sortOrder'];

// Формирование SQL-запроса для получения сотрудников с учетом сортировки
$sql = "SELECT name, position, datebirth, phone, mail FROM employees ORDER BY name";

$result = $conn->query($sql);

// Проверка наличия данных
if ($result->num_rows > 0) {
  // Формирование HTML-кода для списка сотрудников
  $employeeList = '';
  while ($row = $result->fetch_assoc()) {
    $name = $row['name'];
    $position = $row['position'];
    $datebirth = $row['datebirth'];
    $employeeList .= '<li class="list-group-item d-flex justify-content-between align-items-center">
                        <span>' . $name . '</span>
                        <span>' . $position . '</span>
                      </li>';
  }

  // Вывод HTML-кода списка сотрудников
  echo $employeeList;
} else {
  // В случае отсутствия данных
  echo '<li class="list-group-item">Нет доступных сотрудников</li>';
}

// Закрытие соединения с базой данных
$conn->close();
?>
