// // ----------------------------example------------------;
// let number = 0;
// let sum = 0;

// for (let i = 0; i < 10; i += 1) {
//   number = prompt("Enter your number:");
//   sum = sum + Number(number);

//   console.log(`Your number: ${number}, current sum: ${sum}`);
// }

// console.log(`Total sum: ${sum}`);

// let cost;
// const experience = "profi";

// switch (experience) {
//   case "profi":
//     cost = 800;
//     break;
//   case "mid":
//     cost = 500;
//     break;
//   case "looser":
//     cost = 200;
//     break;
//   default:
//     console.log("Invalid subscription type");
// }
// console.log(cost);
// ============== перебор массива
// const arr = [1,2,3,4,5];

// console.log(arr.length ===0);

// for(let i=0; i<arr.length; i++) {
    
//     console.log(arr[i]);
// }
//  =========== добавление массива

// const arr = [1,2,3,4,5];
// const arr2 =[];
// for(let i=0; i<10; i++) {
//     arr2[i] =i+1;
// }
// console.log(arr2);

// ============ цыкл for off
// const arr = [1,2,3,4,5];
//  for (let el of arr) {
// console.log(el);
//  }
// ============добавление данных с одного массива в другой

// const arr = [1,2,3,4,5];
// const arr2 = [];
//  for (let el of arr) {
// arr2.push(el)
//  }
//  console.log(arr2);
// ============== присвоение по ссылке (как ярлык на рабочем столе)
// const arr = [1,2,3,4,5];
// const arr2 = arr;
// arr.push('Hello');
// console.log(arr2);
//============ Выбор до элемента из массива
// let arr =[1,2,3,4,5,6,7,8,9,10]

// for (let el of arr) {
//     if (el===5) {
//         console.log(el);
//         break
//     }
//     console.log(el);
// }
// ===========Выбор после элемента из массива

// let arr =[1,2,3,4,5,6,7,8,9,10]

// for (let el of arr) {
//     if (el<5) {
//         continue
//     }
//     console.log(el);
// }
// ========================= посмотреть в конспекте сумма матрицы
// let arr =[
// [1,2,3],
// [4,5,6],
// [7,8,9],
// ]
// let sum = 0
// for (let i of matrix) {
    
//  for (let j of ) {
//     sum +-j
// }
// }

// console.log(sum);
// =============================== split() и join()
// let str = "Hello world, I'm Johny";
// let res = str.split("  ").join ("  ");
// console.log(res);
// ================ проверка фразы на палиндром ( пишется в обе стороны одинаково)
// const str = 'aBBA';

// const res = str.split ('').reverse().join('');

// console.log(res.toUpperCase() === str.toUpperCase());

//====================== метод includes

// let arr =[1,2,3,4,5,6,7,8,9,10]

// console.log(arr.includes (10));

//================ еще раз попробовать

// let arr =[1,2,3,4,5,6,7,8,9,10]
// if ( arr.includes(1) && arr.includes(11))
// console.log('includes' );

//==============
// let arr =[1,2,3,4,5,6,7,8,9,10];
// let a=10;
// if ( arr.includes(a) ){
// console.log("includes")}
// else {
//     console.log("not");
// }
//======================== Методы массивов push(), pop(), shift(), unshift()

// let arr = [];

// arr.push('1');
// arr.push('2');
// console.log(arr);
// console.log(arr.pop());
// console.log( arr);
// arr.unshift('0');
// console.log(arr);
// arr.shift();
// console.log(arr);

//============= метод slice

// let arr =[1,2,3,4,5,6,7,8,9];
// let newArr = arr.slice (3);
// console.log(arr);
// console.log(newArr);

// ================= метод splice

// let arr = [1,2,3];
// arr.splice (1,0, 'hello');
// console.log(arr);

//================== метод concat()

// let arr1 =[1,2,3,4,5];
// let arr2 =[6,7,8,9,10];
// const arr3=arr1.concat(arr2);
// console.log(arr3);
// ============
// let arr1 =[1,2,3,4,5];
// let arr2 = arr.concat();
// arr.push(4);
// console.log(arr2);
