let num=12

function checkEven(a){
        if(a%2==0){
            console.log(`${a} is a even no.`)
        }
        else{
            console.log(`${a} is a odd no.`)
        }
}

checkEven(num)
checkEven(13)

//reference types
//objects

/*
let student={
    name:"Muhsin",
    id:102,
    class:"Mca"
}
console.log(student)
console.log(`Name:${student.name}`)
console.log(`id:${student.id}`)
console.log(`Class:${student.class}`)

function add(a,b){
    return a+b
}

let ans=add(5,6)
console.log(ans)
*/

//New type that usually using in the Js
//Arrow Function Method

let greet =() =>{
    alert("Good Morning")
}

//Array

let fruits =["Apple","Mango","Pineapple"]
console.log(fruits)
console.log(fruits[0])
console.log(fruits[-1])

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}


console.log(fruits.slice(0,3))
console.log(fruits.at(-1))

//map fn is used to modify the array 

let m=[1,2,3,4]

let res= m.map(m=> 2*m)

console.log(res)

let price=[100,200,400]
let gstprice=price.map(price=>price+18)
console.log(gstprice)