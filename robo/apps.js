const img = document.querySelector("#img")
const text = document.querySelector("#text")
const button = document.querySelector("#button")

function omgItd(){
const link = "http://robohash.org/"
if(text.value == "") return
img.src = link + text.value
}


button.onclick = omgItd