function roll()
{	
	document.getElementById("result").innerHTML="<img src='image/loder.gif'/ class='loder'><span>Please wait..<span/>";
	setTimeout(function(){
		const rand=Math.floor(Math.random()*6)+1;
	document.getElementById("result").innerHTML="<img src='image/"+rand+".png'/ class='img1'>";
},2000);
	
	
}