# 6 Seeds Academy - Ditto Training Portal

Professional training portal for Ditto synthetic research platform clients.

**Live URL (when deployed):** academy.sixseedsconsulting.com

## What's Included

### Pages

1. **Overview** (`/`) - Introduction to Ditto
   - What is Ditto and synthetic research
   - How it works (personas, framework, custom research)
   - Use cases and validation
   - Getting started guide

2. **Question Writing Guide** (`/questions`) - Comprehensive best practices
   - 5 Golden Rules with do's and don'ts examples
   - Question types and when to use them
   - Common pitfalls to avoid
   - Pre-launch checklist
   - Real-world examples (including spirits/Discus-relevant)

### Content Highlights

- **Comprehensive question writing guide** with specific examples
- **Do's and Don'ts cards** for visual learning
- **Industry-specific examples** (spirits/beverages for Discus)
- **Professional styling** with 6 Seeds branding
- **Mobile-responsive** design for on-the-go access

## Development

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# Opens at http://localhost:5173/

# Build for production
npm run build
```

### Project Structure

```
academy-sixseeds/
├── src/
│   ├── index.tsx              # Main app entry
│   ├── components/
│   │   └── Navigation.tsx     # Header navigation
│   └── routes/
│       ├── home.tsx           # Overview page
│       └── questions.tsx      # Question guide page
├── public/
│   └── static/
│       └── style.css          # All styling
└── package.json
```

## Deployment to Cloudflare Pages

### Step 1: Create Cloudflare Pages Project

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **Workers & Pages** → **Create Application** → **Pages** → **Connect to Git**
3. Or use **Direct Upload** for manual deployment

### Step 2: Deploy via Wrangler (Recommended)

```bash
# First time: Login to Cloudflare
npx wrangler login

# Deploy to production
npm run deploy
```

This will:
- Build the project (`npm run build`)
- Deploy to Cloudflare Pages (`wrangler pages deploy dist`)

### Step 3: Configure Custom Domain

1. In Cloudflare Pages project settings, go to **Custom Domains**
2. Add `academy.sixseedsconsulting.com`
3. Cloudflare will automatically configure DNS if sixseedsconsulting.com is in your account
4. Wait 1-2 minutes for DNS propagation

### Alternative: Manual Deployment

```bash
# Build the project
npm run build

# In Cloudflare dashboard, go to Workers & Pages
# Create new Pages project → Upload dist folder
```

## Configuration

No environment variables or authentication required for MVP version.

To add authentication later, you can:
1. Use Cloudflare Access
2. Add password protection via Workers
3. Implement email-based login

## Customization

### Update Content

- **Home page**: Edit `src/routes/home.tsx`
- **Question guide**: Edit `src/routes/questions.tsx`
- **Navigation**: Edit `src/components/Navigation.tsx`

### Update Styling

All styles are in `public/static/style.css`. CSS variables at the top control:
- Brand colors (`--color-primary`, `--color-primary-light`)
- Spacing (`--space-*`)
- Typography (`--font-sans`)

### Add New Pages

1. Create new route file in `src/routes/`
2. Import and mount in `src/index.tsx`
3. Add navigation link in `src/components/Navigation.tsx`

## For Discus Training Tomorrow

### Key Sections to Highlight

1. **Question Writing Guide** (`/questions`)
   - Golden Rules section (5 best practices)
   - Do's and Don'ts cards (very visual)
   - Common Pitfalls section
   - Real-world spirits example
   - Checklist before launching

2. **Overview** (`/`)
   - "How Ditto Works" section
   - Standard Research Framework (24 responses)
   - Use Cases relevant to spirits/beverages

### Talking Points

- **Speed**: Hours instead of weeks
- **Scale**: Test multiple concepts simultaneously
- **Cost**: 10-20x cheaper than traditional research
- **Quality**: 95%+ correlation with traditional methods
- **Question quality is everything**: Guide them through best practices

### Demo Flow Suggestion

1. Show overview page - explain synthetic research
2. Walk through Question Writing Guide together
3. Workshop 2-3 real questions they want to ask
4. Live demo of Ditto platform (your choice)
5. Q&A using the FAQ concepts from overview

## Support

Questions or need to update content? Contact:
- Andreas Duess: andreas@6seedsconsulting.com
- 6 Seeds Team: hello@6seedsconsulting.com

## License

Proprietary - 6 Seeds Consulting
