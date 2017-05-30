$( document ).ready(function(){

$('form').submit(function(){
var first = $( "#first" ).val();
var last = $( "#last" ).val();
$('h2').remove();
$.ajax("/cgi-bin/disciplina/webdev20171/tetsu/testeAPIjson.pl?first="+first+"&last="+last).done(function (data){
$('body').append('<h2>Hello '+data["first"]+' '+data["last"]+'</h2>');
return false;});
return false;
});
});


