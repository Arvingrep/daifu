(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5aca9880"],{"4f3e":function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"e",(function(){return d})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return s}));var r=n("5530"),u=n("bc07"),a="/v1/withdraw_user";function c(t){return Object(u["a"])({url:a,method:"post",data:Object(r["a"])({method:"add.withdraw.user.item"},t)})}function d(t){return Object(u["a"])({url:a,method:"post",data:Object(r["a"])({method:"set.withdraw.user.item"},t)})}function o(t,e){return Object(u["a"])({url:a,method:"post",data:{method:"del.withdraw.user.list",withdraw_user_id:t,client_id:e}})}function i(t){return Object(u["a"])({url:a,method:"post",data:{method:"get.withdraw.user.list",client_id:t}})}function s(t){return Object(u["a"])({url:a,method:"post",data:{method:"is.withdraw.user.maximum",client_id:t}})}},a972:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cs-container",[n("page-header",{attrs:{slot:"header",username:t.username},slot:"header"}),n("page-main",{attrs:{loading:t.loading,"table-data":t.table}})],1)},u=[],a=(n("a9e3"),n("d3b7"),n("3ca3"),n("ddb0"),n("d221")),c=n("4f3e"),d={name:"member-user-withdraw",components:{PageHeader:function(){return n.e("chunk-2d0d7ae3").then(n.bind(null,"789e"))},PageMain:function(){return n.e("chunk-2d0a4bde").then(n.bind(null,"0877"))}},props:{client_id:{type:[Number,String],required:!0}},watch:{client_id:{handler:function(t){this.getUserWithdrawData(t)},immediate:!0}},data:function(){return{table:[],loading:!1,username:""}},methods:{getUserWithdrawData:function(t){var e=this;this.$nextTick((function(){e.table=[],e.loading=!0,e.username=""})),Promise.all([Object(a["w"])(t),Object(c["c"])(this.client_id)]).then((function(t){e.username=t[0].data?t[0].data.username:"",e.table=t[1].data||[]})).finally((function(){e.loading=!1}))}}},o=d,i=n("2877"),s=Object(i["a"])(o,r,u,!1,null,null,null);e["default"]=s.exports},d221:function(t,e,n){"use strict";n.d(e,"U",(function(){return c})),n.d(e,"y",(function(){return d})),n.d(e,"E",(function(){return o})),n.d(e,"q",(function(){return i})),n.d(e,"G",(function(){return s})),n.d(e,"M",(function(){return b})),n.d(e,"b",(function(){return f})),n.d(e,"j",(function(){return l})),n.d(e,"e",(function(){return h})),n.d(e,"g",(function(){return j})),n.d(e,"H",(function(){return O})),n.d(e,"N",(function(){return m})),n.d(e,"z",(function(){return p})),n.d(e,"C",(function(){return v})),n.d(e,"A",(function(){return w})),n.d(e,"p",(function(){return g})),n.d(e,"r",(function(){return k})),n.d(e,"n",(function(){return _})),n.d(e,"o",(function(){return y})),n.d(e,"m",(function(){return q})),n.d(e,"a",(function(){return x})),n.d(e,"R",(function(){return P})),n.d(e,"J",(function(){return D})),n.d(e,"K",(function(){return J})),n.d(e,"I",(function(){return U})),n.d(e,"P",(function(){return E})),n.d(e,"T",(function(){return H})),n.d(e,"L",(function(){return M})),n.d(e,"D",(function(){return N})),n.d(e,"O",(function(){return S})),n.d(e,"Q",(function(){return T})),n.d(e,"v",(function(){return W})),n.d(e,"l",(function(){return $})),n.d(e,"k",(function(){return z})),n.d(e,"S",(function(){return A})),n.d(e,"i",(function(){return B})),n.d(e,"f",(function(){return C})),n.d(e,"d",(function(){return F})),n.d(e,"F",(function(){return G})),n.d(e,"h",(function(){return I})),n.d(e,"B",(function(){return K})),n.d(e,"c",(function(){return L})),n.d(e,"w",(function(){return Q})),n.d(e,"x",(function(){return R})),n.d(e,"u",(function(){return V})),n.d(e,"s",(function(){return X})),n.d(e,"t",(function(){return Y}));var r=n("5530"),u=n("bc07"),a="/v1/user";function c(t){return Object(u["a"])({url:"/dev/version/post",method:"post",data:Object(r["a"])({},t)})}function d(t){return Object(u["a"])({url:"/dev/version/fetch",method:"post",data:Object(r["a"])({},t)})}function o(t){return Object(u["a"])({url:"/dev/channel/status",method:"post",data:Object(r["a"])({},t)})}function i(t){return Object(u["a"])({url:"/dev/channel/fetch",method:"post",data:Object(r["a"])({},t)})}function s(t){return Object(u["a"])({url:"/dev/merchant/post",method:"post",data:Object(r["a"])({},t)})}function b(t){return Object(u["a"])({url:"/dev/qrcode/post",method:"post",data:Object(r["a"])({},t)})}function f(t){return Object(u["a"])({url:"/dev/log/delete",method:"post",data:Object(r["a"])({},t)})}function l(t){return Object(u["a"])({url:"/dev/log/fetch",method:"post",data:Object(r["a"])({},t)})}function h(t){return Object(u["a"])({url:"/dev/merchant/delete",method:"post",data:Object(r["a"])({},t)})}function j(t){return Object(u["a"])({url:"/dev/qrcode/delete",method:"post",data:Object(r["a"])({},t)})}function O(t){return Object(u["a"])({url:"/dev/merchant/off",method:"post",data:Object(r["a"])({},t)})}function m(t){return Object(u["a"])({url:"/dev/qrcode/status",method:"post",data:Object(r["a"])({},t)})}function p(t){return Object(u["a"])({url:"/dev/balance/post",method:"post",data:Object(r["a"])({},t)})}function v(t){return Object(u["a"])({url:"/dev/bill/post",method:"post",data:Object(r["a"])({},t)})}function w(t){return Object(u["a"])({url:"/dev/balance/change",method:"post",data:Object(r["a"])({},t)})}function g(t){return Object(u["a"])({url:"/dev/balance/cash",method:"post",data:Object(r["a"])({},t)})}function k(t){return Object(u["a"])({url:"/dev/balance/deposit",method:"post",data:Object(r["a"])({},t)})}function _(t){return Object(u["a"])({url:"/dev/bank/fetch",method:"post",data:Object(r["a"])({},t)})}function y(t){return Object(u["a"])({url:"/dev/recbank/fetch",method:"post",data:Object(r["a"])({},t)})}function q(t){return Object(u["a"])({url:"/dev/balance/fetch",method:"post",data:Object(r["a"])({},t)})}function x(t){return Object(u["a"])({url:"/dev/user/post",method:"post",data:Object(r["a"])({role_id:t.group_id},t)})}function P(t){return Object(u["a"])({url:"/dev/user/post",method:"post",data:Object(r["a"])({method:"set.user.item",role_id:t.group_id},t)})}function D(t){return Object(u["a"])({url:"/dev/chain/post",method:"post",data:Object(r["a"])({},t)})}function J(t){return Object(u["a"])({url:"/dev/member/post",method:"post",data:Object(r["a"])({},t)})}function U(t){return Object(u["a"])({url:"/dev/recbank/member",method:"post",data:Object(r["a"])({},t)})}function E(t){return Object(u["a"])({url:"/dev/recbank/post",method:"post",data:Object(r["a"])({},t)})}function H(t,e){return Object(u["a"])({url:"/dev/user/status",method:"post",data:{keys:t,status:e}})}function M(t,e){return Object(u["a"])({url:"/dev/member/status",method:"post",data:{keys:t,status:e}})}function N(t,e){return Object(u["a"])({url:"/dev/bank/status",method:"post",data:{keys:t,status:e}})}function S(t,e){return Object(u["a"])({url:"/dev/recbank/status",method:"post",data:{keys:t,status:e}})}function T(t){return Object(u["a"])({url:"/dev/user/default",method:"post",data:Object(r["a"])({},t)})}function W(t){return Object(u["a"])({url:"/dev/agency/top",method:"post",data:Object(r["a"])({},t)})}function $(t){return Object(u["a"])({url:"/dev/agency/fetch",method:"post",data:Object(r["a"])({},t)})}function z(t){return Object(u["a"])({url:"/dev/agency/limit",method:"post",data:Object(r["a"])({},t)})}function A(t){return Object(u["a"])({url:"/dev/agency/set",method:"post",data:Object(r["a"])({},t)})}function B(t){return Object(u["a"])({url:"/dev/user/delete",method:"post",data:Object(r["a"])({},t)})}function C(t){return Object(u["a"])({url:"/dev/member/delete",method:"post",data:Object(r["a"])({},t)})}function F(t){return Object(u["a"])({url:"/dev/channel/delete",method:"post",data:Object(r["a"])({},t)})}function G(t){return Object(u["a"])({url:"/dev/channel/post",method:"post",data:Object(r["a"])({},t)})}function I(t){return Object(u["a"])({url:"/dev/recbank/delete",method:"post",data:Object(r["a"])({},t)})}function K(t){return Object(u["a"])({url:"/dev/bank/post",method:"post",data:Object(r["a"])({},t)})}function L(t){return Object(u["a"])({url:"/dev/bank/delete",method:"post",data:Object(r["a"])({},t)})}function Q(t){return Object(u["a"])({url:a,method:"post",data:{method:"get.user.info",client_id:t}})}function R(t){return Object(u["a"])({url:"/dev/user/fetch",method:"post",data:Object(r["a"])({},t)})}function V(t){return Object(u["a"])({url:"/dev/qrcode/fetch",method:"post",data:Object(r["a"])({},t)})}function X(t){return Object(u["a"])({url:"/dev/merchant/fetch",method:"post",data:Object(r["a"])({},t)})}function Y(t){return Object(u["a"])({url:"/dev/member/fetch",method:"post",data:Object(r["a"])({},t)})}}}]);