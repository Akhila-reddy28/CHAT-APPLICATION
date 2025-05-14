const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value.trim()) {
        const msg = {
            text: input.value,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        socket.emit('chat message', msg);
        input.value = '';
    }
});

socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.textContent = `${msg.time}: ${msg.text}`;
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight; // Auto-scroll
});

