import axios from 'axios';
class NetworkHelper {
  static requestPost(url, params, token = null, header = null) {
    return NetworkHelper.requestHttp('POST', url, params, token, header);
  }

  static requestGet(url, headers = null) {
    return NetworkHelper.requestHttp('GET', url, null, headers);
  }

  static requestPut(url, params, headers = null) {
    return NetworkHelper.requestHttp('PUT', url, params, headers);
  }

  static requestPatch(url, params, headers = null) {
    return NetworkHelper.requestHttp('PATCH', url, params, headers);
  }

  static requestDelete(url, params, headers = null) {
    return NetworkHelper.requestHttp('DELETE', url, params, headers);
  }

  static requestHttp(method, url, params, token, headers = null) {
    return new Promise((resolve, reject) => {
      let options = {
        method,
        url,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };
      if (headers) {
        delete options.headers;
      }
      if (params) {
        options.data = params;
      }
      if (token) {
        options.headers.Authorization = 'Bearer ' + token;
      }

      axios(options)
        .then(response => {
          resolve({code: response.data.code, body: response.data});
        })
        .catch(error => {
          console.log(error);
          if (error.response !== undefined) {
            resolve({
              code: error.response.status,
              body: error.response.data,
            });
          } else {
            reject('Can not connect to server');
          }
        });
    });
  }
}

export default NetworkHelper;
