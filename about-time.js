import fs from 'fs'
import ms from 'ms'


function demoAsync() {
    fs.readFile('data/nums.txt', 'utf8', (err, contents) => {
        if (err) return console.log('Cannot read file')

        var nums = contents.split('\r\n')

        nums.forEach(num => {
            console.log(ms(+num, { long: true }))
        })
    })
}
demoAsync()