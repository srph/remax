import createBrowserHistory from 'history/lib/createBrowserHistory';
import {useRouterHistory} from 'react-router';
import {parse, stringify} from 'qs';

export default useRouterHistory(createBrowserHistory)({
  parseQueryString: parse,
  stringifyQuery: stringify
});
