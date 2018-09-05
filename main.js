// our click counter
var clicks = 0;
//cursor count
var cursors = 0;
//function to keep track of click counts and display them
function clickincrease(number){
	clicks = clicks + number;
	document.getElementById("clickcount").innerHTML = clicks;
};
//function to buy cursors
function BuyCursor(){
	var cursorcost = Math.floor(10 * Math.pow(1.1,cursors));
	if(clicks >= cursorcost){
		cursors = cursors + 1;
		clicks = clicks - cursorcost;
		document.getElementById('cursors').innerHTML = cursors;
		document.getElementById('clickcount').innerHTML = clicks;
	};
	var nextCost = Math.floor(10 * Math.pow(1.1,cursors));
	document.getElementById('cursorcost').innerHTML = nextCost;
};
//Time loop
window.setInterval(function(){
	clickincrease(cursors);
	save();
}, 1000);
//saving
function save(){
	var save = {
		clicks: clicks,
		cursors: cursors
	};
	localStorage.setItem("save",JSON.stringify(save));
};
//loading
function load(){
	var savegame = JSON.parse(localStorage.getItem("save"));
	//prevents undefined items from old save
	if (typeof savegame.clicks !== "undefined") clicks = savegame.clicks;
	if (typeof savegame.cursors !== "undefined") cursors = savegame.cursors;
};
//delete savegame
function delsave() {
	localStorage.removeItem("save")
};
