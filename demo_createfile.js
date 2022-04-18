var fs = require('fs')

fs.appendFile('mynewfile', 'Hello content', function(err) {
    if (err) throw err;
    console.log('Daved');
});