(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d72dfb1a"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"33a3":function(e,t,n){"use strict";var i=n("cc36"),s=n.n(i);s.a},"440b":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pg-dependence"},[n("DashboardHeader",{attrs:{title:"依赖"}},[n("div",{staticClass:"h-right"},[n("Input",{staticStyle:{width:"100%"},attrs:{placeholder:"输入关键词搜索"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}},[n("Icon",{attrs:{slot:"suffix",type:"ios-search"},slot:"suffix"})],1),n("Button",{staticClass:"ml20",attrs:{type:"primary"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("安装依赖")])],1)]),n("div",{staticClass:"content"},[n("h2",[e._v("运行依赖")]),e._l(e.dependence.dependencies,(function(e){return n("list-item",{key:e.name,attrs:{item:e}})})),n("h2",[e._v("开发依赖")]),e._l(e.dependence.devDependencies,(function(e){return n("list-item",{key:e.name,attrs:{item:e}})}))],2),n("Modal",{attrs:{title:"安装依赖"},model:{value:e.dialogFormVisible,callback:function(t){e.dialogFormVisible=t},expression:"dialogFormVisible"}},[n("Form",{attrs:{model:e.form,"label-width":80}},[n("FormItem",{attrs:{label:"类型"}},[n("RadioGroup",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[n("Radio",{attrs:{label:"S"}},[e._v("运行依赖")]),n("Radio",{attrs:{label:"D"}},[e._v("开发依赖")])],1)],1),n("FormItem",{attrs:{label:"名称"}},[n("Input",{attrs:{type:"textarea",placeholder:"请输入npm包名及版本号，例如lodash@latest,多个包名之间用空格分隔"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),n("Button",{attrs:{type:"primary"},on:{click:e.installDependence}},[e._v("确定")])],1)],1)],1)},s=[],a=(n("4de4"),n("c975"),n("b0c0"),n("ac1f"),n("841c"),n("365c"),n("3a43")),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"de-list-item"},[n("span",{staticClass:"name"},[e._v(e._s(e.item.name))]),n("span",{staticClass:"version"},[e._v("版本 "+e._s(e.item.version))]),n("i",{staticClass:"iconfont iconshanchu",on:{click:function(t){return e.remove(e.item.name)}}})])},o=[],c={name:"ListItem",props:{item:{type:Object,default:function(){return{}}}},methods:{remove:function(e){this.$store.commit("setLogShow",!0)}}},l=c,d=(n("33a3"),n("2877")),u=Object(d["a"])(l,r,o,!1,null,null,null),f=u.exports,m={name:"Dependence",data:function(){return{search:"",dialogFormVisible:!1,loading:!0,form:{name:"",type:"S"}}},computed:{_dependence:function(){return this.$store.state.dependence},dependence:function(){var e=this,t=Object.assign({},this._dependence),n=t.dependencies.filter((function(t){return t.name.indexOf(e.search)>-1})),i=t.devDependencies.filter((function(t){return t.name.indexOf(e.search)>-1}));return{dependencies:n,devDependencies:i}}},methods:{installDependence:function(){this.form.name?(a["a"].emit("install dependence",this.form),this.dialogFormVisible=!1,this.$store.commit("setLogShow",!0)):this.$Notice.warning({title:"通知",desc:"请填写包名"})},searchHandler:function(){}},components:{ListItem:f},created:function(){this.$store.dispatch("getDependence")}},p=m,h=(n("b8de"),Object(d["a"])(p,i,s,!1,null,"5cd67df3",null));t["default"]=h.exports},"4de4":function(e,t,n){"use strict";var i=n("23e7"),s=n("b727").filter,a=n("1dde"),r=n("ae40"),o=a("filter"),c=r("filter");i({target:"Array",proto:!0,forced:!o||!c},{filter:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})},"841c":function(e,t,n){"use strict";var i=n("d784"),s=n("825a"),a=n("1d80"),r=n("129f"),o=n("14c3");i("search",1,(function(e,t,n){return[function(t){var n=a(this),i=void 0==t?void 0:t[e];return void 0!==i?i.call(t,n):new RegExp(t)[e](String(n))},function(e){var i=n(t,e,this);if(i.done)return i.value;var a=s(e),c=String(this),l=a.lastIndex;r(l,0)||(a.lastIndex=0);var d=o(a,c);return r(a.lastIndex,l)||(a.lastIndex=l),null===d?-1:d.index}]}))},"87ed":function(e,t,n){},b8de:function(e,t,n){"use strict";var i=n("87ed"),s=n.n(i);s.a},c975:function(e,t,n){"use strict";var i=n("23e7"),s=n("4d64").indexOf,a=n("a640"),r=n("ae40"),o=[].indexOf,c=!!o&&1/[1].indexOf(1,-0)<0,l=a("indexOf"),d=r("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:c||!l||!d},{indexOf:function(e){return c?o.apply(this,arguments)||0:s(this,e,arguments.length>1?arguments[1]:void 0)}})},cc36:function(e,t,n){}}]);
//# sourceMappingURL=chunk-d72dfb1a.d2c71826.js.map