const list = document.querySelector('.list')
const temp = document.querySelector('.tempo-num')
const loc = document.querySelector('.form-search')


const updateUI = (weather) => {
    console.log(weather);
    list.innerHTML = `
    <div class="list-flex">
        <p class="list-head">${weather.location.name}, </p>
            <p class="list-count">${weather.location.country}</p>
            </div>
            <p class='list-main'>${weather.current.condition.text}</p>
    <div class="tempo">
        <span class="tempo-num">${Math.round(weather.current.temp_c)}</span>
        <span>°C</span>
    </div>
    `
    
}

const getWeather = async (city) => {
    const data = await getData(city)
    return data
}



loc.addEventListener('submit', (element) => {
    element.preventDefault()
    const input = loc.city.value.trim()
    loc.reset()
    getWeather(input).then((data) => updateUI(data))
    
})
