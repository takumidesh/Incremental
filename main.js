
// our click counter
var clicks = 0;
var cursors = 0;
//function to keep track of click counts and display them
function clickincrease(number){
	clicks = clicks + number;
	document.getElementById("clickcount").innerHTML = clicks;
	
//function to buy cursors
function BuyCursor(){
	var cursorcost = Math.floor(10 * Math.pow(1.1,cursors));
	if(clicks >= cursorcost){
		cursors = cursors + 1;
		clicks = clicks - cursorcost;
		document.getElemeentById('cursors').innerHTML = cursors;
		document.getElementById('clickcount').innerHTML = clicks;
	};
	var nextCost = Math.floor(10 * Math.pow(1.1,cursors));
	document.getElementById('cursorcost').innerHTML = nextCost;
}



};
