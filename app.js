document.getElementById('celsius').addEventListener('click', function(e) {
  document.getElementById('result').style.display = 'none';
  document.getElementById('loading').style.display = 'block';  
  setTimeout(convertCelsiusToFahrenheit, 2000);

  e.preventDefault();
});

function convertCelsiusToFahrenheit() {
  const celsius = document.getElementById('degree');
  const result = document.getElementById('convertedDegree');

  const celsiusValue = parseFloat(celsius.value);

  const resultCelsiusToFahrenheit = ((celsiusValue * 1.80) + 32.00);

  if(isFinite(resultCelsiusToFahrenheit)) {
    result.value = resultCelsiusToFahrenheit.toFixed(2);

    document.getElementById('fahrenheitUnit').style.display = 'none';
    document.getElementById('celsiusUnit').style.display = 'block';
    document.getElementById('result').style.display = 'block';
    document.getElementById('loading').style.display = 'none';
  } else {
    showError('Pleas entry correct number');
  }  
}

document.getElementById('fahrenheit').addEventListener('click', function(e) {  
  document.getElementById('result').style.display = 'none';
  document.getElementById('loading').style.display = 'block'; 
  setTimeout( convertFahrenheitToCelsius, 2000);

  e.preventDefault();
});

function convertFahrenheitToCelsius() {
  const fahrenheit = document.getElementById('degree');
  const result = document.getElementById('convertedDegree');

  const fahrenheitValue = parseFloat(fahrenheit.value);

  const resultFahrenheitToCelsius = ((fahrenheitValue - 32.00)/1.80);

  if(isFinite(resultFahrenheitToCelsius)) {
    result.value = resultFahrenheitToCelsius.toFixed(2);

    document.getElementById('celsiusUnit').style.display = 'none';
    document.getElementById('fahrenheitUnit').style.display = 'block';
    document.getElementById('result').style.display = 'block';
    document.getElementById('loading').style.display = 'none';
  } else {
    showError('Pleas entry correct number');
  }
}

function showError(error) {
  document.getElementById('loading').style.display = 'none';
  document.getElementById('result').style.display = 'none';

  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  const errorDiv = document.createElement('div');
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));

  card.insertBefore(errorDiv, heading);
  setTimeout(clearError, 3000);
}

function clearError(){
  document.querySelector('.alert').remove();
}