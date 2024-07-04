let form = document.querySelector('form')
form.addEventListener("submit",async function(e){
    e.preventDefault()
    let input=document.querySelector('input').value
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=07a5d6759fa5f87be44a571c9898cf8b`;
    
    let result=await fetch(api)
    let res = await result.json()
    console.log(res)
    // console.log("name",res.main.temp)
    // console.log( "clouds",res.clouds)
    // console.log("temp",res.main.temp)
    // console.log("wind",res.wind)
    // console.log("wind speed",res.wind.speed)
  // let p =document.querySelector("p")
  // p.innerHTML=res.name
  // let p1 = document.querySelector(".temp")
  // let temp = Math.round(res.main.temp-273.15) 
  // p1.innerHTML=temp
  // console.log(temp)
  if(res.cod != 404){
  
  let temp = document.querySelector(".cloud")
  temp.innerHTML = `${Math.round(res.main.temp-275.15)}°C`
  let feel_like = document.querySelector(".feel-like")
  feel_like.innerHTML=` Feel like ${Math.round(res.main.feels_like-275.15  )}°C `
  let city = document.querySelector(".cloud1")
  city.innerHTML=res.name
  let humadity = document.querySelector(".humadity-p")
  humadity.innerHTML = `Humadity ${res.main.humidity}%`
  let wind  = document.querySelector(".wind") 
  wind.innerHTML=`wind  ${res.wind.speed} Km/h `
  display.style.img="black"
  input.innerHTML= '';
}
  else{
    alert("Plz Enter A valid City Name")
  }
}) 