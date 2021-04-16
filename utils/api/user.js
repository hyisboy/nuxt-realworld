import {request} from '../../plugins/request'
export const UserApi = {
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
    updateUser(user) {
        return request({
            url: '/api/user',
            method:'PUT',
            data: {
                user
            }
        })
    },
    getUser() {
        return request({
            url: '/api/user',
            method:'GET',
        })
    },
    getProfile(username){
        return request({
            url: '/api/profiles/'+username,
            method:'GET',
        })
    },
    followUser(username) {
       return request({
        url: `/api/profiles/${username}/follow`,
        method:'POST',
       })
    },
    unfollowUser(username) {
       return request({
        url: `/api/profiles/${username}/follow`,
        method:'DELETE',
       })
    },
}