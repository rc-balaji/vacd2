var Arr = [94, 67, 15, 22, 83, 38, 67, 49, 30, 15, 82, 52, 13, 73, 76, 92, 65, 95, 29, 38, 83,9,1,48,32]

// console.log("-------Find index of an element in an Array------")

// // const search=Number(prompt(Arr+"   Enter search element:"))
// const search=Number(prompt("Enter search element:"))
// var t=0
// Arr.forEach((value,index)=>{
//     if(value===search){
//         t=index
//         return
//     }
// }
// )
// t==0?console.log("Not Found"):console.log(`${search} is found at index ${t}`)

// // Arr =[1,2,3,4,5]
// var t1=0
// for(let i=0;i<Arr.length;i++){
//     if(Arr[i]>Arr[i+1]){
//         t1=1;
//         break;
//     }
// }

// t1==0?console.log("Sorted in Ascending"):console.log("Not Sorted in Ascending")


var set= new Set(Arr)
Array.from(set).length===Arr.length?console.log("No Dublicate!!!"):console.log(`Duplicates Found!!!\nArray without Duplicates:[${Array.from(set)}]`)