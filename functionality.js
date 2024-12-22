const themeSwitcher = document.getElementById('theme_switcher');
themeSwitcher.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

const accordionHeaders = document.querySelectorAll('.accordion_header');
accordionHeaders.forEach(header => {
    header.addEventListener('click', () =>{
        const content = header.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
});
function openModal(imageSrc) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var captionText = document.getElementById("caption");
 modal.style.display = "block";
    modalImg.src = imageSrc;
    
  }
  
  function closeModal(){
    var modal = document.getElementById("modal");
    modal.style.display="none";
  }
  document.getElementById('vrijeme').addEventListener('click', async () => {
    const city = document.getElementById('cityInput').value.trim();
    const weatherResult = document.getElementById('weatherResult');
    const errorDiv = document.getElementById('error');
weatherResult.classList.add('hidden');
    errorDiv.classList.add('hidden');

    if (!city) {
        errorDiv.textContent = 'Please enter a city name';
        errorDiv.classList.remove('hidden');
        return;
    }

    try {
        const apiKey = 'fbb9c26050b8f665c1a124563bafe4e2';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(apiUrl);
if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();

        
        document.getElementById('cityName').textContent = data.name;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;

        weatherResult.classList.remove('hidden');
    } catch (error) {
        // Display the error message
        errorDiv.textContent = error.message;
        errorDiv.classList.remove('hidden');
    }
});