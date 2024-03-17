import fs from 'fs'
import http from 'http'
import https from 'https'

export const utilService = {
	httpGet,
	readJsonFile,
    download,
}

// Make an http request

function httpGet(url) {
	const protocol = url.startsWith('https') ? https : http
	const options = {
		method: 'GET',
	}
	return new Promise((resolve, reject) => {
		const req = protocol.request(url, options, res => {
			let data = ''
			res.on('data', chunk => {
				data += chunk
			})
			res.on('end', () => {
				resolve(data)
			})
		})
		req.on('error', err => {
			reject(err)
		})
		req.end()
	})
}

// Read a json file

function readJsonFile(path) {
	const str = fs.readFileSync(path, 'utf8')
	const json = JSON.parse(str)
	return json
}

// Download a resource

function download(url, fileName) {
	return new Promise((resolve, reject) => {
		const file = fs.createWriteStream(fileName)
		https.get(url, content => {
			content.pipe(file)
			file.on('error', reject)
			file.on('finish', () => {
				file.close()
				resolve()
			})
		})
	})
}
