(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{180:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{model:this.value}},watch:{value:function(){this.model=this.value}},props:{value:{type:Boolean},schema:{type:Object,required:!0},locale:{type:String,default:"en-us"}},computed:{label:function(){return this.schema.label||this.schema.name},rules:function(){return[]}},methods:{onInput:function(e){this.$emit("input",this.value)}},mounted:function(){!this.value&&this.schema.defaultValue&&(this.model=this.schema.defaultValue)}}},199:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return l});var u=function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-checkbox",{attrs:{color:"primary",label:e.label,rules:e.rules},on:{input:e.onInput},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})},l=[];u._withStripped=!0},29:function(e,t,n){"use strict";n.r(t);var u=n(180),l=n.n(u);for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);var a=n(199),i=n(0),r=Object(i.a)(l.a,a.a,a.b,!1,null,null,null);r.options.__file="src\\theme\\vuetify\\AfBoolCheckbox.vue",t.default=r.exports}}]);