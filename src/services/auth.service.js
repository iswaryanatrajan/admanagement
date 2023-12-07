import axios from 'axios';

const API_URL = 'https://api.j-wire.tech/v1/auth/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.data.access_token) {
          localStorage.setItem('user', JSON.stringify(response.data.data));
        }

        return response.data.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      //username: user.username,
      email: user.email,
      password: user.password,
      password_confirmation: user.password_confirmation,
    });
  }
}

export default new AuthService();