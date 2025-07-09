const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'myNotes');
const backupDir = path.join(__dirname, 'backupNotes');


if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir);
    console.log('Created folder: backupNotes/');
}


fs.readdir(sourceDir, (err, files) => {
    if (err) {
        console.error('Error reading source directory:', err);
        return;
    }

    files.forEach(file => {
        const ext = path.extname(file);
        if (ext === '.txt') {
            const srcPath = path.join(sourceDir, file);
            const destPath = path.join(backupDir, file);

        
            fs.copyFile(srcPath, destPath, err => {
                if (err) {
                    console.error(`Failed to copy ${file}:`, err);
                } else {
                    console.log(`Copied: ${file}`);
                }
            });
        }
    });
});
