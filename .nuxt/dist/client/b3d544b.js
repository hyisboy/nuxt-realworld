(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{197:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r(66),n={login:function(e){return Object(o.b)({url:"/api/users/login",data:{user:e},method:"POST"})},register:function(e){return Object(o.b)({url:"/api/users",data:{user:e},method:"POST"})},updateUser:function(e){return Object(o.b)({url:"/api/user",method:"PUT",data:{user:e}})},getUser:function(){return Object(o.b)({url:"/api/user",method:"GET"})},getProfile:function(e){return Object(o.b)({url:"/api/profiles/"+e,method:"GET"})},followUser:function(e){return Object(o.b)({url:"/api/profiles/".concat(e,"/follow"),method:"POST"})},unfollowUser:function(e){return Object(o.b)({url:"/api/profiles/".concat(e,"/follow"),method:"DELETE"})}}},273:function(e,t,r){"use strict";r.r(t);var o=r(4),n=(r(52),r(43),r(197)),l={middleware:["auth"],data:function(){return{user:null}},asyncData:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){var t,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.a.getUser();case 2:return t=e.sent,data=t.data,e.abrupt("return",{user:data.user});case 5:case"end":return e.stop()}}),e)})))()},methods:{logout:function(){this.$router.replace("/"),this.$store.commit("user/setUser","")},updateUser:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.a.updateUser(e.user);case 2:r=t.sent,(data=r.data)&&(e.user=data.user);case 5:case"end":return t.stop()}}),t)})))()}}},c=r(10),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"settings-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[e._v("Your Settings")]),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.updateUser(t)}}},[r("fieldset",[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.image,expression:"user.image"}],staticClass:"form-control",attrs:{type:"text",placeholder:"URL of profile picture",required:""},domProps:{value:e.user.image},on:{input:function(t){t.target.composing||e.$set(e.user,"image",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group",attrs:{required:""}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your Name",required:""},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group",attrs:{required:""}},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.user.bio,expression:"user.bio"}],staticClass:"form-control form-control-lg",attrs:{rows:"8",placeholder:"Short bio about you"},domProps:{value:e.user.bio},on:{input:function(t){t.target.composing||e.$set(e.user,"bio",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),e._v(" "),r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[e._v("\n              Update Settings\n            ")]),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("hr"),e._v(" "),r("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),e.logout(t)}}},[e._v("\n              Or click here to logout.\n            ")])])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);