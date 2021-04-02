(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f9a4538e"],{"1b8f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cs-p"},[a("el-form",{attrs:{inline:!0,size:"small"}},[e.auth.add?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-plus",disabled:e.loading},on:{click:e.handleCreate}},[e._v("新增设备")])],1):e._e(),e.auth.enable||e.auth.disable?a("el-form-item",[a("el-button-group",[e.auth.enable?a("el-button",{attrs:{icon:"el-icon-check",disabled:e.loading},on:{click:function(t){return e.handleStatus(null,1,!0)}}},[e._v("启用")]):e._e(),e.auth.disable?a("el-button",{attrs:{icon:"el-icon-close",disabled:e.loading},on:{click:function(t){return e.handleStatus(null,2,!0)}}},[e._v("禁用")]):e._e()],1)],1):e._e(),e.auth.del?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-delete",disabled:e.loading},on:{click:function(t){return e.handleDelete(null)}}},[e._v("删除")])],1):e._e(),a("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:e.$route.path}})],1),a("el-table",{attrs:{data:e.currentTableData,"highlight-current-row":!0},on:{"selection-change":e.handleSelectionChange,"sort-change":e.sortChange}},[a("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"编号",prop:"id","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.id)+" ")]}}])}),a("el-table-column",{attrs:{label:"名称",prop:"name","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"卡商",prop:"user.username","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"下发最大金额",prop:"max","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("getNumber")(t.row.max))+" ")]}}])}),a("el-table-column",{attrs:{label:"下发最小金额",prop:"min","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("getNumber")(t.row.min))+" ")]}}])}),a("el-table-column",{attrs:{label:"账号",prop:"account","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"余额",prop:"fee","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("getNumber")(t.row.fee))+" ")]}}])}),a("el-table-column",{attrs:{label:"轮训次数",prop:"round_id","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"下发笔数",prop:"has","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"IMEI",prop:"mobile","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"备注",prop:"desc","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"状态",prop:"status",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{style:e.auth.enable||e.auth.disable?"cursor: pointer;":"",attrs:{size:"mini",type:e.statusMap[t.row.status].type,effect:e.auth.enable||e.auth.disable?"light":"plain"}},[e._v(" "+e._s(e.statusMap[t.row.status].text)+" ")])]}}])}),a("el-table-column",{attrs:{label:"创建时间",prop:"created_at"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("formatDate")(t.row.created_at))+" ")]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.auth.set?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return e.handleUpdate(t.$index)}}},[e._v("编辑")]):e._e(),e.auth.del?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return e.handleDelete(t.$index)}}},[e._v("删除")]):e._e()]}}])})],1),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-radio-group",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[a("el-radio",{attrs:{label:1}},[e._v("启用")]),a("el-radio",{attrs:{label:2}},[e._v("禁用")])],1)],1),a("el-form-item",{attrs:{label:"最大金额",prop:"max"}},[a("el-input",{attrs:{placeholder:"请输入下发最大金额",clearable:!0},model:{value:e.form.max,callback:function(t){e.$set(e.form,"max",t)},expression:"form.max"}})],1),a("el-form-item",{attrs:{label:"最小金额",prop:"min"}},[a("el-input",{attrs:{placeholder:"请输入下发最小金额",clearable:!0},model:{value:e.form.min,callback:function(t){e.$set(e.form,"min",t)},expression:"form.min"}})],1),a("el-form-item",{attrs:{label:"设备余额",prop:"fee"}},[a("el-input",{attrs:{placeholder:"请输入设备余额",clearable:!0},model:{value:e.form.fee,callback:function(t){e.$set(e.form,"fee",t)},expression:"form.fee"}})],1),a("el-form-item",{attrs:{label:"设备编号",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入设备编号",clearable:!0},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"登录账号",prop:"account"}},[a("el-input",{attrs:{placeholder:"请输入登录账号",clearable:!0},model:{value:e.form.account,callback:function(t){e.$set(e.form,"account",t)},expression:"form.account"}})],1),a("el-form-item",{attrs:{label:"登录密码",prop:"login"}},[a("el-input",{attrs:{placeholder:"请输入登录密码",clearable:!0},model:{value:e.form.login,callback:function(t){e.$set(e.form,"login",t)},expression:"form.login"}})],1),a("el-form-item",{attrs:{label:"支付密码",prop:"pwd"}},[a("el-input",{attrs:{placeholder:"请输入支付密码",clearable:!0},model:{value:e.form.pwd,callback:function(t){e.$set(e.form,"pwd",t)},expression:"form.pwd"}})],1),a("el-form-item",{attrs:{label:"备注",prop:"desc"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请填写备注",maxlength:"30","show-word-limit":""},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),"create"===e.dialogStatus?a("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.create}},[e._v("确定")]):a("el-button",{attrs:{type:"primary",loading:e.dialogLoading,size:"small"},on:{click:e.update}},[e._v("修改")])],1),a("cs-storage",{ref:"storage",staticStyle:{display:"none"},attrs:{limit:1},on:{confirm:e._getStorageFileList}}),a("cs-upload",{ref:"upload",staticStyle:{display:"none"},attrs:{type:"slot",accept:"image/*",limit:1,multiple:!1},on:{confirm:e._getUploadFileList}})],1)],1)},o=[],i=(a("99af"),a("4160"),a("c975"),a("d3b7"),a("159b"),a("5530")),r=a("b85c"),l=a("d221"),s=a("6e85"),c=a.n(s),u=a("ca00"),d=a("a285"),m=a("5ef3"),f={components:{csUpload:function(){return a.e("chunk-7aed0762").then(a.bind(null,"8422"))},csStorage:function(){return a.e("chunk-497c3ecd").then(a.bind(null,"8704"))}},props:{loading:{default:!1},group:{default:function(){return[]}},tableData:{default:function(){return[]}}},data:function(){return{currentTableData:[],multipleSelection:[],auth:{add:!0,set:!0,del:!0,enable:!0,disable:!0,more:!0,reset:!0,withdraw:!0,address:!0,money:!0,finance:!0},dialogLoading:!1,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"新增"},statusMap:{2:{text:"禁用",type:"danger"},1:{text:"启用",type:"success"},0:{text:"...",type:"info"}},sexMap:{0:"保密",1:"男",2:"女"},legalizeMap:{0:{text:"未认证",type:"warning"},1:{text:"已认证",type:""}},form:{type:void 0,status:1,name:void 0,min:void 0,max:void 0,fee:void 0,login:void 0,pwd:void 0,desc:void 0,account:void 0},rules:{name:[{required:!0,message:"设备编号不能为空",trigger:"blur"}],max:[{required:!0,validator:u["a"].checkNumber,trigger:"blur"}],min:[{required:!0,validator:u["a"].checkNumber,trigger:"blur"}],fee:[{required:!0,validator:u["a"].checkNumber,trigger:"blur"}],account:[{required:!0,message:"登录账号不能为空",trigger:"blur"}],login:[{required:!0,message:"登录密码不能为空",trigger:"blur"}],pwd:[{required:!0,message:"支付密码不能为空",trigger:"blur"}]},toPayment:{},financeLoading:!1,financeVisible:!1,financeForm:{client_id:void 0,money:void 0,points:void 0,to_payment:void 0,source_no:void 0,cause:void 0},financeRules:{to_payment:[{required:!0,message:"至少选择一项",trigger:"change"}],source_no:[{max:100,message:"长度不能大于 100 个字符",trigger:"blur"}],cause:[{required:!0,message:"操作原因不能为空",trigger:"blur"},{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}]}}},watch:{tableData:{handler:function(e){this.currentTableData=e},immediate:!0}},filters:{getPreviewUrl:function(e){return e?u["a"].getImageCodeUrl(e,"head_pic"):""},getNumber:function(e){return u["a"].getNumber(e)},formatDate:function(e){return u["a"].formatDate(e,"YYYY-MM-DD HH:mm:ss")}},mounted:function(){},methods:{_validationAuth:function(){this.auth.add=this.$permission("/member/user/client/add"),this.auth.set=this.$permission("/member/user/client/set"),this.auth.del=this.$permission("/member/user/client/del"),this.auth.enable=this.$permission("/member/user/client/enable"),this.auth.disable=this.$permission("/member/user/client/disable"),this.auth.more=this.$permission("/member/user/client/more"),this.auth.reset=this.$permission("/member/user/client/reset"),this.auth.withdraw=this.$permission("/member/user/client/withdraw"),this.auth.address=this.$permission("/member/user/client/address"),this.auth.money=this.$permission("/member/user/client/money"),this.auth.finance=this.$permission("/member/user/client/finance")},_getIdList:function(e){null===e&&(e=this.multipleSelection);var t=[];return Array.isArray(e)?e.forEach((function(e){t.push(e.id)})):t.push(this.currentTableData[e].id),t},handleCommand:function(e){switch(e){case"storage":this.$refs.storage.handleStorageDlg([0,2]);break;case"upload":this.$refs.upload.handleUploadDlg();break}},_getUploadFileList:function(e){if(e.length){var t=e[0].response;t&&200===t.status&&0===t.data[0].type&&(this.form.head_pic=t.data[0].url)}},_getStorageFileList:function(e){if(e.length){var t,a=Object(r["a"])(e);try{for(a.s();!(t=a.n()).done;){var n=t.value;if(0===n.type){this.form.head_pic=n.url;break}}}catch(o){a.e(o)}finally{a.f()}}},handleSelectionChange:function(e){this.multipleSelection=e},sortChange:function(e){var t=e.column,a=e.prop,n=e.order,o={order_type:void 0,order_field:void 0};t&&n&&(o.order_type="ascending"===n?"asc":"desc",o.order_field=a),this.$emit("sort",o)},handleStatus:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=this._getIdList(e);if(0!==o.length){if(!n){var r=this.currentTableData[e],s=r.status?0:1;if(r.status>1)return;if(0===s&&!this.auth.disable)return;if(1===s&&!this.auth.enable)return;return this.$set(this.currentTableData,e,Object(i["a"])(Object(i["a"])({},r),{},{status:2})),void c(o,s,this)}this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){c(o,a,t)})).catch((function(){}))}else this.$message.error("请选择要操作的数据");function c(e,t,a){Object(l["F"])({keys:e,status:t}).then((function(){a.currentTableData.forEach((function(n,o){-1!==e.indexOf(n.id)&&a.$set(a.currentTableData,o,Object(i["a"])(Object(i["a"])({},n),{},{status:t}))})),a.$message.success("操作成功")}))}},handleDelete:function(e){var t=this,a=this._getIdList(e);0!==a.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(l["e"])({keys:a}).then((function(){u["a"].deleteDataList(t.currentTableData,a,"id"),t.currentTableData.length<=0&&t.$emit("refresh",!0),t.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},handleCreate:function(){var e=this;this.form={type:void 0,status:1,name:void 0,min:void 0,max:void 0,fee:void 0,login:void 0,pwd:void 0,desc:void 0,account:void 0},this.$nextTick((function(){e.$refs.form&&e.$refs.form.clearValidate(),e.dialogStatus="create",e.dialogLoading=!1,e.dialogFormVisible=!0}))},create:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.dialogLoading=!0,e.form.birthday||delete e.form.birthday,Object(l["E"])(e.form).then((function(){e.dialogFormVisible=!1,e.$message.success("操作成功"),e.$emit("refresh")})).catch((function(){e.dialogLoading=!1})))}))},handleUpdate:function(e){var t=this;this.currentIndex=e;var a=this.currentTableData[e];this.form=a,this.$nextTick((function(){t.$refs.form&&t.$refs.form.clearValidate(),t.dialogStatus="update",t.dialogLoading=!1,t.dialogFormVisible=!0}))},update:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.dialogLoading=!0,Object(l["E"])(e.form).then((function(t){e.$emit("refresh"),e.dialogFormVisible=!1,e.$message.success("操作成功")})).catch((function(){e.dialogLoading=!1})))}))},handleReset:function(e){var t=this,a=this.currentTableData[e];this.$confirm("确定要重置 ".concat(a.username," 的密码吗?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){var e=u["a"].randomLenNum(6);setUserPassword(a.user_id,e,e).then((function(){t.$notify({title:"重置密码",dangerouslyUseHTMLString:!0,message:"".concat(a.username," 的密码已重置为：</br>").concat(e),type:"success",position:"bottom-right",duration:0})}))})).catch((function(){}))},handleWithdraw:function(e){this.$router.push({name:"member-user-withdraw",params:{client_id:e}})},handleAddress:function(e){this.$router.push({name:"member-user-address",params:{client_id:e}})},handleMoney:function(e){var t=this;Object(d["a"])(this.currentTableData[e].user_id).then((function(a){a.data&&t.$notify({title:"账户资金",dangerouslyUseHTMLString:!0,message:"\n              <p>".concat(t.currentTableData[e].username," 的账户资金</p>\n              <p>查询时间：").concat(c()().format("YYYY-MM-DD HH:mm:ss"),"</p></br>\n              <p>累计消费：").concat(u["a"].getNumber(a.data.total_money),"</p>\n              <p>可用余额：").concat(u["a"].getNumber(a.data.balance),"</p>\n              <p>锁定余额：").concat(u["a"].getNumber(a.data.lock_balance),"</p>\n              <p>卡片积分：").concat(a.data.points||0,"</p>\n              <p>锁定积分：").concat(a.data.lock_points||0,"</p>\n            "),type:"success",position:"bottom-right",duration:0})}))},getPaymentSelect:function(){var e=this;this.toPayment.length||Object(m["a"])({type:"deposit",is_select:1}).then((function(t){e.toPayment=t.data||{}}))},handleFinance:function(e){var t=this;this.financeForm={client_id:e,money:0,points:0,to_payment:void 0,source_no:void 0,cause:void 0},this.$nextTick((function(){t.$refs.finance&&t.$refs.finance.clearValidate(),t.financeLoading=!1,t.financeVisible=!0}))},finance:function(){var e=this;this.$refs.finance.validate((function(t){t&&(e.financeLoading=!0,Object(m["b"])(e.financeForm).then((function(){e.financeVisible=!1,e.$message.success("操作成功")})).catch((function(){e.financeLoading=!1})))}))}}},p=f,h=(a("cf26"),a("2877")),b=Object(h["a"])(p,n,o,!1,null,"7faddc7e",null);t["default"]=b.exports},"5ef3":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return l})),a.d(t,"d",(function(){return s})),a.d(t,"e",(function(){return c})),a.d(t,"b",(function(){return u}));var n=a("5530"),o=a("bc07"),i="/v1/payment";function r(e){return Object(o["a"])({url:i,method:"post",data:Object(n["a"])({method:"get.payment.list"},e)})}function l(e){return Object(o["a"])({url:i,method:"post",data:Object(n["a"])({method:"set.payment.item"},e)})}function s(e,t){return Object(o["a"])({url:i,method:"post",data:{method:"set.payment.sort",payment_id:e,sort:t}})}function c(e,t){return Object(o["a"])({url:i,method:"post",data:{method:"set.payment.status",payment_id:e,status:t}})}function u(e){return Object(o["a"])({url:i,method:"post",data:Object(n["a"])({method:"set.payment.finance"},e)})}},a285:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("bc07"),o="/v1/user_money";function i(e){return Object(n["a"])({url:o,method:"post",data:{method:"get.user.money.info",client_id:e}})}},cf26:function(e,t,a){"use strict";a("f9c7")},f9c7:function(e,t,a){}}]);