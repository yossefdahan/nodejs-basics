import fs from 'fs'

function readFileContentsAsync(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, contents) => {
            if (err) reject('Cannot read file')
            else resolve(contents)
        })
    })
}

function demoAsync() {
    readFileContentsAsync('data/nums2.txt')
        .then(contents => {
            const nums = contents.split(/\r?\n/).filter(line => line).map(Number)
            const totalSum = nums.reduce((acc, cur) => acc + cur, 0)
            console.log('Sum:', totalSum)
        })
        .catch(err => console.log(err))
}

demoAsync()
