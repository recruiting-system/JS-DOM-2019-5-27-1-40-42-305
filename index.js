<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script>
      function test(){
        var nameValue = document.getElementById("name").value;
        var passwordValue = document.getElementById("pwd").value;
        if (nameValue == "123") {
          if (passwordValue == "123") {
            alert("登录成功！");
          }else{
            alert("密码错误");
            document.getElementById("name").value =  "";
          } 
        }else{
          alert("用户名错误");
          document.getElementById("name").value =  "";
        }
      }
    
 
    </script>
</head>
<body>
    <form name="form1" id="formId" action="test.html" method="get">
        用户名:<input id = "name" name="name"  /><br/>
        密码:<input type="password" id = "pwd" name="pwd"/><br/>
    </form>
    <button value="test" onclick="test()">提交</button>
</body>
</html>
