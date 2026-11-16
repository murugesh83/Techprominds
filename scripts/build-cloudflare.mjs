import { execFileSync } from 'node:child_process';
import { unlinkSync } from 'node:fs';
execFileSync('npm', ['run', 'build'], { stdio: 'inherit', env: { ...process.env, VITE_DEMO_ENDPOINT: '/api/demo' } });
// SPA fallback is configured in Wrangler; Netlify redirect syntax is not valid here.
unlinkSync('dist/_redirects');
