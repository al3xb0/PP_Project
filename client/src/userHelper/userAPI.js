import {$host, $adminHost} from "./index";
import jwt_decode from "jwt-decode";

//const storageName = 'userData'

export const loginUser = async(login, password) => {
    const {data} = await $host.post('api/user/login', {login, password})
    localStorage.setItem('token', data.token) //storageName, JSON.stringify({role: data.role, token: data.token})
    localStorage.setItem('role', data.role)
    return jwt_decode(data.token)
}

export const registerUser = async(login,password, name, surname, dateOfBirth) => {
    const {data} = await $adminHost.post('api/user/register', {login, password, name, surname, dateOfBirth})
    return data
}

export const checkUser = async() => {
    const {data} = await $adminHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const createUser = async (user) => {
    const {data} = await $adminHost.post('api/user', user)
    return data
}

export const fetchUser = async(page, limit = 9) => {
    const {data} = await $host.get('api/user', {params: {
            page, limit
        }})
    return data
}

export const deleteUser = async(user) => {
    const {data} = await $adminHost.put('api/user', user)
    return data
}

export const changeUser = async(user) => {
    const {data} = await $adminHost.put('api/user/change', user)
    return data
}

export const checkAdmin = async() => {
    const {data} = await $adminHost.get('api/user/admin')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

