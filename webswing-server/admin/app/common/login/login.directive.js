(function(e){e(["text!common/login/login.template.html"],function(t){function n(){return{restrict:"E",replace:!0,scope:{},controller:r}}function r(e,n,r,i,s){function u(n,i){if(o.loginDialog!=null)return;o.loginDialog=s.open({template:t,scope:e,backdrop:"static"}),o.loginDialog.rendered.then(function(){r.path("/");var e=$("#webswingLoginDialogContent"),t={securityToken:r.search().securityToken,realm:r.search().realm,successUrl:window.top.location.href};i(e,t,function(){o.loginDialog.dismiss(),o.loginDialog=null,r.path("/")})}),o.loginDialog.result.then(function(){o.loginDialog=null})}var o=e;o.formData={},o.loginDialog=null,o.loginErrorMsg=null,e.$on("wsLoginRequestEvent",u)}return r.$inject=["$scope","$element","$location","loginService","$modal"],n})})(adminConsole.define);