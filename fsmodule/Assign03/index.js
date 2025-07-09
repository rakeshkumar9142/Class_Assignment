const fs = require('fs');
const path = require('path');

const folderpath = path.join(__dirname,'documents');

if(fs.existsSync(folderpath)) {
    fs.readdir(folderpath,(err,items) => {
        if (err) {
            console.log('Error reading folder',err);
            return;
        }
        items.forEach(item => {
            const itemPath = path.join(__dirname,item)
            fs.stat(itemPath,(err,Stats) => {
                if (err) {
                    console.log('Error reading item stat');
                } else if(Stats.isFile()) {
                    console.log(item);
                }
            })
        })
    })
} else {
    console.log('The document folder is does not exist');
}