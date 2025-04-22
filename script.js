
    function toggleMenu() {
        const nav = document.querySelector('.nav-links');
        nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
    }


    const apiURL = "https://api.weatherapi.com/v1/current.json?q=Cancún&key=49c739aee5e94a4e932204225252204";

    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not OK");
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = data;
            const temperature = document.getElementById("temperature");
            temperature.innerHTML = `Temperature: ${weatherInfo.current.temp_c} °C`;
        })
        .catch(error => {
            console.log("Error:", error);
        });
    
        