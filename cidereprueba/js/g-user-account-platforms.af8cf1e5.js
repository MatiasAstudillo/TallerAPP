(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["g-user-account-platforms","mc-mining-company-platforms"],{"19eb":function(t,e,r){"use strict";r("50f4")},"29f3":function(t,e,r){},"50f4":function(t,e,r){},"60d8":function(t,e,r){"use strict";r("29f3")},8079:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("app-layout-form",{staticClass:"blue-background",attrs:{id:"platforms","no-actions":"",title:"Zoom"}},[r("v-col",{attrs:{cols:"12"}},[r("v-list",{staticClass:"blue-background",attrs:{"two-lines":""}},[r("v-list-item",{attrs:{href:t.pProviderZoomLink,target:"_blank"}},[r("v-list-item-avatar",{attrs:{color:"primary"}},[r("v-icon",{attrs:{dark:""}},[t._v("mdi-video")])],1),r("v-list-item-content",[r("v-list-item-title",[t._v("Acceder a ZOOM")]),r("v-list-item-subtitle",[t._v("Programa de video-llamadas y reuniones virtuales")])],1)],1),r("v-list-item",{attrs:{href:t.pProviderGoogleLink,target:"_blank"}},[r("v-list-item-avatar",{attrs:{color:"primary"}},[r("v-icon",{attrs:{dark:""}},[t._v("mdi-calendar")])],1),r("v-list-item-content",[r("v-list-item-title",[t._v("Acceder a Google Calendar")]),r("v-list-item-subtitle",[t._v("Permite ver, agregar y agendar eventos en tu cuenta Google.")])],1)],1)],1)],1)],1)},n=[],o=r("5530"),i=r("c7eb"),c=r("1da1"),s=(r("a15b"),r("ac1f"),r("1276"),r("99af"),r("fcd2")),u=r("c1f5"),l=r("8ce7"),d={name:"v-view-account",computed:{authToken:function(){return this.$store.getters["AuthModule/token"].split("Bearer ").join("")},pProviderZoomAuthorizeLink:function(){return"https://zoom.us/oauth/authorize"},pProviderZoomClientId:function(){return"4tuzADI8Rb6vipwtXsgeA"},pProviderZoomLink:function(){return"".concat(this.pProviderZoomAuthorizeLink,"?response_type=code&client_id=").concat(this.pProviderZoomClientId,"&redirect_uri=").concat(this.pProviderZoomRedirectLink,"&state=").concat(this.authToken)},pProviderZoomRedirectLink:function(){return"https://eindustrial.api.sys.dev.innlab.cl/api/zoom-access"},pProviderGoogleLink:function(){return"".concat(u["a"].getLink(),"&state=").concat(this.authToken)}},data:function(){return{busy:{representative:!1},gUserAccount:{},pProvider:{}}},methods:{getProvider:function(){var t=this;return Object(c["a"])(Object(i["a"])().mark((function e(){return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.busy.representative=!0,e.next=3,s["a"].getById(t.$provider.id);case 3:t.pProvider=e.sent,t.busy.representative=!1;case 5:case"end":return e.stop()}}),e)})))()},getUserAccountByToken:function(){var t=this;return Object(c["a"])(Object(i["a"])().mark((function e(){return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.busy.representative=!0,e.next=3,l["a"].getByToken(t.$route.query.state);case 3:return t.gUserAccount=e.sent,e.next=6,t.$store.dispatch("AuthModule/setData",{data:Object(o["a"])(Object(o["a"])({accessToken:t.$route.query.state,tokenType:"Bearer"},t.gUserAccount.data),{},{userAccount:void 0})});case 6:return e.next=8,t.$store.dispatch("UserModule/setData",{data:t.gUserAccount.data});case 8:if("provider"!==t.gUserAccount.data.profile.code){e.next=11;break}return e.next=11,s["a"].getById(t.gUserAccount.data.profile.relatedId).then((function(e){return t.$store.dispatch("ProviderModule/setData",{data:e})}));case 11:t.getProvider(),t.$toast.success("Conectado exitosamente."),t.busy.representative=!1;case 14:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.$provider.id?this.getProvider():this.$route.query.state&&this.getUserAccountByToken()}},v=d,p=(r("60d8"),r("2877")),f=r("6544"),h=r.n(f),m=r("62ad"),g=r("132d"),b=r("8860"),k=r("da13"),y=r("8270"),w=r("5d23"),A=Object(p["a"])(v,a,n,!1,null,null,null);e["default"]=A.exports;h()(A,{VCol:m["a"],VIcon:g["a"],VList:b["a"],VListItem:k["a"],VListItemAvatar:y["a"],VListItemContent:w["b"],VListItemSubtitle:w["c"],VListItemTitle:w["d"]})},"8ce7":function(t,e,r){"use strict";r.d(e,"a",(function(){return v}));var a=r("d4ec"),n=r("bee2"),o=r("262e"),i=r("2caf"),c=(r("d3b7"),r("7db0"),r("bc3a")),s=r.n(c),u=r("ce42"),l=r("cf67"),d=function(t){Object(o["a"])(r,t);var e=Object(i["a"])(r);function r(){return Object(a["a"])(this,r),e.apply(this,arguments)}return Object(n["a"])(r,[{key:"requestResetPassword",value:function(){return this.many("request_reset_password")}},{key:"toRequestResetPassword",value:function(){return this.reduce(["rut"])}}],[{key:"resource",value:function(){return"user_account"}}]),r}(l["a"]),v=function(t){Object(o["a"])(r,t);var e=Object(i["a"])(r);function r(){return Object(a["a"])(this,r),e.apply(this,arguments)}return Object(n["a"])(r,null,[{key:"disable",value:function(t){return t.many("disable").attach(t.reduce(["observation"]))}},{key:"enable",value:function(t){return t.many("enable").attach()}},{key:"getBy",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return console.log({opts:t}),this.query().where("userId",t.gUserAccountId).page(t.page).limit(t.limit).paginate()}},{key:"getById",value:function(t){return this.query().find(t)}},{key:"getByToken",value:function(t){return s.a.request({method:"get",url:"".concat("https://api.espacioindustria.cl/api","/user_account/me"),headers:{Authorization:"Bearer ".concat(t)}})}},{key:"model",value:function(){return d}},{key:"requestResetPassword",value:function(t){return t.requestResetPassword().attach(t.toRequestResetPassword())}},{key:"resetPassword",value:function(t){return t.many("reset_password").attach({email:t.email,password:t.password,token:t.token})}},{key:"toRecovery",value:function(){return this.shape({rut:""})}},{key:"verify",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.shape({id:"verify"}).attach(t)}}]),r}(u["a"])},c1f5:function(t,e,r){"use strict";r.d(e,"a",(function(){return v}));var a=r("d4ec"),n=r("bee2"),o=r("262e"),i=r("2caf"),c=(r("99af"),r("bc3a")),s=r.n(c),u=r("ce42"),l=r("cf67"),d=function(t){Object(o["a"])(r,t);var e=Object(i["a"])(r);function r(){return Object(a["a"])(this,r),e.apply(this,arguments)}return Object(n["a"])(r,null,[{key:"resource",value:function(){return"google"}}]),r}(l["a"]),v=function(t){Object(o["a"])(r,t);var e=Object(i["a"])(r);function r(){return Object(a["a"])(this,r),e.apply(this,arguments)}return Object(n["a"])(r,null,[{key:"access",value:function(t){return s.a.request({method:"post",url:t.many("access").$uri,headers:{authorization:"Bearer ".concat(t.authToken)},data:{code:t.code,redirectUri:t.redirectUri}})}},{key:"getAccessType",value:function(){return"offline"}},{key:"getPrompt",value:function(){return"consent"}},{key:"getBaseLink",value:function(){return"https://accounts.google.com/o/oauth2/v2/auth"}},{key:"getClientId",value:function(){return"352584828099-6iftsb0klh2ahrtjbh2th3oja8l2mvle.apps.googleusercontent.com"}},{key:"getLink",value:function(){return"".concat(this.getBaseLink(),"?response_type=code&client_id=").concat(this.getClientId(),"&scope=").concat(this.getScope(),"&redirect_uri=").concat(this.getRedirectUri(),"&access_type=").concat(this.getAccessType(),"&prompt=").concat(this.getPrompt())}},{key:"getRedirectUri",value:function(){return"https://eindustrial.api.sys.dev.innlab.cl/api/google-access"}},{key:"getScope",value:function(){return"https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar"}},{key:"model",value:function(){return d}},{key:"toAccess",value:function(){return this.shape({code:"",auth:""})}}]),r}(u["a"])},e2f7:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("app-layout-form",{staticClass:"blue-background",attrs:{id:"platforms","no-actions":"",title:"Zoom"}},[r("v-col",{attrs:{cols:"12"}},[r("v-list",{staticClass:"blue-background",attrs:{"two-lines":""}},[r("v-list-item",{attrs:{href:t.zoomLink,target:"_blank"}},[r("v-list-item-avatar",{attrs:{color:"primary"}},[r("v-icon",{attrs:{dark:""}},[t._v("mdi-video")])],1),r("v-list-item-content",[r("v-list-item-title",[t._v("Acceder a ZOOM")]),r("v-list-item-subtitle",[t._v("Programa de video-llamadas y reuniones virtuales")])],1)],1),r("v-list-item",{attrs:{href:t.googleLink,target:"_blank"}},[r("v-list-item-avatar",{attrs:{color:"primary"}},[r("v-icon",{attrs:{dark:""}},[t._v("mdi-calendar")])],1),r("v-list-item-content",[r("v-list-item-title",[t._v("Acceder a Google Calendar")]),r("v-list-item-subtitle",[t._v("Permite ver, agregar y agendar eventos en tu cuenta Google.")])],1)],1)],1)],1)],1)},n=[],o=r("c7eb"),i=r("5530"),c=r("1da1"),s=(r("a15b"),r("ac1f"),r("1276"),r("99af"),r("fcd2")),u=r("c1f5"),l=r("cf8d"),d=r("8ce7"),v={name:"v-view-account",computed:{authToken:function(){return this.$store.getters["AuthModule/token"].split("Bearer ").join("")},googleLink:function(){return"".concat(u["a"].getLink(),"&state=").concat(this.authToken)},zoomLink:function(){return"".concat(l["a"].getLink(),"&state=").concat(this.authToken)}},data:function(){return{busy:{representative:!1},gUserAccount:{},pProvider:{}}},methods:{getUserAccountByToken:function(){var t=this;return Object(c["a"])(Object(o["a"])().mark((function e(){return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.busy.representative=!0,e.next=3,d["a"].getByToken(t.$route.query.state);case 3:return t.gUserAccount=e.sent,e.next=6,t.$store.dispatch("AuthModule/setData",{data:Object(i["a"])(Object(i["a"])({accessToken:t.$route.query.state,tokenType:"Bearer"},t.gUserAccount.data),{},{userAccount:void 0})});case 6:return e.next=8,t.$store.dispatch("UserModule/setData",{data:t.gUserAccount.data});case 8:if("provider"!==t.gUserAccount.data.profile.code){e.next=11;break}return e.next=11,s["a"].getById(t.gUserAccount.data.profile.relatedId).then((function(e){return t.$store.dispatch("ProviderModule/setData",{data:e})}));case 11:t.$toast.success("Conectado exitosamente."),t.busy.representative=!1;case 13:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.$route.query.state&&this.getUserAccountByToken()}},p=v,f=(r("19eb"),r("2877")),h=r("6544"),m=r.n(h),g=r("62ad"),b=r("132d"),k=r("8860"),y=r("da13"),w=r("8270"),A=r("5d23"),j=Object(f["a"])(p,a,n,!1,null,null,null);e["default"]=j.exports;m()(j,{VCol:g["a"],VIcon:b["a"],VList:k["a"],VListItem:y["a"],VListItemAvatar:w["a"],VListItemContent:A["b"],VListItemSubtitle:A["c"],VListItemTitle:A["d"]})}}]);
//# sourceMappingURL=g-user-account-platforms.af8cf1e5.js.map