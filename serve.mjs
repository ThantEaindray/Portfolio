import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';

// Explicit routes keep the preview limited to the website and its résumé.
const routes = new Map([
  ['/', ['index.html', 'text/html; charset=utf-8']],
  ['/index.html', ['index.html', 'text/html; charset=utf-8']],
  ['/projects.html', ['projects.html', 'text/html; charset=utf-8']],
  ['/clubs.html', ['clubs.html', 'text/html; charset=utf-8']],
  ['/styles.css', ['styles.css', 'text/css; charset=utf-8']],
  ['/gallery.js', ['gallery.js', 'text/javascript; charset=utf-8']],
  ['/theme.js', ['theme.js', 'text/javascript; charset=utf-8']],
  ['/favicon.svg', ['favicon.svg', 'image/svg+xml']],
  ['/images/profile.jpeg', ['images/profile.jpeg', 'image/jpeg']],
  ['/images/gitmart.jpeg', ['images/gitmart.jpeg', 'image/jpeg']],
  ['/images/magi.jpeg', ['images/magi.jpeg', 'image/jpeg']],
  ['/images/datanalysis.jpeg', ['images/datanalysis.jpeg', 'image/jpeg']],
  ['/images/classbonding.jpeg', ['images/classbonding.jpeg', 'image/jpeg']],
  ['/images/gryphons.jpeg', ['images/gryphons.jpeg', 'image/jpeg']],
  ['/images/wro-volunteering.jpeg', ['images/wro-volunteering.jpeg', 'image/jpeg']],
  ...Array.from({ length: 7 }, (_, i) => [`/images/${i + 1}.jpeg`, [`images/${i + 1}.jpeg`, 'image/jpeg']]),
  ['/resume.pdf', ['resume.pdf', 'application/pdf']],
]);

const port = Number(process.env.PORTFOLIO_PORT || 4173);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('PORTFOLIO_PORT must be an integer between 1 and 65535.');
}

const server = createServer(async (request, response) => {
  response.setHeader('X-Content-Type-Options', 'nosniff');
  response.setHeader('Cache-Control', 'no-store');
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' });
    response.end('Method not allowed');
    return;
  }

  let pathname;
  try {
    pathname = new URL(request.url, 'http://127.0.0.1').pathname;
  } catch {
    response.writeHead(400);
    response.end('Invalid request');
    return;
  }

  const route = routes.get(pathname);
  if (!route) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Page not found');
    return;
  }

  try {
    const [filename, contentType] = route;
    const content = await readFile(new URL(filename, import.meta.url));
    response.setHeader('Content-Type', contentType);
    response.setHeader('Content-Length', content.length);
    if (pathname === '/resume.pdf') {
      response.setHeader('Content-Disposition', 'attachment; filename="Thant_Eaindray_Resume.pdf"');
    }
    response.writeHead(200);
    response.end(request.method === 'HEAD' ? undefined : content);
  } catch (error) {
    console.error(`Could not serve ${pathname}:`, error.message);
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Unable to load this file');
  }
});

server.on('error', (error) => {
  console.error(`Preview could not start: ${error.message}`);
  process.exitCode = 1;
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Portfolio preview: http://127.0.0.1:${port}`);
  console.log('Press Ctrl+C to stop. Refresh the page after editing a file.');
});
