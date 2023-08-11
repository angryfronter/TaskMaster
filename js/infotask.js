function showDetails() {
    // Создание окна с более подробной информацией
    var detailWindow = window.open("", "Детали", "width=400,height=300");
    
    // Загрузка контента в окно
    detailWindow.document.write("<h2>Подробная информация</h2>");
    detailWindow.document.write("<p>Здесь можно разместить дополнительную информацию о задаче.</p>");
    
    // Запрет на перезагрузку окна при каждом нажатии
    detailWindow.document.close();
  }