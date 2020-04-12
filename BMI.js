function computeBmi(){
	var height = document.getElementById('tall').value;
	var weight = document.getElementById('fat').value;
	var massIndex = weight / ((height / 100) * (height / 100)).toFixed(2);
	if (height < 40 && height > 0) {
		document.getElementById('met').innerHTML = "You cannot be as short as this";
	}
	else if (weight < 2 && weight > 0) {
		document.getElementById('met').innerHTML = "You cannot be as thin as this";
	}
	else if (weight == 0) {
		document.getElementById('met').innerHTML = "You cannot be weightless";
	}
	else if (weight < 0) {
		document.getElementById('met').innerHTML = "Please, put a valid weight";
	}
	else if (height < 0) {
		document.getElementById('met').innerHTML = "Please, put a valid height";
	}
	else if (height == 0) {
		document.getElementById('met').innerHTML = "You cannot be without height";
	}
	else {
		document.getElementById('met').innerHTML = "Mass Index =" + massIndex;
	}
		document.getElementById('met').style.color = "white";
}