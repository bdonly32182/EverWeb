import Login from '../component/Auth/Login'
import Register from '../component/Auth/Register';
import Logs from '../component/Logs/LogsList';
import EditCustomer from '../component/Customers/EditCustomer';
import CustomerList from '../component/Customers/CustomerList';
import EditLogs from '../component/Logs/EditLogs';
const components ={
    login:{
        url:"/login",
        component:Login
    },
    register:{
        url:"/register",
        component:Register
    },
    logs:{
        url:'/logs',
        component:Logs
    },
    editLogs:{
        url:'/logs/:id',
        component:EditLogs
    },
    editCustomer:{
        url:'/customer/:id',
        component:EditCustomer
    },
    customers:{
        url:'/customers',
        component:CustomerList
    }
    
}
//defind role give user
const userRole ={
    guest:{
        allowedRoutes:[
            components.login,
            components.register
         ],
         redirectRoutes:"/login"
    },
    admin:{
        allowedRoutes:[
            components.logs,
            components.editCustomer,
            components.customers,
            components.editLogs
        ],
        redirectRoutes:"/logs"
    },
  
}
export default userRole