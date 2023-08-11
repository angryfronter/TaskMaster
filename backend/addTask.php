<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$data = json_decode(file_get_contents('php://input'), true);
// Получение данных из POST-запроса
$topic = $data["topic"];
$deadline = $data['deadline'];
$executor = $data['executor'];
$comment = $data['comment'];
$status = $data['status'];

// Дополнительные данные для сохранения в базе данных, если необходимо

// Подключение к базе данных (замените значения на свои)
$hostname = "localhost:3306";
$username = "root";
$password = "skin2003";
$database = "diplom";

// Создание подключения
$conn = mysqli_connect($hostname, $username, $password, $database);

// Проверяем соединение
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Подготовка SQL-запроса для вставки данных в таблицу tasks 
$sql = "INSERT INTO tasks (topic, deadline, executor, comment, status) VALUES (\"". $topic . "\", \"" . $deadline . "\", \"" . $executor . "\", \"" . $comment . "\", " . $status . ")";

if ($conn->query($sql))
{
    // Закрытие соединения с базой данных
    $conn->close();
    echo json_encode(['message' => 'ok']);
}
else
{
    // Закрытие соединения с базой данных
    $error = $conn->error;
    $conn->close();
    echo json_encode(['message' => $error]);
}

?>