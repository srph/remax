// This file contains the setup for koa-static
import path from 'path';
import serve from 'koa-static';

const build = path.resolve(__dirname, '../../public');
export default serve(build);
