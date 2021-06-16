import {FETCHS_LOGS,FETCH_LOGS} from '../action/Type'
const LogsReducers = (state = [], action ) => {
    switch (action.type) {
        case FETCHS_LOGS:
            return action.payload;
        case FETCH_LOGS:
            return action.payload
        default:
            return state;
    }
}
 export default  LogsReducers