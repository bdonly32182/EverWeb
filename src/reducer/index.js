import {combineReducers} from 'redux';
import UserReducer from './UserReducers';
import Customers from './CustomersReducer';
import Logs from './LogsReducers'
const RootReducers = combineReducers({
    users:UserReducer,
    customers:Customers,
    logs:Logs
})
export default RootReducers