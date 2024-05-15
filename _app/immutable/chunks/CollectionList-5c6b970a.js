import{S as te,i as ie,s as re,a as z,e as P,c as A,b as D,f as y,g as C,d as N,t as O,a1 as ne,h as b,k as w,w as j,l as E,m as I,x as B,n as p,T as g,y as L,z as H,q as V,r as S,$ as ae,u as q}from"./singletons-c9b53750.js";import{f as R,S as le}from"./utils-bcef34ba.js";import{I as se}from"./Footer-29bf62a2.js";function T(a,e,l){const r=a.slice();return r[12]=e[l],r}function U(a){let e,l,r=a[12].slogan+"",t;return{c(){e=w("div"),l=w("div"),t=V(r),this.h()},l(i){e=E(i,"DIV",{class:!0});var n=I(e);l=E(n,"DIV",{class:!0});var c=I(l);t=S(c,r),c.forEach(b),n.forEach(b),this.h()},h(){p(l,"class","bg-bbw-navy py-0.5 px-1.5 rounded-md text-white uppercase text-base"),p(e,"class","absolute top-3 -left-2.5 z-50")},m(i,n){D(i,e,n),g(e,l),g(l,t)},p(i,n){n&1&&r!==(r=i[12].slogan+"")&&q(t,r)},d(i){i&&b(e)}}}function F(a){let e,l,r,t,i,n,c;function o(v,k){return v[12].hidden?oe:fe}let m=o(a),s=m(a),u=a[1]==="event"&&G(a),f=a[1]==="media-partner"&&K(a),h=a[1]==="speaker"&&Q(a),_=a[1]==="union"&&W(a),d=a[1]==="place"&&X(a);return{c(){e=w("div"),s.c(),l=z(),u&&u.c(),r=z(),f&&f.c(),t=z(),h&&h.c(),i=z(),_&&_.c(),n=z(),d&&d.c(),this.h()},l(v){e=E(v,"DIV",{class:!0});var k=I(e);s.l(k),l=A(k),u&&u.l(k),r=A(k),f&&f.l(k),t=A(k),h&&h.l(k),i=A(k),_&&_.l(k),n=A(k),d&&d.l(k),k.forEach(b),this.h()},h(){p(e,"class","mt-2")},m(v,k){D(v,e,k),s.m(e,null),g(e,l),u&&u.m(e,null),g(e,r),f&&f.m(e,null),g(e,t),h&&h.m(e,null),g(e,i),_&&_.m(e,null),g(e,n),d&&d.m(e,null),c=!0},p(v,k){m===(m=o(v))&&s?s.p(v,k):(s.d(1),s=m(v),s&&(s.c(),s.m(e,l))),v[1]==="event"?u?u.p(v,k):(u=G(v),u.c(),u.m(e,r)):u&&(u.d(1),u=null),v[1]==="media-partner"?f?f.p(v,k):(f=K(v),f.c(),f.m(e,t)):f&&(f.d(1),f=null),v[1]==="speaker"?h?(h.p(v,k),k&2&&y(h,1)):(h=Q(v),h.c(),y(h,1),h.m(e,i)):h&&(C(),O(h,1,1,()=>{h=null}),N()),v[1]==="union"?_?(_.p(v,k),k&2&&y(_,1)):(_=W(v),_.c(),y(_,1),_.m(e,n)):_&&(C(),O(_,1,1,()=>{_=null}),N()),v[1]==="place"?d?d.p(v,k):(d=X(v),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},i(v){c||(y(h),y(_),c=!0)},o(v){O(h),O(_),c=!1},d(v){v&&b(e),s.d(),u&&u.d(),f&&f.d(),h&&h.d(),_&&_.d(),d&&d.d()}}}function fe(a){let e,l,r=(a[12].shortname||a[12].name)+"",t,i;return{c(){e=w("h3"),l=w("a"),t=V(r),this.h()},l(n){e=E(n,"H3",{class:!0});var c=I(e);l=E(c,"A",{href:!0,class:!0});var o=I(l);t=S(o,r),o.forEach(b),c.forEach(b),this.h()},h(){p(l,"href",i=a[9](a[1],a[12])),p(l,"class","hover:underline"),p(e,"class","text-bbw-navy")},m(n,c){D(n,e,c),g(e,l),g(l,t)},p(n,c){c&1&&r!==(r=(n[12].shortname||n[12].name)+"")&&q(t,r),c&3&&i!==(i=n[9](n[1],n[12]))&&p(l,"href",i)},d(n){n&&b(e)}}}function oe(a){let e=(a[12].shortname||a[12].name)+"",l,r;return{c(){l=V(e),r=V("*")},l(t){l=S(t,e),r=S(t,"*")},m(t,i){D(t,l,i),D(t,r,i)},p(t,i){i&1&&e!==(e=(t[12].shortname||t[12].name)+"")&&q(l,e)},d(t){t&&b(l),t&&b(r)}}}function G(a){let e,l,r=R(a[12])+"",t,i,n=a[12].attendees&&J(a);return{c(){e=w("div"),l=w("span"),t=V(r),i=z(),n&&n.c(),this.h()},l(c){e=E(c,"DIV",{class:!0});var o=I(e);l=E(o,"SPAN",{class:!0});var m=I(l);t=S(m,r),m.forEach(b),i=A(o),n&&n.l(o),o.forEach(b),this.h()},h(){p(l,"class","font-bold"),p(e,"class","text-xl bbw-text-color-secondary my-2")},m(c,o){D(c,e,o),g(e,l),g(l,t),g(e,i),n&&n.m(e,null)},p(c,o){o&1&&r!==(r=R(c[12])+"")&&q(t,r),c[12].attendees?n?n.p(c,o):(n=J(c),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(c){c&&b(e),n&&n.d()}}}function J(a){let e,l=a[12].attendees+"",r,t;return{c(){e=w("br"),r=V(l),t=V(" ppl")},l(i){e=E(i,"BR",{}),r=S(i,l),t=S(i," ppl")},m(i,n){D(i,e,n),D(i,r,n),D(i,t,n)},p(i,n){n&1&&l!==(l=i[12].attendees+"")&&q(r,l)},d(i){i&&b(e),i&&b(r),i&&b(t)}}}function K(a){let e,l=a[12].description+"",r;return{c(){e=w("div"),r=V(l),this.h()},l(t){e=E(t,"DIV",{class:!0});var i=I(e);r=S(i,l),i.forEach(b),this.h()},h(){p(e,"class","text-base bbw-text-color-secondary my-2")},m(t,i){D(t,e,i),g(e,r)},p(t,i){i&1&&l!==(l=t[12].description+"")&&q(r,l)},d(t){t&&b(e)}}}function Q(a){let e,l,r;return l=new le({props:{source:a[12].caption}}),{c(){e=w("div"),j(l.$$.fragment),this.h()},l(t){e=E(t,"DIV",{class:!0});var i=I(e);B(l.$$.fragment,i),i.forEach(b),this.h()},h(){p(e,"class","text-base bbw-text-color-secondary my-2 break-words")},m(t,i){D(t,e,i),L(l,e,null),r=!0},p(t,i){const n={};i&1&&(n.source=t[12].caption),l.$set(n)},i(t){r||(y(l.$$.fragment,t),r=!0)},o(t){O(l.$$.fragment,t),r=!1},d(t){t&&b(e),H(l)}}}function W(a){let e,l,r;return l=new le({props:{source:a[12].description}}),{c(){e=w("div"),j(l.$$.fragment),this.h()},l(t){e=E(t,"DIV",{class:!0});var i=I(e);B(l.$$.fragment,i),i.forEach(b),this.h()},h(){p(e,"class","text-base bbw-text-color-secondary my-2 break-words")},m(t,i){D(t,e,i),L(l,e,null),r=!0},p(t,i){const n={};i&1&&(n.source=t[12].description),l.$set(n)},i(t){r||(y(l.$$.fragment,t),r=!0)},o(t){O(l.$$.fragment,t),r=!1},d(t){t&&b(e),H(l)}}}function X(a){let e,l=a[12].capacity+"",r,t;return{c(){e=w("div"),r=V(l),t=V(" ppl"),this.h()},l(i){e=E(i,"DIV",{class:!0});var n=I(e);r=S(n,l),t=S(n," ppl"),n.forEach(b),this.h()},h(){p(e,"class","text-xl bbw-text-color-secondary my-2")},m(i,n){D(i,e,n),g(e,r),g(e,t)},p(i,n){n&1&&l!==(l=i[12].capacity+"")&&q(r,l)},d(i){i&&b(e)}}}function Y(a){let e,l,r,t,i,n,c,o,m,s=a[1]==="benefit"&&U(a);i=new se({props:{item:a[12],thumb:a[7],width:"w-full",aspect:a[3],img:a[2],rounded:a[5]?"rounded-full":a[4]==="small"?"rounded-lg":"rounded-2xl"}});let u=a[1]!=="media-partner"&&F(a);return{c(){e=w("div"),l=w("div"),s&&s.c(),r=z(),t=w("a"),j(i.$$.fragment),c=z(),u&&u.c(),this.h()},l(f){e=E(f,"DIV",{class:!0});var h=I(e);l=E(h,"DIV",{class:!0});var _=I(l);s&&s.l(_),r=A(_),t=E(_,"A",{href:!0});var d=I(t);B(i.$$.fragment,d),d.forEach(b),_.forEach(b),c=A(h),u&&u.l(h),h.forEach(b),this.h()},h(){p(t,"href",n=a[9](a[1],a[12])),p(l,"class","w-full relative"),p(e,"class",o=(a[4]==="small"?"p-0.5 lg:p-1":"p-1 lg:p-1.5")+" "+(a[12].hidden?"":"hover:bg-bbw-yellow/20 dark:hover:bg-bbw-white/10")+" "+(a[4]==="small"?"rounded-lg":"rounded-2xl"))},m(f,h){D(f,e,h),g(e,l),s&&s.m(l,null),g(l,r),g(l,t),L(i,t,null),g(e,c),u&&u.m(e,null),m=!0},p(f,h){f[1]==="benefit"?s?s.p(f,h):(s=U(f),s.c(),s.m(l,r)):s&&(s.d(1),s=null);const _={};h&1&&(_.item=f[12]),h&128&&(_.thumb=f[7]),h&8&&(_.aspect=f[3]),h&4&&(_.img=f[2]),h&48&&(_.rounded=f[5]?"rounded-full":f[4]==="small"?"rounded-lg":"rounded-2xl"),i.$set(_),(!m||h&3&&n!==(n=f[9](f[1],f[12])))&&p(t,"href",n),f[1]!=="media-partner"?u?(u.p(f,h),h&2&&y(u,1)):(u=F(f),u.c(),y(u,1),u.m(e,null)):u&&(C(),O(u,1,1,()=>{u=null}),N()),(!m||h&17&&o!==(o=(f[4]==="small"?"p-0.5 lg:p-1":"p-1 lg:p-1.5")+" "+(f[12].hidden?"":"hover:bg-bbw-yellow/20 dark:hover:bg-bbw-white/10")+" "+(f[4]==="small"?"rounded-lg":"rounded-2xl")))&&p(e,"class",o)},i(f){m||(y(i.$$.fragment,f),y(u),m=!0)},o(f){O(i.$$.fragment,f),O(u),m=!1},d(f){f&&b(e),s&&s.d(),H(i),u&&u.d()}}}function Z(a){let e,l,r,t,i,n,c,o,m,s=a[1]==="event"&&$(),u=a[1]==="speaker"&&x(),f=a[1]==="place"&&ee();return{c(){e=w("div"),l=w("div"),r=w("div"),t=V("+"),i=z(),n=w("div"),s&&s.c(),c=z(),u&&u.c(),o=z(),f&&f.c(),this.h()},l(h){e=E(h,"DIV",{class:!0});var _=I(e);l=E(_,"DIV",{class:!0});var d=I(l);r=E(d,"DIV",{class:!0});var v=I(r);t=S(v,"+"),v.forEach(b),i=A(d),n=E(d,"DIV",{});var k=I(n);s&&s.l(k),c=A(k),u&&u.l(k),o=A(k),f&&f.l(k),k.forEach(b),d.forEach(b),_.forEach(b),this.h()},h(){p(r,"class","text-6xl"),p(l,"class","p-4"),p(e,"class",m="flex text-gray-400 dark:text-gray-200 self-start "+(a[1]==="event"?"mt-8":""))},m(h,_){D(h,e,_),g(e,l),g(l,r),g(r,t),g(l,i),g(l,n),s&&s.m(n,null),g(n,c),u&&u.m(n,null),g(n,o),f&&f.m(n,null)},p(h,_){h[1]==="event"?s||(s=$(),s.c(),s.m(n,c)):s&&(s.d(1),s=null),h[1]==="speaker"?u||(u=x(),u.c(),u.m(n,o)):u&&(u.d(1),u=null),h[1]==="place"?f||(f=ee(),f.c(),f.m(n,null)):f&&(f.d(1),f=null),_&2&&m!==(m="flex text-gray-400 dark:text-gray-200 self-start "+(h[1]==="event"?"mt-8":""))&&p(e,"class",m)},d(h){h&&b(e),s&&s.d(),u&&u.d(),f&&f.d()}}}function $(a){let e,l;return{c(){e=w("a"),l=V("Submit your own event!"),this.h()},l(r){e=E(r,"A",{href:!0,target:!0,class:!0,rel:!0});var t=I(e);l=S(t,"Submit your own event!"),t.forEach(b),this.h()},h(){p(e,"href","https://github.com/blockchainweek/data/issues/new/choose"),p(e,"target","_blank"),p(e,"class","underline hover:no-underline"),p(e,"rel","noreferrer")},m(r,t){D(r,e,t),g(e,l)},d(r){r&&b(e)}}}function x(a){let e,l;return{c(){e=w("a"),l=V("Submit a missing speaker!"),this.h()},l(r){e=E(r,"A",{href:!0,target:!0,class:!0,rel:!0});var t=I(e);l=S(t,"Submit a missing speaker!"),t.forEach(b),this.h()},h(){p(e,"href","https://github.com/blockchainweek/data/issues/new/choose"),p(e,"target","_blank"),p(e,"class","underline hover:no-underline"),p(e,"rel","noreferrer")},m(r,t){D(r,e,t),g(e,l)},d(r){r&&b(e)}}}function ee(a){let e,l;return{c(){e=w("a"),l=V("Offer your own venue!"),this.h()},l(r){e=E(r,"A",{href:!0,class:!0});var t=I(e);l=S(t,"Offer your own venue!"),t.forEach(b),this.h()},h(){p(e,"href","https://github.com/blockchainweek/data/issues/new/choose"),p(e,"class","underline hover:no-underline")},m(r,t){D(r,e,t),g(e,l)},d(r){r&&b(e)}}}function ue(a){let e,l,r,t=a[0].map(a[11]),i=[];for(let o=0;o<t.length;o+=1)i[o]=Y(T(a,t,o));const n=o=>O(i[o],1,1,()=>{i[o]=null});let c=a[6]&&Z(a);return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=z(),c&&c.c(),l=P()},l(o){for(let m=0;m<i.length;m+=1)i[m].l(o);e=A(o),c&&c.l(o),l=P()},m(o,m){for(let s=0;s<i.length;s+=1)i[s].m(o,m);D(o,e,m),c&&c.m(o,m),D(o,l,m),r=!0},p(o,[m]){if(m&959){t=o[0].map(o[11]);let s;for(s=0;s<t.length;s+=1){const u=T(o,t,s);i[s]?(i[s].p(u,m),y(i[s],1)):(i[s]=Y(u),i[s].c(),y(i[s],1),i[s].m(e.parentNode,e))}for(C(),s=t.length;s<i.length;s+=1)n(s);N()}o[6]?c?c.p(o,m):(c=Z(o),c.c(),c.m(l.parentNode,l)):c&&(c.d(1),c=null)},i(o){if(!r){for(let m=0;m<t.length;m+=1)y(i[m]);r=!0}},o(o){i=i.filter(Boolean);for(let m=0;m<i.length;m+=1)O(i[m]);r=!1},d(o){ne(i,o),o&&b(e),c&&c.d(o),o&&b(l)}}}function ce(a,e,l){let{arr:r}=e,{col:t="speaker"}=e,{img:i="photoUrl"}=e,{aspect:n="aspect-square"}=e,{size:c="normal"}=e,{circle:o=!1}=e,{offer:m=!1}=e,{bundle:s=null}=e,{thumb:u=null}=e;function f(d){if(!s)return d;if(t==="speaker"&&!d.name){let v=null;for(const k of s.events)if(k.speakers&&(v=k.speakers.find(M=>M.id===d.id&&M.name),v))break;Object.assign(d,v||{})}return d}const h=(d,v)=>v.hidden?"":`${ae}/${d}/${v.id}`,_=d=>f(d);return a.$$set=d=>{"arr"in d&&l(0,r=d.arr),"col"in d&&l(1,t=d.col),"img"in d&&l(2,i=d.img),"aspect"in d&&l(3,n=d.aspect),"size"in d&&l(4,c=d.size),"circle"in d&&l(5,o=d.circle),"offer"in d&&l(6,m=d.offer),"bundle"in d&&l(10,s=d.bundle),"thumb"in d&&l(7,u=d.thumb)},[r,t,i,n,c,o,m,u,f,h,s,_]}class _e extends te{constructor(e){super(),ie(this,e,ce,ue,re,{arr:0,col:1,img:2,aspect:3,size:4,circle:5,offer:6,bundle:10,thumb:7})}}export{_e as C};