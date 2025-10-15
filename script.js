//your JS code here. If required.
let getTimer=document.getElementById("timer");
let curDate=new Date();

setInterval(
	function () {
		curDate=new Date();
		getTimer.innerHTML=curDate.toLocaleString();
	},1000
)