import { reduxReactRouter } from 'redux-router';
import createHashHistory from 'history/lib/createHashHistory';

const router = reduxReactRouter({
  createHistory: createHashHistory
});

export default router;
