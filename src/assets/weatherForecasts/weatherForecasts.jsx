import './WeatherForecast.css';
import WeatherData from '../companents/WeatherData';'/weatherData'
import WeatherIcon from '../companents/WeatherIcon';'./weatherIcon'

function WeatherForecast({ forecast }) {
  return (
    <div className="weather">
      <WeatherData
        day={forecast.day} 
        conditions={forecast.conditions} 
        time={forecast.time} 
      />
      <WeatherIcon img={forecast.img} imgAlt={forecast.imgAlt} />
    </div>
  );
}

export default WeatherForecast;