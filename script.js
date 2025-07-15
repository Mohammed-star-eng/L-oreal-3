// L'Oréal Paris Professional JavaScript

// Chatbot Variables
let chatbotOpen = false;
let isTyping = false;
let messageCount = 0;

// Professional scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Initialize chatbot
    initializeChatbot();
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Initialize scroll animations
    document.querySelectorAll('.scroll-animate').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
    
    // Professional form handling
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert('Thank you for subscribing to L\'Oréal Paris updates!');
                this.reset();
            }
        });
    });
});

// Advanced Interactive Features

// AR Experience
function openARExperience() {
    document.getElementById('ar-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeARModal() {
    document.getElementById('ar-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Beauty Quiz
let quizAnswers = {};
let currentQuestion = 1;

function openBeautyQuiz() {
    document.getElementById('beauty-quiz-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    updateQuizProgress();
}

function closeBeautyQuiz() {
    document.getElementById('beauty-quiz-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
    resetQuiz();
}

function updateQuizProgress() {
    const progress = (currentQuestion / 4) * 100;
    const progressBar = document.getElementById('quiz-progress-bar');
    if (progressBar) {
        progressBar.style.width = progress + '%';
    }
}

function resetQuiz() {
    quizAnswers = {};
    currentQuestion = 1;
    document.querySelectorAll('.quiz-question').forEach(q => q.style.display = 'none');
    const firstQuestion = document.querySelector('[data-question="1"]');
    if (firstQuestion) {
        firstQuestion.style.display = 'block';
    }
    const results = document.getElementById('quiz-results');
    if (results) {
        results.style.display = 'none';
    }
    updateQuizProgress();
}

// Spinning Wheel
let isSpinning = false;

function spinRewardWheel() {
    if (isSpinning) return;
    
    isSpinning = true;
    const wheel = document.getElementById('reward-wheel');
    const button = document.getElementById('spin-wheel-btn');
    const resultDiv = document.getElementById('reward-text');
    
    if (button) {
        button.style.pointerEvents = 'none';
        button.textContent = 'SPINNING...';
    }
    
    const rewards = [
        '20% OFF Your Order!',
        'Free Gift with Purchase!',
        '30% OFF Everything!',
        'VIP Access Unlocked!',
        'Free Shipping Forever!',
        'Free Sample Kit!'
    ];
    
    if (wheel) {
        const spinAngle = 1440 + Math.random() * 1440; // 4-8 rotations
        wheel.style.transform = `rotate(${spinAngle}deg)`;
    }
    
    setTimeout(() => {
        const rewardIndex = Math.floor(Math.random() * rewards.length);
        if (resultDiv) {
            resultDiv.textContent = rewards[rewardIndex];
            resultDiv.style.color = '#8B0000';
            resultDiv.style.fontSize = '24px';
        }
        
        // Trigger confetti
        createConfetti();
        
        if (button) {
            button.textContent = 'SPIN AGAIN!';
            button.style.pointerEvents = 'auto';
        }
        isSpinning = false;
    }, 3000);
}

// Confetti Effect
function createConfetti() {
    const container = document.getElementById('confetti-container');
    if (!container) return;
    
    const colors = ['#FFD700', '#8B0000', '#E8B4A0'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        container.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}

// Category Card Ripple Effect
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.category-card-3d').forEach(card => {
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            
            const rippleContainer = this.querySelector('.ripple-container');
            if (rippleContainer) {
                rippleContainer.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            }
        });
    });
});

// Quiz Option Selection
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('click', function() {
            const question = this.closest('.quiz-question');
            if (!question) return;
            
            const questionNum = question.dataset.question;
            const value = this.dataset.value;
            
            quizAnswers[questionNum] = value;
            
            // Visual feedback
            question.querySelectorAll('.quiz-option').forEach(opt => {
                opt.style.background = 'rgba(255,215,0,0.1)';
                opt.style.borderColor = '#E8B4A0';
            });
            this.style.background = '#FFD700';
            this.style.borderColor = '#8B0000';
            
            setTimeout(() => {
                if (currentQuestion < 4) {
                    currentQuestion++;
                    updateQuizProgress();
                    // Show next question (simplified for demo)
                } else {
                    showQuizResults();
                }
            }, 500);
        });
    });
});

