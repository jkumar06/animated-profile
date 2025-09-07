# Deploy to Vercel - Animated Profile

This guide will help you deploy your animated profile to Vercel.

## Prerequisites
- GitHub account
- Vercel account (free at vercel.com)
- Git installed on your computer

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push to GitHub
1. Create a new repository on GitHub
2. Initialize git in your project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a React app
5. Click "Deploy" - no configuration needed!

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
vercel
```

Follow the prompts:
- Set up and deploy? Yes
- Which scope? Your account
- Link to existing project? No
- Project name? animated-profile (or your choice)
- Directory? ./
- Override settings? No

## Method 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/your-repo-name)

## Configuration

The project includes:
- `vercel.json` - Vercel configuration
- `package.json` - Build scripts
- `.gitignore` - Git ignore rules

## Build Settings

Vercel will automatically:
- Install dependencies with `npm install`
- Build the project with `npm run build`
- Serve the static files from the `build` directory

## Custom Domain (Optional)

1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## Environment Variables

If you need environment variables:
1. Go to project settings on Vercel
2. Add variables in "Environment Variables" section
3. Redeploy your project

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure `npm run build` works locally
- Check Vercel build logs for errors

### 404 Errors
- The `vercel.json` file handles routing for React Router
- All routes redirect to `index.html`

### Performance Issues
- Vercel automatically optimizes static assets
- Images are automatically optimized
- CDN is enabled by default

## Updating Your Site

After making changes:
1. Push to GitHub: `git push`
2. Vercel automatically redeploys
3. Your changes go live in minutes!

## Support

- Vercel Documentation: https://vercel.com/docs
- React Deployment: https://create-react-app.dev/docs/deployment/
- GitHub: https://github.com/vercel/vercel

---

**Your animated profile will be live at: `https://your-project-name.vercel.app`**