import{S as rl,i as al,s as nl,a as y,w as se,a0 as ol,h as i,c as L,x as re,b as h,y as ae,f as U,t as O,d as me,z as ne,_ as ul,o as _l,$ as X,k as D,q as S,l as H,m as A,r as j,n as w,T as N,ag as Be,N as ml,u as Z,g as ce,a1 as we,e as Te,ad as cl,ae as hl,O as il}from"../../../chunks/singletons-c9b53750.js";import{p as dl}from"../../../chunks/stores-6b80303c.js";import{F as pl,b as ke,a as Ve,I as ve}from"../../../chunks/Footer-a3e4efb3.js";import{g as vl,D as bl}from"../../../chunks/Disclaimer-15eeef6d.js";import{p as $l,f as ye,g as pe,S as sl}from"../../../chunks/utils-157bfc7e.js";import{H as El,E as kl}from"../../../chunks/EventTypeBadge-9466e62a.js";function Le(a,l,f){const e=a.slice();return e[13]=l[f],e}function Se(a,l,f){const e=a.slice();return e[16]=l[f],e}function je(a,l,f){const e=a.slice();return e[16]=l[f],e}function Fe(a,l,f){const e=a.slice();return e[4]=l[f],e}function Re(a){let l,f,e,t,r=a[7].title+"",s,p,m,d,u,n,_,T,o,b,c,I,E,B,$,k,g,R,M,z,fe,te,le,G=["events","speakers"].includes(a[4]),_e,he,ee,P=a[6]!==a[5]&&Ue(a),v=a[1]&&ze(a),V=a[4]==="events"&&Ce(),Y=a[4]==="speakers"&&Pe(),C=a[4]==="media-partners"&&Oe(),J=a[4]==="benefits"&&Me(),x=a[4]==="places"&&qe(),oe=a[2],q=[];for(let F=0;F<oe.length;F+=1)q[F]=tl(Le(a,oe,F));const be=F=>O(q[F],1,1,()=>{q[F]=null});let K=G&&fl(a);return{c(){l=D("div"),f=D("div"),e=D("div"),t=D("h2"),s=S(r),p=S(" ("),m=S(a[6]),P&&P.c(),d=S(")"),u=y(),n=D("div"),_=D("div"),T=D("label"),o=S("Search"),v&&v.c(),b=y(),c=D("input"),I=y(),E=D("div"),B=D("table"),$=D("thead"),k=D("tr"),V&&V.c(),g=y(),Y&&Y.c(),R=y(),C&&C.c(),M=y(),J&&J.c(),z=y(),x&&x.c(),fe=y(),te=D("tbody");for(let F=0;F<q.length;F+=1)q[F].c();le=y(),K&&K.c(),this.h()},l(F){l=H(F,"DIV",{class:!0});var Q=A(l);f=H(Q,"DIV",{class:!0});var W=A(f);e=H(W,"DIV",{class:!0});var ie=A(e);t=H(ie,"H2",{class:!0});var de=A(t);s=j(de,r),p=j(de," ("),m=j(de,a[6]),P&&P.l(de),d=j(de,")"),de.forEach(i),u=L(ie),n=H(ie,"DIV",{class:!0});var Ae=A(n);_=H(Ae,"DIV",{class:!0});var $e=A(_);T=H($e,"LABEL",{for:!0});var De=A(T);o=j(De,"Search"),v&&v.l(De),De.forEach(i),b=L($e),c=H($e,"INPUT",{type:!0,id:!0,class:!0}),$e.forEach(i),Ae.forEach(i),I=L(ie),E=H(ie,"DIV",{class:!0});var Ne=A(E);B=H(Ne,"TABLE",{class:!0});var Ee=A(B);$=H(Ee,"THEAD",{});var ge=A($);k=H(ge,"TR",{class:!0});var ue=A(k);V&&V.l(ue),g=L(ue),Y&&Y.l(ue),R=L(ue),C&&C.l(ue),M=L(ue),J&&J.l(ue),z=L(ue),x&&x.l(ue),ue.forEach(i),ge.forEach(i),fe=L(Ee),te=H(Ee,"TBODY",{});var Ie=A(te);for(let He=0;He<q.length;He+=1)q[He].l(Ie);Ie.forEach(i),Ee.forEach(i),Ne.forEach(i),le=L(ie),K&&K.l(ie),ie.forEach(i),W.forEach(i),Q.forEach(i),this.h()},h(){w(t,"class","text-2xl uppercase font-bold brand-text-color-secondary"),w(T,"for","q"),w(c,"type","text"),w(c,"id","q"),w(c,"class","w-full"),w(_,"class","filter-component"),w(n,"class","filter"),w(k,"class","text-left"),w(B,"class","w-full table-auto"),w(E,"class","text-xl mt-6 brand-text-color-base"),w(e,"class","mx-4 xl:mx-0"),w(f,"class","max-w-7xl mx-auto pt-5 md:pt-10"),w(l,"class","w-full")},m(F,Q){h(F,l,Q),N(l,f),N(f,e),N(e,t),N(t,s),N(t,p),N(t,m),P&&P.m(t,null),N(t,d),N(e,u),N(e,n),N(n,_),N(_,T),N(T,o),v&&v.m(T,null),N(_,b),N(_,c),Be(c,a[1]),N(e,I),N(e,E),N(E,B),N(B,$),N($,k),V&&V.m(k,null),N(k,g),Y&&Y.m(k,null),N(k,R),C&&C.m(k,null),N(k,M),J&&J.m(k,null),N(k,z),x&&x.m(k,null),N(B,fe),N(B,te);for(let W=0;W<q.length;W+=1)q[W].m(te,null);N(e,le),K&&K.m(e,null),_e=!0,he||(ee=ml(c,"input",a[9]),he=!0)},p(F,Q){if((!_e||Q&128)&&r!==(r=F[7].title+"")&&Z(s,r),(!_e||Q&64)&&Z(m,F[6]),F[6]!==F[5]?P?P.p(F,Q):(P=Ue(F),P.c(),P.m(t,d)):P&&(P.d(1),P=null),F[1]?v?v.p(F,Q):(v=ze(F),v.c(),v.m(T,null)):v&&(v.d(1),v=null),Q&2&&c.value!==F[1]&&Be(c,F[1]),F[4]==="events"?V||(V=Ce(),V.c(),V.m(k,g)):V&&(V.d(1),V=null),F[4]==="speakers"?Y||(Y=Pe(),Y.c(),Y.m(k,R)):Y&&(Y.d(1),Y=null),F[4]==="media-partners"?C||(C=Oe(),C.c(),C.m(k,M)):C&&(C.d(1),C=null),F[4]==="benefits"?J||(J=Me(),J.c(),J.m(k,z)):J&&(J.d(1),J=null),F[4]==="places"?x||(x=qe(),x.c(),x.m(k,null)):x&&(x.d(1),x=null),Q&149){oe=F[2];let W;for(W=0;W<oe.length;W+=1){const ie=Le(F,oe,W);q[W]?(q[W].p(ie,Q),U(q[W],1)):(q[W]=tl(ie),q[W].c(),U(q[W],1),q[W].m(te,null))}for(ce(),W=oe.length;W<q.length;W+=1)be(W);me()}Q&16&&(G=["events","speakers"].includes(F[4])),G?K?(K.p(F,Q),Q&16&&U(K,1)):(K=fl(F),K.c(),U(K,1),K.m(e,null)):K&&(ce(),O(K,1,1,()=>{K=null}),me())},i(F){if(!_e){for(let Q=0;Q<oe.length;Q+=1)U(q[Q]);U(K),_e=!0}},o(F){q=q.filter(Boolean);for(let Q=0;Q<q.length;Q+=1)O(q[Q]);O(K),_e=!1},d(F){F&&i(l),P&&P.d(),v&&v.d(),V&&V.d(),Y&&Y.d(),C&&C.d(),J&&J.d(),x&&x.d(),we(q,F),K&&K.d(),he=!1,ee()}}}function Ue(a){let l,f;return{c(){l=S("/"),f=S(a[5])},l(e){l=j(e,"/"),f=j(e,a[5])},m(e,t){h(e,l,t),h(e,f,t)},p(e,t){t&32&&Z(f,e[5])},d(e){e&&i(l),e&&i(f)}}}function ze(a){let l,f,e;return{c(){l=S(': "'),f=S(a[1]),e=S('"')},l(t){l=j(t,': "'),f=j(t,a[1]),e=j(t,'"')},m(t,r){h(t,l,r),h(t,f,r),h(t,e,r)},p(t,r){r&2&&Z(f,t[1])},d(t){t&&i(l),t&&i(f),t&&i(e)}}}function Ce(a){let l,f,e,t,r,s,p,m,d,u,n,_,T;return{c(){l=D("th"),f=S("📅"),e=y(),t=D("th"),r=y(),s=D("th"),p=S("Name"),m=y(),d=D("th"),u=S("📍"),n=y(),_=D("th"),T=S("👥"),this.h()},l(o){l=H(o,"TH",{class:!0});var b=A(l);f=j(b,"📅"),b.forEach(i),e=L(o),t=H(o,"TH",{}),A(t).forEach(i),r=L(o),s=H(o,"TH",{});var c=A(s);p=j(c,"Name"),c.forEach(i),m=L(o),d=H(o,"TH",{class:!0});var I=A(d);u=j(I,"📍"),I.forEach(i),n=L(o),_=H(o,"TH",{class:!0});var E=A(_);T=j(E,"👥"),E.forEach(i),this.h()},h(){w(l,"class","text-right pr-4"),w(d,"class","hidden md:table-cell"),w(_,"class","hidden md:table-cell")},m(o,b){h(o,l,b),N(l,f),h(o,e,b),h(o,t,b),h(o,r,b),h(o,s,b),N(s,p),h(o,m,b),h(o,d,b),N(d,u),h(o,n,b),h(o,_,b),N(_,T)},d(o){o&&i(l),o&&i(e),o&&i(t),o&&i(r),o&&i(s),o&&i(m),o&&i(d),o&&i(n),o&&i(_)}}}function Pe(a){let l,f,e,t,r,s,p,m,d,u,n,_,T;return{c(){l=D("th"),f=y(),e=D("th"),t=S("Name"),r=y(),s=D("th"),p=S("🌎"),m=y(),d=D("th"),u=S("🐦"),n=y(),_=D("th"),T=S("Bio"),this.h()},l(o){l=H(o,"TH",{}),A(l).forEach(i),f=L(o),e=H(o,"TH",{});var b=A(e);t=j(b,"Name"),b.forEach(i),r=L(o),s=H(o,"TH",{});var c=A(s);p=j(c,"🌎"),c.forEach(i),m=L(o),d=H(o,"TH",{class:!0});var I=A(d);u=j(I,"🐦"),I.forEach(i),n=L(o),_=H(o,"TH",{class:!0});var E=A(_);T=j(E,"Bio"),E.forEach(i),this.h()},h(){w(d,"class","hidden md:table-cell"),w(_,"class","hidden md:table-cell")},m(o,b){h(o,l,b),h(o,f,b),h(o,e,b),N(e,t),h(o,r,b),h(o,s,b),N(s,p),h(o,m,b),h(o,d,b),N(d,u),h(o,n,b),h(o,_,b),N(_,T)},d(o){o&&i(l),o&&i(f),o&&i(e),o&&i(r),o&&i(s),o&&i(m),o&&i(d),o&&i(n),o&&i(_)}}}function Oe(a){let l,f,e,t,r,s,p,m,d,u;return{c(){l=D("th"),f=y(),e=D("th"),t=S("Name"),r=y(),s=D("th"),p=S("🌎"),m=y(),d=D("th"),u=S("Description"),this.h()},l(n){l=H(n,"TH",{}),A(l).forEach(i),f=L(n),e=H(n,"TH",{});var _=A(e);t=j(_,"Name"),_.forEach(i),r=L(n),s=H(n,"TH",{});var T=A(s);p=j(T,"🌎"),T.forEach(i),m=L(n),d=H(n,"TH",{class:!0});var o=A(d);u=j(o,"Description"),o.forEach(i),this.h()},h(){w(d,"class","hidden md:table-cell")},m(n,_){h(n,l,_),h(n,f,_),h(n,e,_),N(e,t),h(n,r,_),h(n,s,_),N(s,p),h(n,m,_),h(n,d,_),N(d,u)},d(n){n&&i(l),n&&i(f),n&&i(e),n&&i(r),n&&i(s),n&&i(m),n&&i(d)}}}function Me(a){let l,f,e,t,r,s,p;return{c(){l=D("th"),f=y(),e=D("th"),t=S("Name"),r=y(),s=D("th"),p=S("Benefit")},l(m){l=H(m,"TH",{}),A(l).forEach(i),f=L(m),e=H(m,"TH",{});var d=A(e);t=j(d,"Name"),d.forEach(i),r=L(m),s=H(m,"TH",{});var u=A(s);p=j(u,"Benefit"),u.forEach(i)},m(m,d){h(m,l,d),h(m,f,d),h(m,e,d),N(e,t),h(m,r,d),h(m,s,d),N(s,p)},d(m){m&&i(l),m&&i(f),m&&i(e),m&&i(r),m&&i(s)}}}function qe(a){let l,f,e,t,r,s,p,m,d,u;return{c(){l=D("th"),f=y(),e=D("th"),t=S("Name"),r=y(),s=D("th"),p=S("👥"),m=y(),d=D("th"),u=S("Address"),this.h()},l(n){l=H(n,"TH",{}),A(l).forEach(i),f=L(n),e=H(n,"TH",{});var _=A(e);t=j(_,"Name"),_.forEach(i),r=L(n),s=H(n,"TH",{});var T=A(s);p=j(T,"👥"),T.forEach(i),m=L(n),d=H(n,"TH",{class:!0});var o=A(d);u=j(o,"Address"),o.forEach(i),this.h()},h(){w(d,"class","hidden md:table-cell")},m(n,_){h(n,l,_),h(n,f,_),h(n,e,_),N(e,t),h(n,r,_),h(n,s,_),N(s,p),h(n,m,_),h(n,d,_),N(d,u)},d(n){n&&i(l),n&&i(f),n&&i(e),n&&i(r),n&&i(s),n&&i(m),n&&i(d)}}}function Ye(a){let l,f=ye(a[13])+"",e,t,r,s,p,m,d,u,n,_,T,o,b,c,I,E,B,$;p=new ve({props:{item:a[13]}});function k(v,V){return v[13].hidden?wl:Tl}let g=k(a),R=g(a),M=a[13].types,z=[];for(let v=0;v<M.length;v+=1)z[v]=Ge(Fe(a,M,v));const fe=v=>O(z[v],1,1,()=>{z[v]=null});function te(v,V){if(v[13].venues)return Hl;if(v[13].venueName)return Dl}let le=te(a),G=le&&le(a);function _e(v,V){return v[13].attendees?Bl:Il}let he=_e(a),ee=he(a),P=a[13].languages&&a[13].languages.length>0&&Je(a);return{c(){l=D("td"),e=S(f),t=y(),r=D("td"),s=D("a"),se(p.$$.fragment),d=y(),u=D("td"),n=D("div"),R.c(),_=y(),T=D("div");for(let v=0;v<z.length;v+=1)z[v].c();o=y(),b=D("td"),G&&G.c(),c=y(),I=D("td"),ee.c(),E=y(),B=D("td"),P&&P.c(),this.h()},l(v){l=H(v,"TD",{class:!0});var V=A(l);e=j(V,f),V.forEach(i),t=L(v),r=H(v,"TD",{class:!0});var Y=A(r);s=H(Y,"A",{href:!0});var C=A(s);re(p.$$.fragment,C),C.forEach(i),Y.forEach(i),d=L(v),u=H(v,"TD",{class:!0});var J=A(u);n=H(J,"DIV",{class:!0});var x=A(n);R.l(x),x.forEach(i),_=L(J),T=H(J,"DIV",{class:!0});var oe=A(T);for(let F=0;F<z.length;F+=1)z[F].l(oe);oe.forEach(i),J.forEach(i),o=L(v),b=H(v,"TD",{class:!0});var q=A(b);G&&G.l(q),q.forEach(i),c=L(v),I=H(v,"TD",{class:!0});var be=A(I);ee.l(be),be.forEach(i),E=L(v),B=H(v,"TD",{class:!0});var K=A(B);P&&P.l(K),K.forEach(i),this.h()},h(){w(l,"class","text-right pr-2 md:pr-4 text-base md:text-xl"),w(s,"href",m=X+"/"+a[7].model+"/"+a[13].id),w(r,"class","w-12 md:w-14"),w(n,"class",""),w(T,"class","gap-1 items-center ml-4 hidden md:flex"),w(u,"class","text-lg md:text-2xl flex items-center h-12"),w(b,"class","hidden md:table-cell"),w(I,"class","hidden md:table-cell"),w(B,"class","hidden md:table-cell")},m(v,V){h(v,l,V),N(l,e),h(v,t,V),h(v,r,V),N(r,s),ae(p,s,null),h(v,d,V),h(v,u,V),N(u,n),R.m(n,null),N(u,_),N(u,T);for(let Y=0;Y<z.length;Y+=1)z[Y].m(T,null);h(v,o,V),h(v,b,V),G&&G.m(b,null),h(v,c,V),h(v,I,V),ee.m(I,null),h(v,E,V),h(v,B,V),P&&P.m(B,null),$=!0},p(v,V){(!$||V&4)&&f!==(f=ye(v[13])+"")&&Z(e,f);const Y={};if(V&4&&(Y.item=v[13]),p.$set(Y),(!$||V&132&&m!==(m=X+"/"+v[7].model+"/"+v[13].id))&&w(s,"href",m),g===(g=k(v))&&R?R.p(v,V):(R.d(1),R=g(v),R&&(R.c(),R.m(n,null))),V&4){M=v[13].types;let C;for(C=0;C<M.length;C+=1){const J=Fe(v,M,C);z[C]?(z[C].p(J,V),U(z[C],1)):(z[C]=Ge(J),z[C].c(),U(z[C],1),z[C].m(T,null))}for(ce(),C=M.length;C<z.length;C+=1)fe(C);me()}le===(le=te(v))&&G?G.p(v,V):(G&&G.d(1),G=le&&le(v),G&&(G.c(),G.m(b,null))),he===(he=_e(v))&&ee?ee.p(v,V):(ee.d(1),ee=he(v),ee&&(ee.c(),ee.m(I,null))),v[13].languages&&v[13].languages.length>0?P?P.p(v,V):(P=Je(v),P.c(),P.m(B,null)):P&&(P.d(1),P=null)},i(v){if(!$){U(p.$$.fragment,v);for(let V=0;V<M.length;V+=1)U(z[V]);$=!0}},o(v){O(p.$$.fragment,v),z=z.filter(Boolean);for(let V=0;V<z.length;V+=1)O(z[V]);$=!1},d(v){v&&i(l),v&&i(t),v&&i(r),ne(p),v&&i(d),v&&i(u),R.d(),we(z,v),v&&i(o),v&&i(b),G&&G.d(),v&&i(c),v&&i(I),ee.d(),v&&i(E),v&&i(B),P&&P.d()}}}function Tl(a){let l,f=a[13].name+"",e,t;return{c(){l=D("a"),e=S(f),this.h()},l(r){l=H(r,"A",{href:!0,class:!0});var s=A(l);e=j(s,f),s.forEach(i),this.h()},h(){w(l,"href",t=X+"/"+a[7].model+"/"+a[13].id),w(l,"class","text-brand-green hover:underline")},m(r,s){h(r,l,s),N(l,e)},p(r,s){s&4&&f!==(f=r[13].name+"")&&Z(e,f),s&132&&t!==(t=X+"/"+r[7].model+"/"+r[13].id)&&w(l,"href",t)},d(r){r&&i(l)}}}function wl(a){let l=a[13].name+"",f,e;return{c(){f=S(l),e=S("*")},l(t){f=j(t,l),e=j(t,"*")},m(t,r){h(t,f,r),h(t,e,r)},p(t,r){r&4&&l!==(l=t[13].name+"")&&Z(f,l)},d(t){t&&i(f),t&&i(e)}}}function Ge(a){let l,f;return l=new kl({props:{type:a[4]}}),{c(){se(l.$$.fragment)},l(e){re(l.$$.fragment,e)},m(e,t){ae(l,e,t),f=!0},p(e,t){const r={};t&4&&(r.type=e[4]),l.$set(r)},i(e){f||(U(l.$$.fragment,e),f=!0)},o(e){O(l.$$.fragment,e),f=!1},d(e){ne(l,e)}}}function Dl(a){let l;function f(r,s){return r[13].venueUrl?gl:r[13].venueName&&r[13].venueName!=="TBA"?Nl:Al}let e=f(a),t=e(a);return{c(){t.c(),l=Te()},l(r){t.l(r),l=Te()},m(r,s){t.m(r,s),h(r,l,s)},p(r,s){e===(e=f(r))&&t?t.p(r,s):(t.d(1),t=e(r),t&&(t.c(),t.m(l.parentNode,l)))},d(r){t.d(r),r&&i(l)}}}function Hl(a){let l,f=a[13].venues.map(a[10]).join(", ")+"",e;return{c(){l=new cl(!1),e=Te(),this.h()},l(t){l=hl(t,!1),e=Te(),this.h()},h(){l.a=e},m(t,r){l.m(f,t,r),h(t,e,r)},p(t,r){r&5&&f!==(f=t[13].venues.map(t[10]).join(", ")+"")&&l.p(f)},d(t){t&&i(e),t&&l.d()}}}function Al(a){let l,f;return{c(){l=D("span"),f=S("TBA"),this.h()},l(e){l=H(e,"SPAN",{class:!0});var t=A(l);f=j(t,"TBA"),t.forEach(i),this.h()},h(){w(l,"class","opacity-50")},m(e,t){h(e,l,t),N(l,f)},p:il,d(e){e&&i(l)}}}function Nl(a){let l=a[13].venueName+"",f;return{c(){f=S(l)},l(e){f=j(e,l)},m(e,t){h(e,f,t)},p(e,t){t&4&&l!==(l=e[13].venueName+"")&&Z(f,l)},d(e){e&&i(f)}}}function gl(a){let l,f=a[13].venueName+"",e,t;return{c(){l=D("a"),e=S(f),this.h()},l(r){l=H(r,"A",{href:!0,class:!0});var s=A(l);e=j(s,f),s.forEach(i),this.h()},h(){w(l,"href",t=a[13].venueUrl),w(l,"class","underline hover:no-underline external")},m(r,s){h(r,l,s),N(l,e)},p(r,s){s&4&&f!==(f=r[13].venueName+"")&&Z(e,f),s&4&&t!==(t=r[13].venueUrl)&&w(l,"href",t)},d(r){r&&i(l)}}}function Il(a){let l,f;return{c(){l=D("span"),f=S("TBA"),this.h()},l(e){l=H(e,"SPAN",{class:!0});var t=A(l);f=j(t,"TBA"),t.forEach(i),this.h()},h(){w(l,"class","opacity-50")},m(e,t){h(e,l,t),N(l,f)},p:il,d(e){e&&i(l)}}}function Bl(a){let l=a[13].attendees+"",f;return{c(){f=S(l)},l(e){f=j(e,l)},m(e,t){h(e,f,t)},p(e,t){t&4&&l!==(l=e[13].attendees+"")&&Z(f,l)},d(e){e&&i(f)}}}function Je(a){let l,f=a[13].languages,e=[];for(let t=0;t<f.length;t+=1)e[t]=Ke(je(a,f,t));return{c(){l=D("div");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){l=H(t,"DIV",{class:!0});var r=A(l);for(let s=0;s<e.length;s+=1)e[s].l(r);r.forEach(i),this.h()},h(){w(l,"class","flex gap-1")},m(t,r){h(t,l,r);for(let s=0;s<e.length;s+=1)e[s].m(l,null)},p(t,r){if(r&4){f=t[13].languages;let s;for(s=0;s<f.length;s+=1){const p=je(t,f,s);e[s]?e[s].p(p,r):(e[s]=Ke(p),e[s].c(),e[s].m(l,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=f.length}},d(t){t&&i(l),we(e,t)}}}function Ke(a){let l,f=pe(a[16])+"",e;return{c(){l=D("div"),e=S(f)},l(t){l=H(t,"DIV",{});var r=A(l);e=j(r,f),r.forEach(i)},m(t,r){h(t,l,r),N(l,e)},p(t,r){r&4&&f!==(f=pe(t[16])+"")&&Z(e,f)},d(t){t&&i(l)}}}function Qe(a){let l,f,e,t,r,s,p,m=a[13].name+"",d,u,n,_,T=(a[13].country&&a[13].country!=="xx"?pe(a[13].country,!1):"")+"",o,b,c,I,E,B,$;e=new ve({props:{item:a[13],img:"photoUrl",rounded:"rounded-full"}});let k=a[13].twitter&&We(a);return B=new sl({props:{source:a[13].caption||""}}),{c(){l=D("td"),f=D("a"),se(e.$$.fragment),r=y(),s=D("td"),p=D("a"),d=S(m),n=y(),_=D("td"),o=S(T),b=y(),c=D("td"),k&&k.c(),I=y(),E=D("td"),se(B.$$.fragment),this.h()},l(g){l=H(g,"TD",{class:!0});var R=A(l);f=H(R,"A",{href:!0});var M=A(f);re(e.$$.fragment,M),M.forEach(i),R.forEach(i),r=L(g),s=H(g,"TD",{class:!0});var z=A(s);p=H(z,"A",{href:!0,class:!0});var fe=A(p);d=j(fe,m),fe.forEach(i),z.forEach(i),n=L(g),_=H(g,"TD",{});var te=A(_);o=j(te,T),te.forEach(i),b=L(g),c=H(g,"TD",{class:!0});var le=A(c);k&&k.l(le),le.forEach(i),I=L(g),E=H(g,"TD",{class:!0});var G=A(E);re(B.$$.fragment,G),G.forEach(i),this.h()},h(){w(f,"href",t=X+"/"+a[7].model+"/"+a[13].id),w(l,"class","w-12 md:w-14"),w(p,"href",u=X+"/"+a[7].model+"/"+a[13].id),w(p,"class","text-brand-green hover:underline"),w(s,"class","text-2xl h-12"),w(c,"class","hidden md:table-cell"),w(E,"class","hidden md:table-cell")},m(g,R){h(g,l,R),N(l,f),ae(e,f,null),h(g,r,R),h(g,s,R),N(s,p),N(p,d),h(g,n,R),h(g,_,R),N(_,o),h(g,b,R),h(g,c,R),k&&k.m(c,null),h(g,I,R),h(g,E,R),ae(B,E,null),$=!0},p(g,R){const M={};R&4&&(M.item=g[13]),e.$set(M),(!$||R&132&&t!==(t=X+"/"+g[7].model+"/"+g[13].id))&&w(f,"href",t),(!$||R&4)&&m!==(m=g[13].name+"")&&Z(d,m),(!$||R&132&&u!==(u=X+"/"+g[7].model+"/"+g[13].id))&&w(p,"href",u),(!$||R&4)&&T!==(T=(g[13].country&&g[13].country!=="xx"?pe(g[13].country,!1):"")+"")&&Z(o,T),g[13].twitter?k?k.p(g,R):(k=We(g),k.c(),k.m(c,null)):k&&(k.d(1),k=null);const z={};R&4&&(z.source=g[13].caption||""),B.$set(z)},i(g){$||(U(e.$$.fragment,g),U(B.$$.fragment,g),$=!0)},o(g){O(e.$$.fragment,g),O(B.$$.fragment,g),$=!1},d(g){g&&i(l),ne(e),g&&i(r),g&&i(s),g&&i(n),g&&i(_),g&&i(b),g&&i(c),k&&k.d(),g&&i(I),g&&i(E),ne(B)}}}function We(a){let l,f,e=a[13].twitter+"",t,r;return{c(){l=S("@"),f=D("a"),t=S(e),this.h()},l(s){l=j(s,"@"),f=H(s,"A",{href:!0,class:!0});var p=A(f);t=j(p,e),p.forEach(i),this.h()},h(){w(f,"href",r="https://twitter.com/"+a[13].twitter),w(f,"class","underline hover:no-underline")},m(s,p){h(s,l,p),h(s,f,p),N(f,t)},p(s,p){p&4&&e!==(e=s[13].twitter+"")&&Z(t,e),p&4&&r!==(r="https://twitter.com/"+s[13].twitter)&&w(f,"href",r)},d(s){s&&i(l),s&&i(f)}}}function Xe(a){let l,f,e,t,r,s,p,m=a[13].name+"",d,u,n,_,T,o,b,c;e=new ve({props:{item:a[13],width:"w-16",aspect:"aspect-[16/9]"}});let I=a[13].languages&&a[13].languages.length>0&&Ze(a);return b=new sl({props:{source:a[13].description}}),{c(){l=D("td"),f=D("a"),se(e.$$.fragment),r=y(),s=D("td"),p=D("a"),d=S(m),n=y(),_=D("td"),I&&I.c(),T=y(),o=D("td"),se(b.$$.fragment),this.h()},l(E){l=H(E,"TD",{class:!0});var B=A(l);f=H(B,"A",{href:!0});var $=A(f);re(e.$$.fragment,$),$.forEach(i),B.forEach(i),r=L(E),s=H(E,"TD",{class:!0});var k=A(s);p=H(k,"A",{href:!0,class:!0});var g=A(p);d=j(g,m),g.forEach(i),k.forEach(i),n=L(E),_=H(E,"TD",{});var R=A(_);I&&I.l(R),R.forEach(i),T=L(E),o=H(E,"TD",{class:!0});var M=A(o);re(b.$$.fragment,M),M.forEach(i),this.h()},h(){w(f,"href",t=X+"/"+a[7].model+"/"+a[13].id),w(l,"class","w-20"),w(p,"href",u=X+"/"+a[7].model+"/"+a[13].id),w(p,"class","text-brand-green hover:underline"),w(s,"class","text-2xl h-12"),w(o,"class","hidden md:table-cell")},m(E,B){h(E,l,B),N(l,f),ae(e,f,null),h(E,r,B),h(E,s,B),N(s,p),N(p,d),h(E,n,B),h(E,_,B),I&&I.m(_,null),h(E,T,B),h(E,o,B),ae(b,o,null),c=!0},p(E,B){const $={};B&4&&($.item=E[13]),e.$set($),(!c||B&132&&t!==(t=X+"/"+E[7].model+"/"+E[13].id))&&w(f,"href",t),(!c||B&4)&&m!==(m=E[13].name+"")&&Z(d,m),(!c||B&132&&u!==(u=X+"/"+E[7].model+"/"+E[13].id))&&w(p,"href",u),E[13].languages&&E[13].languages.length>0?I?I.p(E,B):(I=Ze(E),I.c(),I.m(_,null)):I&&(I.d(1),I=null);const k={};B&4&&(k.source=E[13].description),b.$set(k)},i(E){c||(U(e.$$.fragment,E),U(b.$$.fragment,E),c=!0)},o(E){O(e.$$.fragment,E),O(b.$$.fragment,E),c=!1},d(E){E&&i(l),ne(e),E&&i(r),E&&i(s),E&&i(n),E&&i(_),I&&I.d(),E&&i(T),E&&i(o),ne(b)}}}function Ze(a){let l,f=a[13].languages,e=[];for(let t=0;t<f.length;t+=1)e[t]=xe(Se(a,f,t));return{c(){l=D("div");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){l=H(t,"DIV",{class:!0});var r=A(l);for(let s=0;s<e.length;s+=1)e[s].l(r);r.forEach(i),this.h()},h(){w(l,"class","flex gap-1")},m(t,r){h(t,l,r);for(let s=0;s<e.length;s+=1)e[s].m(l,null)},p(t,r){if(r&4){f=t[13].languages;let s;for(s=0;s<f.length;s+=1){const p=Se(t,f,s);e[s]?e[s].p(p,r):(e[s]=xe(p),e[s].c(),e[s].m(l,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=f.length}},d(t){t&&i(l),we(e,t)}}}function xe(a){let l,f=pe(a[16])+"",e;return{c(){l=D("div"),e=S(f)},l(t){l=H(t,"DIV",{});var r=A(l);e=j(r,f),r.forEach(i)},m(t,r){h(t,l,r),N(l,e)},p(t,r){r&4&&f!==(f=pe(t[16])+"")&&Z(e,f)},d(t){t&&i(l)}}}function el(a){let l,f,e,t,r,s,p,m=a[13].name+"",d,u,n,_,T=a[13].slogan+"",o,b;return e=new ve({props:{item:a[13],width:"w-16",aspect:"aspect-[16/9]"}}),{c(){l=D("td"),f=D("a"),se(e.$$.fragment),r=y(),s=D("td"),p=D("a"),d=S(m),n=y(),_=D("td"),o=S(T),this.h()},l(c){l=H(c,"TD",{class:!0});var I=A(l);f=H(I,"A",{href:!0});var E=A(f);re(e.$$.fragment,E),E.forEach(i),I.forEach(i),r=L(c),s=H(c,"TD",{class:!0});var B=A(s);p=H(B,"A",{href:!0,class:!0});var $=A(p);d=j($,m),$.forEach(i),B.forEach(i),n=L(c),_=H(c,"TD",{class:!0});var k=A(_);o=j(k,T),k.forEach(i),this.h()},h(){w(f,"href",t=X+"/"+a[7].model+"/"+a[13].id),w(l,"class","w-20"),w(p,"href",u=X+"/"+a[7].model+"/"+a[13].id),w(p,"class","text-brand-green hover:underline"),w(s,"class","text-2xl h-12"),w(_,"class","h-12")},m(c,I){h(c,l,I),N(l,f),ae(e,f,null),h(c,r,I),h(c,s,I),N(s,p),N(p,d),h(c,n,I),h(c,_,I),N(_,o),b=!0},p(c,I){const E={};I&4&&(E.item=c[13]),e.$set(E),(!b||I&132&&t!==(t=X+"/"+c[7].model+"/"+c[13].id))&&w(f,"href",t),(!b||I&4)&&m!==(m=c[13].name+"")&&Z(d,m),(!b||I&132&&u!==(u=X+"/"+c[7].model+"/"+c[13].id))&&w(p,"href",u),(!b||I&4)&&T!==(T=c[13].slogan+"")&&Z(o,T)},i(c){b||(U(e.$$.fragment,c),b=!0)},o(c){O(e.$$.fragment,c),b=!1},d(c){c&&i(l),ne(e),c&&i(r),c&&i(s),c&&i(n),c&&i(_)}}}function ll(a){let l,f,e,t,r,s,p,m=a[13].name+"",d,u,n,_,T=a[13].capacity+"",o,b,c,I=a[13].address+"",E,B;return e=new ve({props:{item:a[13],img:"photo"}}),{c(){l=D("td"),f=D("a"),se(e.$$.fragment),r=y(),s=D("td"),p=D("a"),d=S(m),n=y(),_=D("td"),o=S(T),b=y(),c=D("td"),E=S(I),this.h()},l($){l=H($,"TD",{class:!0});var k=A(l);f=H(k,"A",{href:!0});var g=A(f);re(e.$$.fragment,g),g.forEach(i),k.forEach(i),r=L($),s=H($,"TD",{class:!0});var R=A(s);p=H(R,"A",{href:!0,class:!0});var M=A(p);d=j(M,m),M.forEach(i),R.forEach(i),n=L($),_=H($,"TD",{});var z=A(_);o=j(z,T),z.forEach(i),b=L($),c=H($,"TD",{class:!0});var fe=A(c);E=j(fe,I),fe.forEach(i),this.h()},h(){w(f,"href",t=X+"/"+a[7].model+"/"+a[13].id),w(l,"class","w-14"),w(p,"href",u=X+"/"+a[7].model+"/"+a[13].id),w(p,"class","text-brand-green hover:underline"),w(s,"class","text-2xl h-12"),w(c,"class","hidden md:table-cell")},m($,k){h($,l,k),N(l,f),ae(e,f,null),h($,r,k),h($,s,k),N(s,p),N(p,d),h($,n,k),h($,_,k),N(_,o),h($,b,k),h($,c,k),N(c,E),B=!0},p($,k){const g={};k&4&&(g.item=$[13]),e.$set(g),(!B||k&132&&t!==(t=X+"/"+$[7].model+"/"+$[13].id))&&w(f,"href",t),(!B||k&4)&&m!==(m=$[13].name+"")&&Z(d,m),(!B||k&132&&u!==(u=X+"/"+$[7].model+"/"+$[13].id))&&w(p,"href",u),(!B||k&4)&&T!==(T=$[13].capacity+"")&&Z(o,T),(!B||k&4)&&I!==(I=$[13].address+"")&&Z(E,I)},i($){B||(U(e.$$.fragment,$),B=!0)},o($){O(e.$$.fragment,$),B=!1},d($){$&&i(l),ne(e),$&&i(r),$&&i(s),$&&i(n),$&&i(_),$&&i(b),$&&i(c)}}}function tl(a){let l,f,e,t,r,s,p,m,d=a[4]==="events"&&Ye(a),u=a[4]==="speakers"&&Qe(a),n=a[4]==="media-partners"&&Xe(a),_=a[4]==="benefits"&&el(a),T=a[4]==="places"&&ll(a);return{c(){l=D("tr"),d&&d.c(),f=y(),u&&u.c(),e=y(),n&&n.c(),t=y(),_&&_.c(),r=y(),T&&T.c(),s=y(),this.h()},l(o){l=H(o,"TR",{class:!0,id:!0});var b=A(l);d&&d.l(b),f=L(b),u&&u.l(b),e=L(b),n&&n.l(b),t=L(b),_&&_.l(b),r=L(b),T&&T.l(b),s=L(b),b.forEach(i),this.h()},h(){w(l,"class","hover:bg-brand-yellow/20 dark:hover:bg-brand-white/10"),w(l,"id",p=a[13].id)},m(o,b){h(o,l,b),d&&d.m(l,null),N(l,f),u&&u.m(l,null),N(l,e),n&&n.m(l,null),N(l,t),_&&_.m(l,null),N(l,r),T&&T.m(l,null),N(l,s),m=!0},p(o,b){o[4]==="events"?d?(d.p(o,b),b&16&&U(d,1)):(d=Ye(o),d.c(),U(d,1),d.m(l,f)):d&&(ce(),O(d,1,1,()=>{d=null}),me()),o[4]==="speakers"?u?(u.p(o,b),b&16&&U(u,1)):(u=Qe(o),u.c(),U(u,1),u.m(l,e)):u&&(ce(),O(u,1,1,()=>{u=null}),me()),o[4]==="media-partners"?n?(n.p(o,b),b&16&&U(n,1)):(n=Xe(o),n.c(),U(n,1),n.m(l,t)):n&&(ce(),O(n,1,1,()=>{n=null}),me()),o[4]==="benefits"?_?(_.p(o,b),b&16&&U(_,1)):(_=el(o),_.c(),U(_,1),_.m(l,r)):_&&(ce(),O(_,1,1,()=>{_=null}),me()),o[4]==="places"?T?(T.p(o,b),b&16&&U(T,1)):(T=ll(o),T.c(),U(T,1),T.m(l,s)):T&&(ce(),O(T,1,1,()=>{T=null}),me()),(!m||b&4&&p!==(p=o[13].id))&&w(l,"id",p)},i(o){m||(U(d),U(u),U(n),U(_),U(T),m=!0)},o(o){O(d),O(u),O(n),O(_),O(T),m=!1},d(o){o&&i(l),d&&d.d(),u&&u.d(),n&&n.d(),_&&_.d(),T&&T.d()}}}function fl(a){let l,f;return l=new bl({props:{type:a[4]}}),{c(){se(l.$$.fragment)},l(e){re(l.$$.fragment,e)},m(e,t){ae(l,e,t),f=!0},p(e,t){const r={};t&16&&(r.type=e[4]),l.$set(r)},i(e){f||(U(l.$$.fragment,e),f=!0)},o(e){O(l.$$.fragment,e),f=!1},d(e){ne(l,e)}}}function Vl(a){var d;let l,f,e,t,r,s,p;document.title=l=((d=a[7])==null?void 0:d.title)+" | Regen Village 2024",e=new El({props:{path:!1,type:a[3].params.type}});let m=a[7]&&Re(a);return s=new pl({props:{bundle:a[0].bundle}}),{c(){f=y(),se(e.$$.fragment),t=y(),m&&m.c(),r=y(),se(s.$$.fragment)},l(u){ol("svelte-19zhhhj",document.head).forEach(i),f=L(u),re(e.$$.fragment,u),t=L(u),m&&m.l(u),r=L(u),re(s.$$.fragment,u)},m(u,n){h(u,f,n),ae(e,u,n),h(u,t,n),m&&m.m(u,n),h(u,r,n),ae(s,u,n),p=!0},p(u,[n]){var o;(!p||n&128)&&l!==(l=((o=u[7])==null?void 0:o.title)+" | Regen Village 2024")&&(document.title=l);const _={};n&8&&(_.type=u[3].params.type),e.$set(_),u[7]?m?(m.p(u,n),n&128&&U(m,1)):(m=Re(u),m.c(),U(m,1),m.m(r.parentNode,r)):m&&(ce(),O(m,1,1,()=>{m=null}),me());const T={};n&1&&(T.bundle=u[0].bundle),s.$set(T)},i(u){p||(U(e.$$.fragment,u),U(m),U(s.$$.fragment,u),p=!0)},o(u){O(e.$$.fragment,u),O(m),O(s.$$.fragment,u),p=!1},d(u){u&&i(f),ne(e,u),u&&i(t),m&&m.d(u),u&&i(r),ne(s,u)}}}function yl(a,l,f){let e,t,r,s,p,m;ul(a,dl,c=>f(3,m=c));let{data:d}=l,u="",n=0,_={};function T(c,I={},E=""){if(!c)return[];c=[...c],e==="events"&&(c=c.sort(($,k)=>$.date>k.date?1:-1)),e==="events"&&I.start&&I.end&&(c=c.filter($=>$.segments.find(k=>(k.times.split("-"),Ve(new Date(k.startTime),new Date(I.start))<=0&&Ve(new Date(k.endTime),new Date(I.end))>=0)))),["speakers","benefits","media-partner"].includes(e)&&(c=c.sort(($,k)=>$.name.toLowerCase()>k.name.toLowerCase()?1:-1)),e==="places"&&(c=c.sort(($,k)=>$.capacity>k.capacity?-1:1));const B=$=>typeof $.replace!="function"?$:$.normalize("NFD").toLowerCase().replace(/[\u0300-\u036F]/g,"");return E?(_={},c=c.map($=>{const k=[["name",50],["tags",30],["caption",20],["venueName"],["venueAddress"],["org"],["chains"],["description"],["twitter"],["country"]];_[$.id]=0;for(const[g,R=20]of k){let M=typeof $[g]=="array"?$[g].join(", "):$[g];typeof M=="string"&&B(M).match(new RegExp(B(E),"si"))&&(_[$.id]+=R)}return $}).filter($=>_[$.id]>0).sort(($,k)=>_[$.id]>_[k.id]?-1:1)):f(5,n=c.filter($=>!$.hidden).length),c}_l(async()=>{if(!ke.collections[m.params.type]){const c=Object.keys(ke.collections).find(I=>ke.collections[I].model===m.params.type);c&&vl(`${X}/${c}`)}});function o(){u=this.value,f(1,u)}const b=c=>{const I=d.bundle.places.find(E=>E.id===c);return`<a href="${X}/place/${I.id}" class="underline hover:no-underline">${I.name}</a>`};return a.$$set=c=>{"data"in c&&f(0,d=c.data)},a.$$.update=()=>{a.$$.dirty&8&&f(4,e=m.params.type),a.$$.dirty&16&&f(7,t=ke.collections[e]),a.$$.dirty&17&&f(8,r=e==="speakers"?$l(d.bundle[e]):d.bundle[e]),a.$$.dirty&258&&f(2,s=T(r,{},u)),a.$$.dirty&4&&f(6,p=s.filter(c=>!c.hidden).length)},[d,u,s,m,e,n,p,t,r,o,b]}class zl extends rl{constructor(l){super(),al(this,l,yl,Vl,nl,{data:0})}}export{zl as default};