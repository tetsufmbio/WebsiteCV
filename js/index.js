$(document).ready(function() {
  var image = SVG('svgimage');

  $.get('montain_plain.svg', function(contents) {
    var tmp = $('svg', contents);

    image.svg(tmp[0].innerHTML);
  }, 'xml');
});

var element = SVG.get('path4507')
element.move(200,200)
