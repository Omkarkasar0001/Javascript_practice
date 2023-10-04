const arr=[1,2,3,4,5,6]
for(const num of arr)
{
    console.log(num);
}
//output 1 2 3 4 5 6
console.log("Q2)------------------------------------------------------------------------");
const greetings="Hello Moto Mobile"
for(const num of greetings)
{
      console.log(num);
}

console.log("Q3)------------------------------------------------------------------------");
const map=new Map()
map.set("IN","INDIA")
map.set("USA","UNITED STATES")
map.set("CHN","CHINA")
map.set("FR","FRANCE")
//console.log(map);   not work as i expedcted it prinitng in function
for(const[key,value] of map)
{
console.log(key,":-" ,value);
}

const myMap=new Map()
myMap.set('name','Omkar')
myMap.set('age',24)
myMap.set(1,'one ')

//now get values
console.log(myMap.get('name'));
console.log(myMap.get(1));

//chking key exist?
console.log(myMap.has('age'));

//deleting
myMap.delete('age')
console.log(myMap.get('age'));  ///ans must have  undefined

//iterating using for of loop
for(const[key,value] of myMap)
{
console.log(key, ":-",value);
}
//using second  way
for(const [key,value] of myMap)
{
    console.log(`${key}:${value}`);
}
//iterating using for of loop
myMap.forEach((key,value)=>
{
console.log(`${key}:--${value}`);
})

// myMap.forEach(()=>
// {
//     console.log(`${key}:--${value}`);
// })

//Using Object as Key
// Const person1={name:"Omkar",Qualif:"BE "}
// Const person1={name:"Rakul",Qualif:"MBA "}

// const PerMap=new Map()
// PerMap.set(person1,1)
// PerMap.set(person2,2)

// console.log(PerMap.get(person2));   ERRORR

//Object iterartor
const myObj={name:"Omkar",color:"Black"}

for(const key in myObj)
{
    console.log(myObj[key]);
}
