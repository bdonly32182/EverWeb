import {FETCH_CUSTOMER,FETCHS_CUSTOMER} from '../action/Type'
const CustomersReducers = (state = [] , action) => {
    switch (action.type) {
        case FETCHS_CUSTOMER:
            return action.payload;
        case FETCH_CUSTOMER:
            return action.payload
        default:
            return state;
    }
}
export default  CustomersReducers