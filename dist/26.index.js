(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{186:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{model:this.value}},watch:{value:function(){this.model=this.value}},props:{value:{type:String},schema:{type:Object,required:!0},locale:{type:String,default:"en-us"},required:{type:Boolean,default:!1}},computed:{label:function(){return this.schema.label||this.schema.name},multiline:function(){return this.rows>1},rows:function(){return this.schema.rows||1},inputType:function(){return this.multiline?"textarea":"text"}},methods:{onInput:function(e){this.$emit("input",this.model)}},mounted:function(){!this.value&&this.schema.defaultValue&&(this.model=this.schema.defaultValue)}}},213:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return i});var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form-item",{attrs:{label:e.label,required:e.required,prop:e.schema.name}},[n("el-input",{attrs:{type:e.inputType,rows:e.rows,minlength:e.schema.min,maxlength:e.schema.max},on:{change:e.onInput},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},[e.schema.prefix?n("template",{slot:"prepend"},[n("span",[e._v(e._s(e.schema.prefix))])]):e._e(),e._v(" "),e.schema.suffix?n("template",{slot:"append"},[n("span",[e._v(e._s(e.schema.suffix))])]):e._e()],2)],1)},i=[];u._withStripped=!0},27:function(e,t,n){"use strict";n.r(t);var u=n(186),i=n.n(u);for(var a in u)"default"!==a&&function(e){n.d(t,e,function(){return u[e]})}(a);var s=n(213),l=n(0),r=Object(l.a)(i.a,s.a,s.b,!1,null,null,null);r.options.__file="src\\theme\\element-ui\\AfText.vue",t.default=r.exports}}]);