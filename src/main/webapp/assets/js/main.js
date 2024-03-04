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

let form = document.querySelector("form");
let pixelInput = document.querySelector("input#pixelsInfo");
let sendButton = document.querySelector("input#sendButton");
let clearButton = document.querySelector("#clearButton");
//let action = new Action();
let container = document.querySelector("#container");

let html = Action.createDivs(25*25);
container.innerHTML += html;

let pixels = document.querySelectorAll(".pixel");
//Agregando event Listener
for (let i = 0; i<pixels.length; i++){
	pixels[i].addEventListener("mouseover",Action.paint.bind(pixels[i]));
}

//El error esta aqui y en el handler del evento
sendButton.addEventListener("click",Action.sendForm.bind(form,pixels,pixelInput));


clearButton.addEventListener("click",Action.clear.bind(pixels));



