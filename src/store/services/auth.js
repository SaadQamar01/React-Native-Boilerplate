import NetworkHelper from './helper/networkHelper';
import endPoint from '../../common/config';

const baseUrl = 'https://icplan-server.herokuapp.com/api/';

export const makeUrl = (resource, params = null) => {
  let url = baseUrl + resource;
  if (params) {
    url += '&' + params;
  }
  return url;
};

export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    NetworkHelper.requestPost(makeUrl('login'), {
      email,
      password,
    })
      .then(response => {
        if (response.code === 200) {
          resolve(response.body.data);
        } else {
          reject(response.body.message);
        }
      })
      .catch(reject);
  });
};

export const signUp = (first_name, last_name, email, password) => {
  return new Promise((resolve, reject) => {
    NetworkHelper.requestPost(this.makeUrl('user'), {
      email,
      first_name,
      last_name,
      password,
    })
      .then(response => {
        if (response.statusCode === 201) {
          resolve(response.body);
        } else {
          reject(response.body.message);
        }
      })
      .catch(reject);
  });
};
