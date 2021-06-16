import {FETCHS_LOGS,FETCH_LOGS} from './Type';
import axios from '../config/axios';
import { notification } from 'antd';

export const fetchs_logs = () => {
    return dispatch => {
        axios.get(`/api/list/logs`)
            .then((result) => {
                dispatch({type:FETCHS_LOGS,payload:result.data})
            }).catch((err) => {
                notification.error({message:'fail'})
            });
    }
}

export const fetch_log = (id) => {
    return dispatch => {
        axios.get(`/api/log/${id}`)
            .then((result) => {
                console.log(result.data);
                dispatch({type:FETCH_LOGS,payload:result.data})
            }).catch((err) => {
                
            });
    }
}