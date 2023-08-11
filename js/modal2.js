  function addEmployee()
{
  $.ajax({
    url : 'http://localhost:80/addEmployees.php',
    contentType: "application/x-www-form-urlencoded; charset=utf-8",
    data: JSON.stringify({
        name: document.getElementById("name").value,
        position: document.getElementById("position").value,
        // executor: document.getElementById("executor").value,
        // comment: document.getElementById("textarea").value,
        // file: fileInput.files[0],
        // status: document.getElementById("status").value
    }),
    type : 'POST',
    success : function (result) {
      if (result.message = "ok")
      {
          window.location.href = "http://127.0.0.1:5501/Administrator%20pages/index2.html";
      }
    },
    error : function () {
       console.log ('error');
    }
  });
}