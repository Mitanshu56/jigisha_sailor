# How to Add Your Images to the Portfolio

## 📸 Adding Your Professional Photo

### Step 1: Prepare Your Image
1. **Choose a high-quality professional photo** (preferably 800x1000 pixels or similar ratio)
2. **Recommended formats**: JPG, PNG, or WebP
3. **File size**: Keep under 2MB for web performance
4. **Suggested name**: `jigisha-profile.jpg` (or any descriptive name)

### Step 2: Add Image to Project
1. **Copy your image file** to: `frontend/public/images/`
2. **Rename it** to `jigisha-profile.jpg` (or update the src path in Hero.jsx)

### Step 3: File Structure Should Look Like This:
```
frontend/
├── public/
│   ├── images/
│   │   ├── jigisha-profile.jpg        # Your main photo
│   │   ├── hero-background.jpg        # Optional background
│   │   └── about-photo.jpg            # Optional secondary photos
│   └── ...
├── src/
└── ...
```

## 🖼️ Image Configuration Options

### Option 1: Use Recommended Filename
- Place your image as `frontend/public/images/jigisha-profile.jpg`
- No code changes needed!

### Option 2: Use Custom Filename
If you want to use a different filename:

1. **Place your image** in `frontend/public/images/your-photo-name.jpg`
2. **Update Hero.jsx** line with your filename:
   ```jsx
   src="/images/your-photo-name.jpg"
   ```

## 📐 Image Optimization Tips

### Recommended Image Specifications:
- **Dimensions**: 800px width × 1000px height (4:5 ratio)
- **Format**: JPG for photos, PNG for graphics with transparency
- **Quality**: 85-90% compression for good balance of quality/size
- **File Size**: Under 2MB for fast loading

### Professional Photo Guidelines:
- **High resolution** and sharp focus
- **Good lighting** (natural light preferred)
- **Professional attire** appropriate for legal profession
- **Clean background** or one that's not distracting
- **Confident pose** that conveys authority and approachability

## 🎨 Additional Images You Can Add

### 1. About Section Image
- **File**: `frontend/public/images/about-photo.jpg`
- **Usage**: Secondary photo for About section
- **Dimensions**: 600px × 400px recommended

### 2. Office/Practice Images
- **File**: `frontend/public/images/office-photo.jpg`
- **Usage**: Practice areas or contact section
- **Dimensions**: 1200px × 800px recommended

### 3. Background Images
- **File**: `frontend/public/images/hero-background.jpg`
- **Usage**: Hero section background
- **Dimensions**: 1920px × 1080px recommended

## 🚀 After Adding Images

1. **Save all files**
2. **Refresh your browser** (the development server will automatically reload)
3. **Check the website** - your image should now appear in the hero section
4. **Verify mobile responsiveness** by testing on different screen sizes

## 🔧 Troubleshooting

### Image Not Showing?
1. **Check file path**: Ensure image is in `frontend/public/images/`
2. **Check filename**: Verify exact spelling and extension
3. **Check browser console**: Look for 404 errors
4. **Clear browser cache**: Try hard refresh (Ctrl+F5)

### Image Quality Issues?
1. **Use higher resolution**: Minimum 800px width
2. **Optimize compression**: Use tools like TinyPNG or JPEGmini
3. **Check format**: JPG for photos, PNG for graphics

### Image Too Large/Small?
The CSS will automatically scale your image, but for best results:
- **Width**: 800-1200px
- **Height**: 1000-1500px
- **Aspect ratio**: Portrait orientation (taller than wide)

## 💡 Pro Tips

1. **Multiple formats**: You can provide WebP and fallback JPG for better performance
2. **Responsive images**: Consider different sizes for mobile/desktop
3. **Alt text**: Always include descriptive alt text for accessibility
4. **Backup**: Keep original high-resolution images as backups

## 🎯 Quick Start

**To get started immediately:**

1. Copy your best professional photo to: `frontend/public/images/jigisha-profile.jpg`
2. Refresh your browser
3. Your photo will now appear in the hero section!

That's it! Your professional portfolio now features your personal branding. 📸✨