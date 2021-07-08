(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58a679e4"],{"0247":function(e,t,r){},"1c42":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"cs-p"},[r("el-form",{attrs:{inline:!0,size:"small"},nativeOn:{submit:function(e){e.preventDefault()}}},[e.auth.add?r("el-form-item",[r("el-button",{attrs:{icon:"el-icon-plus",disabled:e.loading},on:{click:function(t){return e.handleCreate("create")}}},[e._v("新增顶层区域")])],1):e._e(),r("el-form-item",[r("el-button-group",[e.auth.del?r("el-button",{attrs:{icon:"el-icon-delete",disabled:e.loading},on:{click:e.removeList}},[e._v("删除")]):e._e(),r("el-button",{attrs:{icon:"el-icon-refresh",disabled:e.loading},on:{click:e.refresh}},[e._v("刷新")])],1)],1),r("el-form-item",{attrs:{label:"过滤"}},[r("el-input",{staticStyle:{width:"240px"},attrs:{disabled:e.loading,placeholder:"输入关键词进行过滤","prefix-icon":"el-icon-search",clearable:!0},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}})],1),r("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:e.$route.path}})],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:10}},[r("el-tree",{ref:"tree",staticClass:"tree-scroll",attrs:{"node-key":"region_id",data:e.treeData,props:e.treeProps,"filter-node-method":e.filterNode,"highlight-current":!0,"default-expanded-keys":e.expanded,"allow-drag":e.allowDrag,"allow-drop":e.allowDrop,draggable:!0,"show-checkbox":!0},on:{"node-click":e.handleNodeClick,"node-drop":e.handleDrop},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.node,n=t.data;return r("span",{staticClass:"custom-tree-node action"},[r("span",{staticClass:"brother-showing"},[e.auth.move?r("i",{staticClass:"el-icon-sort move-tree cs-mr-5"}):e._e(),e._v(" "+e._s(a.label)+" ")]),r("span",{staticClass:"active"},[e.auth.add?r("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){return t.stopPropagation(),e.handleAppend(n.region_id)}}},[e._v(" 新增 ")]):e._e(),e.auth.del?r("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){return t.stopPropagation(),e.remove([n.region_id])}}},[e._v(" 删除 ")]):e._e()],1)])}}])})],1),r("el-col",{attrs:{span:14}},[r("el-card",{directives:[{name:"show",rawName:"v-show",value:e.auth.add||e.auth.set,expression:"auth.add || auth.set"}],staticClass:"box-card",attrs:{shadow:"never"}},[r("div",{attrs:{slot:"header"},slot:"header"},[r("span",[e._v(e._s(e.textMap[e.formStatus]))]),"create"===e.formStatus&&e.auth.add?r("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text",loading:e.formLoading},on:{click:e.create}},[e._v("确定")]):"update"===e.formStatus&&e.auth.set?r("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text",loading:e.formLoading},on:{click:e.update}},[e._v("修改")]):e._e()],1),r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"上级区域",prop:"parent_id"}},[r("el-cascader",{key:e.form.region_id,staticStyle:{width:"100%"},attrs:{placeholder:"不选择表示顶层区域 试试搜索：浙江",disabled:"update"===e.formStatus,options:e.treeData,props:e.cascaderProps,filterable:"",clearable:""},model:{value:e.form.parent_id,callback:function(t){e.$set(e.form,"parent_id",t)},expression:"form.parent_id"}})],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"名称",prop:"region_name"}},[r("el-input",{attrs:{placeholder:"请输入区域名称",clearable:!0},model:{value:e.form.region_name,callback:function(t){e.$set(e.form,"region_name",t)},expression:"form.region_name"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"排序",prop:"sort"}},[r("el-input-number",{staticStyle:{width:"120px"},attrs:{min:0,max:255,"controls-position":"right"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1)],1)],1)],1)],1)],1)],1)],1)},n=[],i=(r("4de4"),r("4160"),r("c975"),r("159b"),r("5530")),o=r("f86b"),s={props:{loading:{default:!1},treeData:{default:function(){return[]}}},data:function(){return{filterText:"",expanded:[],treeProps:{label:"region_name",children:"children"},cascaderProps:{value:"region_id",label:"region_name",children:"children",checkStrictly:!0,emitPath:!1},formStatus:"create",formLoading:!1,textMap:{create:"新增区域",update:"编辑区域"},stateButton:{create:"确定",update:"修改"},auth:{add:!1,del:!1,set:!1,move:!1},form:{parent_id:void 0,region_name:void 0,sort:50},rules:{region_name:[{required:!0,message:"名称不能为空",trigger:"blur"},{max:120,message:"长度不能大于 120 个字符",trigger:"blur"}],sort:[{type:"number",message:"必须为数字值",trigger:"blur"}]}}},watch:{filterText:function(e){this.$refs.tree.filter(e)}},mounted:function(){this._validationAuth()},methods:{_validationAuth:function(){this.auth.add=this.$permission("/setting/logistics/region/add"),this.auth.set=this.$permission("/setting/logistics/region/set"),this.auth.del=this.$permission("/setting/logistics/region/del"),this.auth.move=this.$permission("/setting/logistics/region/move")},filterNode:function(e,t){return!e||-1!==t.region_name.indexOf(e)},resetForm:function(){this.form={parent_id:1,region_name:"",sort:50}},resetElements:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"create";this.$nextTick((function(){e.$refs.form.clearValidate()})),this.formStatus=t,this.formLoading=!1},refresh:function(){this.expanded=[],this.$emit("refresh")},handleNodeClick:function(e){(this.auth.add||this.auth.set)&&(this.resetForm(),this.resetElements("update"),this.form=Object(i["a"])({},e))},handleCreate:function(e){this.resetForm(),this.resetElements(e),this.$refs.tree.getCurrentKey()&&this.$refs.tree.setCurrentKey(null)},handleAppend:function(e){this.handleCreate("create"),this.$refs.tree.setCurrentKey(e),this.form.parent_id=e},create:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.formLoading=!0,Object(o["a"])(e.form).then((function(t){e.expanded=[t.data.parent_id||t.data.region_id],e.$emit("refresh"),e.$message.success("操作成功")})).catch((function(){e.formLoading=!1})))}))},update:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.formLoading=!0,delete e.form.parent_id,Object(o["f"])(e.form).then((function(t){e.expanded=[t.data.parent_id||t.data.region_id],e.$emit("refresh"),e.$message.success("操作成功")})).catch((function(){e.formLoading=!1})))}))},remove:function(e){var t=this;e&&e.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(o["b"])(e).then((function(){e.forEach((function(e){t.$refs.tree.remove(e)})),t.$refs.tree.setCheckedKeys([]),t.handleCreate("create"),t.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},removeList:function(){this.remove(this.$refs.tree.getCheckedKeys())},allowDrag:function(){return this.auth.move},allowDrop:function(e,t,r){return!(e.parent!==t.parent||"inner"===r)},handleDrop:function(e,t){var r=this,a=[];t.parent.childNodes.forEach((function(e,t){a.push(e.key),e.data.sort=t+1})),Object(o["e"])(a).catch((function(){r.$emit("refresh")}))}}},l=s,c=(r("5582"),r("2877")),d=Object(c["a"])(l,a,n,!1,null,"1d5822cf",null);t["default"]=d.exports},5582:function(e,t,r){"use strict";r("0247")}}]);