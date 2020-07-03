function inputCompany(){
	document.getElementById('company').innerHTML = companyNameInput.value;
}

function inputName(){
	document.getElementById('yoName').innerHTML = yourNameInput.value;
}

function inputRole(){
	document.getElementById('jobTitle').innerHTML = roleInput.value;
}

function inputEmail(){
	document.getElementById('emailAdd').innerHTML = emailInput.value;
}

function inputPhone(){
	document.getElementById('phoneNum').innerHTML = phoneNumInput.value;
}

function changeBackgroundColor(){
	var inputColor = document.getElementById('backgroundColorInput').value;
	document.getElementById('card').style.background = inputColor;
}

function changeTextColor(){
	var inputTextColor = document.getElementById('textColorInput').value;
	document.getElementById('card').style.color = inputTextColor;
}

function textAlignLeft(){
	document.getElementById('card').style.textAlign = 'left';
}
function textAlignCenter(){
	document.getElementById('card').style.textAlign = 'center';
}
function textAlignRight(){
	document.getElementById('card').style.textAlign = 'right';
}

function formReset(){
	window.location.reload();
}