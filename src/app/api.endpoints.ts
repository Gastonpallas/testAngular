const API_ENDPOINTS = {
  api: 'http://localhost:8080/api/v1/',
  auth : "auth/",

};

const API_AUTH = {
  register: API_ENDPOINTS.api + API_ENDPOINTS.auth +  "register/" ,
  authenticate: API_ENDPOINTS.api + API_ENDPOINTS.auth +  "authenticate/" ,
};

export default API_AUTH
