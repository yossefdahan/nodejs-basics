import { utilService } from './util.service.js'

// getAns()
//     .then(res => console.log(res))

function getAns() {
	return utilService.httpGet('https://yesno.wtf/api')
}

// const cars = getCars()
// console.log(cars)

function getCars() {
    const cars = utilService.readJsonFile('./data/car.json')
    return cars
}

utilService.download('https://images.pexels.com/photos/87452/flowers-background-butterflies-beautiful-87452.jpeg?cs=srgb&dl=pexels-pixabay-87452.jpg&fm=jpg', './data/flower.jgp')