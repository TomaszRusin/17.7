var fs = require('fs');
var colors = require('colors');

fs.readdir('./new', 'utf-8', function(err, data) {
    console.log(data);
    fs.writeFile('files.txt', data, (err) => {
        if(err) throw err;
        console.log('saved');
    })
});