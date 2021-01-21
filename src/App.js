import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import SearchButton from './components/SearchButton';
import Result from './components/Result';
import Error from './components/Error';
import Loader from './components/Loader';

function App() {

  const [obj, setObj] = useState({});
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const [showSpinner, setShowSpinner] = useState(false);

  //unique appid obtained from <https://openweathermap.org/api> prefixed with '&''
  const appId = '&appid=c9f8cfdb3b7fd46316e6e0b6957616ab'
  const appIdStr = String(appId);

  const handleClick = (event) => {
    setError('');
    setShowSpinner(true);

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + appIdStr)
     .then(response => response.json())
     .then(data => {
       setShowSpinner(false);
       if(data && "404" === data.cod) {
         setError('No such city exists in the API Database!!');
       } else {
         setObj(data);
       }
      })
     .catch(function(error) {
       setShowSpinner(false);
       setError('No such city exists in the API Database!!');
    });

  }

  const handleCityChange = (event) => setCity(event.target.value);

  return (
    <div className="App">
      <header className="App-header">
        <h1>City Weather</h1>
      </header>
      <section>
        <Input handleChange={handleCityChange} />
        <SearchButton handleSearch={handleClick} disabed={city.length < 2} />
      </section>
      <section className="results">
        <Result obj={obj}></Result>
        <Error error={error}></Error>
      </section>
      <Loader showSpinner={showSpinner}></Loader>
    </div>
  );
}

export default App;
