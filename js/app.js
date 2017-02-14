var response = {};
var id = prompt('Enter a zip code')


$.ajax({
  url: 'http://api.openweathermap.org/data/2.5/weather?zip='+ id +',us&appid=052f26926ae9784c2d677ca7bc5dec98',
  type: "GET",
  dataType: 'json',
  success: function(data) {
    response = data;
    var body = document.getElementsByTagName('body')[0];
    var container = document.getElementById('container')
    var headDiv = document.createElement('div');
    headDiv.id = 'headDiv';
    container.appendChild(headDiv);
    var city = document.createElement('h1');
    city.innerHTML=response.name;
    headDiv.appendChild(city);

    // var tempHead = document.createElement('h2');
    // tempHead.id = 'tempHead';
    // tempHead.innerHTML='Temperature'
    // container.appendChild(tempHead)

    var temp = document.createElement('h2');
    temp.id = 'temp'
    var kelvinConverter = ((response.main.temp - 273.15) * 9/5) +32
    var farenheight = Math.floor(kelvinConverter)
    temp.innerHTML = farenheight + '\xB0F'
    container.appendChild(temp)

    var hiAndLowDiv = document.createElement('div');
    hiAndLowDiv.id = 'hiAndLowDiv'
    container.appendChild(hiAndLowDiv)

    var highTemp = document.createElement('h2');
    highTemp.id = 'highTemp';
    var highTempConv = ((response.main.temp_max - 273.15) * 9/5) +32
    var highTempFar = Math.floor(highTempConv);
    highTemp.innerHTML = 'High  ' + highTempFar + '\xB0F';
    hiAndLowDiv.appendChild(highTemp)

    var lowTemp = document.createElement('h2');
    lowTemp.id = 'lowTemp';
    var lowTempConv = ((response.main.temp_min - 273.15) * 9/5) +32
    var lowTempFar = Math.floor(lowTempConv);
    lowTemp.innerHTML = ' Low  ' + lowTempFar + '\xB0F';
    hiAndLowDiv.appendChild(lowTemp)

    var description = document.createElement('h2');
    description.id = 'current';
    description.innerHTML = response.weather[0].description;
    container.appendChild(description)





    




    
    


  },
  fail: function(error){
	console.log(error)
  }
});