(function(e){e(["text!shared/statusBar.template.html"],function(t){function n(){return{restrict:"E",template:t,scope:{status:"="},controllerAs:"vm",bindToController:!0,controller:r}}function r(e){function n(e){if(t.status!=null){var n=t.status.status;return n==="Running"?e+"-success":n==="Stopped"?e+"-default":n==="Error"?e+"-danger":e+"-warning"}}var t=this;t.panelStatusClass=n}return r.$inject=["$scope"],n})})(adminConsole.define);