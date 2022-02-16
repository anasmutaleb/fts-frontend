import axios from 'axios';
export const backendPort = process.env.VUE_APP_BACKEND_API_PORT;
export const backendUrl = (process.env.VUE_APP_BACKEND_API_URL ? process.env.VUE_APP_BACKEND_API_URL : (window.location.protocol + '//' + window.location.hostname)) + (backendPort ? ':' + backendPort : '');
export const backendApiUrl = `${backendUrl}/api`;

export const endpoint = {
    registerEmail: backendApiUrl + '/users/register_email',
    loginUser: backendApiUrl + '/users/login',
}

export const sendPost = (url, data) => {
    return axios({ url, data, method: 'POST' });
  };
  
  export const sendGet = (url, data) => {
    return axios({ url, data, method: 'GET' });
  };
  
  export const sendPostFormData = (url, formData) => {
    return axios({
      url,
      data: formData,
      method: 'POST',
      config: {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    });
  };
  