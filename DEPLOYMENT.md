# Deployment Guide for The Florida Hotel Website

This guide will help you deploy your website to various hosting platforms.

## Option 1: GitHub Pages (Free)

1. Create a GitHub account at [github.com](https://github.com) if you don't have one
2. Create a new repository
3. Upload all your website files to the repository
4. Go to the repository settings
5. Scroll down to the "GitHub Pages" section
6. Select the main branch as the source
7. Click "Save"
8. Your website will be available at `https://yourusername.github.io/repositoryname`

## Option 2: Netlify (Free)

1. Create a Netlify account at [netlify.com](https://netlify.com)
2. Click "New site from Git" or drag and drop your website folder to the upload area
3. If using Git, connect to your GitHub repository
4. Configure build settings (not needed for static sites)
5. Click "Deploy site"
6. Your website will be available at a Netlify subdomain (e.g., `your-site-name.netlify.app`)
7. You can add a custom domain in the site settings

## Option 3: Vercel (Free)

1. Create a Vercel account at [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository or upload your files
4. Configure project settings
5. Click "Deploy"
6. Your website will be available at a Vercel subdomain (e.g., `your-site-name.vercel.app`)
7. You can add a custom domain in the project settings

## Option 4: Firebase Hosting (Free)

1. Create a Firebase account at [firebase.google.com](https://firebase.google.com)
2. Create a new project
3. Install Firebase CLI: `npm install -g firebase-tools`
4. Login to Firebase: `firebase login`
5. Initialize your project: `firebase init`
6. Select "Hosting" and follow the prompts
7. Deploy your website: `firebase deploy`
8. Your website will be available at a Firebase subdomain (e.g., `your-project-id.web.app`)
9. You can add a custom domain in the Firebase console

## Option 5: Traditional Web Hosting

1. Purchase a hosting plan from a provider like Bluehost, HostGator, or GoDaddy
2. Purchase a domain name (often included with hosting plans)
3. Access your hosting control panel (cPanel, Plesk, etc.)
4. Use the File Manager to upload your website files
5. Your website will be available at your domain name

## Adding a Custom Domain

1. Purchase a domain name from a registrar (GoDaddy, Namecheap, Google Domains, etc.)
2. In your hosting platform, go to the domain settings
3. Add your custom domain
4. Update your DNS settings at your domain registrar to point to your hosting provider
5. Wait for DNS propagation (can take up to 48 hours)

## SSL Certificate (HTTPS)

Most modern hosting platforms provide free SSL certificates:

- **GitHub Pages**: Automatically provides HTTPS
- **Netlify**: Automatically provides HTTPS
- **Vercel**: Automatically provides HTTPS
- **Firebase**: Automatically provides HTTPS
- **Traditional Hosting**: Usually provides free Let's Encrypt certificates through cPanel

## Testing Your Deployment

After deploying your website, test the following:

1. All pages load correctly
2. All links work
3. All forms submit correctly
4. All images display properly
5. The website is responsive on different devices
6. JavaScript functionality works as expected

## Maintenance

Regular maintenance tasks:

1. Update content as needed
2. Check for broken links
3. Test forms periodically
4. Monitor website performance
5. Keep dependencies updated
6. Back up your website regularly 