const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

// function that remove log files
function removeLogs() {
    if (fs.existsSync(logsDir)) {
        
        const files = fs.readdirSync(logsDir);
        files.forEach(file => {
            const filePath = path.join(logsDir, file);
            console.log(`Deleting the files: ${file}`); 
            fs.unlinkSync(filePath); 
        });

        
        fs.rmdirSync(logsDir);
        console.log('Logs directory removed');
    } else {
        console.log('Logs directory does not exist');
    }
}

removeLogs();