
var fs = require('fs')

// appendFile()
// fs.appendFile('mynewfile.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// open()
// fs.open('mynewfile2.txt', 'w', function(err, file){
//     if(err) throw err;
//     console.log('Saved!');
// });

// writeFile()
fs.writeFile('mynewfile3.txt', 'Hello content 3!', function(err){
    if (err) throw err;
    console.log('Saved!');
});