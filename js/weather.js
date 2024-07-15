
const endPoint = `"https://api.weatherapi.com/v1/forecast.json?key=Ç66cc6131cf334c18b3595312241207&q=Segovia&aqi=no"`


fetch(`${endPoint}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }
      return response.json();
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        const fallo = document.getElementById("fallo")
        fallo.innerHTML = 'Error: No se pudo obtener la consulta del tiempo';
    });

   