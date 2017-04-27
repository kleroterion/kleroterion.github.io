
  (function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
            callback(currTime + timeToCall);
        },
        timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };

    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
    };
  }());


var canvas = document.getElementById("justice");
var ctx = canvas.getContext("2d");
ctx.lineCap = "round";

// variable to hold how many frames have elapsed in the animation
var t = 1;

// define the path to plot
var vertices = [];
vertices.push({
    x: 200,
    y: 0
});
vertices.push({
    x: 200,
    y: 50
});
vertices.push({
    x: 100,
    y: 50
});
vertices.push({
    x: 50,
    y: 200
});
vertices.push({
    x: 150,
    y: 200
});
vertices.push({
    x: 100,
    y: 50
});
vertices.push({
    x: 300,
    y: 50
});
vertices.push({
    x: 250,
    y: 200
});
vertices.push({
    x: 350,
    y: 200
});
vertices.push({
    x: 300,
    y: 50
});
vertices.push({
    x: 200,
    y: 50
});

// draw the complete line
ctx.lineWidth = 1;
// tell canvas you are beginning a new path
ctx.beginPath();
// draw the path with moveTo and multiple lineTo's



// set some style
ctx.lineWidth = 1;
ctx.strokeStyle = "#448fda";
// calculate incremental points along the path
var points = calcWaypoints(vertices);
// extend the line from start to finish with animation
animate(points);






function animate() {
    if (t < points.length - 1) {
        requestAnimationFrame(animate);
    }
    // draw a line segment from the last waypoint
    // to the current waypoint
    ctx.beginPath();
    ctx.moveTo(points[t - 1].x, points[t - 1].y);
    ctx.lineTo(points[t].x, points[t].y);
    ctx.stroke();
    // increment "t" to get the next waypoint
    t++;
}

// calc waypoints traveling along vertices
function calcWaypoints(vertices) {
    var waypoints = [];
    for (var i = 1; i < vertices.length; i++) {
        var pt0 = vertices[i - 1];
        var pt1 = vertices[i];
        var dx = pt1.x - pt0.x;
        var dy = pt1.y - pt0.y;
        for (var j = 0; j < 100; j++) {
            var x = pt0.x + dx * j / 100;
            var y = pt0.y + dy * j / 100;
            waypoints.push({
                x: x,
                y: y
            });
        }
    }
    return (waypoints);
}
