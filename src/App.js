import React, {useState} from 'react';
import Search from './components/search/Search'
import './App.css';
import WeatherCard from './components/weatherCard/WeatherCard';

function App() {
  const [state, setState] = useState({});
  const API_KEY = "43a98eade50f9960ea5e357d4a47037c";
  async function getWeather(event){
    event.preventDefault();
    const city = event.target.city.value;
    event.target.city.value = "";
    const API_URL = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`;
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(!data.error) {
        setState({
          city: data.location.name,
          region: data.location.region,
          temp: data.current.temperature,
        });
      } else {
        setState({
          message: 'По вашему запросу ничего не найдено'
        })
      }
    });
  }

  return (
    <div className="App">
      <Search getWeather={getWeather} />
      <WeatherCard data={state} />
    </div>
  );
}

export default App;
