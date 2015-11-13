import axios from 'axios';
import join from 'url-join';

// https://github.com/sindresorhus/is-absolute-url/blob/master/index.js#L7
const isAbsoluteURLRegex = /^(?:\w+:)\/\//;

axios.interceptors.request.use((config) => {
  // Concatenate base path if not a base url
  if ( !isAbsoluteURLRegex.test(config.url) ) {
    config.url = join(_API_, config.url);
  }

  return config;
});
