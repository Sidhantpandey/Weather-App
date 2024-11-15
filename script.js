const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '0998706acamsh4a33989ca3bceb7p109150jsnd3f8c25fd13d',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
    }
};
const getweathercity = (city) => {
    cityName.innerHTML=city
    
    async function weatherapp() {
        try {
            
            const response = await fetch(`https://open-weather13.p.rapidapi.com/city/${city}/EN`, options);
            const result = await response.json();
            console.log(result)
            cloud_pct.innerHTML = result.weather[0].main
            temp.innerHTML = result.main.temp
            temp2.innerHTML = result.main.temp
            feels_like.innerHTML = result.main.feels_like
            humidity.innerHTML = result.main.humidity
            humidity2.innerHTML = result.main.humidity
            min_temp.innerHTML = result.main.temp_min
            max_temp.innerHTML = result.main.temp_max
            wind_speed.innerHTML = result.wind.speed
            wind_speed2.innerHTML = result.wind.speed
            wind_degrees.innerHTML = result.wind.deg
            sunrise.innerHTML = result.sys.sunrise
            sunset.innerHTML = result.sys.sunset
        } catch (error) {
            console.error(error);
        }

    }
    weatherapp()

}
document.querySelector('#submitrequest').addEventListener('click',function(e){
    e.preventDefault()//page reload nhi krega // aage nhi bhejaga kuch 
    getweathercity(cityll.value)

})
document.querySelector('#dropdowndelhi').addEventListener('click',function(e){
    e.preventDefault()
    getweathercity("Delhi")
})
document.querySelector('#dropdownkolkata').addEventListener('click',function(e){
    e.preventDefault()
    getweathercity("Kolkata")
})
document.querySelector('#dropdownayodhya').addEventListener('click',function(e){
    e.preventDefault()
    getweathercity("Ayodhya")
})

getweathercity("Ayodhya")


