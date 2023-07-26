var person=[
    {name:'Ram',age:12},
    {name:'John',age:22},
    {name:'Raj',age:16},
    {name:'Anu',age:32},
    {name:'Abi',age:14},
    {name:'Abin',age:-14},
] 


person.forEach((value)=>{
    value.age>=18?console.log(`${value.name} is an Adult and the age is ${value.age}`):14<=value.age && value.age<=18?console.log(`${value.name} is an teenager and the age is ${value.age}`):1<=value.age && value.age<=14? console.log(`${value.name} is an child and the age is ${value.age}`):console.log("Invalid Age")
    // if(1<=value.age && value.age<=14){
    //     console.log(`${value.name} is an child and the age is ${value.age}`)
    // }else if(14<=value.age && value.age<=18){
    //     console.log(`${value.name} is an teenager and the age is ${value.age}`)
    // }else if(value.age>=18){
    //     console.log(`${value.name} is an Adult and the age is ${value.age}`)
    // }else{
    //     console.log("Invalid Age")
    // }
}

)