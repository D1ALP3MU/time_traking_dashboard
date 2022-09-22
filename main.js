import data from './data.json' assert{type: 'json'};

console.log(data);

//Se crea un arreglo de los colores que lleva cada tarjeta(card)
let bgColors = [
    "hsl(15, 100%, 70%)",
    "hsl(195, 74%, 62%)",
    "hsl(348, 100%, 68%)",
    "hsl(145, 58%, 55%)",
    "hsl(264, 64%, 52%)",
    "hsl(43, 84%, 65%)"
]

//Se crea un arreglo para llamar el timeframes de cada boton utilizando en metodo map
let dailyArray = data.map(item => item.timeframes.daily);
let weeklyArray = data.map(item => item.timeframes.weekly);
let monthlyArray = data.map(item => item.timeframes.monthly);
console.log(dailyArray);
console.log(weeklyArray);
console.log(monthlyArray);

//Se llaman los botones daily, weekly y monthly utilizando el querySelector
let dailyBtn = document.querySelector('#daily');
let weeklyBtn = document.querySelector('#weekly');
let monthlyBtn = document.querySelector('#monthly');

//Se llama la a la second-section utilizando el querySelector
let secondSection = document.querySelector('.second-section');

//Se llama la función para que pinte las cards sin necesidad de dar click en algún botón
drawElements(dailyArray);

//Se crea un evento para cada boton con una función flecha
dailyBtn.addEventListener("click", ()=>{
    drawElements(dailyArray);
});

weeklyBtn.addEventListener("click", ()=>{
    drawElements(weeklyArray);
});

monthlyBtn.addEventListener("click", ()=>{
    drawElements(monthlyArray);
});

//Se crea función para pintar cada tarjeta(card)
function drawElements(array){
    secondSection.innerHTML = "";
    array.forEach((element, index)=>{
        //console.log(element);

        //Se crea variable para leer los nombres de los iconos en mayúscula o minúscula utilizando el método toLowercase()
        let title = data[index].title;
        let titleLowerCase = title.toLowerCase();

        //Se crea condicional if la validar que el nombre del icono de la última card esté bien escrito
        if(titleLowerCase == 'self care' ){
            titleLowerCase = 'self-care'
        }

        console.log(title);
        console.log(titleLowerCase);

        secondSection.innerHTML += `
        <div class="card">
            <div class="card__background" style="background-color: ${bgColors[index]};">
            <img class="card__image" src="./images/icon-${titleLowerCase}.svg" alt="">
            </div>
            <div class="card__datails">
            <div class="card__activity">
                <p class="card__title">${title}</p>
                <img class="card__dots" src="./images/icon-ellipsis.svg" alt="three dots">
            </div>
            <div class="card__time">
                <p class="card__hour">${element.current}hrs</p>
                <p class="card__previous">Previous - ${element.previous}hrs</p>
            </div>
            </div>
        </div>
        `
    })
}
