const londonURL = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat=51.5074&lon=0.1278&APPID=5d0bfe5cb3340bdfed8acebf9b45ddfe&units=imperial"
const seattleURL = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat=47.6762&lon=-122.3182&units=imperial&APPID=5d0bfe5cb3340bdfed8acebf9b45ddfe"
const seattle = "Seattle"
const london = "London"

window.onload = function() {
	console.log("linked")
}

function getWeather(city) {
	console.log(city)
	document.getElementById("container").innerHTML = ""
	console.log("clicked on " + city)
	let h4 = document.createElement("h4")
	h4.innerHTML = "Today in " + city + ":"
	document.getElementById("container").appendChild(h4)

}

function getSeattleWeather() {
	getWeather(seattle)
	callApi(seattleURL)
}

function getLondonWeather() {
	getWeather(london)
	callApi(londonURL)
}

function callApi(city) {
	let request = new XMLHttpRequest()
	request.open("GET", city, true)
	request.onload = onLoadFunc
	request.onerror = onerrorFunc
	request.send()
	return request
}

function onLoadFunc() {
	const resp = JSON.parse(this.response)
	console.log(resp)
	printListItem("Conditions: " + resp.weather[0].main)
	printListItem("Current Temperature: " + resp.main.temp + " °F")
	printListItem("Max Temperature Today: " + resp.main.temp_max + " °F")
	printListItem("Min Temperature Today: " + resp.main.temp_min + " °F")
}

function onerrorFunc() {
	console.log("Oh No!")
}

function printListItem(message) {
	let p = document.createElement("p")
	p.innerHTML = message
	document.getElementById("container").appendChild(p)
}
