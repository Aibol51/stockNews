(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2915"],{"1ish":function(t,s,e){"use strict";var o=e("ebZ9");e.n(o).a},"3HAX":function(t,s,e){"use strict";var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"smainbox"},[e("div",{staticClass:"sbox"},[e("div",{staticClass:"sleftbstock"},[e("div",{staticClass:"sboardb"},[e("span",{staticClass:"leftpad"},[t._v(t._s(t.BoardType))])]),t._v(" "),t._m(0),t._v(" "),e("div",t._l(t.BoardList,function(s,o){return e("div",{key:"Industry_0"+o,class:["sboarditem",s.code==t.BoardCode?"selectedrow":""],on:{click:function(e){t.changeBoard(s)}}},[e("div",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{class:["updown",s.diffRate>=0?"red":"green"]},[t._v(t._s(s.diffRate.toFixed(2))+"%")]),t._v(" "),e("div",{staticClass:"updown"},[t._v(t._s(s.exchangeRate)+"%")]),t._v(" "),e("div",{staticClass:"updown"},[e("span",{staticClass:"red"},[t._v(t._s(s.up))]),t._v(" / "),e("span",{staticClass:"green"},[t._v(t._s(s.down))])]),t._v(" "),e("div",{staticClass:"updown"},[t._v(t._s(s.topName))]),t._v(" "),e("div",{class:["updown",s.topDiffRate>=0?"red":"green"]},[t._v(t._s(s.topDiffRate.toFixed(2))+"%\n\t\t\t\t\t")])])}))]),t._v(" "),e("div",{staticClass:"srightbstock"},[e("div",{staticClass:"sboardb"},[e("span",{staticClass:"leftpad"},[t._v(t._s(t.BoardName))])]),t._v(" "),t._m(1),t._v(" "),e("el-scrollbar",{staticStyle:{height:"84%",width:"100%"},attrs:{"wrap-class":"scrollbar-wrapper-stockboard"}},t._l(t.StockList,function(s,o){return e("div",{key:"Region_0"+o,class:["sboarditem",s.code==t.stockCode?"selectedrow":""],on:{click:function(e){t.changeStock(s)}}},[e("div",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{class:["updown",s.diffRate>=0?"red":"green"]},[t._v(t._s(s.price))]),t._v(" "),e("div",{class:["updown",s.diffRate>=0?"red":"green"]},[t._v(t._s(s.diffRate)+"%")]),t._v(" "),e("div",{class:["updown",s.diff>=0?"red":"green"]},[t._v(t._s(s.diff))]),t._v(" "),e("div",{staticClass:"updown"},[t._v(t._s(s.hands)+"%")]),t._v(" "),e("div",{staticClass:"updown"},[t._v(t._s(s.peTTM))]),t._v(" "),e("div",{class:["updown",s.upSpeed>=0?"red":"green"]},[t._v(t._s(s.upSpeed))])])}))],1)]),t._v(" "),e("div",{ref:"boardkline",staticClass:"sbox",staticStyle:{"z-index":"9999","background-color":"#000"}},[e("div",{staticClass:"sleftbstock",attrs:{title:t.$t("msg.RefreshKline")},on:{dblclick:function(s){t.refreshKline("minute")}}},[t.symbolCode?e("kline",{key:t.minuteId,attrs:{symbolCode:t.symbolCode,klineOption:t.klineOption,showTechIndex:!1,showChartType:!1,klineHeight:t.klineHeight}}):t._e()],1),t._v(" "),e("div",{staticClass:"sleftbstock",attrs:{title:t.$t("msg.RefreshKline")},on:{dblclick:function(s){t.refreshKline("kline")}}},[e("lazy-load",{attrs:{time:"200"}},[t.symbolCode?e("kline",{key:t.klineId,attrs:{klineType:"kline",symbolCode:t.symbolCode,klineOption:{klineOption:t.klineOption},showTechIndex:!1,showChartType:!1,klineHeight:t.klineHeight}}):t._e()],1)],1)])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sboardtit"},[e("div",{staticClass:"name"},[t._v("板块名称")]),t._v(" "),e("div",{staticClass:"updown"},[t._v("涨跌幅")]),t._v(" "),e("div",{staticClass:"updown"},[t._v("换手率")]),t._v(" "),e("div",{staticClass:"updown"},[t._v("涨跌家数")]),t._v(" "),e("div",{staticClass:"updown"},[t._v("领涨股票")]),t._v(" "),e("div",{staticClass:"updown"},[t._v("涨跌幅")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sboardtit"},[e("div",{staticClass:"name"},[t._v("板块名称")]),t._v(" "),e("div",{staticClass:"updown"},[t._v("现价")]),t._v(" "),e("div",{staticClass:"updown"},[t._v("涨跌幅")]),t._v(" "),e("div",{staticClass:"updown"},[t._v("涨跌")]),t._v(" "),e("div",{staticClass:"updown"},[t._v("换手率")]),t._v(" "),e("div",{staticClass:"updown"},[t._v("市盈率")]),t._v(" "),e("div",{staticClass:"updown"},[t._v("快速涨跌")])])}];e.d(s,"a",function(){return o}),e.d(s,"b",function(){return i})},"7uDC":function(t,s,e){"use strict";e.r(s);var o=e("bWy4"),i=e.n(o);for(var n in o)"default"!==n&&function(t){e.d(s,t,function(){return o[t]})}(n);s.default=i.a},TSwX:function(t,s,e){"use strict";e.r(s);var o=e("3HAX"),i=e("7uDC");for(var n in i)"default"!==n&&function(t){e.d(s,t,function(){return i[t]})}(n);e("1ish");var d=e("KHd+"),a=Object(d.a)(i.default,o.a,o.b,!1,null,null,null);a.options.__file="stockboard.vue",s.default=a.exports},bWy4:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=a(e("7bS+")),i=a(e("nv1Z")),n=a(e("yQyB")),d=a(e("V2Nu"));function a(t){return t&&t.__esModule?t:{default:t}}s.default={name:"stockboard",mixins:[o.default],components:{kline:n.default,LazyLoad:d.default},data:function(){return{nowtime:"",BoardName:"",boardTypes:{Region:"地域板块",Concept:"概念板块",Industry:"行业板块"},BoardType:"",BoardCode:"",stocktopup:[],stocktopdown:[],Board_Pn:0,BoardList:[],StockList:[],klineHeight:0,klineOption:{Windows:[]},stockCode:"",symbolCode:"",klineId:0,minuteId:0,loaded:!1,ts:{}}},created:function(){this.ts=this.$route.query,this.BoardName=this.ts.n,this.BoardType=this.boardTypes[this.ts.b],this.BoardCode=this.ts.c,this.Board_Pn=this.ts.pn},computed:{},beforeDestroy:function(){console.log("beforeDestroy stockboard..."),this.removeEventBus()},mounted:function(){var t=this;setTimeout(function(){t.$nextTick(function(){t.addEventBus(),window.addEventListener("resize",t.onWindowResize)})},500)},methods:{changeBoard:function(t){this.BoardCode=t.code,i.default.socket.emit("sub_boardstocks",{code:this.BoardCode,type:"BoardStock",pn:this.Board_Pn})},changeStock:function(t){this.stockCode=t.code;var s=this.getSymbol(t.code);if(s!=this.symbolCode){0==t.code.indexOf("BJ.")&&this.$message.error(this.$t("msg.UnSupportStock")),this.symbolCode=s;var e="SZ"==t.code.split(".")[0]?"0":"1";this.$bus.$emit("changeSymbol",{StockCode:t.code,StockName:t.name,MarketCode:e})}},refreshKline:function(t){"kline"==t?this.klineId++:this.minuteId++},onWindowResize:function(){var t=this.$refs.boardkline?this.$refs.boardkline.offsetHeight:0;this.$bus.$emit("onWindowResize",t)},BoardClick:function(t,s){switch(t){case"Board_Industry":this.Board_Industry=s;break;case"Board_Concept":this.Board_Concept=s;break;case"Board_Region":this.Board_Region=s}},evtStockboard:function(t){for(var s in t)this.BoardList=t[s]},evtBoardstocks:function(t){this.StockList=t[this.BoardCode+"_"+this.Board_Pn],this.StockList.length>0&&this.changeStock(this.StockList[0],!0)},evtStocktop:function(t){this.stocktopup=[],this.stocktopdown=[];for(var s=0;s<t.u.length;s++)this.stocktopup.push({c:t.u[s].c,n:t.u[s].n,b:(t.u[s].r/1e3).toFixed(2),y:(t.u[s].p/1e3).toFixed(2),f:((t.u[s].t-t.u[s].p)/1e3).toFixed(2),p:(t.u[s].t/1e3).toFixed(2),s:"r"});for(s=0;s<t.d.length;s++)this.stocktopdown.push({c:t.d[s].c,n:t.d[s].n,b:(t.d[s].r/1e3).toFixed(2),y:(t.d[s].p/1e3).toFixed(2),f:((t.d[s].t-t.d[s].p)/1e3).toFixed(2),p:(t.d[s].t/1e3).toFixed(2),s:"g"})},removeEventBus:function(){this.$bus.$off("stockboard",this.evtStockboard),this.$bus.$off("boardstocks",this.evtBoardstocks),this.$bus.$off("stocktop",this.evtStocktop)},addEventBus:function(){i.default.socket.emit("stocktop",{coin:"A"}),i.default.socket.emit("sub_stockboard",{stocks:["Board_"+this.ts.b+"_"+this.Board_Pn]}),i.default.socket.emit("sub_boardstocks",{code:this.BoardCode,type:"BoardStock",pn:this.Board_Pn}),this.$bus.$on("stockboard",this.evtStockboard),this.$bus.$on("boardstocks",this.evtBoardstocks),this.$bus.$on("stocktop",this.evtStocktop)}}}},ebZ9:function(t,s,e){}}]);