// autoplay;
const Time25p = setTimeout(change1, 15000)

var count=0;

var gif1='https://giphy.com/embed/3aWkZTWqeVyHS'
var gif2='https://giphy.com/embed/TEkr9oBZ57KFmMWScZ'
function change1(){
    var audio = new Audio("sound/123.mp3");
    audio.play();
    document.getElementById('note').innerHTML="Chơi nhiều nhưng học cũng nhiều ấy là nhân <br> Đã học là học hẳn hoi ấy là nghĩa <br> Học 25 phút nghỉ 5 phút ấy là trí 😘";
    document.getElementById('123').src=gif2;
    appear();
    count+=1;
    setTimeout(change2, 30000)
}

function change2(){
   
    var audio = new Audio("sound/Nhạc chuông Bật tình yêu Lên (giọng nam) remix Tiktok - Cukak.mp3");
    audio.play();
    document.getElementById('123').src=gif1;
    setTimeout(change1, 15000)
}
//3000000 15000000
function Troll(){
    modal.style.display = "block";
}

function appear(){
    console.log(count);
    if(count==1){
        document.getElementById("a01").style.display='inline';
    }
    else if(count==2){
        document.getElementById("a03").style.display='inline';
    }
    else if(count==3){
        document.getElementById("a04").style.display='inline';
    }
    else if(count==4){
        document.getElementById("a02").style.display='inline';
    }
    else if(count==5){
        document.getElementById("a05").style.display='inline';
        alert("Moá ơi bạn này học chăm thế xứng đáng 10 ny😎")
    } 
}



//Mở modal khi bấm nút edit
var modal =document.querySelector('.modal')
var closeBtn= document.querySelector('#md1');
var closeBtn1= document.querySelector('#md2');
    // đóng modal
    closeBtn.onclick=function(){
        modal.style.display = "none";
    }
    closeBtn1.onclick=function(){
        modal.style.display = "none";
    }
    // đóng modal khi click bên ngoài
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }
