
const getDataOfCity =(name) =>{
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '131372f458msha48e8910ede2937p113b4fjsnb238ae687f45',
			'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
		}
	}

	const url = `https://open-weather13.p.rapidapi.com/city/${name}`
	return fetch(url,options)
	.then(response => response.json())
	.then(data => data)
	.catch(err => console.log(err))

}
//getDataOfCity('kinshasa')

const searchCity=async()=>{
	const city=document.getElementById('city-input').value;
	console.log(city)
	const data =await getDataOfCity(city)
	showWeatherData(data)

}
const showWeatherData=(weatherData)=>{
	document.getElementById('temp').innerText=weatherData.main.temp
	document.getElementById('min-temp').innerText=weatherData.main.temp_min
	document.getElementById('max-temp').innerText=weatherData.main.temp_max
	document.getElementById('city-name').innerText=weatherData.name
	document.getElementById('weather-type').innerText=weatherData.weather[0].main
}
