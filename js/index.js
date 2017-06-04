
//Set 100% zoom
var scale = 'scale(1)';
document.body.style.webkitTransform =  scale;    // Chrome, Opera, Safari
document.body.style.msTransform =   scale;       // IE 9
document.body.style.transform = scale;     // General
document.body.style.zoom = 1.0

//Disable zoom
$(document).keydown(function(event) {
if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
        event.preventDefault();
     }
    // 107 Num Key  +
    // 109 Num Key  -
    // 173 Min Key  hyphen/underscor Hey
    // 61 Plus key  +/= key
});

/*
//Disable scroll
$(window).bind('mousewheel DOMMouseScroll', function (event) {
       if (event.ctrlKey == true) {
       event.preventDefault();
       }
});
*/

function myFunction() {
    document.getElementById("demo").innerHTML = "YOU CLICKED ME!";

    //Delete svg element
    var style = document.getElementById("solid1").style.display;
    if(style === "none")
   document.getElementById("solid1").style.display = "block";
 else
   document.getElementById("solid1").style.display = "none";

}




//Helperfunctions
function rm(id){
  var style = document.getElementById(id).style.display;
  document.getElementById(id).style.display = "none";
}

function show(id){
  var style = document.getElementById(id).style.display;
 document.getElementById(id).style.display = "block";
}

function toggle(id){
  var style = document.getElementById(id).style.display;
  if(style === "none")
  document.getElementById(id).style.display = "block";
  else
  document.getElementById(id).style.display = "none";
}



//SVG listeners: Will be called when on element is clicked, function has the same name as the element id
function clickme1(){
  //worked
    document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
    //remove click button
    rm("clickme1");
    //Start rest of animation
    show("animation1");
    //TODO Add here an animation, since the main animation takes so long
    document.getElementById("demo").innerHTML = "Backround?";
    $('body').css('cursor', 'wait');
    setTimeout(function(){$('body').css('cursor','default')}, 2200);

    $("#divi").load("test.html");

  //Load greeting text
  $.get('test.html') .done(function(data) {
     $('#divi').html(data);});
  }

function cursorGame(count){
  for (i = 0; i < count; i++) {
    if(i%3 == 0){
      setTimeout(function(){$('body').css('cursor','n-resize')}, i*2);
    } else if (i%5 == 0) {
    setTimeout(function(){$('body').css('cursor','e-resize')}, i*2);
    }else if (i%7 == 0) {
    setTimeout(function(){$('body').css('cursor','s-resize')}, i*2);
    }else if (i%11 == 0) {
    setTimeout(function(){$('body').css('cursor','w-resize')}, i*2);
    }
    }
  }

function artist1(){
  document.getElementById("demo").innerHTML = "artist clicked me";
  //Create visual click response
  acirc.style.stroke="blue"
  bcirc.style.stroke="red"
  ccirc.style.stroke="green"
}

function dev1() {

  //Create visual click response
  alin.style.stroke="blue"
  blin.style.stroke="red"
  clin.style.stroke="green"

}









//This is loaded when webpage is displayed
$(document).ready(function(){

  /*
  $( "#buttonSpace" ).mouseover(function() {
    document.getElementsByTagName("body")[0].style.cursor = "url('http://wiki-devel.sugarlabs.org/images/e/e2/Arrow.cur'), auto";
  });

  $( "#buttonSpace" ).mouseleave(function() {
    $('body').css('cursor', 'default');
    document.getElementById("demo").innerHTML = "Leaving";
  });
  */

  //Remove future animations
  rm("animation1");

});
