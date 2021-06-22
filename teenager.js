document.getElementById("audio").addEventListener("ended",()=>{
	document.getElementById("dynamic").style.display="block";
})

document.getElementById("option1").addEventListener("click",()=>{
	document.getElementById("page2").style.display="none"
	document.getElementById("page4").style.display="block"
	document.getElementById("audio3").play()
})

document.getElementById("option2").addEventListener("click",()=>{
	document.getElementById("page2").style.display="none"
	document.getElementById("page4").style.display="none"
	document.getElementById("page5").style.display="block"
	document.getElementById("audio4").play()
})

document.getElementById("audio3").addEventListener("ended",()=>{
	document.getElementById("page4").style.display="none"
	document.getElementById("page5").style.display="block"
	document.getElementById("audio4").play()
})

document.getElementById("audio4").addEventListener("ended",()=>{
	document.getElementById("dynamic4").style.display="block"
})

document.getElementById("option31").addEventListener("click",()=>{
	document.getElementById("page5").style.display="none"
	document.getElementById("page7").style.display="block"
	document.getElementById("audio6").play()
})

document.getElementById("option32").addEventListener("click",()=>{
	document.getElementById("page5").style.display="none"
	document.getElementById("page8").style.display="block"
	document.getElementById("audio7").play()
})

document.getElementById("audio6").addEventListener("ended",()=>{
	document.getElementById("info").style.display="block"
})

document.getElementById("audio7").addEventListener("ended",()=>{
	document.getElementById("info2").style.display="block"
})
