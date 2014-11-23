var fs = require('fs');
var async = require('async');

var load = module.exports.load = function (filePath, callback) {
  fs.readFile(filePath, { encoding: 'utf8' }, function (err, data) {
    if (err) return callback(err);
    var result = [];
    async.each(
      data.split('\n'),
      function processOne (line, done) {
        var values = line.replace('\r', '').split('\t');
        var point = {
          lat: parseFloat(values[0]),
          lon: parseFloat(values[1]),
          p1: parseInt(values[2])
        };
        result.push(point);
        setImmediate(done);
      },
      function afterAll () {
        return callback(null, result);
      }
    );
  });
};
