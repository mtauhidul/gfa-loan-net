// import fetch from 'isomorphic-fetch'
// // import { API } from '../config'
// // import cookie from 'js-cookie'

// //signup method
// export const signup = (user) => {
//     return fetch(`${API}/signup`, {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(user)

//     }).then(response => {
//         return response.json()
//     }).catch(err => console.log(err))
// }
// //signin method
// export const signin = (user) => {
//     return fetch(`${API}/signin`, {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(user)

//     }).then(response => {
//         return response.json()
//     }).catch(err => console.log(err))
// }

// //sign out method

// export const signout = (next) => {
//     removeCookie('token')
//     removeLocalStorage('user')
//     next()
//     return fetch(`${API}/signout`, {
//         method: 'GET',
//     }).then(response => console.log('Signout Success'))
//         .catch(err => console.log(err))

// }

// //***set cookie method

// export const setCookie = (key, value) => {
//     //Next js is running both sides (client  and server side )
//     if (process.browser) {
//         cookie.set(key, value, {
//             expires: 1
//         })
//     }
// }

// //remove cookie
// export const removeCookie = (key) => {
//     //Next js is running both sides (client  and server side )
//     if (process.browser) {
//         cookie.remove(key, {
//             expires: 1
//         })
//     }
// }
// //get cookie method

// export const getCookie = key => {
//     //Next js is running both sides (client  and server side )
//     if (process.browser) {
//         return cookie.get(key)
//     }
// }

// //**localstorage

// export const setLocalStorage = (key, value) => {
//     if (process.browser) { localStorage.setItem(key, JSON.stringify(value)) }

// }

// export const removeLocalStorage = (key) => {
//     if (process.browser) { localStorage.removeItem(key) }

// }

// //authenticate user by pass data to cookie  and localstorage

// export const authenticate = (data, next) => {
//     setCookie('token', data.token)
//     setLocalStorage('user', data.user)
//     next()
// }

// //checking the user logged in or not

// export const isAuth = () => {
//     if (process.browser) {
//         const cookieChecked = getCookie('token')
//         if (cookieChecked) {
//             if (localStorage.getItem('user')) {
//                 return JSON.parse(localStorage.getItem('user'))
//             } else {
//                 return false
//             }
//         }
//     }
// }
