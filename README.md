# SPA (Angular + PrimeNG)

**Live Demo:** https://wiprospa.netlify.app  

This is a Single Page Application built with Angular and PrimeNG. The project includes simple client-side authentication and a small mock API (served as Netlify Functions) for demo purposes.

## Live Demo

The app is ready to be deployed to Netlify. After you connect this repository to Netlify the site URL will appear here.

## Features

- User Registration and Login (client-side/localStorage)
- Responsive UI using PrimeNG components
- Mock API available via Netlify Functions at `/api/*`

## Development

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

1. Clone the repository and install dependencies:

   ```bash
   git clone <your-repo-url>
   cd <repo-folder>
   npm install
   ```

2. Start the dev server:

   ```bash
   ng serve
   ```

   Open http://localhost:4200

### Build (production)

```bash
npm run build:prod
```

The production build output is `dist/angular-primeng-app`.

## Deploy to Netlify (recommended)

This project includes Netlify configuration and serverless functions under `netlify/functions`.

Steps to deploy from GitHub:

1. Push your final changes to GitHub.
2. In Netlify, click **New site from Git** and connect your GitHub repo.
3. Configure build settings:

   - Build command: `npm ci && npm run build -- --configuration production` or `npm run build:prod`
   - Publish directory: `dist/angular-primeng-app`
   - Functions directory: `netlify/functions`

4. Deploy. Netlify will build the site and expose functions under `/api/*` (e.g. `/api/users`).

Local testing with Netlify CLI:

```bash
npm i -g netlify-cli
netlify dev
```

Then open `http://localhost:8888` and test `/api/users` and SPA routes like `/register`.

## API Endpoints (Netlify Functions)

- `/api/users` — returns users from `db.json`
- `/api/items` — returns items (if present in `db.json`)

## Notes

- If you prefer another host, the project can be deployed to Render, Vercel, or similar platforms.
- The app uses `localStorage` for authentication demo purposes — not suitable for production authentication.

## Contributing

Fork, create a branch, make changes, test, and open a pull request.

## License

MIT
