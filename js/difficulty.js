function getDifficulty() {
	// var difficulty = prompt("Enter difficulty: easy, medium, hard, impossible", "easy");

  var selectbox = document.querySelector("#difficulty");
  var selectedText = selectbox.selectedIndex >=0 ? selectbox.options[selectbox.selectedIndex].innerHTML : "easy";
	console.log(selectedText);
	return selectedText;  
}

function updateSelectByHash(){
	var difficulty = window.location.hash;
	console.log(difficulty);
	document.querySelector("#difficulty option[value="+difficulty.substr(1)+"]").selected=true;

}

updateSelectByHash();


