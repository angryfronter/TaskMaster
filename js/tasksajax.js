function getTasks()
{
  $.ajax({
    url : 'http://localhost/getTask.php',
    contentType: "application/json; charset=utf-8",
    type : 'GET',
    success : function (result) {
      var tasks = JSON.parse(result).tasks;
       for(var i = 0;i < tasks.length;i++)
       {
        
       }
    },
    error : function () {
       console.log ('error');
    }
  });
}