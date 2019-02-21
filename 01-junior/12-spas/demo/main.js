let {choices} = require('./quiz')

let header = document.getElementById('header')

let quiz = document.getElementById('quiz')
let btn = document.getElementById('getBoys')


btn.addEventListener('click', (e) => {
	window.fetch('/backstreet')
	.then(httpRes => {
		console.log("our res", res)
		return httpRes.json()
	})
	.then(boys => {
		console.log("OUR BAND", boys)
		boys['backstreetBoys'].forEach(member => {
			let node = document.createElement('li').innerHTML = `** ${member} </br>`
			quiz.append(node)
		})
	})
	.catch(err => console.log(err))
})