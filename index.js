var b1=document.querySelectorAll("button")[0];
b1.style.background="#008002";
var b2=document.querySelectorAll("button")[1];
b2.style.background="red";
var b3=document.querySelectorAll("button")[2];
b3.style.background="yellow";
var b4=document.querySelectorAll("button")[3];
b4.style.background="blue";
var a=[];
var b=[];
var level;
document.getElementsByTagName("button")[0].disabled=true;
document.getElementsByTagName("button")[1].disabled=true;
document.getElementsByTagName("button")[2].disabled=true;
document.getElementsByTagName("button")[3].disabled=true;
function checker(){
		console.log("b is: "+b);
		if(b[b.length-1]==a[b.length-1])
		{
			if(b.length==a.length)
			{
				level++;
				$("h1").text("Level "+level);
				newlevel();

			}
		}
		else
		{
			drum(5);
		}
}
$(document).on("keypress",function(event){
	if(event.key=='a')
	{
		level=1;
		$("h1").text("Level "+level);
		document.getElementsByTagName("button")[0].disabled=false;
		document.getElementsByTagName("button")[1].disabled=false;
		document.getElementsByTagName("button")[2].disabled=false;
		document.getElementsByTagName("button")[3].disabled=false;

		newlevel();
	}
});
function newlevel(){
	var a4=b.length;
	for(var i1=0;i1<a4;i1++){
		b.pop();
	}
	console.log("b after level: "+b);
	console.log("b length level: "+b.length);
	var d=Math.floor(Math.random()*4+1);
	a.push(d);
	console.log("a is: "+a);
	s=".b"+d;
	$(s).fadeIn(250).fadeOut(250).fadeIn(250);
	drum(d);
}
$(".b1").click(function(){
		b.push(1);
		checker();
	});
	$(".b2").click(function(){
		b.push(2);
		checker();
	});
	$(".b3").click(function(){
		b.push(3);
		checker();
	});
	$(".b4").click(function(){
		b.push(4);
		checker();
	});
function drum(h){
	switch(h){
		case 1:
			var audio=new Audio("music/green.mp3");
			audio.play();
			break;
		case 2:
			var audio=new Audio("music/red.mp3");
			audio.play();
			break;
		case 3:
			var audio=new Audio("music/yellow.mp3");
			audio.play();
			break;
		case 4:
			var audio=new Audio("music/blue.mp3");
			audio.play();
			break;
		case 5:
			new Audio("music/wrong.mp3").play();
			break;

	}
}
