import {USER_LOGIN} from '../action/Type'
const UserReducer = (state = {user:null , token:null },action )=>{
    switch (action.type) {
        case USER_LOGIN:
            
            return action.payload;
    
        default:
            return state;
    }
}
export default  UserReducer