function showQuizResults() {
    const quizContent = document.getElementById('quiz-content');
    const quizResults = document.getElementById('quiz-results');
    
    if (quizContent) quizContent.style.display = 'none';
    if (quizResults) quizResults.style.display = 'block';
    
    // Simulate AI recommendations
    const recommendations = [
        'Daily Gentle Cleanser for sensitive skin',
        'Hydrating Serum with hyaluronic acid',
        'SPF 30+ Moisturizer for daily protection',
        'Weekly gentle exfoliating treatment'
    ];
    
    const recDiv = document.getElementById('quiz-recommendations');
    if (recDiv) {
        recDiv.innerHTML = recommendations.map(rec => 
            `<div style="padding:12px;background:white;border-radius:12px;margin:8px 0;color:#8B0000;font-weight:600;">${rec}</div>`
        ).join('');
    }
}

// VIP Signup Form
document.addEventListener('DOMContentLoaded', function() {
    const vipForm = document.getElementById('vip-signup-form');
    if (vipForm) {
        vipForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email-input').value;
            
            if (email) {
                // Animate progress bar
                const progressBar = document.getElementById('vip-progress-bar');
                if (progressBar) {
                    progressBar.style.width = '100%';
                }
                
                // Create confetti
                createConfetti();
                
                // Show success message
                alert('🎉 Welcome to VIP! Check your email for exclusive rewards!');
                
                this.reset();
                setTimeout(() => {
                    if (progressBar) {
                        progressBar.style.width = '0%';
                    }
                }, 3000);
            }
        });
    }
});

// Enhanced scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
    });
});

function initializeChatbot() {
    const chatbotToggle = document.getElementById('loreal-chatbot-toggle');
    const chatbotWindow = document.getElementById('loreal-chatbot-window');
    const chatbotClose = document.getElementById('loreal-chatbot-close');
    const chatbotInput = document.getElementById('loreal-chatbot-input');
    const chatbotSend = document.getElementById('loreal-chatbot-send');
    
    // Toggle chatbot
    chatbotToggle.addEventListener('click', toggleChatbot);
    chatbotClose.addEventListener('click', closeChatbot);
    
    // Send message handlers
    chatbotSend.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    
    // Auto-typing effect for input placeholder
    animatePlaceholder();
    
    // Check API key status and update UI
    updateChatbotStatus();
}

