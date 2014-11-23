var express = require('express');

var processPoints = require('./process-points');
var calcStats = require('./stats');
var meshParams = require('./mesh-params');
var calcMesh = require('./calc-mesh');

var valuesPath = './visual_1.txt';

console.log('reading..');
processPoints.load(valuesPath, function (err, data) {
  if (err) throw err;

  console.log('stats..');
  calcStats(data, function (err, stats) {
    console.log(stats);

    var mesh = meshParams({ cellXcount: 100 }, stats);
    console.log(mesh);

    calcMesh(data, stats, mesh, function (err, meshData) {
      //console.log(meshData);
    });
  });
});
