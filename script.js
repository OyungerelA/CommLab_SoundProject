var elem = document.getElementById("scrolldown")
var dynamic = document.getElementById("dynamic")
var audio = document.getElementById("audio")

elem.addEventListener("click",()=>{
	audio.play()
	document.getElementById("page2").style.display="block"
})

audio.addEventListener("ended", ()=>{
	dynamic.style.display = "block"
})
