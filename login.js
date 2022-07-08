const users = [
	{
		name: "Гуляева Сабина",
		email: "sabi-2222@yandex.ru",
		password: "SDpassword!",
	}
];

function setFormMessage(formElement, type, message){
	const messageElement = formElement.querySelector(".form__message");

	messageElement.textContent = message;
	messageElement.classList.remove("form__message--success","form__message--error");
	messageElement.classList.add('form__message--${type}');
};

function setInputError(inputElement, message){
	inputElement.classList.add("form__input-error");
	inputElement.parentElement.querySelector(".form__input-error").textContent = message;
};

document.addEventListener("DOMContentLoaded", () =>{
	const loginForm = document.querySelector("#login");

	loginForm.addEventListener("submit", e =>{
		e.preventDefault();

		var a = false;
		for(var i=0; i < users.length; i++){
			if(document.getElementById("Email").value == users[i].email){
				a = true;
				if(document.getElementById("Password").value != users[i].password){
					a = false;
				}
				break;
			};
		};
		if(a){
			window.location = "PaulMatthewsServiceDeskM.html";
		}
		else{
			document.getElementById("Email").value = "";
			document.getElementById("Password").value = "";
			setFormMessage(loginForm, "error", "Идентификация не подтверждена");
		};
	});

	/*document.querySelectorAll(".form__input").forEach(inputElement => {
		inputElement.addEventListener("blur", e => {
			if (e.target.id === "signupUsername" && e.target.value.length <= 0) {
				setInputError(inputElement, "Вы ничего не ввели");
			}
		});
	});*/
});