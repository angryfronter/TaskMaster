<?php
// Подключение к базе данных
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$servername = "localhost:3306";
$username = "root";
$password = "skin2003";
$database = "diplom";

$conn = mysqli_connect($servername, $username, $password, $database);

// Проверка подключения к базе данных
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// SQL-запрос для получения данных из таблицы
$sql = "SELECT * FROM tasks";
$result = mysqli_query($conn, $sql);

$tasks = [];
foreach($result as $row)
{
    $tasks []= $row;
}

// Закрытие соединения с базой данных
mysqli_close($conn);

echo json_encode(["tasks" => $tasks]);

?>
