for(var i = 0 ; i< document.querySelectorAll(".drum").length ; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var x = this.innerHTML;
      makeSound(x);

  });
}
addEventListener("keypress" , function(evt){

  var y = evt.key ;
  makeSound(y);

})

function makeSound(keydasso){

switch(keydasso){
 case "w":
  var a1 = new Audio("sounds/tom-1.mp3");
  a1.play() ;
  break;

case "a":
   var a2 = new Audio("sounds/tom-2.mp3");
   a2.play() ;
   break;
case "s":
    var a3 = new Audio("sounds/tom-3.mp3");
    a3.play() ;
    break;
case "d":
        var a3 = new Audio("sounds/tom-4.mp3");
        a3.play() ;
        break;
case "j":
     var a4 = new Audio("sounds/snare.mp3");
     a4.play() ;
     break;

case "k":
      var a5 = new Audio("sounds/crash.mp3");
      a5.play() ;
      break;
case "l":
       var a6 = new Audio("sounds/kick-bass.mp3");
       a6.play() ;
       break;

}}
