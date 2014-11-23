var async = require('async');

module.exports = function (arr, callback) {
  var stats = {
    latMin: 180,
    latMax: -180,
    lonMin: 180,
    lonMax: -180,
    p1Min: Number.MAX_VALUE,
    p1Max: Number.MIN_VALUE
  };

  async.each(
    arr,
    function processOne (item, done) {
      stats.latMin = smallerOf (stats.latMin, item.lat);
      stats.latMax = biggerOf (stats.latMax, item.lat);
      stats.lonMin = smallerOf (stats.lonMin, item.lon);
      stats.lonMax = biggerOf (stats.lonMax, item.lon);
      stats.p1Min = smallerOf (stats.p1Min, item.p1);
      stats.p1Max = biggerOf (stats.p1Max, item.p1);
      setImmediate(done);
    },
    function afterAll () {
      return callback(null, stats);
    }
  );
};

function biggerOf (a, b) {
  return a > b ? a : b;
}

function smallerOf (a, b) {
  return a < b ? a : b;
}
