import Cookie from 'js-cookie';


export function extraObj (obj,fields) {
   return fields.reduce((_,field) => {
        _[field] = obj[field];
        return _
   },{});
}
// 获取错误信息
export function getErrorMsg(error) {
   const {errors} =error
   if(errors){
     const errorArr = Object.keys(errors).reduce((_, key) => {
          _.push(`${key}:`+errors[key].join(','));
          return _;
     }, []);
     if(errorArr.length > 0){
         return errorArr
     }
   }
   return undefined;
}

export function getToken() {
    let  token;
    if(process.server){
        
    }
}