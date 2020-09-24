const userPassword = "jqueryismyjam";

const ADMIN_PASSWORD = "jqueryismyjam";

const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_IS_ALLOWED = "Добро пожаловать!";
const ACCESS_DENIED = "Доступ запрещен, неверный пароль!";
let message;
if (userPassword === "jqueryismyjam") {
  message = "Добро пожаловать!";
} else if (userPassword === null) {
  message = "Отменено пользователем!";
} else if (userPassword === "") {
  message = "Отменено пользователем!";
} else if (userPassword != "jqueryismyjam") {
  message = "Доступ запрещен, неверный пароль!";
} else {
  console.log("Invalid subscription type");
}
// Write code under this line

console.log(message);

//если userPassword равно 'jqueryismyjam'
// то значение message будет равно
// 'Добро пожаловать!'

//если userPassword равно  null
// то значение message будет равно
// 'Отменено пользователем!'

//если userPassword равно '123'
// то значение message будет равно
// 'Доступ запрещен, неверный пароль!'

//============= C конспекта ============
// let cost;
// const subscription = 'premium';

// if (subscription === 'free') {
//   cost = 0;
// } else if (subscription === 'pro') {
//   cost = 100;
// } else if (subscription === 'premium') {
//   cost = 500;
// } else {
//   console.log('Invalid subscription type');
// }

// console.log(cost); // 500
