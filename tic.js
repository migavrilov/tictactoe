// Function called whenever user tab on any box


window.onload = function () {
	main = document.getElementById("grid");
	
	//generate 9 boxes for the game
	
	for (var i = 1; i <= 9; i++) {
		id = "b" + i;
		box_element = document.createElement("template");
		box_element.innerHTML = `<input type="text" id="`+id+`" onclick="stepPlayer('`+id+`'); setTimeout(function() {myfunc();}, 200)" readonly>`;
		box_element = box_element.content.firstElementChild;
		main.appendChild(box_element);
		
		if (i % 3 == 0) {
			skip = document.createElement("template");
			skip.innerHTML = "<br><br>";
			skip = skip.content.firstElementChild;
			main.appendChild(skip);
		}
	}
};



function disableAll() {
	for (var i = 1; i <=9; i++) {
		document.getElementById("b"+i).disabled = true;
	}
}

function win(arr, value) {
	winMap = [[1,2,3], [1,4,7], [1,5,9], [2,5,8], [3,5,7], [3,6,9], [4,5,6], [7,8,9]];
	
	for (var i = 0; i < 8; i++) {
		var status = true;
		for (var j = 0; j < 3; j++) {
			if (arr[winMap[i][j]].value != value) {
				status = false;
				break;
			}
		}
		if (status == true) return true;
	}
	return false;
	
}

function myfunc() {

	//arr = grid, using 0 to then use 1,2,3 numbers instead of 0,1,2
	var arr = [0];
	
	for (var i = 1; i <= 9; i++) {
		arr[i] = document.getElementById("b"+i);
	}
	
	
	//Checking if tie
	f = true;
	for (var i = 1; i <= 9; i++) {
		if (arr[i].value == "")
			f = false;
	}
	
	if (f) {
		document.getElementById('print')
		.innerHTML = "Match Tie";
		window.alert('Match Tie');
	} else {
		
		players = ["0", "X"];
		
		for (var i = 0; i < 2; i++) {
			if (win(arr, players[i])) {
				document.getElementById('print').innerHTML = "Player "+players[i]+" won";
				disableAll();
				window.alert('Player '+players[i]+' won');
				flag = -1;
			}
		}
		
		if (flag != -1)
			document.getElementById('print').innerHTML = "Player "+players[flag]+" Turn";

	}
}

// Function to reset game
function myfunc_2() {
	location.reload();
}

flag = 1; // 1 - player X, 0 - player 0

function stepPlayer(elementId) {
	document.getElementById(elementId).disabled = true;
	if (flag == 1) {
		document.getElementById(elementId).value = "X";
		flag = 0;
	}
	else {
		document.getElementById(elementId).value = "0";
		flag = 1;
	}
}

