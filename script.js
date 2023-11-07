document.addEventListener('DOMContentLoaded', function () {
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatMessages = document.querySelector('.chat-messages');
  
    function sendMessage() {
      const message = messageInput.value.trim();
      if (message !== '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'outgoing');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        messageInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
  
        // Simulate receiving a reply (you would replace this with real functionality)
        setTimeout(receiveMessage, 1000);
      }
    }
  
    function receiveMessage() {
        const possibleReplies = [
          "Hi! How can I help you?",
          "What's your question?",
          "Is there anything specific you'd like to know?",
          "I'm here to assist you. Ask me anything.",
          "How can I assist you today?",
          "Feel free to ask your question.",
          "Hello! How may I help you?",
          "I'm listening. What's on your mind?",
          "Ask away, I'm here to provide answers.",
          "You've got my attention. What do you need?",
          "I'm here to assist. Ask your question, please.",
          "I'm all ears. What can I do for you?",
          "Tell me what you need, and I'll do my best to help.",
          "Ask a question, and I'll give you an answer.",
        ];
      
        const randomIndex = Math.floor(Math.random() * possibleReplies.length);
        const replyMessage = possibleReplies[randomIndex];
      
        const replyElement = document.createElement('div');
        replyElement.classList.add('message', 'incoming');
        replyElement.textContent = replyMessage;
        chatMessages.appendChild(replyElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
      
      
  
    sendButton.addEventListener('click', sendMessage);
  
    messageInput.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
      }
    });
  });
  