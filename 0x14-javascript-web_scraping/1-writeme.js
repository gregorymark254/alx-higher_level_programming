#!/usr/bin/node
const fs = require('node:fs');

fs.writeFile(process.argv[2], process.ergv[3], err => {
  if (err) {
    console.error(err);
  } else {
    console.log('file writen')
  }
});
