webpackJsonp([1],{NHnr:function(t,a,e){"use strict";function n(t){e("h3Og")}function s(t){for(var a=t.data,e=t.width,n=t.height,s=e,i=n,r=-1,c=-1,o=0;o<e;o++)for(var u=0;u<n;u++){var d=o+u*e;a[4*d+3]>0&&(o<s&&(s=o),o>r&&(r=o),u<i&&(i=u),u>c&&(c=u))}s-=20,r+=20,i-=20,c+=20;var h=r-s+1,l=c-i+1;if(h<l){var p=Math.floor((l-h)/2);r+=l-h-p,s-=p}else if(h>l){var v=Math.floor((h-l)/2),g=h-l-v;c+=g,i-=v}h=r-s+1,l=c-i+1;for(var f=new Uint8ClampedArray(h*l*4),m=s;m<=r;m++)for(var w=i;w<=c;w++)if(m>=0&&m<e&&w>=0&&w<n){var _=m+w*e,C=m-s+(w-i)*h;f[4*C+3]=a[4*_+3]}return new ImageData(f,h,l)}function i(t){e("ao9r")}Object.defineProperty(a,"__esModule",{value:!0});var r=e("5vqR"),c={name:"app"},o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},u=[],d={render:o,staticRenderFns:u},h=d,l=e("/Xao"),p=n,v=l(c,h,!1,p,null,null),g=v.exports,f=e("zO6J"),m=e("lC5x"),w=e.n(m),_=e("J0Oq"),C=e.n(_),x={name:"keras-js",data:function(){return{start:!1,input:new Float32Array(784),output:new Float32Array(10),outputClasses:[0,1,2,3,4,5,6,7,8,9],model:!1,loadingModle:!0}},mounted:function(){var t=this;return C()(w.a.mark(function a(){return w.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.input_ctx=document.getElementById("input-canvas").getContext("2d"),t.input_ctx.lineWidth=20,t.input_ctx.lineCap="round",t.input_ctx.strokeStyle="#000000",t.model=new window.KerasJS.Model({filepaths:{model:"static/cnn.json",weights:"static/cnn_weights.buf",metadata:"static/cnn_metadata.json"},gpu:!1,transferLayerOutputs:!0}),a.next=7,t.model.ready();case 7:t.loadingModle=!1;case 8:case"end":return a.stop()}},a,t)}))()},computed:{predictedClass:function(){var t=this;if(!this.loadingModle)return 0===this.output.reduce(function(t,a){return t+a},0)?-1:this.output.reduce(function(a,e,n){return e>t.output[a]?n:a},0)},loadingProgress:function(){if(this.model)return this.model.getLoadingProgress()}},methods:{draw:function(t){if(this.start){var a=this.getUsersInput(t);this.input_ctx.beginPath(),this.input_ctx.moveTo(this.start[0],this.start[1]),this.input_ctx.lineTo(a[0],a[1]),this.input_ctx.stroke(),this.start=[a[0],a[1]]}},startDraw:function(t){var a=this.getUsersInput(t);this.start=[a[0],a[1]]},clearCanvas:function(){var t=document.getElementById("input-canvas-centercrop").getContext("2d"),a=document.getElementById("input-canvas-scaled").getContext("2d");t.clearRect(0,0,t.canvas.width,t.canvas.height),a.clearRect(0,0,a.canvas.width,a.canvas.height),this.input_ctx.clearRect(0,0,this.input_ctx.canvas.width,this.input_ctx.canvas.height),this.output=new Float32Array(10),this.start=!1},finishDraw:function(t){var a=this;this.start=!1;var e=s(this.input_ctx.getImageData(0,0,this.input_ctx.canvas.width,this.input_ctx.canvas.height)),n=document.getElementById("input-canvas-centercrop").getContext("2d");n.canvas.width=e.width,n.canvas.height=e.height,n.putImageData(e,0,0);var i=document.getElementById("input-canvas-scaled").getContext("2d");i.save(),i.scale(28/n.canvas.width,28/n.canvas.height),i.clearRect(0,0,n.canvas.width,n.canvas.height),i.drawImage(document.getElementById("input-canvas-centercrop"),0,0);var r=i.getImageData(0,0,i.canvas.width,i.canvas.height).data;i.restore(),this.input=new Float32Array(784);for(var c=0,o=r.length;c<o;c+=4)this.input[c/4]=r[c+3]/255;this.model.predict({input:this.input}).then(function(t){a.output=t.output})},getUsersInput:function(t){var a=void 0,e=void 0;return t.touches&&t.touches.length?(a=t.touches[0].clientX-t.target.offsetLeft,e=t.touches[0].clientY-t.target.offsetTop):(a=t.offsetX,e=t.offsetY),[a,e]}}},y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("transition",{attrs:{name:"hidden"}},[t.loadingProgress<100?e("div",{staticClass:"loading"},[t._v("\n        Model is Loading..."+t._s(t.loadingProgress)+"\n      ")]):t._e()]),t._v(" "),e("canvas",{staticStyle:{display:"none"},attrs:{id:"input-canvas-scaled",width:"28",height:"28"}}),t._v(" "),e("canvas",{staticStyle:{display:"none"},attrs:{id:"input-canvas-centercrop"}}),t._v(" "),e("canvas",{staticClass:"canvas",attrs:{width:"240",height:"240",id:"input-canvas"},on:{mousemove:t.draw,mouseup:t.finishDraw,mousedown:t.startDraw,touchstart:t.startDraw,touchend:t.finishDraw,touchmove:t.draw}}),t._v(" "),e("div",{staticClass:"control"},[e("button",{staticClass:"clearbutton",on:{click:t.clearCanvas,touchstart:t.clearCanvas}},[t._v("clear")])]),t._v(" "),e("div",{staticClass:"output"},t._l(t.outputClasses,function(a){return e("div",{staticClass:"output-class",class:{predicted:a===t.predictedClass}},[e("div",{staticClass:"output-label"},[t._v(t._s(a))]),t._v(" "),e("transition",{attrs:{name:"grow"}},[a===t.predictedClass?e("div",{staticClass:"isNumber_line"}):t._e()])],1)}))],1)},I=[],D={render:y,staticRenderFns:I},b=D,E=e("/Xao"),M=i,A=E(x,b,!1,M,"data-v-aaeb24ae",null),R=A.exports;r.a.use(f.a);var k=new f.a({routes:[{path:"/",name:"main",component:R}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:k,template:"<App/>",components:{App:g}})},ao9r:function(t,a){},h3Og:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.f03180da7f61ac29fa38.js.map