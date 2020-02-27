document.getElementById('celsius').addEventListener('click', convertCelsiusToFahrenheit);

function convertCelsiusToFahrenheit(e) {
  const celsius = document.getElementById('degree');
  const result = document.getElementById('convertedDegree');

  const celsiusValue = parseFloat(celsius.value);

  const resultCelsiusToFahrenheit = ((celsiusValue * 1.80) + 32.00);

  if(isFinite(resultCelsiusToFahrenheit)) {
    result.value = resultCelsiusToFahrenheit.toFixed(2);
  } else {
    console.log('Pleas entry correct number')
  }

  e.preventDefault();
}

document.getElementById('fahrenheit').addEventListener('click', convertFahrenheitToCelsius);

function convertFahrenheitToCelsius(e) {
  const fahrenheit = document.getElementById('degree');
  const result = document.getElementById('convertedDegree');

  const fahrenheitValue = parseFloat(fahrenheit.value);

  const resultFahrenheitToCelsius = ((fahrenheitValue - 32.00)/1.80);

  if(isFinite(resultFahrenheitToCelsius)) {
    result.value = resultFahrenheitToCelsius.toFixed(2);
  } else {
    console.log('Pleas entry correct number');
  }

  e.preventDefault();
}