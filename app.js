let url = new URLSearchParams(window.location.search);

let offset = url.get("offset") ? url.get("offset") : 0;
let prevPage, nextPage;

let nextLink = document.querySelector(".nextLink");
let prevLink = document.querySelector(".prevLink");


fetch(`https://osteapi-emil.herokuapp.com/api/v1/cheeses/?offset=${offset}`)
.then (res => res.json())
.then (function(data) {
     console.log(data);
    
     nextPage = parseInt(offset) + 5 < data.count ? parseInt(offset) + 5 : parseInt(offset);
     
     prevPage = parseInt(offset) > 0 ? parseInt(offset) - 5 : parseInt(offset);
 
     nextLink.href = `?offset=${nextPage}`;
     prevLink.href = `?offset=${prevPage}`;


    let template = document.querySelector("#template")
    let oste = document.querySelector(".oste")

    data.results.forEach(function(result) {
        // console.log(result);

        let clone = template.content.cloneNode(true);

        clone.querySelector(".name a").innerText=result.name
        clone.querySelector(".name a").href="/details.html?id=" + result._id
        clone.querySelector(".price").innerText=result.price.$numberDecimal + " DKK"
        clone.querySelector(".detail").innerText="læs mere"
        clone.querySelector(".detail").href="/details.html?id=" + result._id

        oste.appendChild(clone);

    })
})  

