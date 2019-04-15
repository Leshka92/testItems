var newLogin = prompt("Кто пришел?");
if (newLogin == "Админ") {
  var newPass = prompt("Ваш пароль?");
if (newPass == "Черный властелин") {
  alert("Добро пожаловать");
} else if (newPass == null) {
  alert("Вход оменен");
} else {
  alert("пароль введен неверно");
}
  } else if (newLogin == null) {
    alert("Вход отменен");
  } else {
    alert("Я вас незнаю!");
  }
