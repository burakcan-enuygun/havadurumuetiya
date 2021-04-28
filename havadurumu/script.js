function getWeather(cityName){
const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6329530c2c81cb67a28f5e2b1ee150dd&units=metric&lang=tr` 

//yüklemeyi gösterelim (networke gelip slow 3d seçeneğini aktif edelim...)
const messageElement = document.getElementById("message");
messageElement.innerText = `bekleniyorr..`;
messageElement.style.color = "red";


//Belirli bir kimliğe sahip bir kullanıcı için istekte bulunumalıyız
axios.get(url)
  .then(function (response) {
  // başarılı bir şekilde üstesinden geldik
  const messageElement = document.getElementById("message");
  messageElement.innerText=`şuan ki hava durumu ${response.data.main.temp}°C`
  messageElement.style.color = "black";

  }) 
  .catch(function (error) {
    //işlem hatası
    const messageElement = document.getElementById("message");
    messageElement.innerText = error;
    messageElement.style.color = "red";
  })
  .finally(function () {
   console.log("her zaman...") 
    // her zaman yürütülür
  });
}
window.onload=function() {
  document.getElementById("gonder").onclick = function(){
    //şehir ismini bu textten çekelim
    const cityName = document.getElementById("sehir").value; 
    //getWeather adlı fonksiyonu(işlemi) çağıralım
    getWeather(cityName);
  }
}