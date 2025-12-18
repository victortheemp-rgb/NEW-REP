# VЛАДОНИ - Telegram Chat Knowledge Base

A Telegram-style chat application that provides information about the VЛАДОНИ company through an interactive chatbot interface.

## Features

- **Telegram-like UI**: Dark theme interface mimicking Telegram's design
- **Interactive Chat**: Real-time chat experience with typing indicators
- **Knowledge Base**: Comprehensive company information including:
  - Services (web development, mobile apps, chatbots, etc.)
  - Pricing and payment options
  - Contact information
  - Working hours
  - Guarantees and support
  - Team and portfolio
- **Quick Replies**: Clickable suggestion buttons for easy navigation
- **Responsive Design**: Works on desktop and mobile devices
- **Russian Language**: Full Russian language support

## Files Structure

```
├── index.html          # Main HTML page
├── styles.css          # Telegram-style CSS
├── knowledge-base.js   # Company knowledge base data
├── app.js              # Chat application logic
└── README.md           # This file
```

## Usage

1. Open `index.html` in a web browser
2. Type your question in the input field or click quick reply buttons
3. The bot will respond with relevant information from the knowledge base

## Supported Topics

- **Услуги** - Company services
- **Цены** - Pricing information
- **Контакты** - Contact details
- **График работы** - Working hours
- **Гарантии** - Guarantees and support
- **Технологии** - Technology stack
- **Команда** - Team information
- **Портфолио** - Portfolio examples
- **Как начать** - How to start working with the company

## Technology

- Pure HTML5, CSS3, JavaScript
- No external dependencies
- Works offline
- No server required

## Customization

To customize the knowledge base for your company:

1. Edit `knowledge-base.js` file
2. Update company information in the `knowledgeBase` object
3. Modify keywords and responses in the `findResponse` function
4. Update the avatar and colors in `styles.css`

## License

This project is open source and available for any use.
