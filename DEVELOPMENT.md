# Development Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### Prerequisites Check
```bash
node --version    # Should be v18+
npm --version     # Should be v9+
git --version     # Any recent version
```

### 1. Clone & Setup
```bash
git clone https://github.com/yourusername/jigisha_sailor.git
cd jigisha_sailor
```

### 2. Backend Setup (Terminal 1)
```bash
cd backend
npm install
cp .env.example .env
# Edit .env file with your MongoDB URI and email credentials
npm run dev
```

### 3. Frontend Setup (Terminal 2)
```bash
cd frontend
npm install
npm run dev
```

### 4. Open Browser
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 🛠️ Development Scripts

### Backend Commands
```bash
npm run dev          # Start development server with nodemon
npm start           # Start production server
npm run test        # Run tests
npm run lint        # Run ESLint
npm run format      # Format code with Prettier
```

### Frontend Commands
```bash
npm run dev         # Start Vite dev server
npm run build       # Build for production
npm run preview     # Preview production build
npm run test        # Run tests
npm run lint        # Run ESLint
npm run format      # Format code with Prettier
```

## 📁 Development Workflow

### 1. Feature Development
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes
# Test locally
npm run test

# Commit changes
git add .
git commit -m "Add new feature"

# Push and create PR
git push origin feature/new-feature
```

### 2. Code Quality
```bash
# Run all checks before committing
npm run lint
npm run test
npm run build
```

### 3. Environment Setup

#### Required Environment Variables
Create `.env` files in both frontend and backend directories:

**Backend (.env)**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/jigisha-sailor
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=jigisha.sailor@gmail.com
FRONTEND_URL=http://localhost:3000
```

**Frontend (.env)** - Optional
```env
VITE_API_URL=http://localhost:5000
```

## 🧪 Testing

### Backend Testing
```bash
cd backend
npm run test        # Run all tests
npm run test:watch  # Run tests in watch mode
npm run test:coverage # Run with coverage report
```

### Frontend Testing
```bash
cd frontend
npm run test        # Run Vitest
npm run test:ui     # Run with UI
npm run test:coverage # Coverage report
```

## 🐛 Debugging

### Backend Debug Mode
```bash
npm run debug       # Start with Node debugger
# Or with VS Code: F5 to start debugging
```

### Frontend Debug Tips
- Use React DevTools browser extension
- Use Vite's built-in dev tools
- Check Network tab for API calls
- Use `console.log()` strategically

## 📦 Package Management

### Adding Dependencies
```bash
# Backend
cd backend
npm install package-name

# Frontend  
cd frontend
npm install package-name
```

### Updating Dependencies
```bash
# Check outdated packages
npm outdated

# Update all packages
npm update

# Update specific package
npm install package-name@latest
```

## 🎨 Styling & Design

### TailwindCSS Development
```bash
# Frontend directory
npx tailwindcss-language-server

# Watch for changes
npm run dev # Automatically watches Tailwind classes
```

### Custom Colors
Edit `frontend/tailwind.config.js` to modify the gold/black theme:
```javascript
colors: {
  gold: {
    500: '#d4af37',  // Primary gold
    600: '#b8941f',  // Darker gold
  }
}
```

## 🔄 Database Development

### Local MongoDB Setup
```bash
# Install MongoDB locally or use Docker
docker run -d -p 27017:27017 --name mongodb mongo:6.0

# Or use MongoDB Compass for GUI
```

### Database Seeding (if needed)
```bash
cd backend
npm run seed    # If seed script is added
```

## 📱 Mobile Development

### Testing Mobile Responsiveness
```bash
# Frontend dev server with network access
npm run dev -- --host

# Test on actual devices using your local IP
# http://your-local-ip:3000
```

### Browser Dev Tools
- Chrome DevTools mobile simulation
- Firefox Responsive Design Mode
- Safari Web Inspector (for iOS testing)

## 🚀 Performance Optimization

### Bundle Analysis
```bash
cd frontend
npm run build
npm run analyze  # If added to package.json
```

### Backend Performance
```bash
cd backend
npm run profile  # If added for performance profiling
```

## 🔧 VS Code Setup

### Recommended Extensions
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Auto Rename Tag
- Prettier - Code formatter
- ESLint
- Thunder Client (for API testing)

### Workspace Settings
Create `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.includeLanguages": {
    "javascript": "javascript",
    "html": "HTML"
  }
}
```

## 🌐 API Development

### API Testing
- Use Thunder Client (VS Code extension)
- Or Postman
- Or curl commands

### Example API Calls
```bash
# Test contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
```

## 🏗️ Building for Production

### Full Build Process
```bash
# Backend
cd backend
npm run build      # If build script exists
npm run test       # Ensure tests pass

# Frontend
cd frontend
npm run build      # Creates dist/ folder
npm run preview    # Test production build locally
```

## 📋 Troubleshooting

### Common Issues

**Port Already in Use**
```bash
# Kill process on port
npx kill-port 3000
npx kill-port 5000
```

**MongoDB Connection Issues**
- Check MongoDB is running
- Verify connection string in .env
- Check firewall settings

**Module Not Found Errors**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build Errors**
- Check all environment variables are set
- Ensure all dependencies are installed
- Verify file paths and imports

### Getting Help
- Check the main README.md for detailed documentation
- Look at the DEPLOYMENT.md for production issues
- Create GitHub issues for bugs
- Contact the development team

---

Happy coding! 🚀