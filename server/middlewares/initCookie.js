import cookie from 'cookie-machine';

export default function *initCookieMiddleware(next) {
  cookie.init(this.res);
  yield next;
}
