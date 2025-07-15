// L'Oréal Paris Cloudflare Worker
// Complete website bundle with HTML, CSS, and JavaScript

// Store your OpenAI API key as an environment variable in Cloudflare Workers
// Go to Workers & Pages > Your Worker > Settings > Environment Variables
// Add: OPENAI_API_KEY = your_actual_api_key

const HTML_CONTENT = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>L'Oréal Paris - Because You're Worth It</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Instrument+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        /* Embedded CSS - Complete L'Oréal Paris Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: #2c1810;
            background: #f5f2ed;
            overflow-x: hidden;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
        }

        /* Navigation Styles */
        nav {
            background: #f5f2ed;
            padding: 20px 0;
            position: sticky;
            top: 0;
            z-index: 1000;
            border-bottom: 1px solid rgba(0,0,0,0.05);
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .nav-logo {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .logo-image {
            height: 40px;
            width: auto;
            object-fit: contain;
        }

        .nav-menu {
            display: flex;
            list-style: none;
            gap: 40px;
        }

        .nav-menu a {
            text-decoration: none;
            color: #2c1810;
            font-weight: 500;
            font-size: 15px;
            transition: color 0.3s ease;
        }

        .nav-menu a:hover {
            color: #8B1538;
        }

        .nav-actions {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .nav-actions button {
            background: none;
            border: none;
            cursor: pointer;
            padding: 8px;
            color: #2c1810;
            font-size: 16px;
            transition: color 0.3s ease;
            position: relative;
        }

        .nav-actions button:hover {
            color: #8B1538;
        }

        .signup-btn {
            background: #8B1538 !important;
            color: white !important;
            padding: 12px 24px !important;
            border-radius: 25px;
            font-weight: 600;
            font-size: 14px;
            transition: all 0.3s ease;
        }

        .signup-btn:hover {
            background: #6B1028 !important;
            transform: translateY(-1px);
        }

        /* Hero Section */
        .hero {
            padding: 80px 0;
            background: #f5f2ed;
        }

        .hero-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
        }

        .hero-text {
            max-width: 500px;
        }

        .brand-tagline {
            font-size: 14px;
            color: #8B1538;
            font-weight: 500;
            margin-bottom: 16px;
            letter-spacing: 1px;
            text-transform: uppercase;
        }

        .hero h1 {
            font-family: 'Instrument Serif', serif;
            font-size: 48px;
            line-height: 1.1;
            color: #2c1810;
            margin-bottom: 24px;
            font-weight: 400;
        }

        .highlight {
            font-style: italic;
            color: #8B1538;
        }

        .hero p {
            font-size: 18px;
            color: #5a4a42;
            margin-bottom: 40px;
            line-height: 1.6;
        }

        .hero-cta {
            display: flex;
            gap: 16px;
            margin-bottom: 60px;
        }

        .btn-primary-professional {
            background: #8B1538;
            color: white;
            border: none;
            padding: 16px 32px;
            border-radius: 30px;
            font-weight: 600;
            font-size: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .btn-primary-professional:hover {
            background: #6B1028;
            transform: translateY(-2px);
        }

        .btn-secondary-professional {
            background: transparent;
            color: #2c1810;
            border: 2px solid #d4c3b5;
            padding: 14px 32px;
            border-radius: 30px;
            font-weight: 600;
            font-size: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .btn-secondary-professional:hover {
            background: #d4c3b5;
            color: #2c1810;
        }

        .trust-indicators {
            display: flex;
            gap: 40px;
        }

        .trust-indicators > div {
            text-align: center;
        }

        .trust-number {
            font-family: 'Instrument Serif', serif;
            font-size: 28px;
            font-weight: 600;
            color: #8B1538;
            line-height: 1;
        }

        .trust-label {
            font-size: 13px;
            color: #8B1538;
            margin-top: 4px;
            font-weight: 500;
        }

        .hero-visual {
            position: relative;
        }

        .hero-image-container {
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(92, 74, 66, 0.15);
            width: 100%;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .hero-image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }

        .professional-badge {
            position: absolute;
            top: 24px;
            right: 24px;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            padding: 16px 20px;
            border-radius: 12px;
            text-align: center;
        }

        .badge-label {
            font-size: 11px;
            color: #8b6f5c;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 600;
        }

        .badge-title {
            font-size: 14px;
            color: #2c1810;
            font-weight: 600;
            margin-top: 2px;
        }

        .certifications {
            position: absolute;
            bottom: 24px;
            left: 24px;
            display: flex;
            gap: 12px;
        }

        .certification-badge {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            padding: 12px 16px;
            border-radius: 8px;
            text-align: center;
        }

        .certification-text {
            font-size: 12px;
            color: #2c1810;
            font-weight: 600;
            line-height: 1;
        }

        .certification-sub {
            font-size: 10px;
            color: #8b6f5c;
            margin-top: 2px;
        }

        /* Bestsellers Section */
        .bestsellers {
            padding: 100px 0;
            background: #ffffff;
        }

        .section-header {
            text-align: center;
            margin-bottom: 60px;
        }

        .section-title {
            font-family: 'Instrument Serif', serif;
            font-size: 36px;
            color: #2c1810;
            margin-bottom: 16px;
            font-weight: 400;
        }

        .section-subtitle {
            font-size: 16px;
            color: #8b6f5c;
            max-width: 500px;
            margin: 0 auto;
        }

        /* L'Oréal Chatbot Styles */
        #loreal-chatbot-widget {
            position: fixed;
            bottom: 24px;
            right: 24px;
            z-index: 10000;
            font-family: 'Inter', sans-serif;
        }

        #loreal-chatbot-toggle {
            position: relative;
            background: linear-gradient(135deg, #E8B4A0 0%, #8B0000 100%);
            border: none;
            border-radius: 50px;
            padding: 16px 24px;
            cursor: pointer;
            box-shadow: 0 8px 32px rgba(139, 0, 0, 0.3);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            overflow: hidden;
            min-width: 140px;
            pointer-events: auto;
        }

        .chat-button-content {
            display: flex;
            align-items: center;
            gap: 8px;
            color: white;
            font-weight: 600;
            font-size: 14px;
        }

        .chat-icon {
            font-size: 18px;
            animation: sparkle 2s ease-in-out infinite;
        }

        @keyframes sparkle {
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.1) rotate(10deg); }
        }

        .pulse-ring {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            border: 2px solid rgba(255, 215, 0, 0.6);
            border-radius: 50px;
            animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
            0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0; }
        }

        .status-indicator {
            position: absolute;
            top: -2px;
            right: -2px;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            border: 2px solid white;
        }

        .status-indicator.online {
            background: #22c55e;
            box-shadow: 0 0 8px rgba(34, 197, 94, 0.5);
        }

        #loreal-chatbot-toggle:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 40px rgba(139, 0, 0, 0.4);
        }

        .loreal-chatbot-window {
            position: absolute;
            bottom: 80px;
            right: 0;
            width: 380px;
            height: 550px;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
            display: none;
            flex-direction: column;
            overflow: hidden;
            border: 1px solid rgba(232, 180, 160, 0.2);
            pointer-events: auto;
        }

        .loreal-chatbot-header {
            background: linear-gradient(135deg, #E8B4A0 0%, #8B0000 100%);
            padding: 36px 48px 32px 48px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: white;
            min-height: 100px;
        }

        .header-brand {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .brand-avatar {
            width: 36px;
            height: 36px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
        }

        .brand-info h3 {
            margin: 0;
            font-size: 15px;
            font-weight: 700;
        }

        .brand-info p {
            margin: 2px 0 0 0;
            font-size: 11px;
            opacity: 0.9;
        }

        .header-actions {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .status-badge {
            display: flex;
            align-items: center;
            gap: 5px;
            background: rgba(255, 255, 255, 0.2);
            padding: 3px 8px;
            border-radius: 10px;
            font-size: 10px;
            font-weight: 500;
        }

        .status-dot {
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: #22c55e;
        }

        .close-button {
            background: rgba(255, 255, 255, 0.2);
            border: none;
            width: 28px;
            height: 28px;
            border-radius: 7px;
            color: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;
            font-size: 13px;
        }

        .close-button:hover {
            background: rgba(255, 255, 255, 0.3);
        }

        .loreal-chatbot-messages {
            flex: 1;
            padding: 16px;
            overflow-y: auto;
            background: linear-gradient(to bottom, #fefefe 0%, #f9f9f9 100%);
            display: flex;
            flex-direction: column;
            gap: 12px;
            min-height: 200px;
            max-height: calc(550px - 120px - 40px - 80px);
        }

        .loreal-chatbot-welcome {
            text-align: center;
            padding: 20px 16px;
            background: linear-gradient(135deg, rgba(232, 180, 160, 0.1) 0%, rgba(255, 215, 0, 0.1) 100%);
            border-radius: 12px;
            border: 1px solid rgba(232, 180, 160, 0.2);
        }

        .loreal-chatbot-welcome-text {
            font-family: 'Instrument Serif', serif;
            font-size: 15px;
            line-height: 1.4;
            color: #8B0000;
            font-weight: 500;
        }

        .loreal-chatbot-message {
            display: flex;
            gap: 12px;
            margin-bottom: 16px;
            animation: messageSlideIn 0.3s ease-out;
        }

        @keyframes messageSlideIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .loreal-chatbot-message.user {
            flex-direction: row-reverse;
        }

        .loreal-chatbot-avatar {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            flex-shrink: 0;
            background: linear-gradient(135deg, #E8B4A0 0%, #8B0000 100%);
            color: white;
        }

        .loreal-chatbot-message.user .loreal-chatbot-avatar {
            background: linear-gradient(135deg, #8B0000 0%, #A91B47 100%);
            color: white;
        }

        .loreal-chatbot-bubble {
            max-width: 75%;
            padding: 14px 18px;
            border-radius: 18px;
            background: white;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
            border: 1px solid rgba(232, 180, 160, 0.15);
            font-size: 14px;
            line-height: 1.4;
            color: #333;
        }

        .loreal-chatbot-message.user .loreal-chatbot-bubble {
            background: linear-gradient(135deg, #8B0000 0%, #A91B47 100%);
            color: white;
            border: none;
        }

        .quick-actions {
            padding: 12px 18px 0 18px;
            display: flex;
            gap: 8px;
            background: white;
            border-top: 1px solid rgba(232, 180, 160, 0.15);
        }

        .quick-action-btn {
            flex: 1;
            background: rgba(232, 180, 160, 0.1);
            border: 1px solid rgba(232, 180, 160, 0.3);
            border-radius: 10px;
            padding: 8px 6px;
            font-size: 10px;
            color: #8B0000;
            cursor: pointer;
            transition: all 0.2s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 3px;
        }

        .quick-action-btn:hover {
            background: rgba(232, 180, 160, 0.2);
            transform: translateY(-1px);
        }

        .quick-action-btn i {
            font-size: 13px;
        }

        .loreal-chatbot-input-container {
            padding: 12px 18px 14px 18px;
            background: white;
            border-top: 1px solid rgba(232, 180, 160, 0.15);
        }

        .input-wrapper {
            position: relative;
            background: #f8f9fa;
            border: 2px solid rgba(232, 180, 160, 0.2);
            border-radius: 16px;
            transition: all 0.2s ease;
        }

        .input-wrapper:focus-within {
            border-color: #E8B4A0;
            box-shadow: 0 0 0 3px rgba(232, 180, 160, 0.1);
        }

        #loreal-chatbot-input {
            width: 100%;
            background: transparent;
            border: none;
            outline: none;
            padding: 14px 60px 14px 16px;
            font-family: 'Inter', sans-serif;
            font-size: 14px;
            line-height: 1.4;
            resize: none;
            max-height: 100px;
            color: #333;
        }

        .input-actions {
            position: absolute;
            right: 8px;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .char-counter {
            font-size: 10px;
            color: #999;
            font-weight: 500;
        }

        .send-button {
            width: 32px;
            height: 32px;
            background: linear-gradient(135deg, #E8B4A0 0%, #8B0000 100%);
            border: none;
            border-radius: 50%;
            color: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;
            font-size: 14px;
        }

        .send-button:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 12px rgba(139, 0, 0, 0.3);
        }

        .chatbot-footer {
            padding: 20px 48px 20px 48px;
            text-align: center;
            background: white;
            min-height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .powered-by {
            font-size: 14px;
            color: #999;
            font-weight: 500;
            letter-spacing: 0.3px;
        }

        .thinking-message {
            font-size: 14px;
            color: #8B4513;
            font-style: italic;
            margin-bottom: 8px;
            opacity: 0;
            animation: fadeInThinking 0.5s ease-in forwards;
        }

        @keyframes fadeInThinking {
            from { 
                opacity: 0; 
                transform: translateY(5px); 
            }
            to { 
                opacity: 0.8; 
                transform: translateY(0); 
            }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .hero-content {
                grid-template-columns: 1fr;
                gap: 40px;
                text-align: center;
            }
            
            .nav-menu {
                display: none;
            }
            
            .hero h1 {
                font-size: 36px;
            }
            
            .trust-indicators {
                justify-content: center;
                gap: 20px;
            }
        }

        @media (max-width: 480px) {
            #loreal-chatbot-widget {
                bottom: 16px;
                right: 16px;
            }
            
            .loreal-chatbot-window {
                width: 320px;
                height: 480px;
                bottom: 70px;
            }
            
            #loreal-chatbot-toggle {
                padding: 12px 20px;
                min-width: 120px;
            }
            
            .chat-button-text {
                font-size: 13px;
            }
            
            .loreal-chatbot-messages {
                min-height: 280px;
            }
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav>
        <div class="nav-container">
            <!-- Logo -->
            <div class="nav-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/L%27Or%C3%A9al_logo.svg" alt="L'Oréal Paris" class="logo-image">
            </div>
            
            <!-- Navigation Menu -->
            <ul class="nav-menu">
                <li><a href="#bestsellers">Bestsellers</a></li>
                <li><a href="#categories">Collections</a></li>
                <li><a href="#offers">Limited Offers</a></li>
                <li><a href="#newsletter">Join Community</a></li>
            </ul>
            
            <!-- Action Buttons -->
            <div class="nav-actions">
                <button title="Search Products"><i class="fas fa-search"></i></button>
                <button title="My Account"><i class="fas fa-user"></i></button>
                <button title="Shopping Cart (2 items)">
                    <i class="fas fa-shopping-bag"></i>
                    <span class="cart-badge"></span>
                </button>
                <button class="signup-btn">Sign Up & Save 20%</button>
            </div>
        </div>
    </nav>

    <!-- Professional Hero Section -->
    <section class="hero scroll-animate">
        <div class="hero-content">
            <div class="hero-text">
                <div class="brand-tagline">Paris • Since 1909</div>
                <h1>Because You're <span class="highlight">Worth It</span></h1>
                <p>Discover the science of beauty through our award-winning formulations, crafted with precision and passion for over a century.</p>
                
                <div class="hero-cta">
                    <button class="btn-primary-professional">Explore Collection</button>
                    <button class="btn-secondary-professional">Find Your Shade</button>
                </div>
                
                <!-- Professional Trust Indicators -->
                <div class="trust-indicators">
                    <div>
                        <div class="trust-number">115+</div>
                        <div class="trust-label">Years of Innovation</div>
                    </div>
                    <div>
                        <div class="trust-number">50M+</div>
                        <div class="trust-label">Global Customers</div>
                    </div>
                    <div>
                        <div class="trust-number">4.8★</div>
                        <div class="trust-label">Expert Rating</div>
                    </div>
                </div>
            </div>
            
            <div class="hero-visual">
                <div class="hero-image-container">
                    <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80" alt="L'Oréal Paris Beauty Collection">
                    
                    <!-- Professional Badge -->
                    <div class="professional-badge">
                        <div class="badge-label">Professional</div>
                        <div class="badge-title">Makeup Artistry</div>
                    </div>
                </div>
                
                <!-- Quality Certifications -->
                <div class="certifications">
                    <div class="certification-badge">
                        <div class="certification-text">Dermatologist</div>
                        <div class="certification-sub">Tested</div>
                    </div>
                    <div class="certification-badge">
                        <div class="certification-text">Cruelty</div>
                        <div class="certification-sub">Free</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- L'Oréal Chatbot Widget -->
    <div id="loreal-chatbot-widget" class="loreal-chatbot-widget">
        <!-- Floating Chat Button -->
        <div id="loreal-chatbot-toggle" class="loreal-chatbot-toggle" title="Chat with L'Oréal Beauty Assistant">
            <div class="chat-button-content">
                <i class="fas fa-sparkles chat-icon"></i>
                <span class="chat-button-text">Beauty Chat</span>
            </div>
            <div class="pulse-ring"></div>
            <div class="status-indicator online"></div>
        </div>

        <!-- Modern Chat Window -->
        <div id="loreal-chatbot-window" class="loreal-chatbot-window">
            <!-- Elegant Header -->
            <div class="loreal-chatbot-header">
                <div class="header-brand">
                    <div class="brand-avatar">
                        <i class="fas fa-gem"></i>
                    </div>
                    <div class="brand-info">
                        <h3>L'Oréal Beauty Assistant</h3>
                        <p>Your personal beauty consultant</p>
                    </div>
                </div>
                <div class="header-actions">
                    <div class="status-badge online">
                        <span class="status-dot"></span>
                        Online
                    </div>
                    <button id="loreal-chatbot-close" class="close-button">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>

            <!-- Messages Area -->
            <div id="loreal-chatbot-messages" class="loreal-chatbot-messages">
                <!-- Welcome message will be inserted here -->
            </div>

            <!-- Quick Actions -->
            <div class="quick-actions">
                <button class="quick-action-btn" onclick="sendQuickMessage('What skincare routine do you recommend?')">
                    <i class="fas fa-leaf"></i>
                    Skincare
                </button>
                <button class="quick-action-btn" onclick="sendQuickMessage('Help me choose makeup')">
                    <i class="fas fa-palette"></i>
                    Makeup
                </button>
                <button class="quick-action-btn" onclick="sendQuickMessage('Best L\'Oréal products for me?')">
                    <i class="fas fa-star"></i>
                    Products
                </button>
            </div>

            <!-- Enhanced Input Area -->
            <div class="loreal-chatbot-input-container">
                <div class="input-wrapper">
                    <textarea 
                        id="loreal-chatbot-input" 
                        class="loreal-chatbot-input" 
                        placeholder="Ask me anything about beauty..."
                        rows="1"
                        maxlength="500"></textarea>
                    <div class="input-actions">
                        <span class="char-counter">0/500</span>
                        <button id="loreal-chatbot-send" class="send-button">
                            <i class="fas fa-arrow-up"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <div class="chatbot-footer">
                <span class="powered-by">Powered by L'Oréal Paris AI</span>
            </div>
        </div>
    </div>

    <script>
        // Global conversation array for session persistence
        let conversationHistory = [];

        // L'Oréal Paris Professional JavaScript
        document.addEventListener('DOMContentLoaded', function() {
            // Clear conversation history on page load for fresh start
            localStorage.removeItem('lorealChatHistory');
            
            // Initialize chatbot
            initializeLorealChatbot();
            
            // Initialize scroll animations
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
        });

        // L'Oréal Chatbot Implementation
        function initializeLorealChatbot() {
            const chatToggle = document.getElementById('loreal-chatbot-toggle');
            const chatWindow = document.getElementById('loreal-chatbot-window');
            const closeButton = document.getElementById('loreal-chatbot-close');
            const sendButton = document.getElementById('loreal-chatbot-send');
            const inputField = document.getElementById('loreal-chatbot-input');
            const messagesContainer = document.getElementById('loreal-chatbot-messages');
            const charCounter = document.querySelector('.char-counter');

            // Show welcome message
            showWelcomeMessage();

            // Toggle chat window
            chatToggle.addEventListener('click', () => {
                const isVisible = chatWindow.style.display === 'flex';
                chatWindow.style.display = isVisible ? 'none' : 'flex';
                if (!isVisible) {
                    inputField.focus();
                }
            });

            // Close chat window
            closeButton.addEventListener('click', () => {
                chatWindow.style.display = 'none';
            });

            // Send message on button click
            sendButton.addEventListener('click', () => {
                const message = inputField.value.trim();
                if (message) {
                    sendMessage(message);
                    inputField.value = '';
                    updateCharCounter();
                }
            });

            // Send message on Enter key
            inputField.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    const message = inputField.value.trim();
                    if (message) {
                        sendMessage(message);
                        inputField.value = '';
                        updateCharCounter();
                    }
                }
            });

            // Auto-resize textarea
            inputField.addEventListener('input', () => {
                inputField.style.height = 'auto';
                inputField.style.height = Math.min(inputField.scrollHeight, 100) + 'px';
                updateCharCounter();
            });

            // Update character counter
            function updateCharCounter() {
                const length = inputField.value.length;
                charCounter.textContent = \`\${length}/500\`;
                charCounter.style.color = length > 450 ? '#dc2626' : '#999';
            }
        }

        function showWelcomeMessage() {
            const messagesContainer = document.getElementById('loreal-chatbot-messages');
            const welcomeMessage = \`
                <div class="loreal-chatbot-welcome">
                    <div class="loreal-chatbot-welcome-text">
                        Welcome to L'Oréal Paris! ✨<br>
                        I'm your personal beauty consultant. How can I help you discover your perfect look today?
                    </div>
                </div>
            \`;
            messagesContainer.innerHTML = welcomeMessage;
        }

        function sendQuickMessage(message) {
            sendMessage(message);
        }

        async function sendMessage(userMessage) {
            const messagesContainer = document.getElementById('loreal-chatbot-messages');
            
            // Add user message
            addMessage('user', userMessage);
            
            // Add conversation to history for session persistence
            conversationHistory.push({ role: 'user', content: userMessage });
            
            // Show thinking message
            const thinkingMessages = [
                "Analyzing your beauty needs...",
                "Consulting our expert stylists...",
                "Finding the perfect recommendations...",
                "Exploring our latest collections...",
                "Matching your style preferences..."
            ];
            const randomThinking = thinkingMessages[Math.floor(Math.random() * thinkingMessages.length)];
            
            const thinkingDiv = document.createElement('div');
            thinkingDiv.className = 'thinking-message';
            thinkingDiv.textContent = randomThinking;
            messagesContainer.appendChild(thinkingDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
            
            try {
                // Use environment variable for API key in Cloudflare Workers
                const response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        message: userMessage,
                        history: conversationHistory
                    })
                });

                if (!response.ok) {
                    throw new Error(\`HTTP error! status: \${response.status}\`);
                }

                const data = await response.json();
                
                // Remove thinking message
                thinkingDiv.remove();
                
                // Add AI response
                addMessage('assistant', data.response);
                
                // Add AI response to conversation history
                conversationHistory.push({ role: 'assistant', content: data.response });
                
            } catch (error) {
                console.error('Error:', error);
                thinkingDiv.remove();
                addMessage('assistant', "I apologize, but I'm having trouble connecting right now. Please try again in a moment, or feel free to browse our amazing L'Oréal products in the meantime! 💄✨");
            }
        }

        function addMessage(sender, message) {
            const messagesContainer = document.getElementById('loreal-chatbot-messages');
            const messageDiv = document.createElement('div');
            messageDiv.className = \`loreal-chatbot-message \${sender}\`;
            
            const avatar = sender === 'user' ? '👤' : '💄';
            const avatarClass = sender === 'user' ? 'user' : 'assistant';
            
            messageDiv.innerHTML = `
                <div class="loreal-chatbot-avatar">
                    ${avatar}
                </div>
                <div class="loreal-chatbot-bubble">
                    ${message}
                </div>
            `;
            
            messagesContainer.appendChild(messageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    </script>
</body>
</html>`;

// Handle API requests
async function handleRequest(request) {
    const url = new URL(request.url);
    
    // Handle API chat endpoint
    if (url.pathname === '/api/chat' && request.method === 'POST') {
        return handleChatAPI(request);
    }
    
    // Serve the main website
    return new Response(HTML_CONTENT, {
        headers: {
            'content-type': 'text/html;charset=UTF-8',
            'cache-control': 'public, max-age=86400'
        }
    });
}

// Handle chat API requests
async function handleChatAPI(request) {
    try {
        const { message, history = [] } = await request.json();
        
        // Create conversation context
        const systemMessage = {
            role: 'system',
            content: `You are a professional L'Oréal Paris beauty consultant AI assistant. You are knowledgeable, friendly, and passionate about beauty and cosmetics. 

Your personality:
- Warm and conversational, like talking to a knowledgeable friend
- Expert in makeup, skincare, and hair care
- Enthusiastic about helping people feel confident and beautiful
- Professional but approachable

Your expertise includes:
- L'Oréal Paris product recommendations
- Makeup techniques and tutorials
- Skincare routines and advice
- Color matching and shade selection
- Beauty trends and tips
- Hair care and styling advice

Guidelines:
- Keep responses natural and conversational
- Provide helpful, specific advice
- Ask follow-up questions when relevant
- Show enthusiasm for beauty and self-expression
- Reference L'Oréal Paris products when appropriate
- Keep responses concise but informative (2-3 sentences usually)
- Use emojis occasionally to add warmth

Always be helpful and encouraging, focusing on making the user feel confident and beautiful.`
        };

        const messages = [systemMessage, ...history, { role: 'user', content: message }];

        // Make request to OpenAI API using environment variable
        const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: messages,
                max_tokens: 150,
                temperature: 0.7,
            }),
        });

        if (!openaiResponse.ok) {
            throw new Error(`OpenAI API error: ${openaiResponse.status}`);
        }

        const openaiData = await openaiResponse.json();
        const assistantResponse = openaiData.choices[0].message.content;

        return new Response(JSON.stringify({ response: assistantResponse }), {
            headers: {
                'content-type': 'application/json',
                'access-control-allow-origin': '*',
                'access-control-allow-methods': 'POST, OPTIONS',
                'access-control-allow-headers': 'Content-Type'
            }
        });

    } catch (error) {
        console.error('Chat API error:', error);
        return new Response(JSON.stringify({ 
            response: "I apologize, but I'm having trouble processing your request right now. Please try again in a moment! 💄✨" 
        }), {
            status: 500,
            headers: {
                'content-type': 'application/json',
                'access-control-allow-origin': '*'
            }
        });
    }
}

// Handle CORS preflight requests
async function handleOptions(request) {
    return new Response(null, {
        status: 200,
        headers: {
            'access-control-allow-origin': '*',
            'access-control-allow-methods': 'POST, OPTIONS',
            'access-control-allow-headers': 'Content-Type'
        }
    });
}

// Main event listener
addEventListener('fetch', event => {
    if (event.request.method === 'OPTIONS') {
        event.respondWith(handleOptions(event.request));
    } else {
        event.respondWith(handleRequest(event.request));
    }
});
