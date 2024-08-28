---
layout: default
---

# arrays todolist js

## Tecnologías

[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://html.spec.whatwg.org/multipage/)
[![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/Overview.en.html)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/es/docs/Web/JavaScript)

## 1. Estructura HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="assets/style.css">
  <title>Todo-List-JavaScript</title>
</head>
<body>
  <div class="container">
    <div class="input-group">
      <i class="fa-solid fa-pen-to-square"></i>
      <input type="text" id="input" placeholder="Escribe una tarea" autofocus>
      <button id="add-task"><i class="fa-solid fa-plus"></i></button>
    </div>
    <div class="resume">
      <p>Total: <span id="total">0</span></p>
      <p>Realizadas: <span id="done">0</span></p>
    </div>
    <ul id="task-list"></ul>
  </div>
  <script src="assets/functions.js"></script>
  <script src="https://kit.fontawesome.com/6b8f0c7049.js" crossorigin="anonymous"></script>
</body>
</html>
```