import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;

// Обслуговування статичних файлів з папки 'public'
app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('New user connected, id:', socket.id);

  socket.on('disconnect', () => {
    console.log('User disconnected, id:', socket.id);
  });

  // Обробка повідомлень від клієнта
  socket.on('chat message', (msg) => {
    console.log('Received message:', msg);

    // Відправка підтвердження клієнту, який надіслав повідомлення
    socket.emit('message received', `Server received: "${msg}"`);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
