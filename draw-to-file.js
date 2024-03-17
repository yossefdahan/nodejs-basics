import fs from 'fs'

// drawSquareToFile()
function drawToFile(str) {
    return new Promise((resolve, reject) => {

        fs.writeFile('data/nums3.txt', str, 'utf8', (err) => {
            if (err) return console.log('Cannot read file')
        })
        resolve()
    })
}

function drawSquareToFile() {
    const str = getSquare(getRandomIntInclusive(3, 20))

    drawToFile(str)
        .then(() => {
            setTimeout(drawSquareToFile, 5000)
        })
}

function getSquare(size) {
    var str = '*'.repeat(size) + '\n'
    for (let i = 0; i < size; i++) {
        str += '*' + ' '.repeat(size - 2) + '*\n'
    }
    str += '*'.repeat(size) + '\n'
    return str
}



function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}