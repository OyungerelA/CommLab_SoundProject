var dynamic = document.getElementById("dynamic")
var audio = document.getElementById("audio")

// elem.addEventListener("click",()=>{
// 	// element.style.display = "block"
// 	audio.play()
// })

// var page2 = document.getElementById("page2")

// page2.addEventListener("onmouseover",()=>{
// 	audio.play()
// })

audio.addEventListener("ended", ()=>{
	dynamic.style.display = "block"
})





var option1 = document.getElementById("option1")
var audio2 = document.getElementById("audio2")
var option2 = document.getElementById("option2")
var audio3 = document.getElementById("audio3")

option1.addEventListener("click",()=>{
	audio2.play()
})

document.getElementById("option1").addEventListener("click", ()=>{
	document.getElementById("page3").style.display="block"
	document.getElementById("page2").style.display="none"

})

option2.addEventListener("click",()=>{
	audio3.play()
})

document.getElementById("option2").addEventListener("click", ()=>{
	document.getElementById("page4").style.display="block"
	document.getElementById("page2").style.display="none"
})

var dynamic2 = document.getElementById("dynamic2")
var dynamic3 = document.getElementById("dynamic3")


audio2.addEventListener("ended", ()=>{
	dynamic2.style.display = "block"

})

audio3.addEventListener("ended", ()=>{
	dynamic3.style.display = "block"
})

document.getElementById("option21").addEventListener("click", ()=>{
	document.getElementById("page5").style.display="block"
	document.getElementById("page3").style.display="none"

})

document.getElementById("option22").addEventListener("click", ()=>{
	document.getElementById("page6").style.display="block"
	document.getElementById("page3").style.display="none"
})

document.getElementById("option221").addEventListener("click", ()=>{
	document.getElementById("page5").style.display="block"
	document.getElementById("page3").style.display="none"

})

document.getElementById("option222").addEventListener("click", ()=>{
	document.getElementById("page6").style.display="block"
	document.getElementById("page3").style.display="none"

})

// option1.addEventListener("click",=>{
// 	audio.play()
// })




