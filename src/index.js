const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const letterList = new Array

    for (let i = 0; i < expr.length; i += 10) {
        letterList.push(expr.slice(i, i + 10))
    }

    letterList.forEach((encodedLetter, index) => {
        if (encodedLetter === '**********') {
            letterList[index] = ' '
            return
        }

        characterList = new Array

        for (let i = 0; i < encodedLetter.length; i += 2) {
            characterList.push(encodedLetter.slice(i, i + 2))
        }

        characterList = characterList.filter(item => item !== '00')

        characterList.forEach((char, index) => {
            if (char === '10') {
                characterList[index] = '.'
            } else {
                characterList[index] = '-'
            }
        })

        letterList[index] = MORSE_TABLE[characterList.join('')]
    })

    return letterList.join('')
}

module.exports = {
    decode
}