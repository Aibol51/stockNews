(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2884"],{"+n7g":function(e,t,o){},GpwW:function(e,t,o){"use strict";o.r(t);var n=o("YVWa"),r=o.n(n);for(var s in n)"default"!==s&&function(e){o.d(t,e,function(){return n[e]})}(s);t.default=r.a},NJo0:function(e,t,o){"use strict";var n=o("+n7g");o.n(n).a},"VM/z":function(e,t,o){"use strict";o.r(t);var n=o("xwm9"),r=o("GpwW");for(var s in r)"default"!==s&&function(e){o.d(t,e,function(){return r[e]})}(s);o("NJo0");var c=o("KHd+"),a=Object(c.a)(r.default,n.a,n.b,!1,null,null,null);a.options.__file="spotgoods.vue",t.default=a.exports},YVWa:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(o("7bS+")),r=s(o("nv1Z"));function s(e){return e&&e.__esModule?e:{default:e}}t.default={name:"SpotGoods",directives:{},components:{},mixins:[n.default],filters:{},data:function(){return{moneyTypes:[{Code:-1,Name:this.$t("money.MoneyType0")},{Code:0,Name:this.$t("details.Coin0")},{Code:1,Name:this.$t("details.Coin1")}],search:{ctype:-1,UID:0},item:{},rules:{},isLoad:!1,curBanner:"",CoinList:0,IndexList:0,stocks:{},stocksD:{},userinfo:r.default.getUserInfoOfNull(),agreid:0,costcalculation:r.default.getCostCalculation(),RedUpGreenDown:r.default.getRedUpGreenDown(),pageKey:"SpotGoods",pageName:this.$t("route.spotgoods")}},mounted:function(){var e=this;setTimeout(function(){e.initPageData()},500)},computed:{},created:function(){},methods:{clickTrade:function(e){if(null!=e){var t=e.StockCode||e.c,o=e.StockName||e.n,n=e.MarketCode||e.m,s=t.split("."),c=s[1],a=s[0],i=this.stocksD[c+"c"],l=this.stocksD[c+"y"],d=void 0==e.StockType?e.CoinType:e.StockType;if(void 0==d&&(d="CNY"==this.curCoinCode?0:"HKD"==this.curCoinCode?1:2),void 0==n)if("SZ"==a)n="0";else if("SH"==a)n="1";else{var u=localStockList.filter(function(e){return e.c==t});u.length>0&&(n=u[0].m)}var f=c+"_"+n+"."+a.toLowerCase().replace("us","usa");"USDT"==a&&(f=c+"."+a.toLowerCase()),r.default.setTradeStock({StockCode:t,StockName:o,CoinType:d,aid:e.AgreID||0,sellbuy:2});var k="HK"==a||"US"==a?3:"SH"==a||"SZ"==a?2:"USDT"==a?e.DecimalPrice||e.PriceDecimal:0,p="USDT"==a?e.DecimalNum||e.NumDecimal:0;this.$router.push({path:"/stock",query:{code:t,name:o,price:k,symbol:f,market:n,num:p,px:a,c:i,y:l,t:(new Date).getTime()}}),this.$bus.$emit("stockChanged",{stockcode:t,stockname:o})}},getList:function(){var e=this;e.search.UID=this.userinfo.id,r.default.Ajax("Contract/GetSpotDetails",this.search,e.userinfo.Token,function(t,o){t?e.$message.error(e.$t("msg."+t)):(o.RecordList.forEach(function(t){e.stocks[t.StockCode]||(e.stocks[t.StockCode]="--")}),e.addStockListerers(),e.list=o.RecordList,e.search.RecordCount=o.RecordCount)})},changeMoneyType:function(){this.list=[],this.doAction("search")},initPageData:function(){var e=this,t=this.$route.query;t.a&&(this.agreid=t.a),t.t&&(this.search.ctype=t.t),this.$nextTick(function(){e.doAction("search")})},addStockListerers:function(){var e=this,t=e.userinfo.UserAcc||"system"+(new Date).getTime(),o=r.default.md5.hex_md5(t+"|"+(new Date).getMonth());r.default.socket.emit("handshake",{user:t,token:o}),r.default.socket.emit("openstock",{stat:1}),r.default.socket.on("handshake",function(t){var o=[];for(var n in e.stocks)o.push({code:n});o.length>0&&setTimeout(function(){r.default.socket.emit("selfstock",{stat:0,stocks:o})},50)});var n=function(t){e.CoinList=t.coin,e.IndexList=t.index,r.default.setIndexList(e.IndexList),r.default.setCoinList(e.CoinList)};r.default.socket.off("openstock",n),r.default.socket.on("openstock",n);var s=function(t){if(t.c){var o=t.c;"SH.600001"==o&&(o="SH.000001");var n=1;"SH"!=o.split(".")[0]&&"SZ"!=o.split(".")[0]||(n=1e3);var r=e.list.filter(function(e){return e.StockCode==o}),s=2;r.length>0&&(s=r[0].PriceDecimal);var c=parseFloat(t.p)/n,a=parseFloat(t.y)/n,i=(c-a)/a*100;e.$set(e.stocks,o,c.toFixed(s)),e.$set(e.stocksD,o+"y",(t.y/n).toFixed(s)),e.$set(e.stocksD,o+"b",i.toFixed(2)+"%"),e.$set(e.stocksD,o+"c",i>0&&1==e.RedUpGreenDown||i<0&&0==e.RedUpGreenDown?"red":0==i?"":"green"),e.$set(e.stocksD,o+"u",(t.u/n).toFixed(s)),e.$set(e.stocksD,o+"d",(t.d/n).toFixed(s))}},c=function(t){if(t.c){var o=t.c;"SH.600001"==o&&(o="SH.000001");var n=1;"SH"!=o.split(".")[0]&&"SZ"!=o.split(".")[0]||(n=1e3);var r=e.list.filter(function(e){return e.StockCode==o}),s=2;r.length>0&&(s=r[0].PriceDecimal);var c=t.p/n,a=+e.stocksD[o+"y"],i=(c-a)/a*100;e.$set(e.stocks,o,c.toFixed(s)),e.$set(e.stocksD,o+"b",i.toFixed(2)+"%"),e.$set(e.stocksD,o+"c",i>0&&1==e.RedUpGreenDown||i<0&&0==e.RedUpGreenDown?"red":0==i?"":"green")}};r.default.socket.off("selfstock",s),r.default.socket.on("selfstock",s),r.default.socket.off("selfstock",c),r.default.socket.on("price",c)}}}},xwm9:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-container"},[o("div",{staticClass:"filter-container"},[o("el-radio-group",{on:{input:e.changeMoneyType},model:{value:e.search.ctype,callback:function(t){e.$set(e.search,"ctype",t)},expression:"search.ctype"}},e._l(e.moneyTypes,function(t){return o("el-radio-button",{key:t.Code,attrs:{label:t.Code,value:t.Code}},[e._v(e._s(t.Name))])}))],1),e._v(" "),o("el-table",{key:e.tableKey,staticClass:"tablebody",attrs:{data:e.list,fit:"","highlight-current-row":"",height:e.tableHeight},on:{"row-click":e.clickTrade}},[o("el-table-column",{attrs:{"header-align":"center",label:e.$t("trade.StockName"),width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(e._s(t.row.StockName)+" | "+e._s(t.row.StockCode))])]}}])}),e._v(" "),o("el-table-column",{attrs:{"header-align":"center",label:e.$t("contract.CurrentCost"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["IX"==t.row.UnitCode?o("span",{class:t.row.OnePrice-e.stocks[t.row.StockCode]>0?0==e.RedUpGreenDown?"red":"green":1==e.RedUpGreenDown?"red":"green"},[e._v(e._s(t.row.OnePrice.toFixed(t.row.PriceDecimal)))]):o("span",{class:t.row.ThisTimePrice/t.row.SellNum>e.stocks[t.row.StockCode]?0==e.RedUpGreenDown?"red":"green":1==e.RedUpGreenDown?"red":"green"},[e._v("\n                    "+e._s((t.row.ThisTimePrice/t.row.SellNum).toFixed(t.row.PriceDecimal)))])]}}])}),e._v(" "),o("el-table-column",{attrs:{"header-align":"center",label:e.$t("contract.CurrentProfitAndLoss"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["IX"==t.row.UnitCode?o("span",{class:e.stocks[t.row.StockCode]-t.row.OnePrice>0?1==e.RedUpGreenDown?"red":"green":0==e.RedUpGreenDown?"red":"green"},[e._v(e._s(4==t.row.ManyOrNull?((t.row.OnePrice-e.stocks[t.row.StockCode])*t.row.SellNum*30).toFixed(2):((e.stocks[t.row.StockCode]-t.row.OnePrice)*t.row.SellNum*30).toFixed(t.row.PriceDecimal)))]):o("span",{class:t.row.SellNum*e.stocks[t.row.StockCode]>t.row.ThisTimePrice?1==e.RedUpGreenDown?"red":"green":0==e.RedUpGreenDown?"red":"green"},[e._v("\n                    "+e._s((t.row.SellNum*e.stocks[t.row.StockCode]-t.row.ThisTimePrice).toFixed(2)))])]}}])}),e._v(" "),o("el-table-column",{attrs:{"header-align":"center",label:e.$t("contract.CumulativeCost"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["IX"==t.row.UnitCode?o("span",[e._v("--")]):o("span",{class:t.row.SellPrice/t.row.SellNum>e.stocks[t.row.StockCode]?0==e.RedUpGreenDown?"red":"green":1==e.RedUpGreenDown?"red":"green"},[e._v("\n                    "+e._s((t.row.SellPrice/t.row.SellNum).toFixed(t.row.PriceDecimal)))])]}}])}),e._v(" "),o("el-table-column",{attrs:{"header-align":"center",label:e.$t("contract.CumulativeProfitAndLoss"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["IX"==t.row.UnitCode?o("span",[e._v("--")]):o("span",{class:t.row.SellNum*e.stocks[t.row.StockCode]>t.row.SellPrice?1==e.RedUpGreenDown?"red":"green":0==e.RedUpGreenDown?"red":"green"},[e._v("\n                    "+e._s((t.row.SellNum*e.stocks[t.row.StockCode]-t.row.SellPrice).toFixed(2)))])]}}])}),e._v(" "),o("el-table-column",{attrs:{"header-align":"center",label:e.$t("contract.CurrentPriceIncrease"),width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",{class:e.stocks.length>0},[e._v("\n                    "+e._s(e.stocks[t.row.StockCode])+" / "+e._s(e.stocksD[t.row.StockCode+"b"]||0))])]}}])}),e._v(" "),o("el-table-column",{attrs:{"header-align":"center",label:e.$t("contract.PositionQuantity"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v("\n                    "+e._s(t.row.SellNum))])]}}])}),e._v(" "),o("el-table-column",{attrs:{"header-align":"center",label:e.$t("contract.AvailableQuantity"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v("\n                    "+e._s(t.row.UseNum))])]}}])}),e._v(" "),o("el-table-column",{attrs:{"header-align":"center",label:e.$t("contract.PositionMarket"),width:"120px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["IX"==t.row.UnitCode?o("span",[e._v("\n                    "+e._s(4==t.row.ManyOrNull?(t.row.ThisTimePrice+30*(t.row.ThisTimePrice-e.stocks[t.row.StockCode]*t.row.SellNum)).toFixed(2):(t.row.ThisTimePrice+30*(e.stocks[t.row.StockCode]*t.row.SellNum-t.row.ThisTimePrice)).toFixed(2)))]):o("span",[e._v("\n                    "+e._s((t.row.SellNum*e.stocks[t.row.StockCode]).toFixed(2)))])]}}])})],1),e._v(" "),o("div",{staticClass:"pagination-container"},[o("el-pagination",{attrs:{"current-page":e.search.PageIndex,"page-sizes":e.pageSizes,"page-size":e.search.PageSize,total:e.search.RecordCount,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},r=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return r})}}]);