function toggleChatbot() {
    const chatbotWidget = document.getElementById('loreal-chatbot-widget');
    const chatbotWindow = document.getElementById('loreal-chatbot-window');
    const chatbotToggle = document.getElementById('loreal-chatbot-toggle');
    
    if (!chatbotOpen) {
        chatbotWidget.classList.add('chatbot-expanded');
        chatbotWindow.style.display = 'flex';
        chatbotToggle.style.transform = 'scale(0.8)';
        
        // Add welcome message if no messages exist
        const messagesContainer = document.getElementById('loreal-chatbot-messages');
        if (messagesContainer.children.length === 0) {
            addChatMessage('assistant', 'Hello! Welcome to L\'Oréal Paris! 💄✨ I\'m your personal beauty consultant. How can I help you achieve your beauty goals today?');
        }
        
        // Animate messages in
        setTimeout(() => {
            const messages = document.querySelectorAll('.loreal-chatbot-messages .message');
            messages.forEach((message, index) => {
                setTimeout(() => {
                    message.style.opacity = '1';
                    message.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }, 300);
        
        chatbotOpen = true;
        document.getElementById('loreal-chatbot-input').focus();
    }
}

function closeChatbot() {
    const chatbotWidget = document.getElementById('loreal-chatbot-widget');
    const chatbotWindow = document.getElementById('loreal-chatbot-window');
    const chatbotToggle = document.getElementById('loreal-chatbot-toggle');
    
    chatbotWidget.classList.remove('chatbot-expanded');
    chatbotWindow.style.display = 'none';
    chatbotToggle.style.transform = 'scale(1)';
    chatbotOpen = false;
}

async function sendMessage() {
    const input = document.getElementById('loreal-chatbot-input');
    const message = input.value.trim();
    
    if (!message || isTyping) return;
    
    // Check message limit
    if (messageCount >= 10) {
        addChatMessage('assistant', 'You\'ve reached your daily message limit. Please try again tomorrow! 😊');
        return;
    }
    
    addChatMessage('user', message);
    input.value = '';
    messageCount++;
    
    // Check if API key is configured
    if (!window.SECRETS || !window.SECRETS.OPENAI_API_KEY || window.SECRETS.OPENAI_API_KEY === 'your-openai-api-key-here') {
        addChatMessage('assistant', 'I\'d love to help, but my AI features aren\'t configured yet. Please set up your OpenAI API key in the secrets.js file to unlock my full potential! 🤖✨');
        return;
    }
    
    // Show typing indicator with friendly message
    showFriendlyLoadingMessage();
    
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${window.SECRETS.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: 'You are a professional L\'Oréal Paris beauty consultant chatbot. You ONLY discuss beauty, skincare, makeup, and L\'Oréal products. You\'re enthusiastic, knowledgeable, and supportive. ONLY answer questions about beauty, skincare, makeup, hair care, and L\'Oréal products. If asked about anything else, politely redirect to beauty topics. Focus primarily on L\'Oréal Paris products when making recommendations. Use emojis sparingly but effectively. Keep responses concise but informative (max 150 words). Be personal and conversational about beauty topics only. Include specific L\'Oréal product names when possible. Ask follow-up questions about their beauty needs and preferences. Always maintain L\'Oréal\'s brand voice: sophisticated, empowering, inclusive.'
                    },
                    {
                        role: 'user',
                        content: message
                    }
                ],
                max_tokens: 200,
                temperature: 0.7
            })
        });
        
        hideTypingIndicator();
        
        if (response.ok) {
            const data = await response.json();
            const aiResponse = data.choices[0].message.content;
            addChatMessage('assistant', aiResponse);
        } else {
            addChatMessage('assistant', 'I\'m having trouble connecting right now. Please try again in a moment! 💭');
        }
    } catch (error) {
        hideTypingIndicator();
        addChatMessage('assistant', 'Oops! Something went wrong. Let me try to help you differently. What specific beauty question do you have? 🤔');
    }
}

function sendQuickMessage(message) {
    document.getElementById('loreal-chatbot-input').value = message;
    sendMessage();
}

