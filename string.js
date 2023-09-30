const myName="Omkar"

//length
console.log(myName.length)

//toUpperCase
console.log(myName.toUpperCase())

//charAt  //it Give chat at 4th index
console.log(myName.charAt(4))

//indexOf //it  give index value of respective char
console.log(myName.indexOf('r'));

//SubString
console.log(myName.substring(1,4));   //0)o 1)m 2)k 3)a 4)r  =>mka

//Slice
console.log(myName.slice(1,4));   //0)o 1)m 2)k 3)a 4)r  =>mka  same as substring but using slice we use negative value
console.log(myName.substring(-2,3));   //0)o 1)m 2)k 3)a 4)r  =>omk (only Slice can have negative value)

