let now = new Date();

let timeDiv = document.querySelector("#current-time");
let hours = now.getHours();
let minutes = now.getMinutes();
timeDiv.innerHTML =`${hours}: ${minutes}`;
if (hours > 10){
    hours = `0${hours}`;
}
if (minutes > 10){
    minutes = `0${minutes}`;
}
let dateDiv= document.querySelector("#current-date")
let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let date = weekdays[now.getDay(6)];
dateDiv.innerHTML= `${date}`;

function displayCityResults(response){
    console.log(response.data);
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);


    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
    document.querySelector("#type").innerHTML = Math.round(response.data.weather[0].main);
}

    function handleSubmit (event){
      event.preventDefault();
        let city = document.querySelector("#city-input").value;
        searchCity(city);
           }

    
    function searchCity(city){
         let apiKey = "a35a6fc9aa256480d5ede5662dad54ec";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(displayCityResults);
    }


    function currentLocation (event){
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(SearchLocation);
    }

    function SearchLocation (position){
        let apiKey = "a35a6fc9aa256480d5ede5662dad54ec";
        let apiUrl =  `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`;
        axios.get(apiUrl).then(displayCityResults);
    }

    let searchForm = document.querySelector("#search-form");
    searchForm.addEventListener("submit", handleSubmit);

    let currentLocationButton = document.querySelector("#current-location");
    currentLocationButton.addEventListener("click", currentLocation)
    
    
    searchCity(`London`);
          // function convertToFahrenheit(event){
            //    event.preventDefault();
          //  let temperatureElement = document.querySelector("#temperature");
          //  temperatureElement.innerHTML = 87
          //  }

           // function convertToCelcius(event){
           //     event.preventDefault();
            //    let temperatureElement = document.querySelector("#temperature");
            //    temperatureElement.innerHTML = 24
         //  }

        
            //let fahrenheitLink = document.querySelector("#fahrenheit-link");
            // fahrenheitLink.addEventListener("click", convertToFahrenheit);

           //  let celciusLink = document.querySelector("#celcius-link");
           // celciusLink.addEventListener("click", convertToCelcius);










                //function showLocation (event){
                    //event.preventDefault();
                    //let currentCity = document.querySelector("#temperature");
                    //let currentCityInput = document.queryselector ("#current-location");
                   // let temperature = Math.round(response.data.main.temp);
                    //currentCityInput.innerHTML = `${temperature}`;
 
                //}


              //  function currentLocation (position) {
                //    let lat = position.coords.latitude
                  //  let lon = position.coords.longitude
                   //let currentLocationApi = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid${apiKey}`;
                   //axios.get(currentLocationApi).then("click", showLocation);
                //}

                //navigator.geolocation.getCurrentPosition(currentLocation);

                  //   let apiKey = "a35a6fc9aa256480d5ede5662dad54ec";
                     //let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

                    // function showCity(response){
                    // console.log(response);
                    // let temperature = Math.round(data.main.temp)
                    // let temeratureHeading = document.querySelector("#temperature")
                  //   temperatureHeading.innerHTML = `${temperature}°`
                  //   }

                    //  let cityTemp = 

                    // axios.get(`${url}&appid=${apiKey}`).then(showCity);
            


