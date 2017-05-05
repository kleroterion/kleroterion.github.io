(function() {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) window.requestAnimationFrame = function(callback, element) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function() {
        callback(currTime + timeToCall);
      },
      timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };

  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function(id) {
    clearTimeout(id);
  };
}());


var canvas3 = document.getElementsByClassName("canvas-justice-3")[0];
var ctx3 = canvas3.getContext("2d");
ctx3.lineCap = "round";

// variable to hold how many frames have elapsed in the animation
var t3 = 1;

// define the path to plot
var vertices3 = [];
vertices3.push({
  x: 0,
  y: 300
});
vertices3.push({
  x: 300,
  y: 300
});
vertices3.push({
  x: 300,
  y: 260
});
vertices3.push({
  x: 0,
  y: 260
});
vertices3.push({
  x: 0,
  y: 300
});
vertices3.push({
  x: 0,
  y: 260
});
vertices3.push({
  x: 45,
  y: 260
});
vertices3.push({
  x: 45,
  y: 100
});
vertices3.push({
  x: 85,
  y: 100
});
vertices3.push({
  x: 85,
  y: 260
});
vertices3.push({
  x: 130,
  y: 260
});
vertices3.push({
  x: 130,
  y: 100
});

vertices3.push({
  x: 170,
  y: 100
});
  vertices3.push({
  x: 170,
  y: 260
});

  vertices3.push({
  x: 215,
  y: 260
});

    vertices3.push({
  x: 215,
  y: 100
});

      vertices3.push({
  x: 255,
  y: 100
});
        vertices3.push({
  x: 255,
  y: 260
});
      vertices3.push({
  x: 255,
  y: 100
});

vertices3.push({
  x: 300,
  y: 100
});

vertices3.push({
  x: 150,
  y: 0
});
vertices3.push({
  x: 0,
  y: 100
});

vertices3.push({
  x: 45,
  y: 100
});

vertices3.push({
  x: 255,
  y: 100
});


// draw the complete line
ctx3.lineWidth = 1;
// tell canvas you are beginning a new path
ctx3.beginPath();
// draw the path with moveTo and multiple lineTo's



// set some style
ctx3.lineWidth = 1;
ctx3.strokeStyle = "#448fda";
// calculate incremental points along the path
var points3 = calcWaypoints3(vertices3);
// extend the line from start to finish with animation
animate3(points3);






function animate3() {
  if (t3 < points3.length - 1) {
    requestAnimationFrame(animate3);
  }
  // draw a line segment from the last waypoint
  // to the current waypoint
  ctx3.beginPath();
  ctx3.moveTo(points3[t3 - 1].x, points3[t3 - 1].y);
  ctx3.lineTo(points3[t3].x, points3[t3].y);
  ctx3.stroke();
  // increment "t" to get the next waypoint
  t3++;
}

// calc waypoints traveling along vertices
function calcWaypoints3(vertices3) {
  var waypoints3 = [];
  for (var i = 1; i < vertices3.length; i++) {
    var pt03 = vertices3[i - 1];
    var pt13 = vertices3[i];
    var dx3 = pt13.x - pt03.x;
    var dy3 = pt13.y - pt03.y;
    for (var j = 0; j < 100; j++) {
      var x = pt03.x + dx3 * j / 100;
      var y = pt03.y + dy3 * j / 100;
      waypoints3.push({
        x: x,
        y: y
      });
    }
  }
  return (waypoints3);
}
