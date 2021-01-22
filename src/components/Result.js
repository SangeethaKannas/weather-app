import React from 'react';
import PropTypes from 'prop-types';

const Result = ({obj}) => {

  const main = obj ? obj.main : {};
  let minTemp = 0;
  let maxTemp = 0;
  if(main) {
    const temp = parseInt(obj.main.temp)
    var cel = temp - 273.15;
    cel = cel.toFixed(2);

    //conversion of kelvin temperatures to centigrade
    maxTemp = (obj.main.temp_min - 273.15).toFixed(2);
    minTemp = (obj.main.temp_max - 273.15).toFixed(2);
  }
  console.log(obj)

  return (
      <section>
        {typeof main !== "undefined"  ?
        <div className="card">
          <h2>{obj.name}</h2>
          <h3>{obj.weather[0].description}
            <span>Wind {obj.wind.speed} km/h <span className="dot">•</span> humidity {obj.main.humidity}%</span>
            </h3>
          <h2>{cel} &#8451;</h2>
          <div class="sky">
              <div class="sun"></div>
              <div class="cloud">
                  <div class="circle-small"></div>
                  <div class="circle-tall"></div>
                  <div class="circle-medium"></div>
              </div>
          </div>
          <table>
              <tr>
                  <td>Pressure</td>
                  <td>Cloudiness</td>
                  <td>Max.temp</td>
                  <td>Min temp</td>
              </tr>
              <tr>
                  <td>{obj.main.pressure} hpa</td>
                  <td>{obj.clouds.all}%</td>
                  <td>{maxTemp} &#8451;</td>
                  <td>{minTemp} &#8451;</td>
              </tr>
          </table>
        </div>
        :
         <div></div>
        }
      </section>
      );
}

export default Result;

Result.propTypes = {
  obj: PropTypes.object.isRequired
}