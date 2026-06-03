# Gosukri — Personal site (Next.js)

This is a minimal Next.js starter inspired by Apple's liquid glass UI (glassmorphism).

Quick start:

```bash
npm install
npm run dev
```

Files created:
- [package.json](package.json)
- [next.config.js](next.config.js)
- [pages/_app.js](pages/_app.js)
- [pages/index.js](pages/index.js)
- [components/Header.js](components/Header.js)
- [components/Hero.js](components/Hero.js)
- [components/Card.js](components/Card.js)
- [components/Footer.js](components/Footer.js)
- [styles/globals.css](styles/globals.css)

Next steps: install deps, run dev, and iterate on content and visuals.

Vercel deployment notes:

- Ensure the project Root Directory in Vercel is set to the repository root where `package.json` is located (the default).
- This repo includes `vercel.json` to explicitly use the Next.js builder. If you deploy from a subfolder, set the Root Directory in Vercel accordingly.
- If Vercel still reports "No Next.js version detected", confirm `next` is listed in `dependencies` in `package.json` and that you pushed `package.json` to the branch being deployed.
