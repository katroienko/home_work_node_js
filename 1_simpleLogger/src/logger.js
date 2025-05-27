import fs from 'node:fs';

export function logMessage(message){
    const timestamp = new Date().toISOString();
     const logEntry = `[${timestamp}] ${message}\n`;

  fs.appendFile('log.txt', logEntry, (err) => {
    if (err) {
      console.error("Error writing to log:", err);
    }
  });
}