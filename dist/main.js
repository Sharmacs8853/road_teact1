(()=>{"use strict";var e={25:(e,n,r)=>{r.d(n,{Z:()=>s});var t=r(81),a=r.n(t),o=r(645),i=r.n(o)()(a());i.push([e.id,"#banner{\r\n    height: 500px;\r\n    width: 100%;\r\n}\r\n#banner > img{\r\n    height: 100%;\r\n    width: 100%;\r\n}",""]);const s=i},126:(e,n,r)=>{r.d(n,{Z:()=>s});var t=r(81),a=r.n(t),o=r(645),i=r.n(o)()(a());i.push([e.id,"#navbar{\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\r\n    border-radius: 5px;\r\n}\r\n#options{\r\n    display: flex;\r\n    gap: 25px;\r\n}\r\na{\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n    color: teal;\r\n}",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);t&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],l=t.base?c[0]+t.base:c[0],u=o[l]||0,p="".concat(l," ").concat(u);o[l]=u+1;var d=r(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var h=a(f,t);t.byIndex=s,n.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function a(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,a){var o=t(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=r(o[i]);n[s].references--}for(var c=t(e,a),l=0;l<o.length;l++){var u=r(o[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}o=c}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,a&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function r(t){var a=n[t];if(void 0!==a)return a.exports;var o=n[t]={id:t,exports:{}};return e[t](o,o.exports,r),o.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=r(379),n=r.n(e),t=r(795),a=r.n(t),o=r(569),i=r.n(o),s=r(565),c=r.n(s),l=r(216),u=r.n(l),p=r(589),d=r.n(p),f=r(126),h={};h.styleTagTransform=d(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var v=r(25),m={};m.styleTagTransform=d(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=u(),n()(v.Z,m),v.Z&&v.Z.locals&&v.Z.locals,document.getElementById("navbar").innerHTML='<h3><a href="#">Home</a></h3>\n        <div id="options">\n            <h3><a href="jewelory.html">Jewelery</a></h3>\n            <h3><a href="electronics.html">electronics</a></h3>\n            <h3><a href="#">login</a></h3>\n            <h3><a href="#">singUp</a></h3>\n        </div>',document.getElementById("banner").innerHTML='\n    <img src="https://wallpapercave.com/wp/wp1877444.jpg" alt="">\n    '})()})();