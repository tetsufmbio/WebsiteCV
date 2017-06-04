
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
//Loads and removes elements from canvas
function rm(id){
  $("#"+id).addClass('hide');
}

function show(id){
  $("#"+id).removeClass('hide');
  //Reloading svg to document again (otherwise not working in Chrome)
  //checks if passed id is an svg-element or an svg-root-element
  if($( "#"+id ).hasClass( "scaleSVG" ) || $( "#"+ $("#"+id).closest('svg').attr('id')).hasClass( "scaleSVG" )){
  var element = document.querySelector("#"+id);
  var cloneElement = element.cloneNode(true);
  element.parentNode.replaceChild(cloneElement, element);
  }
}
//loads html content to specified div
function loadContent(id,source){
  var tmp ="content.html";
  tmp += " #"+source;
  $("#"+id).load(tmp);
}

/*
function toggle(id){
  var style = document.getElementById(id).style.display;
  if(style === "none")
  document.getElementById(id).style.display = "block";
  else
  document.getElementById(id).style.display = "none";
}
*/

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
    setTimeout(function(){ document.getElementById("loaderWelcome").style.display = "none"}, 2200);

    //welcome message
    loadContent("content2","welcome");
    show("content2");
    //Welcome fun fact
    loadContent("content1","funfact");
    show("content1");
    beLife();
}

/*
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
*/


//Click listeners
function artist1(){
  //LOG
  document.getElementById("demo").innerHTML = "artist clicked me";
  //Create visual click response
  acirc.style.stroke="blue"
  bcirc.style.stroke="red"
  ccirc.style.stroke="green"
  show("window1");
}

function dev1() {
  //Create visual click response
  alin.style.stroke="blue"
  blin.style.stroke="red"
  clin.style.stroke="green"
  show("window2");
}

function musician1(){
  loadContent("content2","musician2");
  loadContent("content1","musician1");
}

function designer1(){
  loadContent("content2","designer2");
  loadContent("content1","designer1");
}
function androiddev1(){
  loadContent("content2","androiddev2");
  loadContent("content1","androiddev1");
}

function bioinformatician1(){
  loadContent("content2","bioinformatician2");
  loadContent("content1","bioinformatician1");
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


});


function beLife() {
  var elem = document.getElementById("content1");
  var pos = 0;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos == 200) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}