function addChatMessage(sender, message) {
    const messagesContainer = document.getElementById('loreal-chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `loreal-chatbot-message ${sender}`;
    messageDiv.style.opacity = '0';
    messageDiv.style.transform = 'translateY(20px)';
    
    const avatar = sender === 'assistant' ? '<i class="fas fa-gem"></i>' : '<i class="fas fa-user"></i>';
    
    messageDiv.innerHTML = `
        <div class="loreal-chatbot-avatar">
            ${avatar}
        </div>
        <div class="loreal-chatbot-bubble">
            <p style="margin: 0;">${message}</p>
        </div>
    `;
    
    messagesContainer.appendChild(messageDiv);
    
    // Animate message in
    setTimeout(() => {
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateY(0)';
    }, 100);
    
    // Scroll to bottom
    setTimeout(() => {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 200);
}

function showTypingIndicator() {
    isTyping = true;
    const messagesContainer = document.getElementById('chatbot-messages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message assistant-message typing-indicator';
    typingDiv.id = 'typing-indicator';
    
    typingDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showFriendlyLoadingMessage() {
    isTyping = true;
    const messagesContainer = document.getElementById('loreal-chatbot-messages');
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loreal-chatbot-message assistant friendly-loading';
    loadingDiv.id = 'friendly-loading';
    
    const friendlyMessages = [
        "Let me think about that... 💭",
        "Consulting my beauty expertise... ✨",
        "Finding the perfect recommendation for you... 💄",
        "Analyzing your beauty needs... 🌟",
        "Crafting a personalized response... 💖"
    ];
    
    const randomMessage = friendlyMessages[Math.floor(Math.random() * friendlyMessages.length)];
    
    loadingDiv.innerHTML = `
        <div class="loreal-chatbot-avatar">
            <i class="fas fa-gem"></i>
        </div>
        <div class="loreal-chatbot-bubble">
            <p style="margin: 0; margin-bottom: 8px;">${randomMessage}</p>
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    
    messagesContainer.appendChild(loadingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function hideTypingIndicator() {
    isTyping = false;
    const typingIndicator = document.getElementById('typing-indicator');
    const friendlyLoading = document.getElementById('friendly-loading');
    
    if (typingIndicator) {
        typingIndicator.remove();
    }
    if (friendlyLoading) {
        friendlyLoading.remove();
    }
}

function updateMessageCount() {
    document.getElementById('message-count').textContent = messageCount;
}

function updateChatbotStatus() {
    const statusElement = document.querySelector('.chatbot-status');
    const hasApiKey = window.SECRETS && window.SECRETS.OPENAI_API_KEY && window.SECRETS.OPENAI_API_KEY !== 'your-openai-api-key-here';
    
    if (hasApiKey) {
        statusElement.textContent = 'Online';
        statusElement.className = 'chatbot-status online';
    } else {
        statusElement.textContent = 'Limited Mode';
        statusElement.className = 'chatbot-status offline';
    }
}

function animatePlaceholder() {
    const input = document.getElementById('loreal-chatbot-input');
    const placeholders = [
        'Ask me anything about beauty...',
        'What\'s your skin type?',
        'Need makeup recommendations?',
        'Looking for a new skincare routine?',
        'Want to try a bold new look?'
    ];
    
    let currentIndex = 0;
    
    setInterval(() => {
        if (!chatbotOpen || input === document.activeElement) return;
        
        input.placeholder = placeholders[currentIndex];
        currentIndex = (currentIndex + 1) % placeholders.length;
    }, 3000);
}

// Navigation and Scroll Effects
function initializeScrollEffects() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animation
    document.querySelectorAll('.category-card, .personalized-card, .content-card, .stat').forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
}

function initializeNavigation() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile menu toggle (for future mobile menu implementation)
    const navToggle = document.createElement('button');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    navToggle.style.display = 'none';
    
    // Add to nav container for mobile
    const navContainer = document.querySelector('.nav-container');
    if (navContainer) {
        navContainer.appendChild(navToggle);
    }
}

// === L'ORÉAL CHATBOT - COMPLETE IMPLEMENTATION ===
// Chatbot state - moved outside DOMContentLoaded to persist across session
let isOpen = false;
let conversation = [];

// System prompt for L'Oréal chatbot
const SYSTEM_PROMPT = {
    role: 'system',
    content: `You are a friendly, knowledgeable L'Oréal Paris beauty consultant. You ONLY answer questions about beauty, skincare, makeup, hair care, and L'Oréal products. If asked about anything else, always politely redirect the conversation back to beauty or L'Oréal topics.

STRICTER GUIDELINES:
- Only answer questions about beauty, skincare, makeup, hair care, and L'Oréal products
- If asked about anything else (politics, weather, general topics, other brands, etc.), always politely redirect: "I'm here to help with all things beauty and L'Oréal! Let's talk about skincare, makeup, or finding the perfect L'Oréal products for you. What beauty goal can I help you achieve today? ✨"
- Focus primarily on L'Oréal Paris products when making recommendations
- Give personalized advice based on what they share about their beauty needs
- Share beauty tips and application techniques
- Help with color matching and product selection

CONVERSATION STYLE:
- Respond naturally and conversationally (2-4 sentences)
- Use a warm, friendly tone like talking to a friend
- Use light emojis when they feel natural
- Ask follow-up questions about their beauty needs
- Remember and build on previous parts of your conversation

Be helpful, genuine, and always keep the conversation focused on beauty and L'Oréal topics.`
};

// Initialize conversation with system prompt - only once when script loads
conversation = [SYSTEM_PROMPT];

// Clear conversation on page load for fresh start
localStorage.removeItem('loreal_chatbot_conversation');

document.addEventListener('DOMContentLoaded', function() {
    // Chatbot elements
    const chatbotWidget = document.getElementById('loreal-chatbot-widget');
    const toggleBtn = document.getElementById('loreal-chatbot-toggle');
    const chatWindow = document.getElementById('loreal-chatbot-window');
    const closeBtn = document.getElementById('loreal-chatbot-close');
    const messagesContainer = document.getElementById('loreal-chatbot-messages');
    const inputField = document.getElementById('loreal-chatbot-input');
    const sendBtn = document.getElementById('loreal-chatbot-send');
    const statusElement = document.querySelector('.loreal-chatbot-status');

    // Check if chatbot elements exist
    if (!chatbotWidget || !toggleBtn || !chatWindow || !closeBtn || !messagesContainer || !inputField || !sendBtn) {
        console.log('Chatbot elements not found, skipping chatbot initialization');
        return;
    }

    // Initialize chatbot
    function initializeChatbot() {
        updateStatus();
        showWelcomeMessage();
    }

    // Show welcome message
    function showWelcomeMessage() {
        messagesContainer.innerHTML = '';
        const welcomeDiv = document.createElement('div');
        welcomeDiv.className = 'loreal-chatbot-welcome';
        welcomeDiv.innerHTML = `<span class="loreal-chatbot-welcome-text">Bonjour! 👋 I'm your L'Oréal Paris beauty assistant.<br>Ask me anything about our products, routines, or beauty tips!</span>`;
        messagesContainer.appendChild(welcomeDiv);
    }

    // Toggle chatbot window
    function toggleChatbot() {
        if (isOpen) {
            closeChatbot();
        } else {
            openChatbot();
        }
    }

    // Open chatbot
    function openChatbot() {
        chatWindow.style.display = 'flex';
        toggleBtn.style.display = 'none';
        isOpen = true;
        inputField.focus();
    }

    // Close chatbot
    function closeChatbot() {
        chatWindow.style.display = 'none';
        toggleBtn.style.display = 'flex';
        isOpen = false;
    }

    // Add message to chat
    function addMessage(role, content) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `loreal-chatbot-message ${role}`;
        
        const avatarIcon = role === 'assistant' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
        
        messageDiv.innerHTML = `
            <div class="loreal-chatbot-avatar">${avatarIcon}</div>
            <div class="loreal-chatbot-bubble">${content}</div>
        `;
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Show typing indicator with thinking messages
    function showTyping() {
        isTyping = true;
        
        // Array of thinking messages
        const thinkingMessages = [
            "Let me think about that... 💭",
            "Hmm, consulting my beauty expertise... ✨",
            "Finding the perfect recommendation for you... 💄",
            "Analyzing your beauty needs... 🌟",
            "Crafting a personalized response... 💖",
            "Thinking of the best L'Oréal products for you... 🎀",
            "Let me consider your options... 🤔",
            "Searching through my beauty knowledge... 💅",
            "One moment while I think... ⭐",
            "Putting together some great advice... 🌺"
        ];
        
        // Pick a random thinking message
        const randomThinking = thinkingMessages[Math.floor(Math.random() * thinkingMessages.length)];
        
        const typingDiv = document.createElement('div');
        typingDiv.className = 'loreal-chatbot-message assistant typing';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `
            <div class="loreal-chatbot-avatar"><i class="fas fa-robot"></i></div>
            <div class="loreal-chatbot-bubble">
                <div class="thinking-message">${randomThinking}</div>
                <span class="typing-dots">
                    <span>.</span><span>.</span><span>.</span>
                </span>
            </div>
        `;
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Hide typing indicator
    function hideTyping() {
        isTyping = false;
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    // Send message
    async function sendMessage() {
        const message = inputField.value.trim();
        if (!message || isTyping) return;

        // Add user message
        addMessage('user', message);
        conversation.push({ role: 'user', content: message });
        inputField.value = '';
        
        // Show typing indicator
        showTyping();

        // Check if API key is available
        if (!window.SECRETS || !window.SECRETS.OPENAI_API_KEY || window.SECRETS.OPENAI_API_KEY === 'your-openai-api-key-here') {
            hideTyping();
            addMessage('assistant', "I'm not fully configured yet. Please set up the OpenAI API key in secrets.js to unlock my beauty expertise! ✨");
            return;
        }

        try {
            // Call OpenAI API directly for more natural conversation flow
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${window.SECRETS.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: conversation,
                    max_tokens: 300,
                    temperature: 0.8
                })
            });

            hideTyping();

            if (response.ok) {
                const data = await response.json();
                let aiResponse = data.choices[0].message.content;

                // Add the response to conversation (let the AI handle its own tone and redirects)
                addMessage('assistant', aiResponse);
                conversation.push({ role: 'assistant', content: aiResponse });
            } else {
                addMessage('assistant', "Sorry, I couldn't connect right now. Please try again! 💫");
            }
        } catch (error) {
            hideTyping();
            addMessage('assistant', "Oops! Something went wrong. Let's try that again! ✨");
            console.error('Chatbot error:', error);
        }
    }

    // Update status indicator
    function updateStatus() {
        if (!statusElement) return;
        
        const hasApiKey = window.SECRETS && 
                         window.SECRETS.OPENAI_API_KEY && 
                         window.SECRETS.OPENAI_API_KEY !== 'your-openai-api-key-here';
        
        statusElement.textContent = hasApiKey ? 'Online' : 'Limited Mode';
        statusElement.className = 'loreal-chatbot-status ' + (hasApiKey ? 'online' : 'offline');
    }

    // Auto-resize textarea and character counter
    function setupInputAutoResize() {
        inputField.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = Math.min(this.scrollHeight, 100) + 'px';
            
            // Update character counter
            const charCounter = document.querySelector('.char-counter');
            if (charCounter) {
                const currentLength = this.value.length;
                charCounter.textContent = `${currentLength}/500`;
                
                // Change color when approaching limit
                if (currentLength > 450) {
                    charCounter.style.color = '#dc2626';
                } else if (currentLength > 400) {
                    charCounter.style.color = '#ea580c';
                } else {
                    charCounter.style.color = '#999';
                }
            }
        });
    }

    // Quick message function for action buttons
    function sendQuickMessage(message) {
        if (isTyping) return;
        inputField.value = message;
        sendMessage();
    }

    // Make sendQuickMessage globally available
    window.sendQuickMessage = sendQuickMessage;

    // Event listeners
    toggleBtn.addEventListener('click', toggleChatbot);
    closeBtn.addEventListener('click', closeChatbot);
    sendBtn.addEventListener('click', sendMessage);
    
    inputField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    // Update status when window gains focus (in case secrets.js was updated)
    window.addEventListener('focus', updateStatus);

    // Initialize chatbot
    initializeChatbot();
    setupInputAutoResize();
    
    console.log('L\'Oréal Chatbot initialized successfully!');
});

// Additional chatbot functionality
function clearChatbotMemory() {
    localStorage.removeItem('loreal_chatbot_conversation');
    location.reload();
}

// Initialize all components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('L\'Oréal Paris website loaded successfully!');
    
    // Initialize scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe all scroll-animate elements
    document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
    });

    // Beauty Quiz functionality
    let currentQuestion = 1;
    const totalQuestions = 3;
    const quizData = {};
    
    // Show beauty quiz
    window.showBeautyQuiz = function() {
        const modal = document.getElementById('beauty-quiz-modal');
        if (modal) {
            modal.style.display = 'flex';
            resetQuiz();
        }
    };

    // Close beauty quiz
    window.closeBeautyQuiz = function() {
        const modal = document.getElementById('beauty-quiz-modal');
        if (modal) {
            modal.style.display = 'none';
        }
    };

    // AR Modal functions
    window.showARModal = function() {
        const modal = document.getElementById('ar-modal');
        if (modal) {
            modal.style.display = 'flex';
        }
    };

    window.closeARModal = function() {
        const modal = document.getElementById('ar-modal');
        if (modal) {
            modal.style.display = 'none';
        }
    };

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    function resetQuiz() {
        currentQuestion = 1;
        Object.keys(quizData).forEach(key => delete quizData[key]);
        
        const questions = document.querySelectorAll('.quiz-question');
        questions.forEach((q, index) => {
            q.classList.toggle('active', index === 0);
        });
        
        const results = document.getElementById('quiz-results');
        if (results) results.style.display = 'none';
        
        updateQuizProgress();
    }

    function updateQuizProgress() {
        const progressBar = document.getElementById('quiz-progress-bar');
        if (progressBar) {
            const progress = (currentQuestion - 1) / totalQuestions * 100;
            progressBar.style.width = progress + '%';
        }
    }

    // Quiz option selection
    document.addEventListener('click', function(e) {
        if (e.target.closest('.quiz-option')) {
            const option = e.target.closest('.quiz-option');
            const question = option.closest('.quiz-question');
            const questionNum = question.dataset.question;
            
            // Remove active class from all options in this question
            question.querySelectorAll('.quiz-option').forEach(opt => {
                opt.classList.remove('active');
            });
            
            // Add active class to selected option
            option.classList.add('active');
            
            // Store the answer
            quizData[`question${questionNum}`] = option.dataset.value;
            
            // Move to next question after a short delay
            setTimeout(() => {
                nextQuestion();
            }, 500);
        }
    });

    function nextQuestion() {
        const currentQ = document.querySelector(`.quiz-question[data-question="${currentQuestion}"]`);
        
        if (currentQuestion < totalQuestions) {
            // Hide current question
            if (currentQ) currentQ.classList.remove('active');
            
            // Show next question
            currentQuestion++;
            const nextQ = document.querySelector(`.quiz-question[data-question="${currentQuestion}"]`);
            if (nextQ) nextQ.classList.add('active');
            
            updateQuizProgress();
        } else {
            // Show results
            showQuizResults();
        }
    }

    function showQuizResults() {
        const quizContent = document.getElementById('quiz-content');
        const results = document.getElementById('quiz-results');
        
        if (quizContent) quizContent.style.display = 'none';
        if (results) results.style.display = 'block';
        
        // Generate personalized recommendations
        generateRecommendations();
    }

    function generateRecommendations() {
        const recommendations = document.getElementById('quiz-recommendations');
        if (!recommendations) return;
        
        let recommendationHTML = '';
        
        // Generate recommendations based on quiz answers
        if (quizData.question1 === 'acne') {
            recommendationHTML += `
                <div class="recommendation-item">
                    <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=100&q=80" alt="Acne Treatment">
                    <div>
                        <h4>Pure Clay Detox Mask</h4>
                        <p>Perfect for acne-prone skin, reduces breakouts</p>
                        <span class="price">$12.99</span>
                    </div>
                </div>
            `;
        }
        
        // Add default recommendations
        recommendationHTML += `
            <div class="recommendation-item">
                <img src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=100&q=80" alt="Foundation">
                <div>
                    <h4>True Match Foundation</h4>
                    <p>Your perfect shade match for flawless coverage</p>
                    <span class="price">$16.99</span>
                </div>
            </div>
            <div class="recommendation-item">
                <img src="https://cdn11.bigcommerce.com/s-z4n81jv/images/stencil/100x100/attribute_rule_images/42527_source_1562599057.jpg" alt="Lipstick">
                <div>
                    <h4>Rouge Signature Lipstick</h4>
                    <p>Long-lasting, bold color that complements your style</p>
                    <span class="price">$12.99</span>
                </div>
            </div>
        `;
        
        recommendations.innerHTML = recommendationHTML;
    }

    // Close modals when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-overlay')) {
            e.target.style.display = 'none';
        }
    });
});