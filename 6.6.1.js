function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');
    if (word.toLowerCase() === reversedWord.toLowerCase()) {
        console.log(`Слово '${word}' является палиндромом.`);
    } else {
        console.log(`Слово '${word}' не является палиндромом.`);
    }
}

const word = 'шаги'; 
isPalindrome(word);