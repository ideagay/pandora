(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d23841b"],{ff38:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Form",{attrs:{model:t.formItem,"label-width":120}},[n("h2",{staticStyle:{"margin-bottom":"20px"}},[t._v("工具设置"),n("span",{staticStyle:{fontSize:"13px"}},[t._v("（重启生效）")])]),n("FormItem",{attrs:{label:"物料下载目录"}},[n("Input",{attrs:{placeholder:"默认路径为工作目录下的.pandora"},model:{value:t.formItem.downloadPath,callback:function(e){t.$set(t.formItem,"downloadPath",e)},expression:"formItem.downloadPath"}})],1),n("FormItem",[n("Button",{staticStyle:{"margin-right":"20px"},attrs:{type:"primary"},on:{click:t.update}},[t._v("保存")]),n("Button",{attrs:{type:"default"},on:{click:t.reset}},[t._v("重置默认")])],1)],1)},o=[],s=n("365c"),r={name:"Setting",data:function(){return{formItem:{downloadPath:""}}},methods:{update:function(){var t=this;s["a"].patch("/setting",this.formItem).then((function(e){t.$Message.success("修改成功")}))},reset:function(){var t=this;s["a"].patch("/setting/reset",this.formItem).then((function(e){t.$Message.success("重置成功"),t.formItem=e}))}},mounted:function(){var t=this;s["a"].get("/setting").then((function(e){t.formItem=e}))}},i=r,c=n("2877"),m=Object(c["a"])(i,a,o,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d23841b.abd16a06.js.map