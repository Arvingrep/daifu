(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b5d86"],{"1b43":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cs-p"},[a("el-form",{attrs:{inline:!0,size:"small"}},[e.auth.add?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-plus",disabled:e.loading},on:{click:e.handleCreate}},[e._v("新增公司")])],1):e._e(),e.auth.del?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-delete",disabled:e.loading},on:{click:function(t){return e.handleDelete(null)}}},[e._v("删除")])],1):e._e(),a("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:e.$route.path}})],1),a("el-table",{attrs:{data:e.currentTableData,"highlight-current-row":!0},on:{"selection-change":e.handleSelectionChange,"sort-change":e.sortChange}},[a("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"名称",prop:"name",sortable:"custom"}}),a("el-table-column",{attrs:{label:"首拼",prop:"phonetic",sortable:"custom"}}),a("el-table-column",{attrs:{label:"编码",prop:"code",sortable:"custom"}}),a("el-table-column",{attrs:{label:"类型",prop:"type",align:"center",sortable:"custom",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{size:"mini",effect:"plain",type:t.row.type?"info":"warning"}},[e._v(" "+e._s(e.companyType[t.row.type])+" ")])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.auth.set?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return e.handleUpdate(t.$index)}}},[e._v("编辑")]):e._e(),e.auth.del?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return e.handleDelete(t.$index)}}},[e._v("删除")]):e._e(),e.auth.copy&&0!==t.row.type?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return e.copyToHot(t.row.delivery_item_id)}}},[e._v("复制为热门")]):e._e()]}}])})],1),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入快递公司名称",clearable:!0},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"首拼",prop:"phonetic"}},[a("el-input",{attrs:{placeholder:"新增不填写将自动识别",clearable:!0},model:{value:e.form.phonetic,callback:function(t){e.$set(e.form,"phonetic",t)},expression:"form.phonetic"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"编码",prop:"code"}},[a("el-input",{attrs:{placeholder:"请输入快递公司编码",clearable:!0},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1)],1)],1),a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择",clearable:""},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.companyType,(function(e,t){return a("el-option",{key:t,attrs:{label:e,value:t}})})),1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),"create"===e.dialogStatus?a("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.create}},[e._v("确定")]):a("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.update}},[e._v("修改")])],1)],1)],1)},o=[],l=(a("4160"),a("d3b7"),a("25f0"),a("159b"),a("5530")),n=a("2edc"),r=a("ca00"),s={props:{loading:{default:!1},tableData:{default:function(){return[]}},companyType:{default:function(){return[]}}},data:function(){return{currentTableData:[],multipleSelection:[],auth:{add:!1,set:!1,del:!1,copy:!1},dialogLoading:!1,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑公司",create:"新增公司"},form:{name:void 0,phonetic:void 0,code:void 0,type:void 0},rules:{name:[{required:!0,message:"名称不能为空",trigger:"blur"},{max:50,message:"长度不能大于 50 个字符",trigger:"blur"}],phonetic:[{max:10,message:"长度不能大于 10 个字符",trigger:"blur"}],code:[{required:!0,message:"编码不能为空",trigger:"blur"},{max:30,message:"长度不能大于 30 个字符",trigger:"blur"}],type:[{required:!0,message:"至少选择一项",trigger:"change"},{type:"enum",enum:["0","1","2","3"],message:"值的范围必须为 0 ~ 3",trigger:"change"}]}}},watch:{tableData:{handler:function(e){this.currentTableData=e},immediate:!0}},mounted:function(){this._validationAuth()},methods:{_validationAuth:function(){this.auth.add=this.$permission("/setting/logistics/company/add"),this.auth.set=this.$permission("/setting/logistics/company/set"),this.auth.del=this.$permission("/setting/logistics/company/del"),this.auth.copy=this.$permission("/setting/logistics/company/copy")},_getIdList:function(e){null===e&&(e=this.multipleSelection);var t=[];return Array.isArray(e)?e.forEach((function(e){t.push(e.delivery_item_id)})):t.push(this.currentTableData[e].delivery_item_id),t},handleSelectionChange:function(e){this.multipleSelection=e},sortChange:function(e){var t=e.column,a=e.prop,i=e.order,o={order_type:void 0,order_field:void 0};t&&i&&(o.order_type="ascending"===i?"asc":"desc",o.order_field=a),this.$emit("sort",o)},handleCreate:function(){var e=this;this.form={name:void 0,phonetic:void 0,code:void 0,type:void 0},this.$nextTick((function(){e.$refs.form&&e.$refs.form.clearValidate(),e.dialogStatus="create",e.dialogLoading=!1,e.dialogFormVisible=!0}))},create:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.dialogLoading=!0,Object(n["a"])(e.form).then((function(t){e.currentTableData.unshift(t.data),e.dialogFormVisible=!1,e.$message.success("操作成功")})).catch((function(){e.dialogLoading=!1})))}))},handleDelete:function(e){var t=this,a=this._getIdList(e);0!==a.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(n["c"])(a).then((function(){r["a"].deleteDataList(t.currentTableData,a,"delivery_item_id"),t.currentTableData.length<=0&&t.$emit("refresh",!0),t.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},handleUpdate:function(e){var t=this;this.currentIndex=e;var a=this.currentTableData[e];this.form=Object(l["a"])(Object(l["a"])({},a),{},{type:a.type.toString()}),this.$nextTick((function(){t.$refs.form&&t.$refs.form.clearValidate(),t.dialogStatus="update",t.dialogLoading=!1,t.dialogFormVisible=!0}))},update:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.dialogLoading=!0,Object(n["g"])(e.form).then((function(t){e.$set(e.currentTableData,e.currentIndex,Object(l["a"])(Object(l["a"])({},e.currentTableData[e.currentIndex]),t.data)),e.dialogFormVisible=!1,e.$message.success("操作成功")})).catch((function(){e.dialogLoading=!1})))}))},copyToHot:function(e){var t=this;Object(n["b"])(e).then((function(e){t.currentTableData.unshift(e.data),t.$message.success("操作成功")}))}}},c=s,d=a("2877"),u=Object(d["a"])(c,i,o,!1,null,null,null);t["default"]=u.exports}}]);