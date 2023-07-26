// console.log("Hello")

var a=10;

// console.log(a)


// let name="Balaji"
// let age =12
// let clg=false
// let tech=["app","web","web"]
// let app={
//     name:'john',
//     age:23,
//     develop:"Full Stack Developer"
// }

// let sal=null

// console.log(`My name is ${name} and my age is ${age} ,i Studied ${clg} in ${tech} ,My intrest ${app.develop} ,My Salery ${sal}`)

// alert("Helloo")

// var a=prompt("Enter N:")
// console.log(a)


// var a=prompt("Enter A:")
// var b=prompt("Enter B:")

// alert(`${a} + ${b} = ${a+b}`)

// console.log(`${a} + ${b} = ${a+b}`)


// var name=prompt("What's your Name:")

// alert("Welcome "+name+"!!!")


// const person={
//     id:7,
//     name:"Balaji",
//     age:21,
//     salery:5,

// }

// person.age=23
// document.write(person.id+"<br>")
// document.write(person.name+"<br>")
// document.write(person.age+"<br>")
// document.write(person.salery+"<br>")


// var a=["KGF","3","Hello"]

// var b=a[1]

// console.log(b)

// b=4
// a.unshift("d")
// console.log(a)

// a.splice(2,0,"Hai")

// console.log(a)

// a.splice(2,1)

// console.log(a)

// const product=[
//     {name:"Ce",price:100},
//     {name:"Mel",price:2000},
//     {name:"Ko",price:300},
//     {name:"lslo",price:150},
//     {name:"Pello",price:250},
    
// ]

// product.forEach((value,index)=>{
//     if (value.price<=200 || value.name.length<=3) {
//         console.log(value.name)
//     }
// })


// const movie=[
//     {name:"KGF",director:"Nelson",year:2012},
//     {name:"Friends",director:"Mano",year:2002},
//     {name:"Jilla",director:"John",year:2017},
//     {name:"Nanban",director:"Gobi",year:2015},
//     {name:"Veeram",director:"Gowntham",year:2017},
// ]

// console.log("after 2010 Movie:-")
// movie.forEach((value,index)=>{
//     if(value.year>2010){
//         console.log(value.name)
//     }
// }

// )

// console.log("2017 Movie:-")
// movie.forEach((value,index)=>{
//     if(value.year===2017){
//         console.log(value.name)
//     }
// }

// )

// console.log("John movie:-")
// movie.forEach((value,index)=>{
//     if(value.director==="John"){
//         console.log(value.name)
//     }
// }

// )


// const users=[
//     {id:1,name:'john',age:25},
//     {id:2,name:'jane',age:30},
//     {id:3,name:'alice',age:28},
//     {id:4,name:'bob',age:22},
// ]

// users.forEach((value,index)=>{
//     if(value.age>20 && value.age<30){
//         console.log(value.name)
//     }
// }
// )

// console.log("----------------")
// users.forEach((value,index)=>{
//     if(value.name.length>4){
//         console.log(value.name)
//     }
// }
// )

// console.log("----------------")
// users.forEach((value,index)=>{
//     if(value.name.length>4){
//         console.log(value.name)
//     }
// }
// )


const prog=[
    {name:'JavaScript',type:'Scripting',year:1995},
    {name:'Python',type:'Scripting',year:1991},
    {name:'Java',type:'Compiled',year:1995},
    {name:'C++',type:'Compiled',year:1985},
]

console.log("----------------")
prog.forEach((value,index)=>{
    if(value.year>=1990 && value.type=='Compiled'){
        console.log(value.name)
    }
}
)

console.log("----------------")
prog.forEach((value,index)=>{
    if(value.year>=1990 && value.type=='Compiled'){
        console.log(value.name)
    }
}
)