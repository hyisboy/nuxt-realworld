import Cookie from 'js-cookie';
const  cookieparser  = process.server ?  require( 'cookieparser') : undefined;

const userPlugin = (store) => {
    store.subscribe((mutation, state) => {
        if(mutation.type.startsWith('user/')){
            const  user = state.user && state.user.user ?  state.user.user : ''
            if(user){
                Cookie.set('user',user)
            }else{
                Cookie.remove('user');
            }
        }
    })
}
export const actions = {
    // 1. 一个 特殊的 action， 在 服务端期间被调用，
    // 2. 用户初始化数据
    nuxtServerInit({commit},{req}) {
        const cookie = req.headers.cookie;
        if(cookie){
           const parsed =  cookieparser.parse(cookie);
           try{
             const user = JSON.parse(parsed.user);
             console.log(user)
             commit('user/setUser',user);
           }catch(e){
                
           }
        }
    }
}
export const plugins = [userPlugin];