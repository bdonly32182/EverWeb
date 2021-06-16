const setToken = (token) =>{
    localStorage.setItem("token",token)
}
const getToken = () => {
   return localStorage.getItem('token')
}
const removeToken = () => {
    localStorage.removeItem('token')
}
const getRole = () => {
    if (getToken()) {
        return "admin"
    }
    return "guest"
}
const FuncLocalStorage = {
    setToken,
    getRole,
    getToken,
    removeToken
}
export default FuncLocalStorage