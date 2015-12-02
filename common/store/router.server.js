import { reduxReactRouter } from 'redux-router';
import createMemoryHistory from 'history/lib/createMemoryHistory';

const router = reduxReactRouter({
  createHistory: createMemoryHistory
});

export default router;
