// This file contains the setup for koa-static
import path from 'path';
import serve from 'koa-static';

const build = path.resolve(__dirname, '../../public');
// Set `index` / default page to `yolo.html` so
// `index.html` isn't initially served for server-side rendering
export default serve(build, { index: 'yolo.html' });
