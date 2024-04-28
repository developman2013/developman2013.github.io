const fs = require('fs-extra');
fs.remove('docs/');
fs.move('dist/browser', 'docs', (err) => { if(err) { return console.error(err); } });