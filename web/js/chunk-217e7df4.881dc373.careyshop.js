(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-217e7df4"],{"375c":function(t,e,a){"use strict";a("fbff")},"5ef3":function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"c",(function(){return s})),a.d(e,"d",(function(){return l})),a.d(e,"e",(function(){return c})),a.d(e,"b",(function(){return u}));var n=a("5530"),i=a("bc07"),r="/v1/payment";function o(t){return Object(i["a"])({url:r,method:"post",data:Object(n["a"])({method:"get.payment.list"},t)})}function s(t){return Object(i["a"])({url:r,method:"post",data:Object(n["a"])({method:"set.payment.item"},t)})}function l(t,e){return Object(i["a"])({url:r,method:"post",data:{method:"set.payment.sort",payment_id:t,sort:e}})}function c(t,e){return Object(i["a"])({url:r,method:"post",data:{method:"set.payment.status",payment_id:t,status:e}})}function u(t){return Object(i["a"])({url:r,method:"post",data:Object(n["a"])({method:"set.payment.finance"},t)})}},"61cd":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cs-p"},[a("el-table",{attrs:{data:t.currentTableData,"highlight-current-row":!0},on:{"selection-change":t.handleSelectionChange,"sort-change":t.sortChange}},[a("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"Android版本号",prop:"android","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"Android下载地址",prop:"android_url","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"IOS版本号",prop:"ios","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"IOS下载地址",prop:"ios_url","show-overflow-tooltip":!0}}),a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.auth.set?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleUpdate(e.$index)}}},[t._v("编辑")]):t._e()]}}])})],1),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"Android",prop:"android"}},[a("el-input",{attrs:{placeholder:"请输入Android版本号",clearable:!0},model:{value:t.form.android,callback:function(e){t.$set(t.form,"android",e)},expression:"form.android"}})],1),a("el-form-item",{attrs:{label:"Android地址",prop:"android_url"}},[a("el-input",{attrs:{placeholder:"请输入Android下载地址",clearable:!0},model:{value:t.form.android_url,callback:function(e){t.$set(t.form,"android_url",e)},expression:"form.android_url"}})],1),a("el-form-item",{attrs:{label:"IOS",prop:"ios"}},[a("el-input",{attrs:{placeholder:"请输入IOS版本号",clearable:!0},model:{value:t.form.ios,callback:function(e){t.$set(t.form,"ios",e)},expression:"form.ios"}})],1),a("el-form-item",{attrs:{label:"IOS地址",prop:"ios_url"}},[a("el-input",{attrs:{placeholder:"请输入IOS下载地址",clearable:!0},model:{value:t.form.ios_url,callback:function(e){t.$set(t.form,"ios_url",e)},expression:"form.ios_url"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),"create"===t.dialogStatus?a("el-button",{attrs:{type:"primary",loading:t.dialogLoading,size:"small"},on:{click:t.create}},[t._v("确定")]):a("el-button",{attrs:{type:"primary",loading:t.dialogLoading,size:"small"},on:{click:t.update}},[t._v("修改")])],1),a("cs-storage",{ref:"storage",staticStyle:{display:"none"},attrs:{limit:1},on:{confirm:t._getStorageFileList}}),a("cs-upload",{ref:"upload",staticStyle:{display:"none"},attrs:{type:"slot",accept:"image/*",limit:1,multiple:!1},on:{confirm:t._getUploadFileList}})],1)],1)},i=[],r=(a("99af"),a("4160"),a("c975"),a("d3b7"),a("159b"),a("5530")),o=a("b85c"),s=a("d221"),l=a("6e85"),c=a.n(l),u=a("ca00"),d=a("a285"),f=a("5ef3"),m={components:{csUpload:function(){return a.e("chunk-7aed0762").then(a.bind(null,"8422"))},csStorage:function(){return a.e("chunk-497c3ecd").then(a.bind(null,"8704"))}},props:{loading:{default:!1},group:{default:function(){return[]}},tableData:{default:function(){return[]}}},data:function(){return{currentTableData:[],multipleSelection:[],auth:{add:!0,set:!0,del:!0,enable:!0,disable:!0,more:!0,reset:!0,withdraw:!0,address:!0,money:!0,finance:!0},dialogLoading:!1,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"新增"},statusMap:{2:{text:"禁用",type:"danger"},1:{text:"启用",type:"success"},0:{text:"...",type:"info"}},sexMap:{0:"保密",1:"男",2:"女"},legalizeMap:{0:{text:"未认证",type:"warning"},1:{text:"已认证",type:""}},form:{ios:void 0,ios_url:void 0,android:void 0,android_url:void 0},rules:{ios:[{required:!0,message:"当前项不为能为空",trigger:"blur"}],ios_url:[{required:!0,message:"当前项不为能为空",trigger:"blur"}],android:[{required:!0,message:"当前项不为能为空",trigger:"blur"}],android_url:[{required:!0,message:"当前项不为能为空",trigger:"blur"}]}}},watch:{tableData:{handler:function(t){this.currentTableData=t},immediate:!0}},filters:{getPreviewUrl:function(t){return t?u["a"].getImageCodeUrl(t,"head_pic"):""},getNumber:function(t){return u["a"].getNumber(t)},formatDate:function(t){return u["a"].formatDate(t,"YYYY-MM-DD HH:mm:ss")}},mounted:function(){},methods:{_validationAuth:function(){this.auth.add=this.$permission("/member/user/client/add"),this.auth.set=this.$permission("/member/user/client/set"),this.auth.del=this.$permission("/member/user/client/del"),this.auth.enable=this.$permission("/member/user/client/enable"),this.auth.disable=this.$permission("/member/user/client/disable"),this.auth.more=this.$permission("/member/user/client/more"),this.auth.reset=this.$permission("/member/user/client/reset"),this.auth.withdraw=this.$permission("/member/user/client/withdraw"),this.auth.address=this.$permission("/member/user/client/address"),this.auth.money=this.$permission("/member/user/client/money"),this.auth.finance=this.$permission("/member/user/client/finance")},_getIdList:function(t){null===t&&(t=this.multipleSelection);var e=[];return Array.isArray(t)?t.forEach((function(t){e.push(t.id)})):e.push(this.currentTableData[t].id),e},handleCommand:function(t){switch(t){case"storage":this.$refs.storage.handleStorageDlg([0,2]);break;case"upload":this.$refs.upload.handleUploadDlg();break}},_getUploadFileList:function(t){if(t.length){var e=t[0].response;e&&200===e.status&&0===e.data[0].type&&(this.form.head_pic=e.data[0].url)}},_getStorageFileList:function(t){if(t.length){var e,a=Object(o["a"])(t);try{for(a.s();!(e=a.n()).done;){var n=e.value;if(0===n.type){this.form.head_pic=n.url;break}}}catch(i){a.e(i)}finally{a.f()}}},handleSelectionChange:function(t){this.multipleSelection=t},sortChange:function(t){var e=t.column,a=t.prop,n=t.order,i={order_type:void 0,order_field:void 0};e&&n&&(i.order_type="ascending"===n?"asc":"desc",i.order_field=a),this.$emit("sort",i)},handleStatus:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=this._getIdList(t);if(0!==i.length){if(!n){var o=this.currentTableData[t],s=o.status?0:1;if(o.status>1)return;if(0===s&&!this.auth.disable)return;if(1===s&&!this.auth.enable)return;return this.$set(this.currentTableData,t,Object(r["a"])(Object(r["a"])({},o),{},{status:2})),void l(i,s,this)}this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){l(i,a,e)})).catch((function(){}))}else this.$message.error("请选择要操作的数据");function l(t,e,a){setBankStatus(t,e).then((function(){a.currentTableData.forEach((function(n,i){-1!==t.indexOf(n.id)&&a.$set(a.currentTableData,i,Object(r["a"])(Object(r["a"])({},n),{},{status:e}))})),a.$message.success("操作成功")}))}},handleDelete:function(t){var e=this,a=this._getIdList(t);0!==a.length?(console.log(a),this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){delBank({keys:a}).then((function(){u["a"].deleteDataList(e.currentTableData,a,"id"),e.currentTableData.length<=0&&e.$emit("refresh",!0),e.$message.success("操作成功")}))})).catch((function(){}))):this.$message.error("请选择要操作的数据")},handleCreate:function(){var t=this;this.form={type:void 0,status:1,name:void 0,code:void 0,bank_id:void 0},this.$nextTick((function(){t.$refs.form&&t.$refs.form.clearValidate(),t.dialogStatus="create",t.dialogLoading=!1,t.dialogFormVisible=!0}))},create:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.dialogLoading=!0,t.form.birthday||delete t.form.birthday,Object(s["S"])(t.form).then((function(){t.dialogFormVisible=!1,t.$message.success("操作成功"),t.$emit("refresh")})).catch((function(){t.dialogLoading=!1})))}))},handleUpdate:function(t){var e=this;this.currentIndex=t;var a=this.currentTableData[t];this.form=a,this.$nextTick((function(){e.$refs.form&&e.$refs.form.clearValidate(),e.dialogStatus="update",e.dialogLoading=!1,e.dialogFormVisible=!0}))},update:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.dialogLoading=!0,Object(s["S"])(t.form).then((function(e){t.$emit("refresh"),t.dialogFormVisible=!1,t.$message.success("操作成功")})).catch((function(){t.dialogLoading=!1})))}))},handleReset:function(t){var e=this,a=this.currentTableData[t];this.$confirm("确定要重置 ".concat(a.username," 的密码吗?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){var t=u["a"].randomLenNum(6);setUserPassword(a.user_id,t,t).then((function(){e.$notify({title:"重置密码",dangerouslyUseHTMLString:!0,message:"".concat(a.username," 的密码已重置为：</br>").concat(t),type:"success",position:"bottom-right",duration:0})}))})).catch((function(){}))},handleWithdraw:function(t){this.$router.push({name:"member-user-withdraw",params:{client_id:t}})},handleAddress:function(t){this.$router.push({name:"member-user-address",params:{client_id:t}})},handleMoney:function(t){var e=this;Object(d["a"])(this.currentTableData[t].user_id).then((function(a){a.data&&e.$notify({title:"账户资金",dangerouslyUseHTMLString:!0,message:"\n              <p>".concat(e.currentTableData[t].username," 的账户资金</p>\n              <p>查询时间：").concat(c()().format("YYYY-MM-DD HH:mm:ss"),"</p></br>\n              <p>累计消费：").concat(u["a"].getNumber(a.data.total_money),"</p>\n              <p>可用余额：").concat(u["a"].getNumber(a.data.balance),"</p>\n              <p>锁定余额：").concat(u["a"].getNumber(a.data.lock_balance),"</p>\n              <p>卡片积分：").concat(a.data.points||0,"</p>\n              <p>锁定积分：").concat(a.data.lock_points||0,"</p>\n            "),type:"success",position:"bottom-right",duration:0})}))},getPaymentSelect:function(){var t=this;this.toPayment.length||Object(f["a"])({type:"deposit",is_select:1}).then((function(e){t.toPayment=e.data||{}}))},handleFinance:function(t){var e=this;this.financeForm={client_id:t,money:0,points:0,to_payment:void 0,source_no:void 0,cause:void 0},this.$nextTick((function(){e.$refs.finance&&e.$refs.finance.clearValidate(),e.financeLoading=!1,e.financeVisible=!0}))},finance:function(){var t=this;this.$refs.finance.validate((function(e){e&&(t.financeLoading=!0,Object(f["b"])(t.financeForm).then((function(){t.financeVisible=!1,t.$message.success("操作成功")})).catch((function(){t.financeLoading=!1})))}))}}},h=m,p=(a("375c"),a("2877")),b=Object(p["a"])(h,n,i,!1,null,"141fd10a",null);e["default"]=b.exports},a285:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a("bc07"),i="/v1/user_money";function r(t){return Object(n["a"])({url:i,method:"post",data:{method:"get.user.money.info",client_id:t}})}},fbff:function(t,e,a){}}]);