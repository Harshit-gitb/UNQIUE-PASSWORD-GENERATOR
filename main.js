// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
// "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2","3", "4", "5", 
// "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".",
// "?","/"];
// let input = document.getElementById('inputPass')
// let Passone = document.getElementById("passwordone")
// let Passtwo = document.getElementById("passwordtwo")
// let genBtn = document.getElementById("GenBtn")

// genBtn.addEventListener('click',password)
// function password(){
  
//     let pass1 = ""
//     let passwordL = input.value
//     if( passwordL < 7 && passwordL > 15)
//     {
//         pass1 = "entered a wrong no. of password";
//     }
//     else
//     {
//         for (let i = 0; i < passwordL; i++)
//         {  
//         let randomNumber =  Math.floor(Math.random() * characters.length)
//         pass1 += characters[randomNumber]
//         } 
//     } 
//     Passone.textContent = pass1
// }
// Passone.textContent

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8",
"9","0"];
let input = document.getElementById('inputPass')
let Passone = document.getElementById("passwordone")
let Passtwo = document.getElementById("passwordtwo")
let genBtn = document.getElementById("GenBtn")

genBtn.addEventListener('click',password)
function password(){
  
    let pass1 = "" 
    let pass2 = ""
    let passwordL = input.value
    if( passwordL < 7 || passwordL > 15)
    {
        pass1 = "entered a wrong digit of password";
        pass2 = "entered a wrong digit of password";
    }
    else
    {
        for (let i = 0; i < passwordL; i++)
        {  
        let randomNumber =  Math.floor(Math.random() * characters.length)
        pass1 += characters[randomNumber]
        let randomNumber1 =  Math.floor(Math.random() * characters.length)
        pass2 += characters[randomNumber1]
        } 
    } 
    Passone.textContent = pass1
    Passtwo.textContent = pass2
    input.value = ""
}
Passone.textContent
Passtwo.textContent


