const sum=(a,b)=>{
    return a+b
}
//sum(4,5)  //Print kelich nahi
console.log(sum(4,5));

/*In regular functions, this is dynamically scoped. It refers to the object that the function is a property of or the object that the function is called on. Its value is determined by how the function is called.

In arrow functions, this is lexically scoped. It takes on the value of the this keyword in the surrounding code and does not get rebound when the function is invoked. This means it retains the value of this from its defining scope.*/
//


//IIFE
(function chai()
{
    console.log("DB Connected");
})();//Semicolon is must here

//using arrow function
((name)=>{
  console.log('DB is Connected two ${name}');
})('Omkar');
((name)=>{
    console.log(`DB is Connected two ${name}`);  //use ` near to esc ,not ' near to enter
  })('Omkar');
  