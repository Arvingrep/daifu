(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0ed40f8"],{"2f46":function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return i})),n.d(e,"b",(function(){return d}));var a=n("5530"),u=n("bc07"),r="/v1/user_level";function l(){return Object(u["a"])({url:r,method:"post",data:{method:"get.user.level.list"}})}function o(t){return Object(u["a"])({url:r,method:"post",data:Object(a["a"])({method:"add.user.level.item"},t)})}function i(t){return Object(u["a"])({url:r,method:"post",data:Object(a["a"])({method:"set.user.level.item"},t)})}function d(t){return Object(u["a"])({url:r,method:"post",data:{method:"del.user.level.list",user_level_id:t}})}},d68a:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cs-container",[n("page-main",{attrs:{loading:t.loading,"table-data":t.table},on:{refresh:t.handleSubmit}})],1)},u=[],r=(n("d3b7"),n("2f46")),l={name:"member-user-level",components:{PageMain:function(){return n.e("chunk-2f374abc").then(n.bind(null,"0b45"))}},data:function(){return{table:[],loading:!1}},mounted:function(){this.handleSubmit()},methods:{handleSubmit:function(){var t=this;this.loading=!0,Object(r["c"])().then((function(e){t.table=e.data||[]})).finally((function(){t.loading=!1}))}}},o=l,i=n("2877"),d=Object(i["a"])(o,a,u,!1,null,null,null);e["default"]=d.exports}}]);