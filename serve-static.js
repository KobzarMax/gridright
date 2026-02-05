// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const PORT = 3000;
// const OUT_DIR = path.join(__dirname, 'out');

// const MIME_TYPES = {
//     '.html': 'text/html',
//     '.css': 'text/css',
//     '.js': 'application/javascript',
//     '.json': 'application/json',
//     '.png': 'image/png',
//     '.jpg': 'image/jpeg',
//     '.jpeg': 'image/jpeg',
//     '.svg': 'image/svg+xml',
//     '.woff': 'font/woff',
//     '.woff2': 'font/woff2',
//     '.webp': 'image/webp',
// };

// const server = http.createServer((req, res) => {
//     // Clean the URL and get the file path
//     let urlPath = req.url.split('?')[0]; // Remove query strings
//     let filePath = path.join(OUT_DIR, urlPath === '/' ? 'index.html' : urlPath);

//     const tryServeFile = (attemptPath) => {
//         fs.readFile(attemptPath, (error, content) => {
//             if (error) {
//                 // If file not found and no extension, try adding .html
//                 if (error.code === 'ENOENT' && !path.extname(attemptPath)) {
//                     tryServeFile(attemptPath + '.html');
//                     return;
//                 }

//                 // If it's a directory, try index.html
//                 fs.stat(attemptPath, (statErr, stats) => {
//                     if (!statErr && stats.isDirectory()) {
//                         tryServeFile(path.join(attemptPath, 'index.html'));
//                         return;
//                     }

//                     // Otherwise return 404
//                     if (error.code === 'ENOENT') {
//                         res.writeHead(404, { 'Content-Type': 'text/plain' });
//                         res.end('404 Not Found');
//                     } else {
//                         console.error('Server error:', error);
//                         res.writeHead(500, { 'Content-Type': 'text/plain' });
//                         res.end('500 Internal Server Error');
//                     }
//                 });
//             } else {
//                 const extname = path.extname(attemptPath);
//                 res.writeHead(200, { 'Content-Type': MIME_TYPES[extname] || 'application/octet-stream' });
//                 res.end(content);
//             }
//         });
//     };

//     tryServeFile(filePath);
// });

// server.listen(PORT, () => {
//     console.log(`\n✓ Static server running at http://localhost:${PORT}/\n`);
//     console.log('  Press Ctrl+C to stop\n');
// });
