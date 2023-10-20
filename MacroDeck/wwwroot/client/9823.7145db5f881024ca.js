"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9823],{9823:(W,h,d)=>{d.r(h),d.d(h,{HomePageModule:()=>Q});var m=d(6814),_=d(95),s=d(9843),f=d(5877),a=d(5861),C=d(553),v=d(2726),Z=d(4373),n=d(9468),y=d(3660);const T=(0,v.fo)("App",{web:()=>d.e(2912).then(d.bind(d,2912)).then(t=>new t.AppWeb)});let S=(()=>{var t;class c{constructor(){}getVersion(){return(0,a.Z)(function*(){return yield T.getInfo().then(e=>e.version)})()}}return(t=c).\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),c})(),A=(()=>{var t;class c{constructor(e,o){this.modalController=e,this.alertController=o,this.id="",this.host="",this.port=8191,this.useSsl=!1}cancel(){var e=this;return(0,a.Z)(function*(){yield e.modalController.dismiss(null,"cancel")})()}confirm(){var e=this;return(0,a.Z)(function*(){if(!(yield e.validate()))return;let o={host:e.host,id:e.id,name:void 0===e.name||0===e.name.length?e.host:e.name,port:e.port,ssl:e.useSsl};console.log(o),yield e.modalController.dismiss(o,"confirm")})()}validate(){var e=this;return(0,a.Z)(function*(){return void 0===e.host||0===e.host.length?(yield e.showErrorAlert("The IP Address / Hostname is required."),!1):null!=e.port||(yield e.showErrorAlert("The port is required."),!1)})()}showErrorAlert(e){var o=this;return(0,a.Z)(function*(){yield(yield o.alertController.create({subHeader:e,buttons:[{text:"Ok"}]})).present()})()}}return(t=c).\u0275fac=function(e){return new(e||t)(n.Y36(s.IN),n.Y36(s.Br))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-add-connection-modal"]],decls:26,vars:6,consts:[["slot","start"],[3,"click"],["slot","end"],[3,"strong","click"],[1,"ion-padding"],["labelPlacement","floating","type","text",3,"placeholder","ngModel","ngModelChange"],["slot","label"],[1,"mt-2"],["labelPlacement","floating","type","text",3,"ngModel","ngModelChange"],["min","1","labelPlacement","floating","type","number",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"]],template:function(e,o){1&e&&(n.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),n.NdJ("click",function(){return o.cancel()}),n._uU(4,"Cancel"),n.qZA()(),n.TgZ(5,"ion-title"),n._uU(6,"Add connection"),n.qZA(),n.TgZ(7,"ion-buttons",2)(8,"ion-button",3),n.NdJ("click",function(){return o.confirm()}),n._uU(9,"Confirm"),n.qZA()()()(),n.TgZ(10,"ion-content",4)(11,"ion-item")(12,"ion-input",5),n.NdJ("ngModelChange",function(l){return o.name=l}),n.TgZ(13,"div",6),n._uU(14,"Name"),n.qZA()()(),n.TgZ(15,"ion-item",7)(16,"ion-input",8),n.NdJ("ngModelChange",function(l){return o.host=l}),n.TgZ(17,"div",6),n._uU(18,"IP Address / Hostname"),n.qZA()()(),n.TgZ(19,"ion-item",7)(20,"ion-input",9),n.NdJ("ngModelChange",function(l){return o.port=l}),n.TgZ(21,"div",6),n._uU(22,"Port"),n.qZA()()(),n.TgZ(23,"ion-item",7)(24,"ion-toggle",10),n.NdJ("ngModelChange",function(l){return o.useSsl=l}),n._uU(25,"Use SSL"),n.qZA()()()),2&e&&(n.xp6(8),n.Q6J("strong",!0),n.xp6(4),n.Q6J("placeholder",o.host)("ngModel",o.name),n.xp6(4),n.Q6J("ngModel",o.host),n.xp6(4),n.Q6J("ngModel",o.port),n.xp6(4),n.Q6J("ngModel",o.useSsl))},dependencies:[_.JJ,_.On,s.YG,s.Sm,s.W2,s.Gu,s.pK,s.Ie,s.wd,s.ho,s.sr,s.w,s.as,s.j9,s.yf]}),c})();var b=d(2014);let P=(()=>{var t;class c{constructor(e){this.storage=e,this.connectionsStorageKey="connections"}getConnections(){var e=this;return(0,a.Z)(function*(){const o=yield e.storage.get(e.connectionsStorageKey);return void 0===o?[]:JSON.parse(o)})()}addUpdateConnection(e){var o=this;return(0,a.Z)(function*(){var r;const l=yield o.storage.get(o.connectionsStorageKey);let u=null!==(r=JSON.parse(l))&&void 0!==r?r:[];if(console.log(e),void 0===e.id)e.id=`connection${Math.floor(Date.now()/1e3)}`;else{const p=u.findIndex(g=>g.id===e.id);p>-1&&u.splice(p,1)}u.push(e),console.log(u),yield o.storage.set(o.connectionsStorageKey,JSON.stringify(u))})()}deleteConnection(e){var o=this;return(0,a.Z)(function*(){var r;const l=yield o.storage.get(o.connectionsStorageKey);let u=null!==(r=JSON.parse(l))&&void 0!==r?r:[];const p=u.findIndex(g=>g.id==e);p>-1&&u.splice(p,1),yield o.storage.set(o.connectionsStorageKey,JSON.stringify(u))})()}}return(t=c).\u0275fac=function(e){return new(e||t)(n.LFG(b.K))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),c})();var M=d(5015),x=d(1414);function k(t,c){if(1&t){const i=n.EpF();n.TgZ(0,"ion-list",4)(1,"ion-item",5),n.NdJ("click",function(){const r=n.CHM(i).$implicit,l=n.oxw(2);return n.KtG(l.connect(r))}),n._UZ(2,"ion-icon",6),n.TgZ(3,"ion-label")(4,"h3"),n._uU(5),n.qZA(),n.TgZ(6,"span"),n._uU(7),n.qZA()()()()}if(2&t){const i=c.$implicit;n.xp6(5),n.Oqu(i.name),n.xp6(2),n.AsE("",i.host,":",i.port,"")}}function J(t,c){if(1&t&&(n.TgZ(0,"ion-item-group")(1,"ion-item-divider")(2,"ion-label"),n._uU(3,"Discovered"),n.qZA()(),n.YNc(4,k,8,3,"ion-list",3),n.qZA()),2&t){const i=n.oxw();n.xp6(4),n.Q6J("ngForOf",i.savedConnections)}}function I(t,c){if(1&t){const i=n.EpF();n.TgZ(0,"ion-item-sliding")(1,"ion-item",9),n.NdJ("click",function(){const r=n.CHM(i).$implicit,l=n.oxw(3);return n.KtG(l.connect(r))}),n._UZ(2,"ion-icon",10),n.TgZ(3,"ion-label")(4,"h3"),n._uU(5),n.qZA(),n.TgZ(6,"span"),n._uU(7),n.qZA()()(),n.TgZ(8,"ion-item-options",11)(9,"ion-item-option",12),n.NdJ("click",function(){const r=n.CHM(i).$implicit,l=n.oxw(3);return n.KtG(l.editConnection(r))}),n._UZ(10,"ion-icon",13),n.qZA(),n.TgZ(11,"ion-item-option",14),n.NdJ("click",function(){const r=n.CHM(i).$implicit,l=n.oxw(3);return n.KtG(l.deleteConnection(r))}),n._UZ(12,"ion-icon",15),n.qZA()()()}if(2&t){const i=c.$implicit;n.xp6(5),n.Oqu(i.name),n.xp6(2),n.AsE("",i.host,":",i.port,"")}}function N(t,c){if(1&t&&(n.TgZ(0,"ion-list",4),n.YNc(1,I,13,3,"ion-item-sliding",8),n.qZA()),2&t){const i=n.oxw(2);n.xp6(1),n.Q6J("ngForOf",i.savedConnections)}}function U(t,c){if(1&t&&(n.TgZ(0,"ion-item-group")(1,"ion-item-divider")(2,"ion-label"),n._uU(3,"Saved connections"),n.qZA()(),n.YNc(4,N,2,1,"ion-list",7),n.qZA()),2&t){const i=n.oxw(),e=n.MAs(5);n.xp6(4),n.Q6J("ngIf",i.savedConnections.length>0)("ngIfElse",e)}}function w(t,c){if(1&t){const i=n.EpF();n.TgZ(0,"ion-fab",16)(1,"ion-fab-button",17),n.NdJ("click",function(){n.CHM(i);const o=n.oxw();return n.KtG(o.openAddConnectionModal())}),n._UZ(2,"ion-icon",18),n.qZA()()}}function O(t,c){if(1&t){const i=n.EpF();n.TgZ(0,"div",19)(1,"span",20),n._uU(2,"You have set up no saved connections"),n.qZA(),n.TgZ(3,"div",21)(4,"ion-button",22),n.NdJ("click",function(){n.CHM(i);const o=n.oxw();return n.KtG(o.openAddConnectionModal())}),n._UZ(5,"ion-icon",18),n.TgZ(6,"ion-label"),n._uU(7,"Add connection"),n.qZA()()()()}}let Y=(()=>{var t;class c{constructor(e,o,r,l,u,p,g){this.document=e,this.connectionService=o,this.route=r,this.modalController=l,this.alertController=u,this.websocketService=p,this.wakeLockService=g,this.discoveredConnections=[],this.savedConnections=[],this.savedConnectionsInitialized=!1}ngOnInit(){var e=this;return(0,a.Z)(function*(){yield e.loadConnections(),e.savedConnectionsInitialized=!0,e.route.queryParams.subscribe(function(){var o=(0,a.Z)(function*(r){var l;if("true"==(null!==(l=r["auto-connect"])&&void 0!==l&&l)){const g=e.document.baseURI.split("/"),D=`${g[0].toLowerCase().replace("http","ws")}//${g[2]}`;yield e.connectToString(D)}});return function(r){return o.apply(this,arguments)}}())})()}loadConnections(){var e=this;return(0,a.Z)(function*(){var o;e.savedConnections=null!==(o=yield e.connectionService.getConnections())&&void 0!==o?o:[]})()}openAddConnectionModal(e){var o=this;return(0,a.Z)(function*(){var r,l;const u=yield o.modalController.create({component:A,componentProps:{id:null==e?void 0:e.id,name:null==e?void 0:e.name,host:null==e?void 0:e.host,port:null!==(r=null==e?void 0:e.port)&&void 0!==r?r:8191,useSsl:null!==(l=null==e?void 0:e.ssl)&&void 0!==l&&l}});yield u.present();const{data:p,role:g}=yield u.onWillDismiss();"confirm"===g&&(yield o.connectionService.addUpdateConnection(p),yield o.loadConnections())})()}deleteConnection(e){var o=this;return(0,a.Z)(function*(){var l;yield(yield o.alertController.create({subHeader:`Delete the connection ${e.name}?`,buttons:[{text:"No",role:"cancel"},{text:"Yes",role:"confirm",handler:(l=(0,a.Z)(function*(){yield o.connectionService.deleteConnection(e.id),yield o.loadConnections()}),function(){return l.apply(this,arguments)})}]})).present()})()}editConnection(e){var o=this;return(0,a.Z)(function*(){yield o.openAddConnectionModal(e)})()}connect(e){var o=this;return(0,a.Z)(function*(){yield o.wakeLockService.updateWakeLock(),yield o.websocketService.connect(e.host,e.port,e.ssl)})()}connectToString(e){var o=this;return(0,a.Z)(function*(){yield o.websocketService.connectToString(e)})()}}return(t=c).\u0275fac=function(e){return new(e||t)(n.Y36(m.K0),n.Y36(P),n.Y36(f.gz),n.Y36(s.IN),n.Y36(s.Br),n.Y36(M.i),n.Y36(x.$))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-connections"]],decls:6,vars:3,consts:[[4,"ngIf"],["slot","fixed","vertical","bottom","horizontal","end",4,"ngIf"],["noConnections",""],["lines","full",4,"ngFor","ngForOf"],["lines","full"],["color","success","button","true",3,"click"],["name","flash","slot","start"],["lines","full",4,"ngIf","ngIfElse"],[4,"ngFor","ngForOf"],["button","true",3,"click"],["name","star","slot","start"],["side","end"],["color","warning",3,"click"],["slot","icon-only","name","ellipsis-horizontal"],["color","danger",3,"click"],["slot","icon-only","name","trash"],["slot","fixed","vertical","bottom","horizontal","end"],["color","success",3,"click"],["name","add"],[1,"ion-padding","d-flex","flex-column"],[1,"d-block","text-center"],[1,"justify-content-center","d-flex","mt-3"],["id","add-connection-button",3,"click"]],template:function(e,o){1&e&&(n.TgZ(0,"ion-content"),n.YNc(1,J,5,1,"ion-item-group",0),n.YNc(2,U,5,2,"ion-item-group",0),n.YNc(3,w,3,0,"ion-fab",1),n.qZA(),n.YNc(4,O,8,0,"ng-template",null,2,n.W1O)),2&e&&(n.xp6(1),n.Q6J("ngIf",o.discoveredConnections.length>0),n.xp6(1),n.Q6J("ngIf",o.savedConnectionsInitialized),n.xp6(1),n.Q6J("ngIf",o.savedConnections.length>0))},dependencies:[m.sg,m.O5,s.YG,s.W2,s.IJ,s.W4,s.gu,s.Ie,s.rH,s.Ub,s.u8,s.IK,s.td,s.Q$,s.q_]}),c})(),H=(()=>{var t;class c{constructor(){}ngOnInit(){}}return(t=c).\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-splashscreen"]],decls:2,vars:0,consts:[[1,"d-flex","w-100","h-100","justify-content-center","align-items-center","p-5"],[1,"icon"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0),n._UZ(1,"div",1),n.qZA())},styles:[".icon[_ngcontent-%COMP%]{background-image:url(/assets/icon.png);width:100%;height:100%;background-size:contain;background-repeat:no-repeat;background-position:center;transform:scale(.5);animation:_ngcontent-%COMP%_splashAnimation .8s ease .3s 1 normal forwards}@keyframes _ngcontent-%COMP%_splashAnimation{10%{transform:scale(.5)}30%{transform:scale(.4)}60%{opacity:100}to{transform:scale(1);opacity:0}}"]}),c})();const F=function(t){return{"opacity-0":t}};function $(t,c){if(1&t&&n._UZ(0,"app-splashscreen",4),2&t){const i=n.oxw();n.Q6J("ngClass",n.VKq(1,F,!i.splashScreenVisible))}}const q=[{path:"",component:(()=>{var t;class c{constructor(e,o,r){this.settingsService=e,this.diagnosticService=o,this.modalController=r,this.splashScreen=!0,this.splashScreenVisible=!0,this.environment=C.N}ngOnInit(){var e=this;return(0,a.Z)(function*(){e.clientId=yield e.settingsService.getClientId(),setTimeout(()=>{e.splashScreenVisible=!1,setTimeout(()=>{e.splashScreen=!1},300)},1e3),v.dV.isNativePlatform()?e.diagnosticService.getVersion().then(o=>{e.version=`v${o}`}):e.version="Web Version"})()}openSettings(){var e=this;return(0,a.Z)(function*(){yield(yield e.modalController.create({component:Z.g})).present()})()}}return(t=c).\u0275fac=function(e){return new(e||t)(n.Y36(y.g),n.Y36(S),n.Y36(s.IN))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-home"]],decls:14,vars:3,consts:[["class","splashscreen",3,"ngClass",4,"ngIf"],["slot","primary"],[3,"click"],[1,"ms-3"],[1,"splashscreen",3,"ngClass"]],template:function(e,o){1&e&&(n.YNc(0,$,1,3,"app-splashscreen",0),n.TgZ(1,"ion-header")(2,"ion-toolbar")(3,"ion-title"),n._uU(4,"Macro Deck"),n.qZA(),n.TgZ(5,"ion-buttons",1)(6,"ion-button",2),n.NdJ("click",function(){return o.openSettings()}),n._uU(7,"Settings"),n.qZA()()()(),n.TgZ(8,"ion-content"),n._UZ(9,"app-connections"),n.qZA(),n.TgZ(10,"ion-footer")(11,"ion-toolbar")(12,"ion-text",3),n._uU(13),n.qZA()()()),2&e&&(n.Q6J("ngIf",o.splashScreen),n.xp6(13),n.AsE("",o.version," | Client Id: ",o.clientId,""))},dependencies:[m.mk,m.O5,s.YG,s.Sm,s.W2,s.fr,s.Gu,s.yW,s.wd,s.sr,Y,H],styles:[".splashscreen[_ngcontent-%COMP%]{position:absolute;top:0;right:0;bottom:0;left:0;background-color:var(--macro-deck-bg);z-index:100;opacity:100%;transition:opacity .3s ease-out}"]}),c})()}];let K=(()=>{var t;class c{}return(t=c).\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[f.Bz.forChild(q),f.Bz]}),c})(),z=(()=>{var t;class c{}return(t=c).\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[m.ez,_.u5,s.Pc]}),c})(),Q=(()=>{var t;class c{}return(t=c).\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[m.ez,_.u5,s.Pc,K,z]}),c})()}}]);