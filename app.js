const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatContainer = document.querySelector('.chat-container');

sendButton.addEventListener('click', () => {
    const messageText = messageInput.value;
    if (messageText.trim() !== '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = messageText;
        chatContainer.appendChild(messageElement);
        messageInput.value = '';
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
});
