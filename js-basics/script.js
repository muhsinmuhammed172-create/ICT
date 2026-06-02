// idh console il output kitty
console.log("HelloWorld")

//Idh main body kitty
document.write("Hello all")  

//ini variable initialisation 
let name1 = "Muhsin"
console.log(name1)

let n1=20
document.write(n1)

console.log(typeof(n1))
console.log(typeof(name1))

let isValid //declation
isValid=true
isValid=false
console.log(isValid)

/*
Redeclaration not allows 
let isValid=true
console.log(isValid)
*/

const pi=3.14
console.log(pi)
//cant change the value

console.log(5+10)

let a=10
let b=20
let c=30

console.log(`Sum of ${a} and ${b} is ${c}`)

c = a++         //postfix increment
console.log(c)  //10
console.log(a)  //11

let d=++a       //prefic increment
console.log(d)  //12

let x=5
x+=5
console.log(x)

let flag1 = true
let flag2 = 1
console.log(flag1 == flag2)
console.log(flag1 === flag2)

let time = new Date().getHours()
console.log(time)

if(time < 12){
    console.log("Good Morning")
}
else if(time <=18){
    console.log("Good Evening")
}
else{
    console.log("Good night")
}
let s=0
for(let i=1;i<=15;i++){
    s+=i
    console.log(i)
}
console.log(`Sum is: ${s}`)