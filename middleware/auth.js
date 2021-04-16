export default function({store,redirect,route}) {
    if(route.path !== '/login' && !store.state.user.user){
      redirect('/login');
    }
}

