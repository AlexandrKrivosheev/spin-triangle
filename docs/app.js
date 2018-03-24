!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=5)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();var s=null,o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=0,this.y=0,this.ctx=e,this.lastCoordinates=[[this.x,this.y]]}return n(t,[{key:"setCoordinates",value:function(t){this.x=t.clientX,this.y=t.clientY,this.lastCoordinates.length>=2&&this.lastCoordinates.shift(),this.lastCoordinates.push([this.x,this.y])}},{key:"isMoveClockwise",value:function(){var t=this.ctx.canvas.width/2,e=this.ctx.canvas.height/2;return t<this.x&&e>this.y?!(this.x<this.lastCoordinates[0][0])&&!(this.y<this.lastCoordinates[0][1]):t<this.x&&e<this.y?!(this.x>this.lastCoordinates[0][0])&&!(this.y<this.lastCoordinates[0][1]):t>this.x&&e<this.y?!(this.x>this.lastCoordinates[0][0])&&!(this.y>this.lastCoordinates[0][1]):!(t>this.x&&e>this.y)||!(this.x<this.lastCoordinates[0][0])&&!(this.y>this.lastCoordinates[0][1])}}],[{key:"getInstance",value:function(t){return s||(s=new this(t)),s}}]),t}();e.default=o},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.resizeCanvas=function(t){var e=window.innerWidth,i=window.innerHeight;t.width=e,t.height=i},e.calcCathetus=function(t,e){return Math.sqrt(Math.pow(t,2)-Math.pow(e,2))},e.calcTurnCoordinatesByAngle=function(t,e,i){var n=e.x1,s=e.y1,o=i.x2,a=i.y2,r=o-n,h=a-s,c=Math.cos(t),u=Math.sin(t);return{x:n+r*c-h*u,y:s+r*u+h*c}},e.calcAngleByCosTheory=function(t,e,i){var n=(Math.pow(e,2)+Math.pow(i,2)-Math.pow(t,2))/(2*e*i);return Math.acos(n)},e.calcSideByCosTheory=function(t,e,i){return Math.sqrt(Math.pow(e,2)+Math.pow(i,2)-2*e*i*Math.cos(t))}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(0),a=(n=o)&&n.__esModule?n:{default:n},r=i(1);var h=function(){function t(e){var i=e.ctx;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=i,this.pointer=a.default.getInstance(i),this.sideWidth=110,this.bottomWidth=50,this.topPoint={x:0,y:0},this.leftPoint={x:0,y:0},this.rightPoint={x:0,y:0},this.center={x:this.ctx.canvas.width/2,y:this.ctx.canvas.height/2},this.height=(0,r.calcCathetus)(this.sideWidth,this.bottomWidth/2),this.medianAngle=this._calcMedianAngle(),this.update=this.update.bind(this)}return s(t,[{key:"update",value:function(){this._calcPoints(),this._draw()}},{key:"_draw",value:function(){this.ctx.beginPath(),this.ctx.moveTo(this.topPoint.x,this.topPoint.y),this.ctx.lineTo(this.leftPoint.x,this.leftPoint.y),this.ctx.lineTo(this.rightPoint.x,this.rightPoint.y),this.ctx.closePath(),this.ctx.stroke()}},{key:"_calcPoints",value:function(){this._calcTopPoint(),this._calcLeftPoint(),this._calcRightPoint()}},{key:"_calcTopPoint",value:function(){var t=this.center.x,e=this.center.y,i=this.pointer.x,n=this.pointer.y,s=Math.sqrt(Math.pow(i-t,2)+Math.pow(n-e,2)),o=this.height/3*2,a=o/(s-o);this.topPoint.x=(t+a*i)/(1+a),this.topPoint.y=(e+a*n)/(1+a)}},{key:"_calcLeftPoint",value:function(){var t=6.28319-this.medianAngle,e=this.center.x,i=this.center.y,n=this.topPoint.x,s=this.topPoint.y,o=(0,r.calcTurnCoordinatesByAngle)(t,{x1:e,y1:i},{x2:n,y2:s}),a=o.x,h=o.y;this.leftPoint.x=a,this.leftPoint.y=h}},{key:"_calcRightPoint",value:function(){var t=this.medianAngle,e=this.center.x,i=this.center.y,n=this.topPoint.x,s=this.topPoint.y,o=(0,r.calcTurnCoordinatesByAngle)(t,{x1:e,y1:i},{x2:n,y2:s}),a=o.x,h=o.y;this.rightPoint.x=a,this.rightPoint.y=h}},{key:"_calcMedianAngle",value:function(){var t=(0,r.calcAngleByCosTheory)(this.bottomWidth,this.sideWidth,this.sideWidth)/2,e=(0,r.calcSideByCosTheory)(t,this.height/3*2,this.sideWidth);return(0,r.calcAngleByCosTheory)(this.sideWidth,this.height/3*2,e)}}]),t}();e.default=h},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();var s=function(){function t(e){var i=e.ctx,n=e.fps;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.toUpdate=[],this.ctx=i,this.interval=1e3/n,this.lastTime=(new Date).getTime(),this.currentTime=0,this.delta=0,this.start=this.start.bind(this)}return n(t,[{key:"start",value:function(){if(window.requestAnimationFrame(this.start),this.currentTime=(new Date).getTime(),this.delta=this.currentTime-this.lastTime,this.delta>this.interval){this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);for(var t=0;t<this.toUpdate.length;t++)this.toUpdate[t]();this.lastTime=this.currentTime-this.delta%this.interval}}},{key:"addToUpdate",value:function(t){this.toUpdate.push(t)}}]),t}();e.default=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.fps=120},function(t,e,i){"use strict";var n=i(1),s=i(4),o=h(i(3)),a=h(i(0)),r=h(i(2));function h(t){return t&&t.__esModule?t:{default:t}}var c=document.querySelector("#canvas"),u=canvas.getContext("2d"),l=a.default.getInstance(u);(0,n.resizeCanvas)(c),window.addEventListener("resize",function(){return(0,n.resizeCanvas)(c)}),window.addEventListener("mousemove",function(t){return l.setCoordinates(t)});var d=new o.default({ctx:u,fps:s.fps});d.start();var f=new r.default({ctx:u});d.addToUpdate(f.update)}]);