import React from "react";
import PropTypes from "prop-types";

const Result = ({ obj }) => {
  const main = obj ? obj.main : {};
  const weather = obj && obj.weather && obj.weather[0] ? obj.weather[0] : {};
  let minTemp = 0;
  let maxTemp = 0;
  if (main) {
    const temp = parseInt(main.temp);
    var cel = temp - 273.15;
    cel = cel.toFixed(2);

    //conversion of kelvin temperatures to centigrade
    maxTemp = (main.temp_min - 273.15).toFixed(2);
    minTemp = (main.temp_max - 273.15).toFixed(2);
  }
  console.log(obj);

  return (
    <section>
      {typeof main !== "undefined" ? (
        <div>
          <h2>{obj.name}</h2>
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt={weather.description}
              width="120"
            />
            <h3>
              {weather.description}
            </h3>
            
          </div>
          <table>
            <tr>
              <td>Pressure</td>
              <td>Cloudiness</td>
              <td>Wind</td>
              <td>Humidity</td>
            </tr>
            <tr>
              <td>{main.pressure} hpa</td>
              <td>{obj.clouds.all} %</td>
              <td>{obj.wind.speed} km/h</td>
              <td>{main.humidity} %</td>
            </tr>
            <tr>
              <td>Temperature</td>
              <td>Max.temp</td>
              <td>Min temp</td>
            </tr>
            <tr>
              <td>{cel} &#8451;</td>
              <td>{maxTemp} &#8451;</td>
              <td>{minTemp} &#8451;</td>
            </tr>
          </table>
        </div>
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default Result;

Result.propTypes = {
  obj: PropTypes.object.isRequired,
};
