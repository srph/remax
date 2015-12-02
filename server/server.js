import koa from 'koa';
import initCookieMiddleware from './middlewares/initCookie';
import appMiddleware from './middlewares/app';

const app = koa();
app.use(initCookieMiddleware);
app.use(appMiddleware);

app.listen(8080, (err) => {
  if ( err ) {
    console.error(err);
  } else {
    console.log('Listening to port 8080.');
  }
});
