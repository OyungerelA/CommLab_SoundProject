// // var elem = document.getElementById("scrolldown")
// // var flag = false;

// // element.addEventListener("click", ()=>{
// // 	flag = true;
// // })

// // if (flag==true)

// var elem = document.getElementById("dynamic")
// var elem2 = document.getElementById("scrolldown")

// // if(document.getElementById("scrolldown").clicked==true){
// // 	elem.style.display = "block"
// // }

// var flag = false
// // elem2.onclick = function(){
// // 	flag = true
// // }

// // if (flag==true){
// // 	elem.style.display = "block"
// // }

// elem2.addEventListener("click", ()=>{
// 	flag = true
// })

// if (flag==true){
// 	// elem.style.display = "block"
// 	console.log("hello")
// }

// if (elem.clicked==true){
// 	console.log("clicked")
// }

// if (document.getElementById("homepage").clicked==true){
// 	document.getElementById("audio").style.display=="block"
// }


var elem = document.getElementById("scrolldown")
var dynamic = document.getElementById("dynamic")
var audio = document.getElementById("audio")

elem.addEventListener("click",()=>{
	// element.style.display = "block"
	audio.play()
	document.getElementById("page2").style.display="block"
	// document.getElementById("homepage").style.display = "none"
})

audio.addEventListener("ended", ()=>{
	dynamic.style.display = "block"
})

// document.getElementById("option1").addEventListener("click", ()=>{

// })


// page2.addEventListener("mouseover",()=>{
// 	audio.play()
// })



// var dynamic2 = document.getElementById("dynamic2")
// var audio2 = document.getElementById("audio2")

// audio2.addEventListener("ended", ()=>{
// 	dynamic2.style.display = "block"
// })







