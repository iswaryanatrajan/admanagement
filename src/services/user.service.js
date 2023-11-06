import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://159.223.87.212/api/v1/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'auth/me');
  }

  getUserBoard() {
    return axios.get(API_URL + 'account', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'accounts', { headers: authHeader() });
  }

  getProducts(){
    return axios.get(API_URL + 'products', { headers: authHeader() });
  }

}

export default new UserService();