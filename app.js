// VЛАДОНИ Chat Application
document.addEventListener('DOMContentLoaded', function() {
    const messagesContainer = document.getElementById('messagesContainer');
    const messageInput = document.getElementById('messageInput');
    const sendBtn = document.getElementById('sendBtn');

    // Get current time formatted
    function getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
    }

    // Add user message to chat
    function addUserMessage(text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message user-message';
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${escapeHtml(text)}</p>
                <span class="message-time">${getCurrentTime()}</span>
            </div>
        `;
        messagesContainer.appendChild(messageDiv);
        scrollToBottom();
    }

    // Add bot message to chat
    function addBotMessage(html, quickReplies = []) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message bot-message';

        let quickRepliesHtml = '';
        if (quickReplies && quickReplies.length > 0) {
            quickRepliesHtml = `
                <div class="quick-replies">
                    ${quickReplies.map(reply => `<button class="quick-reply-btn">${reply}</button>`).join('')}
                </div>
            `;
        }

        messageDiv.innerHTML = `
            <div class="message-content">
                ${html}
                ${quickRepliesHtml}
                <span class="message-time">${getCurrentTime()}</span>
            </div>
        `;
        messagesContainer.appendChild(messageDiv);

        // Add event listeners to quick reply buttons
        const buttons = messageDiv.querySelectorAll('.quick-reply-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', function() {
                const text = this.textContent;
                sendMessage(text);
            });
        });

        scrollToBottom();
    }

    // Add typing indicator
    function addTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-message';
        typingDiv.innerHTML = `
            <div class="message-content">
                <div class="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        messagesContainer.appendChild(typingDiv);
        scrollToBottom();
        return typingDiv;
    }

    // Remove typing indicator
    function removeTypingIndicator(element) {
        if (element && element.parentNode) {
            element.parentNode.removeChild(element);
        }
    }

    // Scroll to bottom of messages
    function scrollToBottom() {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Escape HTML to prevent XSS
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Send message
    function sendMessage(text) {
        if (!text || text.trim() === '') return;

        // Add user message
        addUserMessage(text);

        // Clear input
        messageInput.value = '';

        // Show typing indicator
        const typingIndicator = addTypingIndicator();

        // Simulate bot response delay
        const delay = 800 + Math.random() * 1200;
        setTimeout(() => {
            removeTypingIndicator(typingIndicator);

            // Get response from knowledge base
            const response = findResponse(text);
            addBotMessage(response.text, response.quickReplies);
        }, delay);
    }

    // Event listeners
    sendBtn.addEventListener('click', function() {
        sendMessage(messageInput.value);
    });

    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage(messageInput.value);
        }
    });

    // Focus input on load
    messageInput.focus();

    // Add initial quick replies to the welcome message
    const welcomeMessage = messagesContainer.querySelector('.bot-message');
    if (welcomeMessage) {
        const quickRepliesDiv = document.createElement('div');
        quickRepliesDiv.className = 'quick-replies';
        quickRepliesDiv.innerHTML = `
            <button class="quick-reply-btn">Услуги</button>
            <button class="quick-reply-btn">Цены</button>
            <button class="quick-reply-btn">Контакты</button>
            <button class="quick-reply-btn">Как начать работу?</button>
        `;
        welcomeMessage.querySelector('.message-content').appendChild(quickRepliesDiv);

        // Add event listeners
        const buttons = quickRepliesDiv.querySelectorAll('.quick-reply-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', function() {
                sendMessage(this.textContent);
            });
        });
    }

    // Search functionality in sidebar
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            // Could implement search through chat history here
            console.log('Search:', e.target.value);
        });
    }

    // Update chat preview in sidebar when new messages arrive
    function updateChatPreview(text) {
        const chatPreview = document.querySelector('.chat-preview');
        if (chatPreview) {
            // Remove HTML tags and truncate
            const plainText = text.replace(/<[^>]*>/g, '').substring(0, 30);
            chatPreview.textContent = plainText + (text.length > 30 ? '...' : '');
        }

        const chatTime = document.querySelector('.chat-time');
        if (chatTime) {
            chatTime.textContent = getCurrentTime();
        }
    }

    // Observe new messages to update sidebar
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                const lastMessage = messagesContainer.querySelector('.message:last-child');
                if (lastMessage) {
                    const content = lastMessage.querySelector('.message-content p');
                    if (content) {
                        updateChatPreview(content.textContent);
                    }
                }
            }
        });
    });

    observer.observe(messagesContainer, { childList: true });
});
