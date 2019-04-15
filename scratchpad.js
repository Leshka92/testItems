/*
 * Это простой редактор JavaScript.
 *
 * Введите JavaScript, затем щёлкните правой кнопкой или выберите из меню Выполнить:
 * 1. Запустить, чтобы исполнить выделенный текст (Ctrl+R),
 * 2. Исследовать, чтобы вызвать для результата Инспектор Объектов (Ctrl+I), или,
 * 3. Отобразить, чтобы вставить результат в комментарий после выделения. (Ctrl+L)
 */

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
/*
Exception: SyntaxError: unexpected token: identifier
@Scratchpad/1:12:3
*/