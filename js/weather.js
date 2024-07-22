const endPoint = "https://api.weatherapi.com/v1/forecast.json?key=66cc6131cf334c18b3595312241207&q=Segovia&aqi=no"

const containWeather = document.getElementById("contain-weather")

fetch(`${endPoint}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }
      return response.json();
    })
    .then((data) => {
      const templete = `
      <h2>${data.location.name} / ${data.location.country}</h2>
      <p>${data.current.condition.text}</p>
      <div class="condition-now">
        <img src="${data.current.condition.icon}"/>
        <div class="temperature">${data.current.temp_c}<img src="./assets/img/termometro.png"/></div>
        <ul class="list">
          <li>Precipitciones: ${data.current.precip_mm}%</li>
          <li>Humedad: ${data.current.humidity}%</li>
          <li>Viento: ${data.current.wind_kph} km/h</li>
        </ul>
      </div>
        <ul id="condition-hours">
        </ul>
      `
      
      containWeather.innerHTML = templete
      const conditionHours = document.getElementById("condition-hours")

      const hours = data.forecast.forecastday[0].hour
      hours.forEach(hour => {
        let eachHour = new Date((hour.time_epoch)*1000).getHours()
        let hourString = ""
        if(eachHour<10){
          hourString = `0${new Date((hour.time_epoch)*1000).getHours()}:00`
        } else {
          hourString = `${new Date((hour.time_epoch)*1000).getHours()}:00`
        }
        const templeteLi = `<li>
          <span>${hourString}</span>
          <img src="${hour.condition.icon}"/>
          <p>${hour.temp_c}°C</p></li>`
        conditionHours.innerHTML += templeteLi
      })
    })
    .catch((error) => {
        containWeather.innerHTML = ""
        const fallo = document.getElementById("fallo")
        fallo.innerHTML = 'Error: No se pudo obtener la consulta del tiempo';
    });
