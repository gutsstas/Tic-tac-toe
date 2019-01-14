for(var i=0; i<9; i++){
    document.getElementById('game').innerHTML+='<div class="block"></div>'
}
var hod = 0;
document.getElementById('game').onclick = function(event){
    console.log(event);
    if (event.target.className == 'block'){
        if (hod%2==0){
        event.target.innerHTML = 'X'
        } else{
            event.target.innerHTML = '0'
            }
        hod++
    }
    check();
}


function check(){
	var allblock = document.getElementsByClassName('block');
    var win = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6],
];
   for(var i=0; i<win.length; i++){
       var [a,b,c] = win[i];
       if (allblock[a].innerHTML == allblock[b].innerHTML && allblock[b].innerHTML == allblock[c].innerHTML && allblock[a].innerHTML != '') {
           alert("Выйграл "+allblock[a].innerHTML);
	   }
   }
 }




