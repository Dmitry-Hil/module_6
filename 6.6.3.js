const userInput = prompt("Пожалуйста, введите любое число:");
const userNumber = Number(userInput);

if (!isNaN(userNumber)) {
    const numberArray = Array.from({ length: userNumber + 1 }, (_, index) => index);
    
    console.log(numberArray);
} else {
    console.log("Вы ввели некорректное число. Пожалуйста, попробуйте снова.");
} 