module.exports = function (data, stats, meshParams, callback) {
  var mesh = [];
  var i, j;

  for (i = 0; i < meshParams.cellsWidth; i++) {
    var row = [];
    for (j = 0; j < meshParams.cellsHeight; j++) {
      row.push(0);
    }
    mesh.push(row);
  }

  var countMax = data.length;

  for (i = 0; i < data.length; i++) {
    var lonOffset = data[i].lon - stats.lonMin;
    var latOffset = data[i].lat - stats.latMin;
    var cellX = Math.floor(lonOffset / meshParams.cellWidth);
    var cellY = Math.floor(latOffset / meshParams.cellsHeight);
    var curValue = ++ mesh[cellY][cellX];
    countMax = countMax > curValue ? countMax : curValue; 
  }

  console.log('max>', countMax);

  return callback(null, mesh);
};
