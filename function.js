//Q1
function addNum(num1,num2){
 return num1+num2
}

addNum(10,12)                //it will not print
console.log(addNum(10,12))      //now it will print

//Q2
function addNumber(number1,number2)
{
    let result=number1+number2
    return result
}
addNumber(10,12)

//Q3
function addNumber(number1,number2)
{
    let result=number1+number2
    return result
}
const result=addNumber(10,25)
console.log("result :",result)


//Q4
function loginUserMessage(username){
    if(username==="Omkar123")
    {
        console.log("User just logged in");
    }
    else
    console.log("Wrong UserName");
}
loginUserMessage("Omkar")

//Q5   //Senario when user enter emptyusername(undefined),Wrong username,Correct Username
function loginUserMge(username){
    if(username===undefined)
    {
        console.log("Pls enter a Username");
        
    }
    else if(username==="Omkar123")
    {
        console.log("User just logged in");
    }
    else
    console.log("Wrong UserName");
}
loginUserMge() //Undefined  //Correct =>"Omkar123"


//Q6
const  user={
    username:"Omkar123",
    price:180
}

function myFunction(user)
{
  console.log(`Username is ${user.username} and price is ${user.price}`)
} 

//Q7 another efficient way 
console.log("---Question No 7---");
const  user1={
    username:"Omkar123",
    price:180
}

function myFunction1(anyobject)
{
  console.log(`Username is ${username} and price is ${price}`)
} 

myFunction(user);

//Function with Array
const myNewArray=[200,300,400]
function returnSecValue(anyname){
    return anyname[1]
}
console.log(returnSecValue(myNewArray));

