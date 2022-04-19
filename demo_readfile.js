// var http = require('http');
var fs = require('fs')
var readline = require('readline')

// http.createServer(function(req, res){
//     fs.readFile('demofile.html', function(err, data){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080);


// Read line by line
var myInterface = readline.createInterface({
    input: fs.createReadStream('demofile.html')
});

var lineno = 0;

myInterface.on('line', function(line){
    lineno++;
    console.log('Line number '+ lineno + ': ' + line);
});
