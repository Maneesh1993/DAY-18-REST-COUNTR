let maindiv=document.createElement("div");
maindiv.className="container";
let rowDiv=document.createElement("div");
rowDiv.className="row";
rowDiv.id="myDiv"
   function foo(){
    var wea=fetch("https://api.openweathermap.org/data/2.5/weather?lat=12.5&lon=18.5&appid=002bcaa48dcc0fe4708f3a24485c0825")
        wea.then((data) => data.json())
        .then((value) => {
            console.log(value);
        })
    }
var res = fetch("https://restcountries.com/v2/all")
res.then((data) => data.json())
    .then((value) => {
        const myDiv = document.getElementById('myDiv');
        for (let i = 0; i < value.length; i++) {
          const newDiv = document.createElement('div');
          newDiv.classList.add('col-md-4', 'mb-3');
          newDiv.innerHTML = `
      <div class="card" >
        <div class="card-header">
            <h1 class="card-title">${value[i].name}</h1>
            <img src="   ${value[i].flags.svg}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Capital:${value[i].capital}</p>
                    <p class="card-text">Region:${value[i].region}</p>
                    <p class="card-text">Country code:${value[i].alpha3Code}</p>
                    <p class="card-text">LatLag:${value[i].latlng}</p>
                    <button onclick="foo()" class="btn btn-primary" >Click For Weather</button>
                </div>
            </div>
         </div>
          `;
          myDiv.appendChild(newDiv);
        }
    })

    maindiv.appendChild(rowDiv);
    document.body.appendChild(maindiv);

    // var wea=fetch("https://api.openweathermap.org/data/2.5/weather?lat=${value[i].latlng}&lon=${value[i].latlng}&appid=002bcaa48dcc0fe4708f3a24485c0825")

    // console.log(wea)