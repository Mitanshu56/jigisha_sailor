# Deployment Guide

## 🚀 Production Deployment

### 1. Frontend Deployment (Vercel - Recommended)

#### Setup Vercel Account
1. Visit [vercel.com](https://vercel.com) and sign up with GitHub
2. Install Vercel CLI: `npm i -g vercel`

#### Deploy Frontend
```bash
# Navigate to frontend directory
cd frontend

# Build the project
npm run build

# Deploy to Vercel
vercel --prod

# Or connect GitHub repository for automatic deployments
```

#### Vercel Configuration
Create `vercel.json` in frontend directory:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "dist/**/*",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "env": {
    "VITE_API_URL": "https://your-backend-url.herokuapp.com"
  }
}
```

### 2. Backend Deployment (Render - Recommended)

#### Setup Render Account
1. Visit [render.com](https://render.com) and sign up with GitHub
2. Connect your repository

#### Deploy Backend
1. Create new Web Service on Render
2. Connect GitHub repository
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Set environment variables (see below)

#### Environment Variables for Render
```
NODE_ENV=production
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/jigisha-sailor
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=jigisha.sailor@gmail.com
FRONTEND_URL=https://your-frontend-url.vercel.app
JWT_SECRET=your-super-secret-jwt-key
```

### 3. Database Setup (MongoDB Atlas)

#### Create MongoDB Atlas Account
1. Visit [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Sign up for free account
3. Create a new cluster

#### Configure Database
1. Create database user with read/write permissions
2. Add IP address to whitelist (0.0.0.0/0 for all IPs)
3. Get connection string
4. Update MONGODB_URI in production environment

#### Sample Connection String
```
mongodb+srv://username:password@cluster.mongodb.net/jigisha-sailor?retryWrites=true&w=majority
```

### 4. Email Configuration (Gmail SMTP)

#### Setup Gmail App Password
1. Enable 2-Factor Authentication on Gmail
2. Go to Google Account Settings
3. Security → 2-Step Verification → App passwords
4. Generate password for "Mail"
5. Use this password in EMAIL_PASS environment variable

### 5. Domain Configuration

#### Custom Domain Setup
1. **Frontend (Vercel)**: Add custom domain in Vercel dashboard
2. **Backend (Render)**: Use provided Render URL or configure custom domain
3. **DNS Configuration**: Point domain to deployment URLs

#### SSL/HTTPS
- Both Vercel and Render provide automatic SSL certificates
- Ensure all API calls use HTTPS in production

### 6. Performance Optimization

#### Frontend Optimizations
```bash
# Analyze bundle size
npm run build
npm run preview

# Optimize images
# Use WebP format for images
# Implement lazy loading
```

#### Backend Optimizations
- Enable compression middleware
- Set proper cache headers
- Use CDN for static assets
- Implement Redis for caching (if needed)

### 7. Monitoring & Analytics

#### Error Monitoring
- **Frontend**: Sentry.io for React error tracking
- **Backend**: Winston for logging, Sentry for error tracking

#### Analytics
- Google Analytics for website analytics
- Vercel Analytics for performance metrics

### 8. Security Checklist

#### Production Security
- [ ] Change all default passwords and secrets
- [ ] Enable CORS with specific origins only
- [ ] Implement rate limiting
- [ ] Use HTTPS everywhere
- [ ] Validate and sanitize all inputs
- [ ] Keep dependencies updated
- [ ] Set secure headers with Helmet.js

#### Environment Variables Security
- Never commit .env files to version control
- Use different secrets for production
- Rotate secrets regularly

### 9. Backup & Recovery

#### Database Backup
- MongoDB Atlas provides automated backups
- Set up daily backups
- Test restore procedures

#### Code Backup
- Use GitHub for code versioning
- Tag releases for easy rollback
- Document deployment procedures

### 10. Continuous Integration/Deployment

#### GitHub Actions (Optional)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy
on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: |
          cd frontend
          npm ci
      - name: Build
        run: |
          cd frontend
          npm run build
      - name: Deploy to Vercel
        run: npx vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
```

## 🔧 Deployment Commands Summary

### Quick Deployment
```bash
# Frontend (Vercel)
cd frontend
npm run build
vercel --prod

# Backend (Render)
# Push to GitHub main branch
# Render will auto-deploy
```

### Local Production Testing
```bash
# Test production build locally
cd frontend
npm run build
npm run preview

cd backend
NODE_ENV=production npm start
```

## 📋 Post-Deployment Checklist

- [ ] Frontend loads correctly on custom domain
- [ ] Backend API responds on production URL
- [ ] Contact form sends emails successfully
- [ ] Database connection works
- [ ] All animations and interactions work
- [ ] Mobile responsiveness verified
- [ ] SEO meta tags are correct
- [ ] SSL certificate is active
- [ ] Performance metrics are acceptable
- [ ] Error monitoring is configured

## 🚨 Troubleshooting

### Common Issues
1. **CORS errors**: Check FRONTEND_URL in backend environment
2. **Email not working**: Verify Gmail app password and 2FA
3. **Database connection**: Check MongoDB Atlas IP whitelist
4. **Build errors**: Verify all dependencies are installed
5. **Environment variables**: Ensure all required vars are set

### Support Resources
- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Render Documentation: [render.com/docs](https://render.com/docs)
- MongoDB Atlas: [docs.atlas.mongodb.com](https://docs.atlas.mongodb.com)