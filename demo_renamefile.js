var fs = require('fs');

fs.rename('mynewfile.txt', 'myrenamefile.txt', function(err){
    if(err) throw err;
    console.log('File renamed!')
})