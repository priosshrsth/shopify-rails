const axios = require('axios')

const config = {
  baseURL: process.env.APP_URL,
};

export const _axios = axios.create(config);

function* getCsrfTokenFromMeta() {
  let token = '';
  try {
    token =  document.querySelector("meta[name='csrf-token']").getAttribute('content');
  } catch (e) {
    if(process.env.APP_ENV === 'development') {
      console.warn('csrf meta has net been set!');
    }
  }

  while(true) {
    yield token
  }
}

function getCsrfToken() {
  let token = getCsrfTokenFromMeta()
  return token.next().value
}

_axios.interceptors.request.use(
  function (request) {
    // request.headers = {
    //   ...request.headers,
    //   ...{
    //     'X-CSRF-TOKEN': getCsrfToken()
    //   }
    // };
    request.headers['X-CSRF-TOKEN'] = getCsrfToken()

    return request;
  },
  error => {Promise.reject(error)}
);

_axios.interceptors.response.use(
  response => Promise.resolve(response.data),
  error => Promise.reject(error),
);



export default _axios;
