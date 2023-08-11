<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
// Подключение к базе данных
$hostname = 'localhost:3306';
$username = 'root';
$password = 'skin2003';
$database = 'diplom';

// Создание подключения
$conn = mysqli_connect($hostname, $username, $password, $database);

// Проверяем соединение
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Получение списка сотрудников из базы данных
$sql = 'SELECT id, name FROM employees';
$result = $conn->query($sql);

$employees = array();
if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $employees[] = array('id' => $row['id'], 'name' => $row['name']);
  }
}

// Close the database connection before sending the response
$conn->close();

// Send the JSON response
header('Content-Type: application/json');
echo json_encode($employees);
?>
