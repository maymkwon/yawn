import axios from 'axios';


function getAPIHost() {
  if (process.env.NODE_ENV === 'development') {
    return 'https://jsonplaceholder.typicode.com/posts';
  } else {
    return '/admin';
  }
}

// axios.defaults.xsrfHeaderName = 'tkn';
// axios.defaults.headers.common['tkn'] = sessionStorage.getItem('tkn')

export function getMakeURL(url) {
  console.log(url)
  if (url.indexOf('http') === 0) {
    return url;
  } else {
    if (url.substr(0, 1) === '/') {
      return getAPIHost().concat(url);
    } else {
      return getAPIHost().concat('/', url);
    }
  }
}

class RestAPICaller {
  static checkURL(url) {
    if (url.indexOf('/null/') !== -1 || url.indexOf('/undefined/') !== -1 || url.indexOf('/NaN/') !== -1) {
      return false;
    }
    return true;
  }

  static get(url, params = null) {
    const fullUrl = getMakeURL(url);
    if (RestAPICaller.checkURL(url) === false) {
      throw Error('null parameter exception : ' + fullUrl);
    }
    const fetchParams = params !== null ? { params: { ...params } } : { params: {} };

    return axios(fullUrl, fetchParams).then((response) => {
      return response;
    }).catch((e) => {
      throw e;
    })
  }

  static post(url, params = null) {
    const fullUrl = getMakeURL(url);
    if (RestAPICaller.checkURL(url) === false) {
      throw Error('null parameter exception : ' + fullUrl);
    }
    const fetchParams = params !== null ? params : {};

    return axios.post(fullUrl, fetchParams)
  }

  static fileUpload(url, params = null) {
    const fullUrl = getMakeURL(url);
    if (RestAPICaller.checkURL(url) === false) {
      throw Error('null parameter exception : ' + fullUrl);
    }
    const fetchParams = params !== null ? params : {};
    const options = {
      headers: { 'Content-type': 'multipart/form-data' }
    }
    return axios.post(fullUrl, fetchParams, options)
  }

}

export default RestAPICaller