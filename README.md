# L'Oreal App

A web application using OpenAI API with secure API key management.

## Setup Instructions

1. **Configure API Key:**
   - Copy `secrets.template.js` to `secrets.js`
   - Open `secrets.js` and replace `'your-openai-api-key-here'` with your actual OpenAI API key
   - The `secrets.js` file is already in `.gitignore` so it won't be uploaded to GitHub

2. **Run the Application:**
   - Open `index.html` in your web browser
   - The app will automatically load and test your API connection

## File Structure

- `index.html` - Main HTML file
- `styles.css` - Styling for the application
- `script.js` - Main JavaScript logic
- `secrets.js` - Contains your API keys (not tracked by git)
- `secrets.template.js` - Template for secrets file
- `.gitignore` - Ensures secrets.js is not uploaded to GitHub

## Security

Your API keys are stored in `secrets.js` which is excluded from git tracking via `.gitignore`. This ensures your sensitive information stays local and doesn't get uploaded to GitHub.