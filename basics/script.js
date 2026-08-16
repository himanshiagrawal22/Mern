// foreach 
var arr = [1,2,3,4];
arr.forEach(function(val){
    console.log(val + "hello");
})

//Map
var arr2 = [1,2,3,4];
let ans = arr2.map(function(val){
    return val + 12;
})
console.log(ans);

//Filter
let arr3 = [1,2,3,4,5,6,7,8,9];
let res=arr3.filter(function(val){
    if(val > 3){ return true;}
    else return false;
})
console.log(res);

//Find
let arr4 = [3,6,9,12];
let result=arr4.find(function(val){
    if(val == 6){ return true; }
})
console.log(result);

//Index of
let ans1=arr4.indexOf(9);
console.log(ans1);


//Object
var obj={
    name: "Himanshi",
    age : 21,
}
Object.freeze(obj);
obj.age=22;


//Async JS Coding
async function xyz(){
    var blob = await fetch("");
    var ans=blob.json();
}
console.log(ans);