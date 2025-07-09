const { error } = require('console');
const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname,'activity.log');
const interval = 10 * 1000;


function getcurrenttime() {
    const now = new Date();
    //console.log(now);

    const YYYY = now.getFullYear();;
    const MM = String(now.getMonth() + 1).padStart(2, '0');
    const DD = String(now.getDate()+1).padStart('2','0');
    const HH = String(now.getHours() + 1).padStart('2','0');
    const mm = String(now.getMinutes() + 1).padStart('2','0');
    const ss = String(now.getSeconds() + 1).padStart('2','0');

    return `${YYYY}-${MM}-${DD} ${HH}:${mm}:${ss}`

}

// console.log(getcurrenttime);


setInterval(() => {
    const timestamps = getcurrenttime();
    const logEntry = `${timestamps}\n`

    fs.appendFile('activity.log',logEntry,(err) =>{
        
            console.log(`${logEntry.trim()}`);

    })

},interval)

/*


fs.writeFile('activity.log',err => {
  if (err) {
    console.log('Something is wrong');
  }  else {
    console.log('File has been created');
  }

})

fs.readFile('activity.log','utf-8',(err,data) => {
    if (err) {
        console.log('Error accur during the file reading',err);
    } else {
        console.log("File has been logged");
        fs.appendFile
    }

})




*/



/*


fs - Periodic Logger with File System Module bookmark_border
Develop a Node.js script that logs system timestamps to a file at regular intervals.



Requirements:
Use Node.js with the fs (File System) module.
Create or append to a file named activity.log.

Functional Details:
Every 10 seconds, the script should:
Fetch the current system time.
Format the time in the following structure:
YYYY-MM-DD HH:MM:SS
Append a log entry in the file with this format:
log entry at YYYY-MM-DD HH:MM:SS
Ensure:
If the file does not exist, it should be created automatically.
If the file already exists, the script should append new entries without overwriting the existing content.

*/