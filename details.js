let url = new URLSearchParams(window.location.search);

if (url.has("id")) {
    console.log(url.get("id"));
fetch(`https://osteapi-emil.herokuapp.com/api/v1/cheeses/${url.get("id")}`)
.then (res => res.json())
.then (function(data) {
     console.log(data);

        let cheeseFoto = document.querySelector(".cheeseFoto")
        let name = document.querySelector(".name");
        let price = document.querySelector(".price");
        let brand = document.querySelector(".brand");
        let weight = document.querySelector(".weight");
        let strength = document.querySelector(".strength");

        cheeseFoto.src=`images/${url.get("id")}.png`  
        name.innerText=data.name
        price.innerText=data.price.$numberDecimal + " DKK"
        brand.innerText= "Brand: " + data.brand
        weight.innerText= "Vægt: " + data.weight
        strength.innerText= "Styrke: " + data.strength

})  
}