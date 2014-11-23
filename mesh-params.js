/*
  input: {
    cellWidth: ширина ячейки в градусах,
    cellXcount: (ИЛИ) количество ячеек по горизонтали
  }
*/

module.exports = function (input, stats) {
  var extentWidthDeg = stats.lonMax - stats.lonMin;
  var extentHightDeg = stats.latMax - stats.latMin;
  var aspectRatio = extentWidthDeg / extentHightDeg;
  var cellWidth = input.cellXcount ? extentWidthDeg / input.cellXcount : input.cellWidth;
  var cellHeight = cellWidth;
  var mesh = {
    cellWidth: cellWidth,
    cellHeight: cellHeight,
    cellsWidth: Math.ceil(extentWidthDeg / cellWidth),
    cellsHeight: Math.ceil(extentHightDeg / cellHeight),
    startLat: stats.latMin,
    startLon: stats.lonMin
  };

  return mesh;
};
