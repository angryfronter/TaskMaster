<?php


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
// Получите имя сотрудника из параметра запроса
$employeeName = $_POST['employeeName'];

// Подключитесь к базе данных MySQL
$hostname = 'localhost:3306';
$username = 'root';
$password = 'skin2003';
$database = 'diplom';

  // Создаем подключение
  $conn = mysqli_connect($hostname, $username, $password, $database);

  // Проверяем соединение
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Подготовьте SQL-запрос для удаления сотрудника по его имени
$sql = "DELETE FROM employees WHERE name = ?";

// Подготовьте выражение SQL с использованием подготовленных операторов
$stmt = $conn->prepare($sql);

// Привяжите параметры к выражению SQL
$stmt->bind_param("s", $employeeName);

// Выполните подготовленное выражение SQL
$stmt->execute(); 

// Проверьте, сколько строк было затронуто при удалении
$affectedRows = $stmt->affected_rows;

// Проверьте, была ли удалена хотя бы одна строка
if ($affectedRows > 0) {
  // Если удаление прошло успешно, верните успешный статус
  $response = array('success' => true);
} else {
  // Если сотрудник не найден, верните сообщение об ошибке
  $response = array('success' => false, 'error' => 'Сотрудник с таким именем не найден');
}

// Закройте подготовленное выражение SQL и соединение с базой данных
$stmt->close();
$conn->close();

// Верните ответ в формате JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
