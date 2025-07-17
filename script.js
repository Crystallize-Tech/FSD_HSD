// External Scripting
// console.log("Terminal Output.")


// variables : container to store any kind values.
// aph,digis,_ 2. cnt strt with digits 3. sud strt with _, aph 4. no white spaces

a_02 = 10
// console.log(a_02)
// variable types in js : block scoped & Function scoped

// types of naming variables : var , let, const
// var Function scoped, declare, redeclared, re assign , old version
// var a = 10 // declare
// var a = 30 // re declare
// a = 20 //re assign

// console.log(a)

// let b = 10 // declare, block scoped, ECMAScript6
// let b = 20 // cannot re-declare
// b = 30 // re assign

// console.log(b)

// const c = 10 // block scoped
// const c = 20 // no re-declare
// c = 30 // no re-assignment
// console.log(c)


//  Data Types : different classifications of data items : primitive and non-primitive. 

// Number
// let a = 10
// let d = 10.2
// console.log(typeof(d), d)
// String
str_a = "String"
str_b = 'strings'
console.log(typeof(str_a))

// Boolean
console.log(true)

// Null
a_empt = null
console.log(typeof(a_empt))

// Undefined
let u ;
console.log(typeof(u))

// Symbol
sym = Symbol("abc")
console.log(typeof(sym))

// Object : key value pairs

const obj = {
    name : "ABC",
    age : 20,
    id : "new_id"
}
console.log(typeof(obj))


// Operators : 
// Arithmetic : +-*/ ,**, %  ,
//  Assignment : =, +=,-=,*=,/= 
a_a = 10
a_a =  a_a / 1
console.log(a_a)  
// , logical: &&, ||, !
// , comparison : ==, <=, >=, <> , === (Strict equals)
a = 10
b = "10"

// conditional statements
// if (a===b) {
//     console.log("equal")

// }else if (a==b) {
//     console.log("else if statement")
//     }else if (a>b){
//         console.log("greater")
//     }
// else {
//     console.log("not equal")
// }

//  Loopings : for , while, do while
// var a = 0
// var b = 1
// // 0 1 1 2 3 5 8
// for (let i = 0;i<=10;i++){
//     temp = a+b
//     a = b 
//     b = temp 
//     console.log(i,temp) 
    
// }


//  0 , 1 , 1 ,2 , 3 , 5 , 8, 13, 21

// let i = 0
// while (i<=10){
//     console.log(i)
//     i++
// }

//  Factorial of a number , 
//  reverse of a number 1234, 4321

// let  i = 0
// do{
//     console.log(i)
//     i++
// }while(i<10)