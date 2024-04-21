
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0998706acamsh4a33989ca3bceb7p109150jsnd3f8c25fd13d',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getweathercity = (city) => {
    cityName.innerHTML=city
    
    async function weatherapp() {
        try {
            
            const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options);
            const result = await response.json();
            console.log(result)
            cloud_pct.innerHTML = result.cloud_pct
            temp.innerHTML = result.temp
            temp2.innerHTML = result.temp
            feels_like.innerHTML = result.feels_like
            humidity.innerHTML = result.humidity
            humidity2.innerHTML = result.humidity
            min_temp.innerHTML = result.min_temp
            max_temp.innerHTML = result.max_temp
            wind_speed.innerHTML = result.wind_speed
            wind_speed2.innerHTML = result.wind_speed
            wind_degrees.innerHTML = result.wind_degrees
            sunrise.innerHTML = result.sunrise
            sunset.innerHTML = result.sunset
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


