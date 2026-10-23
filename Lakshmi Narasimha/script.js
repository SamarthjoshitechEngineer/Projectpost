const container=document.querySelector('.container');
const search=document.querySelector('.search-box button');
const weatherbox=document.querySelector('.weather-box');
const details=document.querySelector('.weather-details');
const error404=document.querySelector('.not-found');
search.addEventListener('click',() =>{
    const APIKey='3e14ba7ed4952ea2fd7eb6b6adf327e5';
    const city=document.querySelector('.search-box input').value;

    if(city=='')
        return;
    fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response =>response.json()).then(json =>{
        if(json.cod=='404'){
            container.style.height='400px';
            weatherbox.classList.remove('active');
            details.classList.remove('active');
            error404.classList.add('active');
            return;
        }
         container.style.height='555px';
            weatherbox.classList.add('active');
            details.classList.add('active');
            error404.classList.remove('active');

        const image=document.querySelector('.weather-box img');
        const temperature=document.querySelector('.weather-box .temperature');
        const description=document.querySelector('.weather-box .description');
        const humidity=document.querySelector('.weather-details .info-humidity span');
        const wind=document.querySelector('.weather-details .info-wind span');
        switch(json.weather[0].main){
            case 'Clear':
                image.src='https://tse1.mm.bing.net/th/id/OIP.sYx4wDRCW_0Zdz2NyRPiWwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3';
                break;
            case 'Rain':
                image.src='https://th.bing.com/th/id/R.f0f1c51ac366d7438e3096e2be55be20?rik=dPKbLRzvR3XbFQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fKTj%2fXdg%2fKTjXdgyEc.png&ehk=8AoUI8xMdGDzlsSuJRtoS2nnTSD%2fuYoqDeB1khHvS5g%3d&risl=&pid=ImgRaw&r=0';
                break;
            case 'Snow':
                image.src='https://cdn-icons-png.flaticon.com/512/10961/10961187.png';
                break;
            case 'Clouds':
                image.src='https://freesvg.org/img/sivvus_weather_symbols_3.png';
                break;
            case 'Mist':
                image.src='https://cdn-icons-png.flaticon.com/512/10630/10630000.png';
                break;
            case 'Haze':
                image.src='https://static.vecteezy.com/system/resources/previews/038/800/365/non_2x/weather-filled-gradient-icon-vector.jpg';
                break;
            default:
                img.src='https://media.istockphoto.com/id/1466265985/vector/sun-in-clouds-3d-sunny-weather-elements-white-bubble-cloud-on-sky-summer-spring-hot-seasonal.jpg?s=170667a&w=0&k=20&c=fAWZu5reaQs4JUGC67sVhZUU_c1_-WRZ_SGi9EPOkgU=';
        };
        temperature.innerHTML=`${parseInt(json.main.temp)}<span>Celcius</span>`;
        description.innerHTML=`${json.weather[0].description}`;
        humidity.innerHTML=`${json.main.humidity}%`;
        wind.innerHTML=`${parseInt(json.wind.speed)}km/hr`;
    });

});