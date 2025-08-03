
    const apiKey="30488f2067179cb9ac0b3336fe50072b";
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon=document.querySelector(".weather-icon")

    async function shivamRaj(city) {

        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        
        var data = await response.json();
        
        console.log(data);
        

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src ="images/clouds.png";

        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src ="images/cleare.png";

        }
         else if(data.weather[0].main == "CloudRains"){
            weatherIcon.src ="images/rain.png";

        }
         else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src ="images/drizzle.png";

        }
         else if(data.weather[0].main == "Mist"){
            weatherIcon.src ="images/mist.png";

        }

       
        document.querySelector(".weather").style.display = "block";
    }
    searchBtn.addEventListener("click", ()=>{
        shivamRaj(searchBox.value);  
    })

  
