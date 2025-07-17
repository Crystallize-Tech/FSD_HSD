// let n = 5
// a = 1

// for(let i =1;i<=n;i++){
//     a = a*i //1 ,  2 , 6 , 24 , 120 
// }

// console.log(`Factorial of ${n} is :  ${a}`)

// let num = 1234
// let rev = 0


// while(num!=0){      // num = 1234 , 123 , 12
//     a = num%10    // a = 1234%10 = 4  , 123%10 = 3 , 12%10 = 2 , 1
//     rev = rev*10 + a     //  4 , 40+3 = 43 , 430 + 2 = 4321 
//     num = Math.floor(num/10)     //  1234 / 10 = 123 /10 =12 / 10 =   1 /10 = 0 
// }

// console.log(rev)

// Functions : Block of code used for specific task.

// global scope
// a = 50

// function f_name(a = 10){ // parameters // default arguments
//     // local scope
//     b = 30
//     return b
// }

// console.log(f_name()) // function call arguments

// function newF(){
//     console.log(b)
// }
// newF()

// function expression
// let f_name = function (){
//     console.log("Hello ")
// }

// f_name()

// Arrow Function = ES6
// let f_name = (a) =>{
//     console.log("Arrow Function",a)
// }
// f_name(10)


// Object: part/instense of a class and class : collection of objects

// let obj = {
//     name:"Newname",
//     age:20
// }
// console.log(obj.age)

// class CName {
// // Cunstructor function
//     constructor(name,age){
//         this.name = name
//         this.age=age
//     }

//     greet(){
//         console.log(`the name is ${this.name} and age is ${this.age}`)
//     }

// }

// let obj = new CName("Class_Name",20)
// obj.greet()