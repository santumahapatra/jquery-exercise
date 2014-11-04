var positionLeft = function(temp){
  return {left: temp.toString() + "px", opacity: 1};
}

var positionTop = function(temp){
  return {top: temp.toString() + "px", opacity: 1};
}

var arrowKeyNotPressed = function(){
 return {opacity: 0.5};
}

var calculatePositionDecreasing = function( position, elementSize ){
  return (position <= elementSize) ? 0 : (position - elementSize);
}

var calculatePositionIncreasing = function(position, elementSize, windowSize ){
  return (position < ( windowSize - ( 2 * elementSize ) ) ) ? (position + elementSize) : ( windowSize - elementSize);
}

var moveElement = function(target, cssVal) {
  target.animate(cssVal, 5, function(){});
}

var calculateElementCoordinates = function(target){
  var offset = target.offset();
  return {
    leftVal: offset.left,
    topVal: offset.top,
    elementWidth: target.width(),
    elementHeight: target.height()
  }
}

var calculateWindowSize = function(){
  return {
    windowWidth: $(window).width(),
    windowHeight: $(window).height()
  }
}

var key = {
  LEFT : 37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40
}

var keyController = function(elementCoordinates, windowSize, keycode){
  var temp;
  switch(keycode){
    case key.LEFT:
      temp = calculatePositionDecreasing(elementCoordinates.leftVal, elementCoordinates.elementWidth);
      return positionLeft(temp);

    case key.RIGHT:
      temp = calculatePositionIncreasing(elementCoordinates.leftVal, elementCoordinates.elementWidth, windowSize.windowWidth);
      return positionLeft(temp);

    case key.UP:
      temp = calculatePositionDecreasing(elementCoordinates.topVal, elementCoordinates.elementHeight);
      return positionTop(temp);

    case key.DOWN:
      temp = calculatePositionIncreasing(elementCoordinates.topVal, elementCoordinates.elementHeight, windowSize.windowHeight);
      return positionTop(temp);

    default:
      return arrowKeyNotPressed();
  }
}

var controller = function(target, keycode){
  var elementCoordinates = calculateElementCoordinates(target);
  var windowSize = calculateWindowSize();
  return keyController(elementCoordinates, windowSize, keycode);
}



var animation = function(){
  var key_code = event.which;
  var target = $(".movable");
  var cssVal = controller(target, key_code);
  moveElement(target, cssVal);
}

$(document).ready(function(){
  $(document.body).bind("keydown", animation);
});
