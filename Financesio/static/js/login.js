const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

function auth(){
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	if(email == "admin@gmail.com" && password == "user" ){
		window.location.replace("add.html");
	} 

	else{
		alert("Invalid info");
		return;
	}
}

function myFunction() {
	document.getElementById("input").required = true;
	
}