var localSearch=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function h(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let p;function g(t){p=t}function m(t){(function(){if(!p)throw new Error("Function called outside component initialization");return p})().$$.on_mount.push(t)}const $=[],y=[],b=[],x=[],_=Promise.resolve();let v=!1;function w(t){b.push(t)}let k=!1;const E=new Set;function j(){if(!k){k=!0;do{for(let t=0;t<$.length;t+=1){const n=$[t];g(n),A(n.$$)}for(g(null),$.length=0;y.length;)y.pop()();for(let t=0;t<b.length;t+=1){const n=b[t];E.has(n)||(E.add(n),n())}b.length=0}while($.length);for(;x.length;)x.pop()();v=!1,k=!1,E.clear()}}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(w)}}const O=new Set;function B(t,n){-1===t.$$.dirty[0]&&($.push(t),v||(v=!0,_.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function C(c,i,u,s,a,f,d=[-1]){const h=p;g(c);const m=c.$$={fragment:null,ctx:null,props:f,update:t,not_equal:a,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:e(),dirty:d,skip_bound:!1};let $=!1;if(m.ctx=u?u(c,i.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return m.ctx&&a(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),$&&B(c,t)),n})):[],m.update(),$=!0,o(m.before_update),m.fragment=!!s&&s(m.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);m.fragment&&m.fragment.l(t),t.forEach(l)}else m.fragment&&m.fragment.c();i.intro&&((y=c.$$.fragment)&&y.i&&(O.delete(y),y.i(b))),function(t,e,c,i){const{fragment:u,on_mount:l,on_destroy:s,after_update:a}=t.$$;u&&u.m(e,c),i||w((()=>{const e=l.map(n).filter(r);s?s.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(w)}(c,i.target,i.anchor,i.customElement),j()}var y,b;g(h)}function N(t,n,e){const o=t.slice();return o[7]=n[e],o}function S(t){let n,e,o,r,c,p,g,m,$,y,b=t[7].title+"",x=t[7].text+"";return{c(){n=s("a"),e=s("i"),o=f(),r=s("h1"),c=a(b),p=f(),g=s("p"),m=a(x),$=f(),d(e,"class","iconfont icon-file"),d(r,"class","result-title inline font-medium text-lg"),d(g,"class","result-content text-gray-600 text-sm"),d(n,"href",y="/"+t[7].path),d(n,"class","result-item block px-2 pb-3 mb-1 pt-1 hover:bg-indigo-100")},m(t,l){u(t,n,l),i(n,e),i(n,o),i(n,r),i(r,c),i(n,p),i(n,g),i(g,m),i(n,$)},p(t,e){1&e&&b!==(b=t[7].title+"")&&h(c,b),1&e&&x!==(x=t[7].text+"")&&h(m,x),1&e&&y!==(y="/"+t[7].path)&&d(n,"href",y)},d(t){t&&l(n)}}}function I(n){let e,o,r,c,a,h=n[0],p=[];for(let t=0;t<h.length;t+=1)p[t]=S(N(n,h,t));return{c(){e=s("div"),o=s("div"),r=s("input"),c=f(),a=s("div");for(let t=0;t<p.length;t+=1)p[t].c();d(r,"id","actual-search-input"),d(r,"model","keyword"),d(r,"ref","input"),d(r,"class","inline-block w-full h-10 px-2 py-1"),d(r,"placeholder",n[1]),d(r,"type","text"),d(o,"class","search-header bg-gray-400"),d(a,"class","search-result bg-gray-200")},m(t,n){u(t,e,n),i(e,o),i(o,r),i(e,c),i(e,a);for(let t=0;t<p.length;t+=1)p[t].m(a,null)},p(t,[n]){if(1&n){let e;for(h=t[0],e=0;e<h.length;e+=1){const o=N(t,h,e);p[e]?p[e].p(o,n):(p[e]=S(o),p[e].c(),p[e].m(a,null))}for(;e<p.length;e+=1)p[e].d(1);p.length=h.length}},i:t,o:t,d(t){t&&l(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(p,t)}}}function P(t,n,e){let o;var r=this&&this.__awaiter||function(t,n,e,o){return new(e||(e=Promise))((function(r,c){function i(t){try{l(o.next(t))}catch(t){c(t)}}function u(t){try{l(o.throw(t))}catch(t){c(t)}}function l(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(i,u)}l((o=o.apply(t,n||[])).next())}))};const c=document.getElementById("content-json"),i=c.getAttribute("data-placeholder"),u=c.textContent;let l=[];return m((()=>r(void 0,void 0,void 0,(function*(){e(2,l=yield(t=>r(void 0,void 0,void 0,(function*(){const n=yield fetch(t);return(yield n.json()).posts})))(u))})))),t.$$.update=()=>{4&t.$$.dirty&&e(0,o=l.filter((t=>t.title.includes("")||t.text.includes(""))).map((t=>{const n=Object.assign({},t);return n.text=`${t.text.substring(0,100)}...`,n})))},[o,i,l]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),C(this,t,P,I,c,{})}}({target:document.getElementById("search-view-container")})}();
