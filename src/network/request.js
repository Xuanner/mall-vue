import axios from 'axios'

export function request(config) {
  //1. create the axios instance
  const instance = axios.create({
    baseURL: '',
    timeout: 5000,
    headers: { 'token': 123}
  });
  //interceptor

  instance.interceptors.request.use((data) => {
    // handle the loading icon
    // handle the token of user 
    // ...
    return data;
  },(error) => {
    return error;
  })

  instance.interceptors.response.use((res) => {
    return res;
  },(error) => {
    return error;
  })
  //2. request url
  return instance(config);
}