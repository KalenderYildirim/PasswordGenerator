const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let generatOr = document.getElementById("generat-or")
let numberOne = document.getElementById("number-one")
let numberTwo = document.getElementById("number-two")
let passwordLength = 8

// first create random character

function getRandomCharacter() {
    let character = Math.floor(Math.random() * characters.length)
    return characters[character]
}

// create a function using loops to get random password

function getRandomPassword() {
    password = ""
    for (let i = 0 ; i < passwordLength; i++) {
       password += getRandomCharacter()
    } return password
}

// define generate() to display passwords

function generate() {
    let passwordOne = getRandomPassword()
    numberOne.textContent = passwordOne;
    let passwordTwo = getRandomPassword()
    numberTwo.textContent = passwordTwo;
}
