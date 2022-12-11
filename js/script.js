

const hours = document.getElementById("horas");
const  minute = document.getElementById("minutos");
const second = document.getElementById("segundos");

const watch = setInterval(function time(){
    let dateToday = new Date(); /*Data de hoje */

    let hr = dateToday.getHours(); /*Pegando a hora e assim sucessivamente */
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if(hr < 10) hr = "0" + hr; /*vai ter um 0 antes do valor da hora */

    if(min < 10) min = "0" + min; 

    if(sec < 10) sec = "0" + sec; 
    
    hours.textContent = hr; /*para mudar o texto*/
    minute.textContent = min;
    second.textContent = sec;
});
