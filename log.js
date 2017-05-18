const fs = require('fs');

// Source: http://stackoverflow.com/a/2998822/4135187
function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

var dtNow = new Date();
const logFile = dtNow.getFullYear() + pad(dtNow.getMonth() + 1, 2) + pad(dtNow.getDate(), 2) + '_log.txt';

module.exports = function(message) {
	fs.appendFile(logFile, message + '\r\n', function(err) {
		if (!err) {
			console.log(message);
		} else {
			console.error('error ocurred', err);
		}
	});
};

