   document.getElementById('btn').addEventListener('click', function() {
        weather();
        const inputCity = document.getElementById('searchCity').value;
        
    });

    function weather() {
        const city = document.getElementById('searchCity').value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=44c16af763a95e74d601e1582c53c66b`)
            .then((res) => res.json())
            .then(data => {
                document.getElementById('temperature').innerText = data.main.temp;
                document.getElementById('name-Of-city').innerText = data.name;
                document.getElementById('weather-status').innerText = data.weather[0].main;
                document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            });
    }
   