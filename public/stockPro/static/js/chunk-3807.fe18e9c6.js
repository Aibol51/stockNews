(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3807"],{"2M7D":function(e,t,a){"use strict";var n=a("LQvD");a.n(n).a},"6GBS":function(e,t,a){"use strict";a.r(t);var n=a("O+ii"),r=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);t.default=r.a},GuIB:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-radio-group",{on:{input:e.changeMoneyType},model:{value:e.search.ctype,callback:function(t){e.$set(e.search,"ctype",t)},expression:"search.ctype"}},e._l(e.moneyTypes,function(t){return a("el-radio-button",{key:t.Code,attrs:{label:t.Code,value:t.Code}},[e._v(e._s(t.Name))])})),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{float:"right"},attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:function(t){e.doAction("add")}}},[e._v(e._s(e.$t("withdraw.addbank")))])],1),e._v(" "),a("el-table",{key:e.tableKey,staticClass:"tablebody",attrs:{data:e.list,fit:"",height:e.tableHeight}},[a("el-table-column",{attrs:{"header-align":"center",label:e.$t("field.type"),width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:3==e.row.CoinType?"../../../static/img/usdt2.png":"../../../static/img/bank.png"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",label:e.$t("field.name"),width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.BankName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",label:e.$t("field.cardNo"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.CardNo))])]}}])}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",label:e.$t("bankcard.username"),width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.UserName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",label:e.$t("bankcard.subaddress"),width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.SubbranchName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",label:e.$t("field.time"),width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.AddTime)+" ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",label:e.$t("field.op"),width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{color:"#f13737"},attrs:{type:"text",size:"mini"},on:{click:function(a){e.delBank(t.row.id)}}},[e._v(e._s(e.$t("btn.Delete")))])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":e.search.PageIndex,"page-sizes":e.pageSizes,"page-size":e.search.PageSize,total:e.search.RecordCount,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{staticClass:"dialogtitle",attrs:{title:3==e.search.ctype?e.$t("bankcard.addwall"):e.$t("bankcard.addcard")+"-"+e.$t("contract.Coin"+(-1==e.search.ctype?"0":e.search.ctype)),width:"800px","close-on-click-modal":!1,"close-on-press-escape":!1,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"itemForm",staticStyle:{"margin-top":"-14px"},attrs:{rules:e.rules,model:e.item,"label-width":"120px"}},[a("el-row",{attrs:{gutter:8}},[a("el-col",[a("div",{staticClass:"dialogform"},[e.search.ctype<3?a("el-form-item",{attrs:{label:e.$t("bankcard.username")}},[a("el-input",{attrs:{placeholder:e.$t("bankcard.InpUserName")},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:3==e.search.ctype?e.$t("bankcard.chainname"):e.$t("bankcard.bankname")}},[a("el-input",{attrs:{type:"textarea",placeholder:3==e.search.ctype?e.$t("bankcard.InpChainName"):e.$t("bankcard.bankcardno")},model:{value:e.bankname,callback:function(t){e.bankname=t},expression:"bankname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:3==e.search.ctype?e.$t("bankcard.walladdress"):e.$t("bankcard.bankname")}},[a("el-input",{attrs:{type:"textarea",placeholder:3==e.search.ctype?e.$t("bankcard.InpWallAddress"):e.$t("bankcard.InpBankCardNo")},model:{value:e.bankcardno,callback:function(t){e.bankcardno=t},expression:"bankcardno"}})],1),e._v(" "),e.search.ctype<3?a("el-form-item",{attrs:{label:e.$t("bankcard.subaddress")}},[a("el-input",{attrs:{type:"textarea",placeholder:e.$t("bankcard.InpSubAddress")},model:{value:e.subaddress,callback:function(t){e.subaddress=t},expression:"subaddress"}})],1):e._e()],1)])],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("btn.Cancel")))]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.addBank}},[e._v(e._s(e.$t("btn.Confirm")))])],1)],1)],1)},r=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r})},LQvD:function(e,t,a){},"O+ii":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(a("7bS+")),r=(i(a("t3Un")),a("7Qib"),i(a("Kw5r")),a("URgk"),i(a("nv1Z")));function i(e){return e&&e.__esModule?e:{default:e}}t.default={name:"BankCard",directives:{},components:{},mixins:[n.default],filters:{},data:function(){return{moneyTypes:[{Code:-1,Name:this.$t("money.MoneyType0")},{Code:0,Name:this.$t("withdraw.CardCNY")},{Code:1,Name:this.$t("withdraw.CardHKD")},{Code:2,Name:this.$t("withdraw.CardUSD")},{Code:3,Name:this.$t("withdraw.CardUSDT")}],search:{ctype:-1,UID:0},item:{},rules:{},isLoad:!1,list:[],userinfo:r.default.getUserInfoOfNull(),pageKey:"BankCard",pageName:this.$t("route.bankcard"),cointype:0,username:"",bankname:"",bankcardno:"",subaddress:""}},mounted:function(){this.initPageData()},computed:{},created:function(){},methods:{actWithdraw:function(e){uni.navigateTo({url:"./withdraw?t="+(0==e.CoinType?"CNY":1==e.CoinType?"HKD":2==e.CoinType?"USD":"USDT")})},delBank:function(e){var t=this;this.$confirm(t.$t("bankcard.DelConfirm"),t.$t("msg.Tip"),{confirmButtonText:t.$t("btn.Confirm"),cancelButtonText:t.$t("btn.Cancel"),type:"warning"}).then(function(){var a={uid:t.userinfo.id,id:e};r.default.Ajax("Contract/PostBankCardDel",a,t.userinfo.Token,function(e,a){e?t.$message.error(t.$t("msg."+e)):(t.$message(t.$t("bankcard.DelSuccess")),t.doAction("search"))})}).catch(function(e){})},addBank:function(){var e=this;if(3==e.search.ctype){if(""==e.bankname)return e.$message.error(e.$t("bankcard.InpChainName")),!1;if(""==e.bankcardno)return e.$message.error(e.$t("bankcard.InpWallAddress")),!1}else{if(""==e.username)return e.$message.error(e.$t("bankcard.InpUserName")),!1;if(""==e.bankname)return e.$message.error(e.$t("bankcard.InpBankName")),!1;if(""==e.bankcardno)return e.$message.error(e.$t("bankcard.InpBankCardNo")),!1}var t={uid:e.userinfo.id,"search.ctype":e.search.ctype,username:e.username||e.userinfo.UserName,bankname:e.bankname,bankcardno:e.bankcardno,subaddress:e.subaddress};console.log(t),r.default.Ajax("Contract/PostBankCardAdd",t,e.userinfo.Token,function(t,a){t?e.$message.error(e.$t("msg."+t)):(e.$message(e.$t("bankcard.ShowSuccess")),e.doAction("search"))})},getList:function(){var e=this;e.search.UID=this.userinfo.id,r.default.Ajax("Contract/GetMyBankDetails",this.search,e.userinfo.Token,function(t,a){t?e.$message.error(e.$t("msg."+t)):(e.list=a.RecordList,e.search.RecordCount=a.RecordCount)})},changeMoneyType:function(e){this.doAction("search")},initPageData:function(){var e=this;this.$nextTick(function(){e.doAction("search")})}}}},URgk:function(e,t,a){(function(e){var n=void 0!==e&&e||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(r.call(setTimeout,n,arguments),clearTimeout)},t.setInterval=function(){return new i(r.call(setInterval,n,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(n,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},a("YBdB"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,a("yLpj"))},YBdB:function(e,t,a){(function(e,t){!function(e,a){"use strict";if(!e.setImmediate){var n,r=1,i={},o=!1,s=e.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(e);c=c&&c.setTimeout?c:e,"[object process]"==={}.toString.call(e.process)?n=function(e){t.nextTick(function(){d(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,a=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=a,t}}()?function(){var t="setImmediate$"+Math.random()+"$",a=function(a){a.source===e&&"string"==typeof a.data&&0===a.data.indexOf(t)&&d(+a.data.slice(t.length))};e.addEventListener?e.addEventListener("message",a,!1):e.attachEvent("onmessage",a),n=function(a){e.postMessage(t+a,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){d(e.data)},n=function(t){e.port2.postMessage(t)}}():s&&"onreadystatechange"in s.createElement("script")?function(){var e=s.documentElement;n=function(t){var a=s.createElement("script");a.onreadystatechange=function(){d(t),a.onreadystatechange=null,e.removeChild(a),a=null},e.appendChild(a)}}():n=function(e){setTimeout(d,0,e)},c.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),a=0;a<t.length;a++)t[a]=arguments[a+1];var o={callback:e,args:t};return i[r]=o,n(r),r++},c.clearImmediate=l}function l(e){delete i[e]}function d(e){if(o)setTimeout(d,0,e);else{var t=i[e];if(t){o=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(a,n)}}(t)}finally{l(e),o=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,a("yLpj"),a("8oxB"))},zypu:function(e,t,a){"use strict";a.r(t);var n=a("GuIB"),r=a("6GBS");for(var i in r)"default"!==i&&function(e){a.d(t,e,function(){return r[e]})}(i);a("2M7D");var o=a("KHd+"),s=Object(o.a)(r.default,n.a,n.b,!1,null,null,null);s.options.__file="bankcard.vue",t.default=s.exports}}]);