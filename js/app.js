const submitBtn = document.querySelector('.btn');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  
  if (email === '' || password === '') {
    alert('Пожалуйста, заполните все поля!');
    return;
  }
  else {
    $.ajax({
      url : 'http://localhost/test.php',
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({email: email, password: password}),
      type : 'POST',
      success : function (result) {
         var data = JSON.parse(result);
         alert(data.message);
         if (data.message != "Ошибка: Неправильный логин или пароль")
         {
            window.location.href = data.redirect; 
         }
      },
      error : function () {
         console.log ('error');
      }
    });
  }
});
$(document).ready(function() {
  // Обработчик нажатия на кнопку выхода
  $('#logoutBtn').click(function(e) {
    e.preventDefault();
    // Отправляем POST-запрос на сервер для выхода из аккаунта
    $.post('http://localhost/test.php', { logout: true }, function(response) {
      // Перенаправляем на страницу index.html после выхода
      if (response.redirect) {
        window.location.href = response.redirect;
      }
    }, 'json');
  });
});


