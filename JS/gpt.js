var gif1='https://giphy.com/embed/3aWkZTWqeVyHS'
var gif2='https://giphy.com/embed/TEkr9oBZ57KFmMWScZ'
var gif = [gif1, gif2]
current=0;
count=0;
DisplayTime = 1*1*1000;
SwitchTime=5*60*1000;



function change1(){
    document.getElementById('123').src=gif[current];
    current=(current+1)%2;

}
change1();
setInterval(change1(),DisplayTime)