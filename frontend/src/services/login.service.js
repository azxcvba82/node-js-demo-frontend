import axios from 'axios';
import {
  environment
} from "../environment";

// displays a page header
class LoginService {
  static login(account, password) {
    return axios.post(environment.production.apiEndpoint +'/login',{
      account,
      password
   })
  }
  static signup(account, password) {
    return axios.post(environment.production.apiEndpoint +'/signup',{
      account,
      password
   })
  }

}
 
export default LoginService 