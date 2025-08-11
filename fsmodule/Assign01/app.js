/*

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'activity.log');
const interval = 10_000; // 10 seconds

function getCurrentTime() {
  return new Date().toISOString().replace('T', ' ').split('.')[0];
}

setInterval(() => {
  const timestamp = getCurrentTime();
  const logEntry = `log entry at ${timestamp}\n`;

  fs.appendFile(filePath, logEntry, err => {
    if (err) console.error('Error writing to file:', err);
    else console.log(logEntry.trim());
  });
}, interval);


*/

/*

const { log } = require('console');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname,'activity.log');
const interval = 10000;


function getCurrentTime() {
    return new Date().toString();
}

fs.appendFile(filePath,getCurrentTime().toString(),err => {
    if (err) {
        console.log(err)
    }else{
        console.log('log entry created');
    }
})

*/

const { log } = require('console');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname,'activity.log');
const interval = 10000;

function getCurrentTime() {
    return new Date().toString();
}

fs.appendFile(filePath,getCurrentTime().toString(),err => {
    if (err) {
        console.log(err)
    }else{
        console.log('log enteredgg');
    }
})