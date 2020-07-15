var numofsquares=6;
var colors = [];
var pickedcolor 
var squares=document.querySelectorAll(".square");
var colorsdisplay=document.querySelector("#colordisplay");
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var modebuttons=document.querySelectorAll(".mode");
init();
function init(){
setupmodebuttons();
setupsquare();
reset();
}

function setupmodebuttons(){
	for(var i=0;i<modebuttons.length;i++){
	modebuttons[i].addEventListener("click", function(){
		modebuttons[0].classList.remove("selected");
		modebuttons[1].classList.remove("selected");
        this.classList.add("selected");
        //this.textContent==="easy" ? numofsquares=3:numofsquares=6;
        if(this.textContent==="Easy"){
        	numofsquares=3
        }
        else{
        	numofsquares=6;
        }
        reset();
	});
}
}
function setupsquare(){
	for(var i = 0;i < squares.length; i++){
	
	squares[i].addEventListener("click", function(){
		var clickedcolor=this.style.backgroundColor;
		if(clickedcolor===pickedcolor){
			messagedisplay.textContent="Correct!";
			resetbutton.textContent="Play again?";
			changeColor(clickedcolor);
			h1.style.backgroundColor= clickedcolor;
		}else{
			this.style.backgroundColor="#232323";
			messagedisplay.textContent="Try Again";
		}
	})
}
}


function reset(){
colors = generateRandomColors(numofsquares);
	pickedcolor = pickColor();
	colordisplay.textContent=pickedcolor;
	resetbutton.textContent="New Colors";

	messagedisplay.textContent="";
    for(var i=0;i<squares.length;i++){
    	if(colors[i]){
    	squares[i].style.display="block";	
		squares[i].style.backgroundColor=colors[i];
	}
	else{
		squares[i].style.display ="none";
	}

}
      h1.style.backgroundColor="steelblue";	

}
 /*easybtn.addEventListener("click",function(){
 	hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    numofsquares=3;
    colors=generateRandomColors(numofsquares);
    pickedcolor=pickColor();
    colorsdisplay.textContent=pickedcolor;
    for (var i=0;i<squares.length;i++){
    	if(colors[i]){
    		squares[i].style.backgroundColor=colors[i];
    	}
    	else{
    		squares[i].style.display="none";
    	}
    }
 });
 hardbtn.addEventListener("click",function(){
hardbtn.classList.add("selected");
easybtn.classList.remove("selected");
  numofsquares=6
colors=generateRandomColors(numofsquares);
    pickedcolor=pickColor();
    colorsdisplay.textContent=pickedcolor;
    for (var i=0;i<squares.length;i++){
    	
    		squares[i].style.backgroundColor=colors[i];
    	squares[i].style.display="block";
    	}
    
});*/

resetbutton.addEventListener("click",function(){
	reset();
	
});
     
      
function changeColor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor= color;
	}
}
function pickColor(){
	var random=Math.floor(Math.random()* colors.length);

	return colors[random];
}
function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
       arr.push(randomcolor());
	}
	return arr;
}
function randomcolor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}