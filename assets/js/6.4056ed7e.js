(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{313:function(t,e,n){var i=n(0),s=n(3),r=n(68),c=[].slice,u=function(t){return function(e,n){var i=arguments.length>2,s=i?c.call(arguments,2):void 0;return t(i?function(){("function"==typeof e?e:Function(e)).apply(this,s)}:e,n)}};i({global:!0,bind:!0,forced:/MSIE .\./.test(r)},{setTimeout:u(s.setTimeout),setInterval:u(s.setInterval)})},340:function(t,e,n){},385:function(t,e,n){"use strict";n(340)},399:function(t,e,n){"use strict";n.r(e);n(313);var i={name:"Slideshow",props:{images:{type:Array,required:!0,default:function(){return[]}},dir:{type:String,default:""}},data:function(){return{timer:null,currentIndex:0}},mounted:function(){this.reset()},methods:{reset:function(){clearInterval(this.timer),this.timer=setInterval(this.next,4e3)},next:function(){this.reset(),this.currentIndex=this.currentIndex>=this.images.length-1?0:this.currentIndex+1},prev:function(){this.reset(),this.currentIndex=this.currentIndex<=0?this.images.length-1:this.currentIndex-1}}},s=(n(385),n(42)),r=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slideshow"},[n("div",{staticClass:"slideshow-container"},[t._l(t.images,(function(e,i){return n("div",{class:i===t.currentIndex?"block fade":"hidden fade"},[n("div",{staticClass:"numbertext"},[t._v(t._s(i+1)+" / "+t._s(t.images.length))]),t._v(" "),n("img",{staticStyle:{width:"100%"},attrs:{src:t.dir+e}}),t._v(" "),n("div",{staticClass:"text"})])})),t._v(" "),n("a",{staticClass:"prev",on:{click:function(e){return t.prev()}}},[t._v("❮")]),t._v(" "),n("a",{staticClass:"next",on:{click:function(e){return t.next()}}},[t._v("❯")])],2),t._v(" "),n("br"),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},t._l(t.images,(function(e,i){return n("span",{class:i===t.currentIndex?"active dot":"dot",on:{click:function(e){t.currentIndex=i}}})})),0)])}),[],!1,null,null,null);e.default=r.exports}}]);