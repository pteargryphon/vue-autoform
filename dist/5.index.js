(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{170:function(e,s,a){var t={"./af":169,"./af.js":169,"./ar":168,"./ar-dz":167,"./ar-dz.js":167,"./ar-kw":166,"./ar-kw.js":166,"./ar-ly":165,"./ar-ly.js":165,"./ar-ma":164,"./ar-ma.js":164,"./ar-sa":163,"./ar-sa.js":163,"./ar-tn":162,"./ar-tn.js":162,"./ar.js":168,"./az":161,"./az.js":161,"./be":160,"./be.js":160,"./bg":159,"./bg.js":159,"./bm":158,"./bm.js":158,"./bn":157,"./bn.js":157,"./bo":156,"./bo.js":156,"./br":155,"./br.js":155,"./bs":154,"./bs.js":154,"./ca":153,"./ca.js":153,"./cs":152,"./cs.js":152,"./cv":151,"./cv.js":151,"./cy":150,"./cy.js":150,"./da":149,"./da.js":149,"./de":148,"./de-at":147,"./de-at.js":147,"./de-ch":146,"./de-ch.js":146,"./de.js":148,"./dv":145,"./dv.js":145,"./el":144,"./el.js":144,"./en-au":143,"./en-au.js":143,"./en-ca":142,"./en-ca.js":142,"./en-gb":141,"./en-gb.js":141,"./en-ie":140,"./en-ie.js":140,"./en-il":139,"./en-il.js":139,"./en-nz":138,"./en-nz.js":138,"./eo":137,"./eo.js":137,"./es":136,"./es-do":135,"./es-do.js":135,"./es-us":134,"./es-us.js":134,"./es.js":136,"./et":133,"./et.js":133,"./eu":132,"./eu.js":132,"./fa":131,"./fa.js":131,"./fi":130,"./fi.js":130,"./fo":129,"./fo.js":129,"./fr":128,"./fr-ca":127,"./fr-ca.js":127,"./fr-ch":126,"./fr-ch.js":126,"./fr.js":128,"./fy":125,"./fy.js":125,"./gd":124,"./gd.js":124,"./gl":123,"./gl.js":123,"./gom-latn":122,"./gom-latn.js":122,"./gu":121,"./gu.js":121,"./he":120,"./he.js":120,"./hi":119,"./hi.js":119,"./hr":118,"./hr.js":118,"./hu":117,"./hu.js":117,"./hy-am":116,"./hy-am.js":116,"./id":115,"./id.js":115,"./is":114,"./is.js":114,"./it":113,"./it.js":113,"./ja":112,"./ja.js":112,"./jv":111,"./jv.js":111,"./ka":110,"./ka.js":110,"./kk":109,"./kk.js":109,"./km":108,"./km.js":108,"./kn":107,"./kn.js":107,"./ko":106,"./ko.js":106,"./ky":105,"./ky.js":105,"./lb":104,"./lb.js":104,"./lo":103,"./lo.js":103,"./lt":102,"./lt.js":102,"./lv":101,"./lv.js":101,"./me":100,"./me.js":100,"./mi":99,"./mi.js":99,"./mk":98,"./mk.js":98,"./ml":97,"./ml.js":97,"./mn":96,"./mn.js":96,"./mr":95,"./mr.js":95,"./ms":94,"./ms-my":93,"./ms-my.js":93,"./ms.js":94,"./mt":92,"./mt.js":92,"./my":91,"./my.js":91,"./nb":90,"./nb.js":90,"./ne":89,"./ne.js":89,"./nl":88,"./nl-be":87,"./nl-be.js":87,"./nl.js":88,"./nn":86,"./nn.js":86,"./pa-in":85,"./pa-in.js":85,"./pl":84,"./pl.js":84,"./pt":83,"./pt-br":82,"./pt-br.js":82,"./pt.js":83,"./ro":81,"./ro.js":81,"./ru":80,"./ru.js":80,"./sd":79,"./sd.js":79,"./se":78,"./se.js":78,"./si":77,"./si.js":77,"./sk":76,"./sk.js":76,"./sl":75,"./sl.js":75,"./sq":74,"./sq.js":74,"./sr":73,"./sr-cyrl":72,"./sr-cyrl.js":72,"./sr.js":73,"./ss":71,"./ss.js":71,"./sv":70,"./sv.js":70,"./sw":69,"./sw.js":69,"./ta":68,"./ta.js":68,"./te":67,"./te.js":67,"./tet":66,"./tet.js":66,"./tg":65,"./tg.js":65,"./th":64,"./th.js":64,"./tl-ph":63,"./tl-ph.js":63,"./tlh":62,"./tlh.js":62,"./tr":61,"./tr.js":61,"./tzl":60,"./tzl.js":60,"./tzm":59,"./tzm-latn":58,"./tzm-latn.js":58,"./tzm.js":59,"./ug-cn":57,"./ug-cn.js":57,"./uk":56,"./uk.js":56,"./ur":55,"./ur.js":55,"./uz":54,"./uz-latn":53,"./uz-latn.js":53,"./uz.js":54,"./vi":52,"./vi.js":52,"./x-pseudo":51,"./x-pseudo.js":51,"./yo":50,"./yo.js":50,"./zh-cn":49,"./zh-cn.js":49,"./zh-hk":48,"./zh-hk.js":48,"./zh-tw":47,"./zh-tw.js":47};function l(e){var s=n(e);return a(s)}function n(e){var s=t[e];if(!(s+1)){var a=new Error('Cannot find module "'+e+'".');throw a.code="MODULE_NOT_FOUND",a}return s}l.keys=function(){return Object.keys(t)},l.resolve=n,e.exports=l,l.id=170},191:function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=i(a(171)),l=i(a(41)),n=i(a(45));function i(e){return e&&e.__esModule?e:{default:e}}s.default={data:function(){return{model:this.value}},props:{value:{},schema:{type:Object,required:!0},locale:{type:String,default:"en-us"}},watch:{value:function(){this.model=this.value}},computed:{momentLocale:function(){return this.locale?this.locale.substring(0,2):"en"},label:function(){return this.schema.label||this.schema.name},trueLabel:function(){return this.schema.trueLabel||n.default[this.locale].yes},falseLabel:function(){return this.schema.falseLabel||n.default[this.locale].no},items:function(){var e=this;return"boolean"===this.schema.type?[{text:this.trueLabel,value:!0},{text:this.falseLabel,value:!1}]:this.schema.options.map(function(s){if(t.default.isObject(s)){var a=s[e.itemText];return"date"===e.schema.type&&t.default.isDate(a)&&(l.default.locale(e.momentLocale),a=(0,l.default)(a).format("ll")),"datetime"===e.schema.type&&t.default.isDate(a)&&(l.default.locale(e.momentLocale),a=(0,l.default)(a).format("lll")),{text:a,value:s[e.itemValue]}}return"datetime"===e.schema.type||t.default.isDate(s)?(l.default.locale(e.momentLocale),{text:(0,l.default)(s).format("lll"),value:s}):"date"===e.schema.type?(l.default.locale(e.momentLocale),{text:(0,l.default)(s).format("ll"),value:s}):"number"===e.schema.type&&t.default.isNumber(s)?{text:s.toString(),value:s}:{text:s,value:s}})},itemText:function(){return this.schema.textProp||"text"},itemValue:function(){return this.schema.valueProp||"value"},min:function(){return this.schema.min||void 0},max:function(){return this.schema.max||void 0},rules:function(){var e=this,s=n.default[this.locale],a=[];return"array"===this.schema.type&&(this.schema.max&&a.push(function(a){return a.length<=e.schema.max||n.default.format(s.maxCount,e.label,e.schema.max)}),this.schema.min&&a.push(function(a){return a.length>=e.schema.min||n.default.format(s.minCount,e.label,e.schema.min)})),a}},methods:{onInput:function(e){this.$emit("input",this.model)}},mounted:function(){!this.value&&this.schema.defaultValue&&(this.$emit("input",this.model),this.model=this.schema.defaultValue)}}},217:function(e,s,a){"use strict";a.d(s,"a",function(){return t}),a.d(s,"b",function(){return l});var t=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",[a("label",{staticClass:"subheading"},[e._v(e._s(e.label))]),e._v(" "),e._l(e.items,function(s,t){return a("v-checkbox",{key:t,attrs:{value:s.value,color:"primary",label:s.text},on:{input:e.onInput},model:{value:e.model,callback:function(s){e.model=s},expression:"model"}})})],2)},l=[];t._withStripped=!0},31:function(e,s,a){"use strict";a.r(s);var t=a(191),l=a.n(t);for(var n in t)"default"!==n&&function(e){a.d(s,e,function(){return t[e]})}(n);var i=a(217),m=a(0),r=Object(m.a)(l.a,i.a,i.b,!1,null,null,null);r.options.__file="src\\theme\\vuetify\\AfCheckbox.vue",s.default=r.exports},42:function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={latitude:"Latitudine",longitude:"Longitudine",dateFormat:"DD/MM/YYYY",datetimeFormat:"DD/MM/YYYY, HH:mm",elementUiDateFormat:"dd/MM/yyyy",elementUiDatetimeFormat:"dd/MM/yyyy HH:mm",submit:"Invia",selectOne:"(Selezionane Uno)",yes:"Sì",no:"No",thisField:"Campo",required:"%(label)s è un campo obbligatiorio",minString:"%(label)s deve contenere almeno %(min)s caratteri",maxString:"%(label)s non può avere più di %(max)s caratteri",minNumber:"%(label)s non può essere minore di %(min)s",maxNumber:"%(label)s non può essere maggiore di %(max)s",minDate:"%(label)s non può essere prima del %(min)s",maxDate:"%(label)s non può essere dopo il %(max)s",badDate:"%(label)s non è una data valida",minCount:"Devi inserire almeno %(minCount)s valori",maxCount:"Non puoi inserire più di %(maxCount)s valori",noDecimal:"%(label)s deve essere un numero intero",notAllowed:"%(value)s non è un dato valido",expectedString:"%(label)s deve essere una stringa",expectedNumber:"%(label)s deve essere un numero",expectedBoolean:"%(label)s deve essere un Boolean",expectedArray:"%(label)s deve essere un Array",expectedObject:"%(label)s deve essere un Object",expectedConstructor:"%(label)s deve essere di tipo %(type)s",regEx:[{msg:"%(label)s failed regular expression validation"},{exp:"Email",msg:"%(label)s deve essere una mail valida"},{exp:"Domain",msg:"%(label)s deve essere un dominio valido"},{exp:"WeakDomain",msg:"%(label)s deve essere un dominio valido"},{exp:"IP",msg:"%(label)s deve essere un indirizzo IPv4 o IPv6"},{exp:"IPv4",msg:"%(label)s deve essere un indirizzo IPv4"},{exp:"IPv6",msg:"%(label)s deve essere un indirizzo IPv6"},{exp:"Url",msg:"%(label)s deve essere una URL"},{exp:"Id",msg:"%(label)s deve essere un ID alfanumerico"}],keyNotInSchema:"La proprietà %(key)s non è autorizzata dallo schema"}},43:function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={latitude:"纬度",longitude:"经度",dateFormat:"YYYY/MM/DD",datetimeFormat:"YYYY/MM/DD, HH:mm",elementUiDateFormat:"yyyy/MM/dd",elementUiDatetimeFormat:"yyyy/MM/dd HH:mm",submit:"提交",selectOne:"(请选择一项)",yes:"是",no:"否",thisField:"该字段",required:"%(label)s为必填项",minString:"%(label)s至少为%(min)s位数",maxString:"%(label)s不能超过%(max)s位数",minNumber:"%(label)s不能小于%(min)s",maxNumber:"%(label)s不能大于%(max)s",minDate:"%(label)s必须在%(min)s之后",maxDate:"%(label)s不能在%(max)s之后",badDate:"%(label)s已超过有效期",minCount:"你必须指定至少%(minCount)s个值",maxCount:"你不能指定超过%(maxCount)s个值",noDecimal:"%(label)s必须为整数",notAllowed:"%(value)s是一个不允许的值",expectedString:"%(label)s必须为字符串",expectedNumber:"%(label)s必须为数字",expectedBoolean:"%(label)s必须为布尔值",expectedArray:"%(label)s必须为数组",expectedObject:"%(label)s必须为对象",expectedConstructor:"%(label)s必须是一个%(type)s",regEx:[{msg:"请输入正确的%(label)s"},{exp:"Email",msg:"%(label)s必须是一个有效的邮件地址"},{exp:"Domain",msg:"%(label)s必须是一个有效的域名"},{exp:"WeakDomain",msg:"%(label)s必须是一个有效的域名"},{exp:"IP",msg:"%(label)s必须是有效的IPv4或者IPv6地址"},{exp:"IPv4",msg:"%(label)s必须是有效的IPv4或者IPv6地址"},{exp:"IPv6",msg:"%(label)s必须是有效的IPv4或者IPv6地址"},{exp:"Url",msg:"%(label)s必须是有效的URL"},{exp:"Id",msg:"%(label)s必须是一个有效的数字ID"}],keyNotInSchema:"%(key)s在模式中不允许"}},44:function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={latitude:"Latitude",longitude:"Longitude",dateFormat:"MM/DD/YYYY",datetimeFormat:"MM/DD/YYYY, HH:mm",elementUiDateFormat:"MM/dd/yyyy",elementUiDatetimeFormat:"MM/dd/yyyy HH:mm",submit:"Submit",selectOne:"(Select One)",yes:"Yes",no:"No",thisField:"Field",required:"%(label)s is required",minString:"%(label)s must be at least %(min)s characters",maxString:"%(label)s cannot exceed %(max)s characters",minNumber:"%(label)s must be at least %(min)s",maxNumber:"%(label)s cannot exceed %(max)s",minDate:"%(label)s must be on or after %(min)s",maxDate:"%(label)s cannot be after %(max)s",badDate:"%(label)s is not a valid date",minCount:"You must specify at least %(minCount)s values",maxCount:"You cannot specify more than %(maxCount)s values",noDecimal:"%(label)s must be an integer",notAllowed:"%(value)s is not an allowed value",expectedString:"%(label)s must be a string",expectedNumber:"%(label)s must be a number",expectedBoolean:"%(label)s must be a boolean",expectedArray:"%(label)s must be an array",expectedObject:"%(label)s must be an object",expectedConstructor:"%(label)s must be a %(type)s",regEx:[{msg:"%(label)s failed regular expression validation"},{exp:"Email",msg:"%(label)s must be a valid e-mail address"},{exp:"Domain",msg:"%(label)s must be a valid domain"},{exp:"WeakDomain",msg:"%(label)s must be a valid domain"},{exp:"IP",msg:"%(label)s must be a valid IPv4 or IPv6 address"},{exp:"IPv4",msg:"%(label)s must be a valid IPv4 address"},{exp:"IPv6",msg:"%(label)s must be a valid IPv6 address"},{exp:"Url",msg:"%(label)s must be a valid URL"},{exp:"Id",msg:"%(label)s must be a valid alphanumeric ID"}],keyNotInSchema:"%(key)s is not allowed by the schema"}},45:function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=m(a(44)),l=m(a(43)),n=m(a(42)),i=a(46);function m(e){return e&&e.__esModule?e:{default:e}}s.default={format:function(){return i.sprintf.apply(arguments)},en_us:t.default,it_it:n.default,zh_cn:l.default}}}]);