webswingRequirejs.define([],function(){return function(){function h(){u=0,s=m(a);var e=n.cfg.connectionUrl;if(e.indexOf("http")!=0){var t=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"");e=t+e}var l=URL.createObjectURL(new Blob(["onmessage=(",v.toString(),')("'+e+'",'+f+")"],{type:"application/javascript"}));i=new Worker(l),i.onmessage=function(e){var t=JSON.parse(e.data);s.push(t),t.result==="ok"&&(n.sendInput({timestamps:{ping:t.latency}}),o==2&&(s=m(a))),p()},r=setInterval(function(){i.postMessage("doPing")},f*1e3)}function p(){var e=null,t=0,r=0,i=0;for(var f in s){var h=s[f];"error"===h.result||"timeout"===h.result?(r++,i++):h.latency>l&&r++}i==a?(e=n.dialogContent.networkOfflineWarningDialog,o=2):r>=c?(e=n.dialogContent.networkSlowWarningDialog,o=1):o=0,e!=null&&o!=u?n.showWarning(e):n.hideWarning()}function d(e){u=e}function v(e,t){function r(){var t=(new Date).getTime(),r=new XMLHttpRequest;r.addEventListener("load",function(e){i("ok",(new Date).getTime()-t)}),r.addEventListener("error",function(e){i("error",(new Date).getTime()-t)}),r.addEventListener("timeout",function(e){i("timeout",(new Date).getTime()-t)}),r.open("GET",e+"rest/ping"),r.timeout=n,r.send()}function i(e,t){postMessage(JSON.stringify({result:e,latency:t}))}var n=t*1e3;return function(t){t.data==="doPing"&&r()}}function m(e){var t=new Array;return t.push=function(){return this.length>=e&&this.shift(),Array.prototype.push.apply(this,arguments)},t}function g(){i!=null&&i.terminate(),r!=null&&(clearInterval(r),r=null)}var t=this,n,r,i,s,o,u,a=6,f=5,l=500,c=3;t.injects=n={cfg:"webswing.config",sendInput:"input.sendInput",showWarning:"dialog.showNetworkBar",hideWarning:"dialog.hideNetworkBar",dialogContent:"dialog.content"},t.provides={mutePingWarning:d,start:h,dispose:g},t.ready=function(){}}});