(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["g-user-account-representative"],{"75e8":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("app-layout-form",{staticClass:"mb-16",attrs:{loading:e.busy.representative,title:"Representante legal","reset-text":"limpiar","submit-text":"guardar"},on:{reset:e.handleFormReset,submit:e.handleFormSubmit}},[r("v-col",{attrs:{cols:"12"}},[r("vw-rut-field",{attrs:{dotted:"",label:"Rut","field-props":{outlined:!0}},model:{value:e.pProvider.legalRepresentative.rut,callback:function(t){e.$set(e.pProvider.legalRepresentative,"rut",t)},expression:"pProvider.legalRepresentative.rut"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Nombre",outlined:""},model:{value:e.pProvider.legalRepresentative.name,callback:function(t){e.$set(e.pProvider.legalRepresentative,"name",t)},expression:"pProvider.legalRepresentative.name"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"TelÃ©fono",outlined:"",prefix:"+ 56"},model:{value:e.pProvider.legalRepresentative.phone,callback:function(t){e.$set(e.pProvider.legalRepresentative,"phone",t)},expression:"pProvider.legalRepresentative.phone"}})],1)],1),r("p-provider-partners-view")],1)},i=[],a=r("c7eb"),o=r("1da1"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"pb-4",attrs:{loading:e.busy.listed,elevation:"1"}},[r("h1",{staticClass:"title text-uppercase grey--text text--darken-2 py-4 px-6"},[e._v("Socios")]),r("v-list",{staticClass:"px-2 grey lighten-4 mb-8",attrs:{disabled:e.busy.listed}},[e.pProviderPartners.data.length?[e._l(e.pProviderPartners.data,(function(t){return[r("v-list-item",{attrs:{"two-line":""}},[r("v-list-item-avatar",{attrs:{color:"primary"}},[r("v-icon",{attrs:{dark:"",small:""}},[e._v("mdi-account-tie")])],1),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(t.name))]),r("v-list-item-subtitle",[e._v(e._s(t.rut))])],1),r("v-list-item-action",{staticStyle:{"flex-flow":"row","align-items":"center"}},[r("v-btn",{attrs:{icon:""},on:{click:function(r){return e.handleUpdateClick(t)}}},[r("v-icon",[e._v("mdi-pencil")])],1),r("v-btn",{attrs:{icon:""},on:{click:function(r){return e.handleDeleteClick(t)}}},[r("v-icon",[e._v("mdi-delete")])],1)],1)],1)]}))]:[r("v-list-item",[r("v-list-item-avatar",{attrs:{color:"grey",size:"48"}},[r("v-icon",{attrs:{dark:""}},[e._v("mdi-book")])],1),r("v-list-item-content",[r("v-list-item-subtitle",[e._v("Sin socios.")])],1)],1)]],2),r("v-fab-transition",[r("v-btn",{directives:[{name:"show",rawName:"v-show",value:!e.busy.listed,expression:"!busy.listed"}],attrs:{absolute:"",top:"",color:"accent",elevation:"3",fab:"",right:""},on:{click:function(t){e.dialogs.create=!0}}},[r("v-icon",[e._v("mdi-plus")])],1)],1),r("v-fab-transition",[r("v-btn",{directives:[{name:"show",rawName:"v-show",value:!e.busy.listed,expression:"!busy.listed"}],staticClass:"mr-16",attrs:{absolute:"",top:"",color:"primary",elevation:"3",fab:"",loading:e.busy.listed,right:"",small:""},on:{click:e.handleReset}},[r("v-icon",[e._v("mdi-refresh")])],1)],1),r("v-fab-transition",[e.filters.page>1?r("v-btn",{directives:[{name:"show",rawName:"v-show",value:!e.busy.listed,expression:"!busy.listed"}],staticClass:"mr-12",attrs:{absolute:"",bottom:"",color:"primary",elevation:"3",fab:"",loading:e.busy.listed,right:"",small:""},on:{click:function(t){e.filters.page--}}},[r("v-icon",[e._v("mdi-chevron-left")])],1):e._e()],1),r("v-fab-transition",[e.pProviderPartners.last_page!=e.filters.page?r("v-btn",{directives:[{name:"show",rawName:"v-show",value:!e.busy.listed,expression:"!busy.listed"}],attrs:{absolute:"",bottom:"",color:"primary",elevation:"3",fab:"",loading:e.busy.listed,right:"",small:""},on:{click:function(t){e.filters.page++}}},[r("v-icon",[e._v("mdi-chevron-right")])],1):e._e()],1),r("v-fab-transition",[r("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){return[e.pProviderPartners.last_page!=e.filters.page?r("v-btn",e._g({directives:[{name:"show",rawName:"v-show",value:!e.busy.listed,expression:"!busy.listed"}],staticStyle:{"margin-bottom":"-32px"},attrs:{absolute:"",bottom:"",color:"primary",elevation:"3",loading:e.busy.listed,left:""}},t.on),[r("span",[e._v("Items: "+e._s(e.filters.limit))])]):e._e()]}}])},[r("v-list",[r("v-list-item",{on:{click:function(t){e.filters.limit=5}}},[e._v("5")]),r("v-list-item",{on:{click:function(t){e.filters.limit=15}}},[e._v("15")]),r("v-list-item",{on:{click:function(t){e.filters.limit=25}}},[e._v("25")])],1)],1)],1),r("v-dialog",{attrs:{width:"600"},model:{value:e.dialogs.create,callback:function(t){e.$set(e.dialogs,"create",t)},expression:"dialogs.create"}},[r("app-layout-form",{attrs:{loading:e.busy.create,title:"Agregar socio","reset-text":"limpiar","submit-text":"crear"},on:{reset:e.handleCreateReset,submit:e.handleCreateSubmit}},[r("v-col",{attrs:{cols:"12"}},[r("vw-validation",{attrs:{rules:e.rutRules,"input-value":e.pProviderPartnerCreate.rut},scopedSlots:e._u([{key:"default",fn:function(t){return r("vw-rut-field",{attrs:{label:"Rut",dotted:"",placeholder:"12345678-9","field-props":Object.assign({},{loading:e.busy.rut,outlined:!0},t)},model:{value:e.pProviderPartnerCreate.rut,callback:function(t){e.$set(e.pProviderPartnerCreate,"rut",t)},expression:"pProviderPartnerCreate.rut"}})}}])})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Nombre",outlined:"",placeholder:"Nombre",rules:e.nameRules},model:{value:e.pProviderPartnerCreate.name,callback:function(t){e.$set(e.pProviderPartnerCreate,"name",t)},expression:"pProviderPartnerCreate.name"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Porcentaje de ParticipaciÃ³n en la Empresa",outlined:"",placeholder:"Porcentaje de ParticipaciÃ³n en la Empresa",rules:e.participationPercentageRules,suffix:"%",min:"0",max:"100",type:"number"},model:{value:e.pProviderPartnerCreate.participationPercentage,callback:function(t){e.$set(e.pProviderPartnerCreate,"participationPercentage",t)},expression:"pProviderPartnerCreate.participationPercentage"}})],1)],1)],1),r("v-dialog",{attrs:{persistent:"",width:"600"},model:{value:e.dialogs.delete,callback:function(t){e.$set(e.dialogs,"delete",t)},expression:"dialogs.delete"}},[r("app-layout-alert",{attrs:{title:"Eliminar socio",subtitle:"Â¿Esta seguro en eliminar la socio?",type:"error"}},[r("v-btn",{attrs:{color:"error darken-2",depressed:"",loading:e.busy.delete},on:{click:e.handleDeleteSubmit}},[e._v("si, eliminar")]),r("v-btn",{attrs:{depressed:"",disabled:e.busy.delete},on:{click:function(t){e.dialogs.delete=!1}}},[e._v("no")])],1)],1),r("v-dialog",{attrs:{width:"600"},model:{value:e.dialogs.update,callback:function(t){e.$set(e.dialogs,"update",t)},expression:"dialogs.update"}},[r("app-layout-form",{attrs:{loading:e.busy.update,title:"Actualizar socio","reset-text":"limpiar","submit-text":"guardar"},on:{reset:e.handleUpdateReset,submit:e.handleUpdateSubmit}},[r("v-col",{attrs:{cols:"12"}},[r("vw-validation",{attrs:{rules:e.rutRules,"input-value":e.pProviderPartnerUpdate.rut},scopedSlots:e._u([{key:"default",fn:function(t){return r("vw-rut-field",{attrs:{dotted:"",label:"Rut",placeholder:"12345678-9","field-props":Object.assign({},{loading:e.busy.rut,outlined:!0},t)},model:{value:e.pProviderPartnerUpdate.rut,callback:function(t){e.$set(e.pProviderPartnerUpdate,"rut",t)},expression:"pProviderPartnerUpdate.rut"}})}}])})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Nombre",outlined:"",placeholder:"Nombre",rules:e.nameRules},model:{value:e.pProviderPartnerUpdate.name,callback:function(t){e.$set(e.pProviderPartnerUpdate,"name",t)},expression:"pProviderPartnerUpdate.name"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Porcentaje de ParticipaciÃ³n en la Empresa",outlined:"",placeholder:"Porcentaje de ParticipaciÃ³n en la Empresa",rules:e.participationPercentageRules,suffix:"%",min:"0",max:"100",type:"number"},model:{value:e.pProviderPartnerUpdate.participationPercentage,callback:function(t){e.$set(e.pProviderPartnerUpdate,"participationPercentage",t)},expression:"pProviderPartnerUpdate.participationPercentage"}})],1)],1)],1)],1)},u=[],c=r("5530"),l=r("fcd2"),d=r("8f43"),p={name:"v-view-provider-partners",data:function(){return{busy:{create:!1,delete:!1,listed:!1,update:!1},dialogs:{create:!1,delete:!1,update:!1},filters:{limit:15,page:1},pProviderPartnerCreate:{},pProviderPartnerDelete:{},pProviderPartnerStored:{},pProviderPartnerUpdate:{},pProviderPartners:{data:[],last_page:1}}},methods:{handleCreateReset:function(){this.pProviderPartnerCreate=l["a"].toCreatePartner()},handleCreateSubmit:function(){var e=this;return Object(o["a"])(Object(a["a"])().mark((function t(){return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.busy.create=!0,t.next=3,l["a"].createPartner(e.$provider.id,e.pProviderPartnerCreate).then(e.handleCreateSuccess).catch(e.handleError);case 3:e.busy.create=!1;case 4:case"end":return t.stop()}}),t)})))()},handleCreateSuccess:function(e){this.handleReset(),this.handleCreateReset(),l["a"].translate({response:e}).then(this.$toast.success),this.dialogs.create=!1},handleDeleteClick:function(e){this.dialogs.delete=!0,this.pProviderPartnerDelete=e},handleDeleteSubmit:function(){var e=this;return Object(o["a"])(Object(a["a"])().mark((function t(){return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.busy.delete=!0,t.next=3,l["a"].deletePartner(e.$provider.id,e.pProviderPartnerDelete).then(e.handleDeleteSuccess).catch(e.handleError);case 3:e.busy.delete=!1;case 4:case"end":return t.stop()}}),t)})))()},handleDeleteSuccess:function(){this.handleReset(),this.dialogs.delete=!1},handleReset:function(){var e=this;return Object(o["a"])(Object(a["a"])().mark((function t(){return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.busy.listed=!0,t.next=3,l["a"].getPartnersByProviderId(e.$provider.id);case 3:e.pProviderPartners=t.sent,e.busy.listed=!1;case 5:case"end":return t.stop()}}),t)})))()},handleUpdateClick:function(e){this.dialogs.update=!0,this.pProviderPartnerUpdate=Object(c["a"])({},e)},handleUpdateReset:function(){this.pProviderPartnerUpdate=Object(c["a"])({},this.pProviderPartnerStored)},handleUpdateSubmit:function(){var e=this;return Object(o["a"])(Object(a["a"])().mark((function t(){return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.busy.update=!0,t.next=3,l["a"].updatePartner(e.$provider.id,e.pProviderPartnerUpdate).then(e.handleUpdateSuccess).catch(e.handleError);case 3:e.busy.update=!1;case 4:case"end":return t.stop()}}),t)})))()},handleUpdateSuccess:function(e){l["a"].translate({response:e}).then(this.$toast.success),this.handleReset()},handleError:function(e){l["a"].translate(e).then(this.$toast.error)},handleRepeatPasswordRule:function(){return this.pProviderPartnerCreate.has_equal_passwords||"Las contraseÃ±as deben ser las mismas."}},created:function(){this.handleReset()},props:{nameRules:{type:Array,default:function(){return[d["a"].required,d["a"].max(200)]}},participationPercentageRules:{type:Array,default:function(){return[d["a"].required,d["a"].numeric]}},rutRules:{type:Array,default:function(){return[d["a"].required,d["a"].rut,d["a"].max(12)]}}},watch:{"filters.page":function(){this.handleReset()},"filters.limit":function(){this.handleReset()}}},f=p,v=r("2877"),h=r("6544"),m=r.n(h),b=r("8336"),g=r("b0af"),y=r("62ad"),P=r("169a"),w=r("0789"),x=r("132d"),_=r("8860"),k=r("da13"),R=r("1800"),j=r("8270"),O=r("5d23"),C=r("e449"),S=r("8654"),$=Object(v["a"])(f,s,u,!1,null,null,null),U=$.exports;m()($,{VBtn:b["a"],VCard:g["a"],VCol:y["a"],VDialog:P["a"],VFabTransition:w["c"],VIcon:x["a"],VList:_["a"],VListItem:k["a"],VListItemAction:R["a"],VListItemAvatar:j["a"],VListItemContent:O["b"],VListItemSubtitle:O["c"],VListItemTitle:O["d"],VMenu:C["a"],VTextField:S["a"]});var A={name:"v-view-account",components:{PProviderPartnersView:U},data:function(){return{busy:{representative:!1},pProvider:{legalRepresentative:{}}}},methods:{getProvider:function(){var e=this;return Object(o["a"])(Object(a["a"])().mark((function t(){return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.busy.representative=!0,t.next=3,l["a"].getById(e.$provider.id);case 3:e.pProvider=t.sent,e.busy.representative=!1;case 5:case"end":return t.stop()}}),t)})))()},handleFormError:function(e){l["a"].translate(e).then(this.$toast.error)},handleFormReset:function(){this.getProvider()},handleFormSubmit:function(){var e=this;return Object(o["a"])(Object(a["a"])().mark((function t(){return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.busy.representative=!0,t.next=3,l["a"].legalRepresentative(e.pProvider).then(e.handleFormSuccess).catch(e.handleFormError);case 3:e.busy.representative=!1;case 4:case"end":return t.stop()}}),t)})))()},handleFormSuccess:function(e){l["a"].translate({response:e}).then(this.$toast.success)}},mounted:function(){this.handleFormReset()}},E=A,V=Object(v["a"])(E,n,i,!1,null,null,null);t["default"]=V.exports;m()(V,{VCol:y["a"],VTextField:S["a"]})},"8f43":function(e,t,r){"use strict";r.d(t,"a",(function(){return R}));var n=r("bee2"),i=r("d4ec"),a=r("ade3"),o=(r("ac1f"),r("00b4"),r("d3b7"),r("25f0"),r("5319"),r("fb6a"),function(e,t,r,n){this.name=e,this.fn=t,this.args=r,this.modifiers=n});function s(e,t){return void 0===t&&(t="simple"),"object"===typeof e?e[t]:e}function u(e,t){if(e.length){var r=e.shift(),n=u(e,t);return r.perform(n)}return s(t)}function c(e,t){if(e.length){var r=e.shift(),n=c(e,t);return r.performAsync(n)}return function(e){return Promise.resolve(s(t,"async")(e))}}o.prototype._test=function(e){var t=this.fn;try{u(this.modifiers.slice(),t)(e)}catch(r){t=function(){return!1}}try{return u(this.modifiers.slice(),t)(e)}catch(n){return!1}},o.prototype._check=function(e){try{u(this.modifiers.slice(),this.fn)(e)}catch(t){if(u(this.modifiers.slice(),(function(e){return e}))(!1))return}if(!u(this.modifiers.slice(),this.fn)(e))throw null},o.prototype._testAsync=function(e){var t=this;return new Promise((function(r,n){c(t.modifiers.slice(),t.fn)(e).then((function(t){t?r(e):n(null)})).catch((function(e){return n(e)}))}))};var l=function(e,t,r){this.name=e,this.perform=t,this.performAsync=r},d=function(e){function t(r,n,i,a){var o=[],s=arguments.length-4;while(s-- >0)o[s]=arguments[s+4];e.call(this,o),e.captureStackTrace&&e.captureStackTrace(this,t),this.rule=r,this.value=n,this.cause=i,this.target=a}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(Error),p=function(e,t){void 0===e&&(e=[]),void 0===t&&(t=[]),this.chain=e,this.nextRuleModifiers=t};function f(e,t,r,n){if(t.length){var i=t.shift();i._testAsync(e).then((function(){f(e,t,r,n)}),(function(t){n(new d(i,e,t))}))}else r(e)}function v(){return void 0!==typeof Proxy?m(new p):b(new p)}p.prototype._applyRule=function(e,t){var r=this;return function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];return r.chain.push(new o(t,e.apply(r,n),n,r.nextRuleModifiers)),r.nextRuleModifiers=[],r}},p.prototype._applyModifier=function(e,t){return this.nextRuleModifiers.push(new l(t,e.simple,e.async)),this},p.prototype._clone=function(){return new p(this.chain.slice(),this.nextRuleModifiers.slice())},p.prototype.test=function(e){return this.chain.every((function(t){return t._test(e)}))},p.prototype.testAll=function(e){var t=[];return this.chain.forEach((function(r){try{r._check(e)}catch(n){t.push(new d(r,e,n))}})),t},p.prototype.check=function(e){this.chain.forEach((function(t){try{t._check(e)}catch(r){throw new d(t,e,r)}}))},p.prototype.testAsync=function(e){var t=this;return new Promise((function(r,n){f(e,t.chain.slice(),r,n)}))};var h={};function m(e){return new Proxy(e,{get:function(t,r){if(r in t)return t[r];var n=m(e._clone());return r in g?n._applyModifier(g[r],r):r in h?n._applyRule(h[r],r):r in P?n._applyRule(P[r],r):void 0}})}function b(e){var t=function(e,t){return Object.keys(e).forEach((function(r){t[r]=function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];var a=b(t._clone()),o=a._applyRule(e[r],r).apply(void 0,n);return o}})),t},r=t(P,e),n=t(h,r);return Object.keys(g).forEach((function(e){Object.defineProperty(n,e,{get:function(){var t=b(n._clone());return t._applyModifier(g[e],e)}})})),n}v.extend=function(e){Object.assign(h,e)},v.clearCustomRules=function(){h={}};var g={not:{simple:function(e){return function(t){return!e(t)}},async:function(e){return function(t){return Promise.resolve(e(t)).then((function(e){return!e})).catch((function(){return!0}))}}},some:{simple:function(e){return function(t){return y(t).some((function(t){try{return e(t)}catch(r){return!1}}))}},async:function(e){return function(t){return Promise.all(y(t).map((function(t){try{return e(t).catch((function(){return!1}))}catch(r){return!1}}))).then((function(e){return e.some(Boolean)}))}}},every:{simple:function(e){return function(t){return!1!==t&&y(t).every(e)}},async:function(e){return function(t){return Promise.all(y(t).map(e)).then((function(e){return e.every(Boolean)}))}}}};function y(e){return"string"===typeof e?e.split(""):e}var P={equal:function(e){return function(t){return t==e}},exact:function(e){return function(t){return t===e}},number:function(e){return void 0===e&&(e=!0),function(t){return"number"===typeof t&&(e||isFinite(t))}},integer:function(){return function(e){var t=Number.isInteger||x;return t(e)}},numeric:function(){return function(e){return!isNaN(parseFloat(e))&&isFinite(e)}},string:function(){return w("string")},boolean:function(){return w("boolean")},undefined:function(){return w("undefined")},null:function(){return w("null")},array:function(){return w("array")},object:function(){return w("object")},instanceOf:function(e){return function(t){return t instanceof e}},pattern:function(e){return function(t){return e.test(t)}},lowercase:function(){return function(e){return/^([a-z]+\s*)+$/.test(e)}},uppercase:function(){return function(e){return/^([A-Z]+\s*)+$/.test(e)}},vowel:function(){return function(e){return/^[aeiou]+$/i.test(e)}},consonant:function(){return function(e){return/^(?=[^aeiou])([a-z]+)$/i.test(e)}},first:function(e){return function(t){return t[0]==e}},last:function(e){return function(t){return t[t.length-1]==e}},empty:function(){return function(e){return 0===e.length}},length:function(e,t){return function(r){return r.length>=e&&r.length<=(t||e)}},minLength:function(e){return function(t){return t.length>=e}},maxLength:function(e){return function(t){return t.length<=e}},negative:function(){return function(e){return e<0}},positive:function(){return function(e){return e>=0}},between:function(e,t){return function(r){return r>=e&&r<=t}},range:function(e,t){return function(r){return r>=e&&r<=t}},lessThan:function(e){return function(t){return t<e}},lessThanOrEqual:function(e){return function(t){return t<=e}},greaterThan:function(e){return function(t){return t>e}},greaterThanOrEqual:function(e){return function(t){return t>=e}},even:function(){return function(e){return e%2===0}},odd:function(){return function(e){return e%2!==0}},includes:function(e){return function(t){return~t.indexOf(e)}},schema:function(e){return _(e)},passesAnyOf:function(){var e=[],t=arguments.length;while(t--)e[t]=arguments[t];return function(t){return e.some((function(e){return e.test(t)}))}},optional:function(e,t){return void 0===t&&(t=!1),function(r){return t&&"string"===typeof r&&""===r.trim()||void 0!==r&&null!==r&&e.check(r),!0}}};function w(e){return function(t){return Array.isArray(t)&&"array"===e||null===t&&"null"===e||typeof t===e}}function x(e){return"number"===typeof e&&isFinite(e)&&Math.floor(e)===e}function _(e){return{simple:function(t){var r=[];if(Object.keys(e).forEach((function(n){var i=e[n];try{i.check((t||{})[n])}catch(a){a.target=n,r.push(a)}})),r.length>0)throw r;return!0},async:function(t){var r=[],n=Object.keys(e).map((function(n){var i=e[n];return i.testAsync((t||{})[n]).catch((function(e){e.target=n,r.push(e)}))}));return Promise.all(n).then((function(){if(r.length>0)throw r;return!0}))}}}var k=v,R=Object(n["a"])((function e(){Object(i["a"])(this,e)}));Object(a["a"])(R,"email",(function(e){return k().string().pattern(/[^\s@]+@[^\s@]+\.[^\s@]+/).test(e)||"Formato incorrecto."})),Object(a["a"])(R,"length",(function(e){return function(t){return k().length(e).test(t.toString())||"".concat(e," caracteres.")}})),Object(a["a"])(R,"numeric",(function(e){return k().numeric().test(e)||"Solo nÃºmeros."})),Object(a["a"])(R,"max",(function(e){return function(t){return k().string().maxLength(e).test(t)||"MÃ¡ximo ".concat(e," caracteres.")}})),Object(a["a"])(R,"min",(function(e){return function(t){return k().string().minLength(e).test(t)||"MÃ­nimo ".concat(e," caracteres.")}})),Object(a["a"])(R,"required",(function(e){return k().not.null().test(e)||"Campo requerido."})),Object(a["a"])(R,"notEmpty",(function(e){return k().string().minLength(1).test(e)||"Campo requerido."})),Object(a["a"])(R,"rut",(function(e){if("70298600-0"===e)return!0;for(var t=e.toString().toLowerCase(),r=t.replace(/\./g,"").replace(/-/g,""),n=r.slice(0,-1),i=r.slice(-1),a=0,o=7,s=2,u=1;u<=n.length;u++)a+=s*r.charAt(n.length-u),s=s<o?s+1:2;var c=11-a%11;return(10==c?"k":11==c?"0":c)==i||"Rut invalido."})),Object(a["a"])(R,"select",(function(e){return k().numeric().test(e)||"Selecciona una opciÃ³n."})),Object(a["a"])(R,"url",(function(e){return!e||(k().string().pattern(/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/).test(e)||"URL incorrecta.")})),Object(a["a"])(R,"urlhttps",(function(e){return!e||(k().string().pattern(/^(http[s]?:\/\/){1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/).test(e)||"URL incorrecta. Debe comenzar con http:// o https://")}))}}]);
//# sourceMappingURL=g-user-account-representative.e4cd8cf6.js.map