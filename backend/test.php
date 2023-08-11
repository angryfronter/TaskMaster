<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$servername = "localhost:3306";
$username = "root";
$password = "skin2003";
$database = "diplom";
// Создаем соединение
$conn = mysqli_connect($servername, $username, $password, $database);

// Проверяем соединение
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Проверяем, была ли отправлена форма
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Получаем значения логина и пароля из формы
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    $email = $data['email'];
    $password = $data['password'];

    // Проверяем, существует ли пользователь с такими данными
    $sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
    $result = mysqli_query($conn, $sql);
   
    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        $role = $row['role'];

        // Назначаем роль пользователю и перенаправляем на соответствующую страницу
        if ($role == 'Admin') {
            session_start();
            $_SESSION['id'] = $row['id'];
            $_SESSION['role'] = 'admin';
            session_write_close();
            echo json_encode(['message' => 'Вы были авторизованы как администратор', 'redirect' => 'index2.html']);
        } else {
            session_start();
            $_SESSION['id'] = $row['id'];
            $_SESSION['role'] = 'user';
            session_write_close();
            echo json_encode(['message' => 'Вы были авторизованы как пользователь', 'redirect' => 'index2user.html']);
        }
    }
    else {
      // Если пользователь не найден, выводим сообщение об ошибке
      echo json_encode(['message' => 'Ошибка: Неправильный логин или пароль']);
  }
  // Закрываем соединение с базой данных
  mysqli_close($conn);
}

