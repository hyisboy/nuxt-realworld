import Cookie from 'js-cookie'
export const state = () => {
    let  user = Cookie.get('user');
    user = user ? JSON.parse(user) : '';
    return {
        user: user,// 存储用户登录信息
    }
}
export const mutations = {
    setUser(state,user) {
        state.user = user;
    },
}