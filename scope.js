//Scope
function one(){
    const username="Omkar"
    function two(){
        const website="youtube"
        console.log(username)
      
    }
    
    two()

}


if(true)
{
    const username="omkar"
    if(username==="Omkar")
    {
        const website="youtube"
        console.log(username+website)
    }
   // console.log(website);  not execute bcz scope is ended
}
//console.log(username);    not execute bcz scope is ended