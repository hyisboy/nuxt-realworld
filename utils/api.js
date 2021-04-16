import {request} from './request'

export const API = {
    login(params) {
        return request({
            url: '/api/users/login',
            data: {user: params},
            method:'POST',
        })
    },
    register(params){
        return request({
            url: '/api/users',
            data: {user: params},
            method:'POST',
        })
    },
    articleList(){
        return request({
            url:'/api/articles',
            data: {},
            method: 'GET',
        })
    }
}