# Deployment Guide

Step-by-step to get this site live on AWS Amplify with your custom domain.

## 1. Push to GitHub

The repo is already committed locally. Once authenticated, it's pushed to GitHub automatically (or do it manually):

```bash
gh auth login                         # one-time: choose GitHub.com → HTTPS → browser
gh repo create Mahmoud-Sabbagh-Personal-Site --public --source . --remote origin --push
```

Manual alternative (if you create the repo in the GitHub web UI):

```bash
git remote add origin https://github.com/<your-username>/Mahmoud-Sabbagh-Personal-Site.git
git push -u origin main
```

## 2. Get a Web3Forms key (for the contact form)

1. Go to <https://web3forms.com>, enter your email, and copy the **access key**.
2. Locally: copy `.env.example` → `.env` and set `PUBLIC_WEB3FORMS_KEY=<key>`.
   (`.env` is gitignored — your key never gets committed.)

## 3. Create the Amplify app

1. Open the [AWS Amplify console](https://console.aws.amazon.com/amplify) → **Create new app**.
2. Choose **GitHub** and authorize AWS to access your repos.
3. Pick **Mahmoud-Sabbagh-Personal-Site**, branch **main**.
4. Build settings: Amplify auto-detects the included **`amplify.yml`** (output dir `dist`). No changes needed.
5. Under **Environment variables**, add:
   - Name: `PUBLIC_WEB3FORMS_KEY`  ·  Value: your Web3Forms key.
6. **Save and deploy.** First build takes ~2–3 minutes.

## 4. Attach your custom domain

1. In the app: **Hosting → Custom domains → Add domain**.
2. Enter your domain (e.g. `mahmoudsabbagh.com`).
3. Amplify gives you DNS records (CNAME / ANAME). Add them at your domain registrar.
   - If your domain is in **Route 53**, Amplify can configure it automatically.
4. SSL is provisioned automatically once DNS verifies (can take 15 min–a few hours).

## 5. Update the canonical domain in code

Once the domain is live, set it in **`astro.config.mjs`**:

```js
site: 'https://your-domain.com',
```

Commit and push — Amplify redeploys on every push to `main`. This keeps canonical URLs, the sitemap, and social-share (OG) tags pointing at the right host.

## Future updates

Just edit and push to `main`:

```bash
git add -A
git commit -m "Update content"
git push
```

Amplify rebuilds and redeploys automatically. To change résumé content, edit `src/data/resume.ts`; to replace the downloadable PDF, swap `public/Mahmoud-Sabbagh-Resume.pdf`.
