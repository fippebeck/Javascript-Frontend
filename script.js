
var loadval = 1;

var new1 = 1;
i=1

function loadmore(){
    new1 = ++i;

    console.log(new1);
}

//hämtar data samt kör funktionen för att displaya den

function fetchData() {
  var url = 'https://api.punkapi.com/v2/beers?page=' + new1;
fetch(url)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  appendData(data);
  console.log(data);
})
.catch(function (err) {
  console.log('error: ' + err);
});
}

window.onload = fetchData();

// funktionen som generar html till datan

function appendData(data) {
  var mainContainer = document.getElementById("row");
  for (var i = 0; i < data.length; i++) {
      
  
    
     const p1 = document.createElement("div");
     p1.setAttribute("class", "col-md-3 col-sm-6");
     const divChild1 = document.createElement("div");
     divChild1.setAttribute("class", "product-grid3");
     p1.appendChild(divChild1);

     const divChild2 = document.createElement("div");
     divChild2.setAttribute("class", "product-image3");
     const link = document.createElement("a");
     link.setAttribute("href", "#");
  
  

     const link2 = document.createElement("a");
     link2.setAttribute("href", "#");
     const labelnew = document.createElement("span");
     labelnew.setAttribute("class", "product-new-label");
     labelnew.textContent = (data[i].abv + "%");
     divChild2.appendChild(labelnew);
     const bag = document.createElement("i");
     bag.setAttribute("data-name", data[i].name);
     bag.setAttribute("data-price", data[i].ph);
     bag.setAttribute("class", "addto fa fa-shopping-bag");
     const fav = document.createElement("i");
     fav.setAttribute("class", "fa fa-heart");
     fav.setAttribute("aria-hidden", "false");
     const social = document.createElement("ul");
     social.setAttribute("class", "social");
     const li1 = document.createElement("li");
     const li2 = document.createElement("li");
     const p2 = document.createElement("img");
     const p3 = document.createElement("img");
     const p7 = document.createElement("a");
     p7.setAttribute("href", "#");
     p2.setAttribute("class", "pic-1");
     p3.setAttribute("class", "pic-2");
     p2.setAttribute("src", data[i].image_url);
     p3.setAttribute("src", data[i].image_url);
     divChild2.appendChild(p7);
     p7.appendChild(p2);
     p7.appendChild(p3);
     divChild2.appendChild(social);
     social.appendChild(li1);
     li1.appendChild(link);
     link.appendChild(bag);
     li2.appendChild(link2);

    
     const price = document.createElement("div");
     price.setAttribute("class", "price");
     price.textContent = "$" + data[i].ph;
     const p4 = document.createElement("div");
     p4.setAttribute("class", "product-content");
     const p5 = document.createElement("h3");
     const p6 = document.createElement("a");

     p4.appendChild(price);
     p6.textContent = data[i].name;
     p5.setAttribute("class", "title");
     p6.setAttribute("href", "#");
     p5.appendChild(p6);
     p4.appendChild(p5);
     
     divChild1.appendChild(divChild2);

     mainContainer.appendChild(p1);
     p1.appendChild(divChild1);
     divChild1.appendChild(p4)
  }
}
  

