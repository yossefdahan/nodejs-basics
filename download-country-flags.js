import { resolve } from "path"
import { utilService } from "./services/util.service.js"

downloadCountryFlags()

function downloadCountryFlags() {
    const countries = getCountries()
    console.log('Countries:', countries.map(c => c.name))
    downloadFlags(countries).then(() => {
        console.log('Your flags are ready')
    })
}

function getCountries() {
    const countries = utilService.readJsonFile('flags/countries.json')
    var sorted = countries.sort((a, b) => b.population - a.population).slice(0, 5)
    return sorted
}

function downloadFlags(countries) {
return new Promise((resolve, reject) => {
        const flags = countries.map(country =>
            utilService.download(country.flags.png, `flags/img/${country.name.common}.png`))
        return Promise.all(flags)
            .then(() => {
                console.log('flags!!!');
            })
            .catch(err => {
                console.log('problem!!!!!', err)

            })
    })
}