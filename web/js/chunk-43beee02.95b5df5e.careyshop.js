(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43beee02"],{"7f85":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cs-container",[n("page-header",{ref:"header",attrs:{slot:"header",loading:t.loading,"to-payment":t.toPayment,"to-ksan":t.toKsan,"to-device":t.toDevice,"to-member":t.toMember,code:t.code},on:{submit:t.handleSubmit},slot:"header"}),n("page-main",{attrs:{loading:t.loading,"table-data":t.table,"motion-data":t.motion,"order-total":t.total},on:{export:t.handleExport,refresh:t.handleRefresh}}),n("page-footer",{attrs:{slot:"footer",loading:t.loading,current:t.page.current,size:t.page.size,total:t.page.total},on:{change:t.handlePaginationChange},slot:"footer"})],1)},o=[],a=(n("b0c0"),n("d3b7"),n("5530")),u=n("ca00"),d=n("d221"),c=n("dea0"),i={name:"order-admin-list",components:{PageHeader:function(){return n.e("chunk-ab70847a").then(n.bind(null,"e13d"))},PageMain:function(){return n.e("chunk-02e5aa44").then(n.bind(null,"0b6d"))},PageFooter:function(){return n.e("chunk-2d225417").then(n.bind(null,"e42d"))}},data:function(){return{loading:!1,code:void 0,role_id:void 0,table:[],motion:{},toPayment:[],toKsan:[],toMember:[],toDevice:[],status:-1,total:{},page:{current:1,size:50,total:0}}},mounted:function(){var t=this;this.toPayment.push({name:"全部",code:-1}),this.toPayment.push({name:"处理中",code:1}),this.toPayment.push({name:"下单失败",code:4}),this.toPayment.push({name:"支付成功",code:5}),this.toPayment.push({name:"退款成功",code:6}),this.toPayment.push({name:"订单关闭",code:7});var e=parseInt(u["a"].cookies.get("role_id"));this.$route.query.id&&(this.code=this.$route.query.id),1==e&&(Object(d["x"])({pageSize:500,rid:4}).then((function(e){t.toKsan=e.list})),Object(d["s"])({pageSize:500,rid:4}).then((function(e){t.toDevice=e.list})),Object(d["t"])({pageSize:500,rid:4}).then((function(e){t.toMember=e.list})))},beforeRouteEnter:function(t,e,n){"order-admin-info"===e.name?n((function(t){t.$refs.header&&t.$refs.header.handleFormSubmit()})):n()},methods:{handleRefresh:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(!(this.page.current-1)||this.page.current--),this.$nextTick((function(){t.$refs.header.handleFormSubmit()}))},handlePaginationChange:function(t){var e=this;this.page=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleExport:function(){var t=this;this.$nextTick((function(){t.$refs.header.handleFormSubmit(!1,!0)}))},exportFile:function(t){(t&&void 0==t.status||t&&t.status<0)&&delete t.status,u["a"].fileDownload("/dev/order/out",{ext:"xlsx",data:Object(a["a"])({},t)})},handleSubmit:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];n&&(this.page.current=1),r&&this.exportFile(t),this.loading=!0,(t&&void 0==t.status||t&&t.status<0)&&delete t.status,Object(c["e"])(Object(a["a"])(Object(a["a"])({},t),{},{currentPage:this.page.current,pageSize:this.page.size})).then((function(t){e.table=t.list||[],e.motion=t.pagination,e.page.total=t.pagination.total})).finally((function(){e.loading=!1}))}}},s=i,f=n("2877"),h=Object(f["a"])(s,r,o,!1,null,null,null);e["default"]=h.exports},d221:function(t,e,n){"use strict";n.d(e,"U",(function(){return u})),n.d(e,"y",(function(){return d})),n.d(e,"E",(function(){return c})),n.d(e,"q",(function(){return i})),n.d(e,"G",(function(){return s})),n.d(e,"M",(function(){return f})),n.d(e,"b",(function(){return h})),n.d(e,"j",(function(){return b})),n.d(e,"e",(function(){return l})),n.d(e,"g",(function(){return m})),n.d(e,"H",(function(){return p})),n.d(e,"N",(function(){return j})),n.d(e,"z",(function(){return O})),n.d(e,"C",(function(){return v})),n.d(e,"A",(function(){return g})),n.d(e,"p",(function(){return k})),n.d(e,"r",(function(){return y})),n.d(e,"n",(function(){return P})),n.d(e,"o",(function(){return _})),n.d(e,"m",(function(){return x})),n.d(e,"a",(function(){return S})),n.d(e,"R",(function(){return $})),n.d(e,"J",(function(){return z})),n.d(e,"K",(function(){return w})),n.d(e,"I",(function(){return F})),n.d(e,"P",(function(){return q})),n.d(e,"T",(function(){return D})),n.d(e,"L",(function(){return E})),n.d(e,"D",(function(){return M})),n.d(e,"O",(function(){return K})),n.d(e,"Q",(function(){return R})),n.d(e,"v",(function(){return T})),n.d(e,"l",(function(){return C})),n.d(e,"k",(function(){return J})),n.d(e,"S",(function(){return H})),n.d(e,"i",(function(){return I})),n.d(e,"f",(function(){return A})),n.d(e,"d",(function(){return B})),n.d(e,"F",(function(){return G})),n.d(e,"h",(function(){return L})),n.d(e,"B",(function(){return N})),n.d(e,"c",(function(){return Q})),n.d(e,"w",(function(){return U})),n.d(e,"x",(function(){return V})),n.d(e,"u",(function(){return W})),n.d(e,"s",(function(){return X})),n.d(e,"t",(function(){return Y}));var r=n("5530"),o=n("bc07"),a="/v1/user";function u(t){return Object(o["a"])({url:"/dev/version/post",method:"post",data:Object(r["a"])({},t)})}function d(t){return Object(o["a"])({url:"/dev/version/fetch",method:"post",data:Object(r["a"])({},t)})}function c(t){return Object(o["a"])({url:"/dev/channel/status",method:"post",data:Object(r["a"])({},t)})}function i(t){return Object(o["a"])({url:"/dev/channel/fetch",method:"post",data:Object(r["a"])({},t)})}function s(t){return Object(o["a"])({url:"/dev/merchant/post",method:"post",data:Object(r["a"])({},t)})}function f(t){return Object(o["a"])({url:"/dev/qrcode/post",method:"post",data:Object(r["a"])({},t)})}function h(t){return Object(o["a"])({url:"/dev/log/delete",method:"post",data:Object(r["a"])({},t)})}function b(t){return Object(o["a"])({url:"/dev/log/fetch",method:"post",data:Object(r["a"])({},t)})}function l(t){return Object(o["a"])({url:"/dev/merchant/delete",method:"post",data:Object(r["a"])({},t)})}function m(t){return Object(o["a"])({url:"/dev/qrcode/delete",method:"post",data:Object(r["a"])({},t)})}function p(t){return Object(o["a"])({url:"/dev/merchant/off",method:"post",data:Object(r["a"])({},t)})}function j(t){return Object(o["a"])({url:"/dev/qrcode/status",method:"post",data:Object(r["a"])({},t)})}function O(t){return Object(o["a"])({url:"/dev/balance/post",method:"post",data:Object(r["a"])({},t)})}function v(t){return Object(o["a"])({url:"/dev/bill/post",method:"post",data:Object(r["a"])({},t)})}function g(t){return Object(o["a"])({url:"/dev/balance/change",method:"post",data:Object(r["a"])({},t)})}function k(t){return Object(o["a"])({url:"/dev/balance/cash",method:"post",data:Object(r["a"])({},t)})}function y(t){return Object(o["a"])({url:"/dev/balance/deposit",method:"post",data:Object(r["a"])({},t)})}function P(t){return Object(o["a"])({url:"/dev/bank/fetch",method:"post",data:Object(r["a"])({},t)})}function _(t){return Object(o["a"])({url:"/dev/recbank/fetch",method:"post",data:Object(r["a"])({},t)})}function x(t){return Object(o["a"])({url:"/dev/balance/fetch",method:"post",data:Object(r["a"])({},t)})}function S(t){return Object(o["a"])({url:"/dev/user/post",method:"post",data:Object(r["a"])({role_id:t.group_id},t)})}function $(t){return Object(o["a"])({url:"/dev/user/post",method:"post",data:Object(r["a"])({method:"set.user.item",role_id:t.group_id},t)})}function z(t){return Object(o["a"])({url:"/dev/chain/post",method:"post",data:Object(r["a"])({},t)})}function w(t){return Object(o["a"])({url:"/dev/member/post",method:"post",data:Object(r["a"])({},t)})}function F(t){return Object(o["a"])({url:"/dev/recbank/member",method:"post",data:Object(r["a"])({},t)})}function q(t){return Object(o["a"])({url:"/dev/recbank/post",method:"post",data:Object(r["a"])({},t)})}function D(t,e){return Object(o["a"])({url:"/dev/user/status",method:"post",data:{keys:t,status:e}})}function E(t,e){return Object(o["a"])({url:"/dev/member/status",method:"post",data:{keys:t,status:e}})}function M(t,e){return Object(o["a"])({url:"/dev/bank/status",method:"post",data:{keys:t,status:e}})}function K(t,e){return Object(o["a"])({url:"/dev/recbank/status",method:"post",data:{keys:t,status:e}})}function R(t){return Object(o["a"])({url:"/dev/user/default",method:"post",data:Object(r["a"])({},t)})}function T(t){return Object(o["a"])({url:"/dev/agency/top",method:"post",data:Object(r["a"])({},t)})}function C(t){return Object(o["a"])({url:"/dev/agency/fetch",method:"post",data:Object(r["a"])({},t)})}function J(t){return Object(o["a"])({url:"/dev/agency/limit",method:"post",data:Object(r["a"])({},t)})}function H(t){return Object(o["a"])({url:"/dev/agency/set",method:"post",data:Object(r["a"])({},t)})}function I(t){return Object(o["a"])({url:"/dev/user/delete",method:"post",data:Object(r["a"])({},t)})}function A(t){return Object(o["a"])({url:"/dev/member/delete",method:"post",data:Object(r["a"])({},t)})}function B(t){return Object(o["a"])({url:"/dev/channel/delete",method:"post",data:Object(r["a"])({},t)})}function G(t){return Object(o["a"])({url:"/dev/channel/post",method:"post",data:Object(r["a"])({},t)})}function L(t){return Object(o["a"])({url:"/dev/recbank/delete",method:"post",data:Object(r["a"])({},t)})}function N(t){return Object(o["a"])({url:"/dev/bank/post",method:"post",data:Object(r["a"])({},t)})}function Q(t){return Object(o["a"])({url:"/dev/bank/delete",method:"post",data:Object(r["a"])({},t)})}function U(t){return Object(o["a"])({url:a,method:"post",data:{method:"get.user.info",client_id:t}})}function V(t){return Object(o["a"])({url:"/dev/user/fetch",method:"post",data:Object(r["a"])({},t)})}function W(t){return Object(o["a"])({url:"/dev/qrcode/fetch",method:"post",data:Object(r["a"])({},t)})}function X(t){return Object(o["a"])({url:"/dev/merchant/fetch",method:"post",data:Object(r["a"])({},t)})}function Y(t){return Object(o["a"])({url:"/dev/member/fetch",method:"post",data:Object(r["a"])({},t)})}},dea0:function(t,e,n){"use strict";n.d(e,"f",(function(){return u})),n.d(e,"h",(function(){return d})),n.d(e,"k",(function(){return c})),n.d(e,"l",(function(){return i})),n.d(e,"e",(function(){return s})),n.d(e,"m",(function(){return f})),n.d(e,"a",(function(){return h})),n.d(e,"i",(function(){return b})),n.d(e,"b",(function(){return l})),n.d(e,"j",(function(){return m})),n.d(e,"g",(function(){return p})),n.d(e,"d",(function(){return j})),n.d(e,"c",(function(){return O}));var r=n("5530"),o=n("bc07"),a="/v1/order";function u(t){return Object(o["a"])({url:"/dev/order/make",method:"post",data:Object(r["a"])({},t)})}function d(t){return Object(o["a"])({url:"/dev/order/post",method:"post",data:Object(r["a"])({},t)})}function c(t){return Object(o["a"])({url:"/dev/notify/fail",method:"post",data:Object(r["a"])({},t)})}function i(t){return Object(o["a"])({url:"/dev/notify/send",method:"post",data:Object(r["a"])({},t)})}function s(t){return Object(o["a"])({url:"/dev/order/fetch",method:"post",data:Object(r["a"])({method:"get.order.list"},t)})}function f(t){return Object(o["a"])({url:a,method:"post",data:Object(r["a"])({method:"set.order.item"},t)})}function h(t){return Object(o["a"])({url:a,method:"post",data:{method:"cancel.order.item",order_no:t}})}function b(t,e){return Object(o["a"])({url:a,method:"post",data:{method:"recycle.order.item",order_no:t,is_recycle:e}})}function l(t){return Object(o["a"])({url:a,method:"post",data:Object(r["a"])({method:"change.price.order.item"},t)})}function m(t){return Object(o["a"])({url:a,method:"post",data:Object(r["a"])({method:"remark.order.item"},t)})}function p(t,e){return Object(o["a"])({url:a,method:"post",data:{method:"picking.order.list",order_no:t,is_picking:e}})}function j(t){return Object(o["a"])({url:a,method:"post",data:Object(r["a"])({method:"delivery.order.item"},t)})}function O(t){return Object(o["a"])({url:a,method:"post",data:{method:"complete.order.list",order_no:t}})}}}]);