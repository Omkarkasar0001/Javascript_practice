const myarr=[1,2,3,4,5,6,7,8,9]

const print=myarr.filter((numo)=>(numo>4))
console.log(print);

//or
const myarr=[1,2,3,4,5,6,7,8,9]

const print=myarr.filter((numo)=>{return numo>4})
console.log(print);