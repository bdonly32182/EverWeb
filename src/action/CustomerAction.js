import {FETCHS_CUSTOMER,FETCH_CUSTOMER} from './Type';
import axios from '../config/axios';

export const fetchs_customer = () => {
    return dispatch => {
        axios.get(`/api/admin/customer`)
            .then((result) => {
                dispatch({type:FETCHS_CUSTOMER,payload:result.data});
            }).catch((err) => {
                console.log('call api fail');
            });
    }
}

export const fetch_customer = (id)=>{
    return dispatch=>{
        axios.get(`/api/admin/customers/${id}`)
            .then((result) => {
                console.log(result.data);
                dispatch({type:FETCH_CUSTOMER,payload:result.data})
            }).catch((err) => {
                
            });
    }
}
export const change_status = (body,id) => {
    return dispatch => {
        axios.put(`/api/customer/${id}`,body)
            .then((result) => {
                axios.get(`/api/admin/customer`)
                    .then((result) => {
                        dispatch({type:FETCHS_CUSTOMER,payload:result.data});
                    }).catch((err) => {
                        console.log('call api fail');
                    });
            }).catch((err) => {
                console.log('call change status fail');
            });
    }
}
