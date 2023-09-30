const myArray=[1,2,3,4];
// console.log(myArray[2])
//3

// Push  //add values at last
myArray.push(5)
myArray.push(6)
myArray.push("Omkar")
console.log(myArray)

//Pop        //it remove value from last index
myArray.pop()
console.log(myArray)

//unShift     //add value at First
myArray.unshift(9)
console.log(myArray)

//Shift     //remove value at First
myArray.shift()
console.log(myArray)

//includes  //available or not
console.log(myArray.includes(2))

//indexOf //give index value of respected character
console.log(myArray.indexOf(3))

//join    // actually bind array and Convert it to STring
const myarr3=myArray.join()
console.log(myArray)
console.log(myarr3)

//slice      // (0) 1 ,(1) 2 ,(2) 3 ,(3) 4 ,(4) 5 ,(5) 6  it cut from 1 index but dont consider last 3rd index
console.log(myArray.slice(1,3))  //and also its doesnt change original object
//=> 1 45

//splice      // it change original array,it take peace of value splice(1,3) mean 2,3,4
const myArray1=[1,2,3,4,5]
console.log(myArray1.splice(1,3))  //and also its change the original object
//=> 2 3 4

//concat
const myArray2=[1,2,3,4,5]
console.log(myArray2.concat(11))