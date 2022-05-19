var pictures = 109
var hymns = []
var container = document.getElementById("resurrection");
console.log(hymns[0])

var pictures = 1

var hymns = []
var links = []
var test = "\<"+"ere Tef`anactacic";
console.log(test); 
hymns.push("Hiten",",ere Tef`anactacic","Kata ni,oroc","W nim nai", "Ni,oroc tyrou","`,rictoc `anecty")

links.push("Hymn Pages/Hiten.html","Hymn Pages/pResponse.html")
var container = document.getElementById("resurrection")

for (var i=0;i< hymns.length; i++){
   container.innerHTML+=`
   <div class="resurrection">
        <img src='resImg.jpeg'>
        <div class='info'>
            <strong><a href="${links[i]}">${hymns[i]}</a></strong>
        </div>
   </div>
   `

}


