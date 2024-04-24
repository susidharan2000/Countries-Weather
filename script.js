let container = document.createElement('div');
container.classList = 'container';

const h1 = document.createElement('h1');
h1.classList = 'text-center';
h1.id = 'title';
h1.innerHTML = 'countries Weather';

const dispaly = document.createElement('div');
dispaly.classList = 'row';
dispaly.id = 'cards';

const responce = fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,region,latlng,cca3");
responce
.then((data)=>data.json())
.then((ele)=>{
    ele.forEach(element => {
       const col = document.createElement("div");
       col.classList = "col-sm-6 col-md-4 col-lg-4 col-xl-4 ";
       col.innerHTML = `
       <div class="card h-100">
       <div class="card-header">
       <h5 class="card-title text-center"> ${element.name.common}</h5>
       </div>
       <div class=""img-box>
       <img class="card-img-top" src="${element.flags.svg}" alt="Card image cap">
       </div>
       <div class="card-body ">
       <div class="card-text text-center">Region : ${element.region}</div>
       <div class="card-text text-center">Capital : ${element.capital}</div>
       <div class="card-text text-center">Country Code : ${element.cca3}</div>

       <button  type=""submit class="btn btn-primary ">Click For Weather</button>
       </div>
       </div>
       `;
       dispaly.append(col);
    });
    var buttons = document.querySelectorAll('button');
    buttons.forEach((btn,index)=>{
        btn.addEventListener('click',()=>{
            let latlng = ele[index].latlng;
            let lat = latlng[0];
            let lon = latlng[1];
        const weather  = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=43001b8c94f5cd675a6f31c3640b2ca6`);
        weather.then((data)=>data.json())
        .then((element)=>{
            alert(`Weather of ${ele[index].name.common} is ${element.weather[0].main} and temperature is ${ element.main.temp}`);
        })
        });
    })
})
.catch((error)=>console.log(error)) 

container.append(dispaly);
document.body.append(h1,container);




/* <div class="card" style="width: 18rem;">
<h5 class="card-title text-center">Card title</h5>
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */