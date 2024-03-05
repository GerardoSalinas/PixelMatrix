class Action {
	constructor(){
		
	}
	
	static sendForm(pixels,pixelInput,event){
		let list = [];
		for (let i = 0; i<pixels.length; i++){
			if (pixels[i].style.backgroundColor === "red"){
				list.push("1");
			}else{
				list.push("0");
			}
		}
		pixelInput.value = list.join("");
		console.log("formulario enviado ", pixelInput.value);
		this.submit();
	}
	
	static processResponse(pixels,event){
		let list = [];
		for (let i = 0; i<pixels.length; i++){
			if (pixels[i].style.backgroundColor === "red"){
				list.push("1");
			}else{
				list.push("0");
			}
		}
		let pixelString = list.join("");
		xhr.open("POST",`service.jsp`);
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xhr.send(`pixels=${pixelString}`);
	}
	
	
	static responseHandler(answerDiv){
		if (xhr.status === 200 && xhr.readyState === XMLHttpRequest.DONE){
			try {
				let jsonResponse = JSON.parse(this.responseText);
				answerDiv.innerHTML = `se ha creado la imagen ${jsonResponse.name} en la ruta ${jsonResponse.path}`;
				console.log(jsonResponse);
				
			}catch(error){
				answerDiv.innerHTML = `no se pudo crear la imagen`;
				console.log(error);
			}
			
		}
	}
	
	static createDivs(amount){
		let pixels = [];
		for (let i = 0; i<amount; i++){
			pixels.push("<div class=\"pixel\"></div>");
		}
		
		return pixels.join("");
	}
	
	static paint(){
		this.style.backgroundColor = "red";
	}
	static prueba(){
		console.log("enviado");
	}
	
	static clear (){
		let pixels = this;
		for (let i = 0; i<pixels.length; i++){
			pixels[i].style.backgroundColor = "white";
		}
	}
}


let sendButton = document.querySelector("#sendButton");
let clearButton = document.querySelector("#clearButton");
let answerDiv = document.querySelector("#answer");
let xhr = new XMLHttpRequest();
//let action = new Action();
let container = document.querySelector("#container");

let html = Action.createDivs(25*25);
container.innerHTML += html;

let pixels = document.querySelectorAll(".pixel");
//Agregando event Listener
for (let i = 0; i<pixels.length; i++){
	pixels[i].addEventListener("mouseover",Action.paint.bind(pixels[i]));
}


sendButton.addEventListener("click",Action.processResponse.bind(xhr,pixels));

clearButton.addEventListener("click",Action.clear.bind(pixels));

xhr.addEventListener("load",Action.responseHandler.bind(xhr,answerDiv));



