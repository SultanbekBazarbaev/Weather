const KEY = '218aa3a3446c47a783b173344232304'



const getData = async (city)=>{
    let base = 'http://api.weatherapi.com/v1/current.json'
    let query = `?key=${KEY}&q=${city}&aqi=no`
    let link = await fetch(base + query)
    let data = await link.json()
    return data
}


