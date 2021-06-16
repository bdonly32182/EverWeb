import {USER_LOGIN,USER_LOGOUT} from './Type'
import axios from '../config/axios';
import LocalStorageService from '../LocalStorage/LocalStorageServer';
import {notification} from 'antd';

export const user_login = (body,setRole) => {
    return dispatch => {
        axios.post('/api/login',body)
            .then((result) => {
                LocalStorageService.setToken(result.data.token);
                result.data.user.Role && setRole("admin")
                dispatch({type:USER_LOGIN,payload:result.data})
            }).catch((err) => {
                notification.error({message:"Login again , Please"})
            });
    }
}
export const user_logout = () => {
    return dispatch => {
        LocalStorageService.removeToken()
        window.location.reload()
    }
}