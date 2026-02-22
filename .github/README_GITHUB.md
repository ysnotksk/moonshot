# GitHub Repository Setup Guide

This file contains the recommended settings and content for your GitHub repository.

---

## Repository Information

### Basic Info
- **Name**: `moonshot-css`
- **Description**: Clean, Minimal, Monochrome - Handy CSS Framework for Startups
- **Website**: (Add your demo URL or leave blank)
- **Visibility**: Public

### Topics (Tags)
Add these topics for better discoverability:
```
css
scss
framework
monochrome
startup
japanese
responsive
design-system
ui-framework
minimal
clean
lightweight
```

---

## About Section

Copy this for the repository description:

```
🚀 Moonshot CSS Framework - Clean, minimal, monochrome CSS framework designed for Japanese startups. SCSS-powered with 30+ mixins, 15+ functions, 7 complete templates. Lightweight (11.58 KB gzipped), brand customizable, Japanese optimized.
```

---

## README Badges (Optional)

Add these to the top of README.md for a professional look:

```markdown
![Version](https://img.shields.io/badge/version-0.2.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![SCSS](https://img.shields.io/badge/SCSS-powered-ff69b4)
![Size](https://img.shields.io/badge/size-11.58KB%20gzipped-success)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
```

---

## GitHub Pages Setup

### Enable GitHub Pages

1. Go to **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main`
4. Folder: `/examples`
5. Click **Save**

Your examples will be available at:
```
https://YOUR_USERNAME.github.io/moonshot-css/
```

### Custom Domain (Optional)

If you have a custom domain:
1. Add `CNAME` file to `examples/` directory
2. Content: `moonshot.yourdomain.com`
3. Configure DNS: Add CNAME record pointing to `YOUR_USERNAME.github.io`

---

## Release Creation

### Create First Release (v0.2.0)

1. Go to **Releases** → **Create a new release**
2. **Tag**: `v0.2.0`
3. **Title**: `v0.2.0 - SCSS Edition`
4. **Description**:

```markdown
## 🎉 Moonshot CSS Framework v0.2.0 - SCSS Edition

First major release featuring complete SCSS architecture.

### ✨ Highlights

- **SCSS-Powered**: 30+ mixins, 15+ functions for rapid development
- **Lightweight**: 11.58 KB gzipped (68.65 KB minified)
- **7 Templates**: Complete page layouts for startups
- **40+ Components**: Production-ready UI components
- **Japanese Optimized**: Perfect for bilingual sites
- **Brand Customizable**: 3 CSS variables for instant theming

### 📦 What's Included

- Production CSS (`dist/moonshot.min.css`)
- Development CSS (`dist/moonshot.css`)
- SCSS source files (`src/`)
- 9 HTML example templates (`examples/`)
- Complete documentation (`docs/`)

### 🚀 Quick Start

```html
<link rel="stylesheet" href="dist/moonshot.min.css">
```

Or install via npm:
```bash
npm install moonshot-css
```

### 📚 Documentation

- [Tech Stack](docs/00_tech_stack.md)
- [Framework Strategy](docs/01_moonshot_css_framework_strategy.md)
- [Image Links Philosophy](docs/02_image_links_philosophy.md)
- [Contributing Guide](CONTRIBUTING.md)

### 🔗 Links

- [Live Examples](https://YOUR_USERNAME.github.io/moonshot-css/)
- [Documentation](docs/)
- [Changelog](CHANGELOG.md)

### 🙏 Credits

Built with ❤️ for the Japanese startup community.

---

**Full Changelog**: https://github.com/YOUR_USERNAME/moonshot-css/blob/main/CHANGELOG.md
```

5. **Attach files** (optional):
   - `dist/moonshot.min.css`
   - `dist/moonshot.css`

6. Click **Publish release**

---

## Repository Settings

### General Settings

- ✅ **Features**:
  - [x] Wikis (optional)
  - [x] Issues
  - [x] Discussions (recommended)
  - [ ] Projects (optional)

- ✅ **Pull Requests**:
  - [x] Allow squash merging
  - [x] Allow merge commits
  - [x] Automatically delete head branches

### Branch Protection (Optional)

For `main` branch:
- [x] Require pull request reviews before merging
- [x] Require status checks to pass before merging
- [ ] Require branches to be up to date before merging

---

## Social Preview Image

Create a 1280x640px image with:
- Moonshot logo/wordmark
- Tagline: "Clean, Minimal, Monochrome"
- Key features: "SCSS • Lightweight • Japanese Optimized"
- Color scheme: Monochrome (white/gray/black)

Upload at: **Settings** → **General** → **Social preview**

---

## GitHub Actions (Optional)

Create `.github/workflows/build.yml` for automated builds:

```yaml
name: Build and Test

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build CSS
      run: npm run build
      
    - name: Lint SCSS
      run: npm run lint
```

---

## NPM Publishing (Future)

When ready to publish to NPM:

1. Update `package.json`:
```json
{
  "name": "moonshot-css",
  "version": "0.2.0",
  "description": "Clean, minimal, monochrome CSS framework for startups",
  "main": "dist/moonshot.min.css",
  "repository": {
    "type": "git",
    "url": "https://github.com/YOUR_USERNAME/moonshot-css.git"
  },
  "keywords": ["css", "scss", "framework", "monochrome", "startup"],
  "author": "Your Name",
  "license": "MIT"
}
```

2. Publish:
```bash
npm login
npm publish
```

---

## Community Building

### Encourage Contributions

- Add "good first issue" labels
- Welcome new contributors in issues
- Respond to PRs within 48 hours
- Maintain a friendly, professional tone

### Promote Your Framework

- Share on Twitter/X with #CSS #SCSS #WebDev
- Post on Reddit: r/webdev, r/css
- Share in Japanese communities
- Write a blog post about the design philosophy

---

## Maintenance Checklist

### Weekly
- [ ] Review and respond to issues
- [ ] Review pull requests
- [ ] Update documentation if needed

### Monthly
- [ ] Check for dependency updates
- [ ] Review and close stale issues
- [ ] Update CHANGELOG.md

### Quarterly
- [ ] Plan new features
- [ ] Create new release
- [ ] Update examples

---

## Support Channels

Consider adding:
- GitHub Discussions for Q&A
- Discord server for community
- Email for direct support
- Twitter/X for announcements

---

## License Compliance

Ensure all third-party code is properly attributed:
- normalize.css (MIT) - Already included
- Any other dependencies - Check licenses

---

## Success Metrics

Track these over time:
- ⭐ GitHub stars
- 🍴 Forks
- 📥 NPM downloads (after publishing)
- 🐛 Issues opened/closed
- 🔀 Pull requests merged
- 👥 Contributors

---

**Ready to publish?** Follow the steps in `GITHUB_PUBLISH_CHECKLIST.md`!

