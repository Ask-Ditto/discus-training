# Quick Deployment Guide

## Option 1: Deploy via Wrangler (5 minutes)

This is the fastest way to deploy to Cloudflare Pages.

### Steps:

1. **Login to Cloudflare** (first time only):
```bash
cd ~/Developer/academy-sixseeds
npx wrangler login
```
This opens your browser for authentication.

2. **Deploy**:
```bash
npm run deploy
```

This builds and deploys automatically. You'll get a URL like:
`https://academy-sixseeds.pages.dev`

3. **Add Custom Domain**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Find your new Pages project
   - Go to **Custom Domains** → **Set up a custom domain**
   - Enter: `academy.sixseedsconsulting.com`
   - Cloudflare auto-configures DNS (if your domain is with Cloudflare)
   - Wait 2-3 minutes for propagation

Done! Your academy is live at academy.sixseedsconsulting.com

---

## Option 2: Manual Upload (10 minutes)

If you don't want to use CLI:

1. **Build locally**:
```bash
cd ~/Developer/academy-sixseeds
npm run build
```

2. **Upload to Cloudflare**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - **Workers & Pages** → **Create Application** → **Pages**
   - **Upload assets**
   - Drag and drop the `dist/` folder
   - Click **Deploy**

3. **Add custom domain** (same as Option 1, step 3)

---

## Option 3: Connect to GitHub (15 minutes)

For automatic deploys on every commit:

1. **Create GitHub repo**:
```bash
cd ~/Developer/academy-sixseeds
gh repo create academy-sixseeds --private --source=. --remote=origin --push
```

Or manually:
- Go to github.com
- Create new private repo: `academy-sixseeds`
- Follow instructions to push existing repo

2. **Connect to Cloudflare Pages**:
   - Go to Cloudflare Dashboard
   - **Workers & Pages** → **Create Application** → **Pages** → **Connect to Git**
   - Select your GitHub repo
   - **Build settings**:
     - Framework preset: None
     - Build command: `npm run build`
     - Build output directory: `dist`
   - Click **Save and Deploy**

3. **Add custom domain** (same as above)

Now every git push auto-deploys!

---

## Before Tomorrow's Training

### Test Locally
```bash
cd ~/Developer/academy-sixseeds
npm run dev
```
Visit http://localhost:5173/ and review:
- Overview page (/)
- Question Guide (/questions)

### Key Pages to Bookmark
- **Overview**: academy.sixseedsconsulting.com/
- **Question Guide**: academy.sixseedsconsulting.com/questions

---

## Troubleshooting

### "Module not found" errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Custom domain not working
- Check DNS settings in Cloudflare dashboard
- Verify sixseedsconsulting.com is in your Cloudflare account
- Wait 5-10 minutes for DNS propagation
- Try incognito mode to avoid cache

### Need to update content
1. Edit files in `src/routes/`
2. Test locally: `npm run dev`
3. Deploy: `npm run deploy` (or commit + push if using GitHub)

---

## Post-Training Updates

After the Discus session, you might want to:

1. **Add video recordings** (if you record the training)
2. **Add FAQ section** based on questions asked
3. **Add authentication** if you want to restrict access
4. **Track analytics** to see which sections are most viewed

All of these are easy additions - just ask!
