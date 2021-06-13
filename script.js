// if else

let userData=[
    {userName : "User1",password : "User1password"},
    {userName : "User2",password : "User2password"},
    {userName : "User3",password : "User3password"},
    {userName : "User4",password : "User4password"},
]

let promtValue = prompt("Plz enter your password");

for (i=0;i<userData.length;i++) {
    if (promtValue===userData[i].password){
        console.log("Welcome :",userData[i].userName)
    }else{
        console.log("Your Password Is Incorrect")
    }
}

// switch

let promtValue = prompt("Plz enter number from 1 to 4")/1;

switch(promtValue){
    case 1:
        console.log("Value is 1");
        break;
    case 2:
        console.log("Value is 2");
        break;
    case 3:
        console.log("Value is 3");
        break;
    case 4:
        console.log("Value is 4");
        break;
    default:
        console.log("Out Of Range");
        break;               
}




