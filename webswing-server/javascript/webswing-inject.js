webswingRequirejs.define([],function(){return function(){function s(e,t){t!=null&&(t.provides!=null&&(n[e]=t.provides),t.injects!=null&&(r[e]=t.injects),t.ready!=null&&(i[e]=t.ready))}function o(){var e="";for(var t in r)try{u(r[t])}catch(n){if(!(n instanceof f))throw n;e+="	Module "+t+" :\n"+n+"\n"}if(e.length>0)throw new f("Dependency injection errors:\n"+e);for(var t in i)try{i[t]()}catch(n){if(!(n instanceof f))throw n;e+="	Module "+t+" ready function :\n"+n+"\n"}if(e.length>0)throw new f("Starting modules failed:\n"+e)}function u(e){var t="";for(var r in e)try{var i=e[r];if(typeof i=="string"){var s=a(n,i);e[r]=s}}catch(o){if(!(o instanceof f))throw o;t+="		Field "+r+" not injected: "+o+"\n"}if(t.length>0)throw new f(t)}function a(e,t){function r(e,t){if(e.hasOwnProperty(t))return e[t];throw new Error}try{return t.split(".").reduce(r,e)}catch(n){throw new f("service "+t+" not found.")}}function f(e){this.name="Dependency Error",this.message=e,this.toString=function(){return this.message}}var t=this;t.module=s,t.injectAndVerify=o;var n=t.services={},r=t.inject={},i=t.ready={}}});