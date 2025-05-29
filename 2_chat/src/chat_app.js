import { log } from 'node:console';
import EventEmitter from 'node:events';
import path from 'node:path';
import fs from 'node:fs/promises';

const emitter = new EventEmitter();
const logFilePath = path.resolve('logs.txt');
console.log(logFilePath);
// console.log(path);



function sendMessage(user, message, emitter) {
    emitter.emit('greeting', { user, message })
}

emitter.on('greeting', async({ user, message }) => {
    console.log(`${user}: ${message}`)

    // Обработка события
    const formatted = `${new Date().toISOString()} - ${user}: ${message}`;
    console.log(formatted);

    await fs.appendFile(logFilePath, formatted + '\n');
});

sendMessage("Kat", 'I am a student on web development course', emitter);
sendMessage('Bohdan', 'I am teacher in IT Career HUB', emitter)