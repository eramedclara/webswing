(function(e){e(["text!common/navigation/navbar.template.html"],function(t){function n(){return{restrict:"E",replace:!0,template:t,scope:{branding:"@",navigation:"@"},controllerAs:"vm",bindToController:!0,controller:r}}function r(e,t,n,r,i,s){function u(){o.locations.length=0;var e=t.getLocations();for(var n=0;n<e.length;n++)(e[n].permission==null||s[e[n].permission])&&o.locations.push(e[n])}function a(){r.getVersion().then(function(e){o.version=l(e)})}function f(){n.logout()}function l(e){if(!e)return e;var t=e.indexOf("-");return t!=-1&&(e.indexOf("-",t+1)!=-1&&(t=e.indexOf("-",t+1)),e=e.substring(0,t)),e}var o=this;o.isActive=t.isActive,o.isCollapsed=!0,o.logout=f,o.baseUrl=i,o.locations=[],e.$on("wsPermissionsReloaded",u),a()}return r.$inject=["$scope","navigationService","loginService","configRestService","baseUrl","permissions"],n})})(adminConsole.define);