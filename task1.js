const Arr = [94, 67, 15, 22, 83, 38, 67, 49, 30, 15, 82, 52, 13, 73, 76, 92, 65, 95, 29, 38, 83,9,1,48,32]

console.log("-------Find sum of Even Number in an Array------")
var sum=0

Arr.forEach((value)=>{
    if(value%2==0){
        sum=sum+value
    }
}
)

console.log("Sum:"+sum)

console.log("-------Find Maximum and Minumum------")
var sum=0

Arr.sort((a,b)=>(a-b))
console.log("Minimum:",Arr[0])
console.log("Maximum:",Arr[Arr.length-1])


