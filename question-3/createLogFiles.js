const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

// Function that  creates log files
function createLogs() {
   
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir); 
        console.log('Logs directory created');
    } else {
        console.log('Logs directory already exists');
    }

    process.chdir(logsDir);

    for (let i = 0; i < 10; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `Log file ${i}`); 
        console.log(fileName); 
    }
}

createLogs();