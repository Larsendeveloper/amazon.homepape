// porducts image slider
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// porducts image slider with details
const productContainers2 = [...document.querySelectorAll('.product-container2')];
const nxtBtn2 = [...document.querySelectorAll('.nxt-btn2')];
const preBtn2 = [...document.querySelectorAll('.pre-btn2')];

productContainers2.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn2[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn2[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})



function loadCoupon(){
    document.getElementById("Coupon").style.visibility="visible";
    document.getElementById("main").style.opacity="0.7";

}
function closeCoupon(){
    document.getElementById("Coupon").style.visibility="hidden";
    document.getElementById("main").style.opacity="1";
    
}

// light /dark mode


const changemode = () => {
    let mybody =document.body;

 mybody.classList.toggle('myDark')
}


// weather info

let x = document.getElementById('out');
let y = document.getElementById('Weather');

function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else{
        x.innerText = "Geo Not Supported"
    }
}

function showPosition(data){
    console.log(data);
    let lat = data.coords.latitude;
    let long = data.coords.longitude;
    let out = `Latitude is ${lat} & longitude is ${long}`
    
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    ///api calling
    fetch(url,{method: 'GET'})
    //return promise
    .then((res) => res.json())
    //return data
    .then((data) => {
        console.log(data)
        let city = data.city.name
        let temp = data.list[0].temp.day
        y.innerText = `Your city is ${city} and temp is ${temp}°C`
    })
}