var animation = function(){
  var key = event.which;
  var target = $(".movable");
  var cssVal = {};
  var offset = target.offset();
  var leftVal = offset.left;
  var topVal = offset.top;
  var elWidth = target.width();
  var elHeight = target.height();
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  var val = 0;
  switch(key){
    //Left Key
    case 37:
      val = (leftVal <= elWidth) ? 0 : (leftVal - elWidth);
      cssVal = {left: val.toString() + "px"}
      break;

    // Right Key
    case 39:
      val = (leftVal < ( windowWidth - ( 2 * elWidth ) ) ) ? (leftVal + elWidth) : ( windowWidth - elWidth);
      cssVal = {left: val.toString() + "px"}
      break;

    // Up Key
    case 38:
      val = (topVal <= elHeight) ? 0 : (topVal - elHeight);
      cssVal = {top: val.toString() + "px"}
      break;

    // Down Key
    case 40:
      val = (topVal < ( windowHeight - ( 2 * elHeight ) ) ) ? (topVal + elHeight) : ( windowHeight - elHeight);
      cssVal = {top: val.toString() + "px"}
      break;

    default:
      break;
  }
  target.animate(cssVal, 5, function(){});
}

$(document).ready(function(){
  $(document.body).bind("keydown", animation);
});
