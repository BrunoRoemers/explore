import{S as we,i as ke,s as De,k,a as Z,l as D,m as E,c as X,h as b,n as p,a2 as ce,b as z,T as y,a3 as ue,f as $,g as J,t as W,d as K,a1 as F,q as O,r as N,p as q,u as Q,$ as _e,O as L,w as Ee,x as Ie,y as ze,z as Me,N as P,a4 as x,U as je}from"./singletons-c9b53750.js";import{g as Se}from"./Disclaimer-894f522c.js";import{t as Ve,c as Te,m as He,a as U,f as T,b as H,d as ee,I as Ze}from"./Footer-29bf62a2.js";function Xe(e,t){const i=+Ve(e);return Te(e,i+t)}function C(e,t){return Xe(e,t*He)}function te(e,t,i){const s=e.slice();return s[20]=t[i],s[22]=i,s}function le(e,t,i){const s=e.slice();return s[23]=t[i],s}function ne(e,t,i){const s=e.slice();return s[20]=t[i],s}function se(e,t,i){const s=e.slice();return s[28]=t[i][0],s[29]=t[i][1],s}function ie(e){let t,i,s=e[1].title+"",a,d,l,o,r,_,g;const h=[Oe,$e],u=[];function c(n,m){return n[5].length>0?0:1}return l=c(e),o=u[l]=h[l](e),{c(){t=k("div"),i=k("div"),a=O(s),d=Z(),o.c(),this.h()},l(n){t=D(n,"DIV",{class:!0,style:!0});var m=E(t);i=D(m,"DIV",{class:!0});var f=E(i);a=N(f,s),f.forEach(b),d=X(m),o.l(m),m.forEach(b),this.h()},h(){p(i,"class","uppercase bbw-text-color-secondary text-lg"),p(t,"class",r="absolute top-[81px] w-[300px] border dark:border-gray-400 bg-white dark:bg-bbw-dark dark:text-gray-200 z-50 py-2 px-4 "+(e[1]?"hidden md:block":"hidden")),q(t,"left",(e[1].event.layerX+e[2]<e[3]?e[1].event.layerX:e[1].event.layerX-e[2])+"px"),ce(()=>e[12].call(t))},m(n,m){z(n,t,m),y(t,i),y(i,a),y(t,d),u[l].m(t,null),_=ue(t,e[12].bind(t)),g=!0},p(n,m){(!g||m[0]&2)&&s!==(s=n[1].title+"")&&Q(a,s);let f=l;l=c(n),l===f?u[l].p(n,m):(J(),W(u[f],1,1,()=>{u[f]=null}),K(),o=u[l],o?o.p(n,m):(o=u[l]=h[l](n),o.c()),$(o,1),o.m(t,null)),(!g||m[0]&2&&r!==(r="absolute top-[81px] w-[300px] border dark:border-gray-400 bg-white dark:bg-bbw-dark dark:text-gray-200 z-50 py-2 px-4 "+(n[1]?"hidden md:block":"hidden")))&&p(t,"class",r),(!g||m[0]&14)&&q(t,"left",(n[1].event.layerX+n[2]<n[3]?n[1].event.layerX:n[1].event.layerX-n[2])+"px")},i(n){g||($(o),g=!0)},o(n){W(o),g=!1},d(n){n&&b(t),u[l].d(),_()}}}function $e(e){let t,i;return{c(){t=k("div"),i=O("No events"),this.h()},l(s){t=D(s,"DIV",{class:!0});var a=E(t);i=N(a,"No events"),a.forEach(b),this.h()},h(){p(t,"class","text-lg mt-4 bbw-text-color-secondary")},m(s,a){z(s,t,a),y(t,i)},p:L,i:L,o:L,d(s){s&&b(t)}}}function Oe(e){let t,i,s=e[5],a=[];for(let l=0;l<s.length;l+=1)a[l]=oe(se(e,s,l));const d=l=>W(a[l],1,1,()=>{a[l]=null});return{c(){t=k("div");for(let l=0;l<a.length;l+=1)a[l].c();this.h()},l(l){t=D(l,"DIV",{class:!0});var o=E(t);for(let r=0;r<a.length;r+=1)a[r].l(o);o.forEach(b),this.h()},h(){p(t,"class","text-xl mt-4")},m(l,o){z(l,t,o);for(let r=0;r<a.length;r+=1)a[r].m(t,null);i=!0},p(l,o){if(o[0]&32){s=l[5];let r;for(r=0;r<s.length;r+=1){const _=se(l,s,r);a[r]?(a[r].p(_,o),$(a[r],1)):(a[r]=oe(_),a[r].c(),$(a[r],1),a[r].m(t,null))}for(J(),r=s.length;r<a.length;r+=1)d(r);K()}},i(l){if(!i){for(let o=0;o<s.length;o+=1)$(a[o]);i=!0}},o(l){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)W(a[o]);i=!1},d(l){l&&b(t),F(a,l)}}}function ae(e){let t;return{c(){t=O("*")},l(i){t=N(i,"*")},m(i,s){z(i,t,s)},d(i){i&&b(t)}}}function re(e){let t,i=e[28].segments[e[29]].title+"",s;return{c(){t=O("- "),s=O(i)},l(a){t=N(a,"- "),s=N(a,i)},m(a,d){z(a,t,d),z(a,s,d)},p(a,d){d[0]&32&&i!==(i=a[28].segments[a[29]].title+"")&&Q(s,i)},d(a){a&&b(t),a&&b(s)}}}function oe(e){let t,i,s,a,d,l=(e[28].shortname||e[28].name)+"",o,r,_,g;s=new Ze({props:{item:e[28],width:"h-8"}});let h=e[28].hidden&&ae(),u=e[28].segments[e[29]].title&&re(e);return{c(){t=k("div"),i=k("div"),Ee(s.$$.fragment),a=Z(),d=k("div"),o=O(l),h&&h.c(),r=Z(),u&&u.c(),_=Z(),this.h()},l(c){t=D(c,"DIV",{class:!0});var n=E(t);i=D(n,"DIV",{class:!0});var m=E(i);Ie(s.$$.fragment,m),m.forEach(b),a=X(n),d=D(n,"DIV",{class:!0});var f=E(d);o=N(f,l),h&&h.l(f),r=X(f),u&&u.l(f),f.forEach(b),_=X(n),n.forEach(b),this.h()},h(){p(i,"class",""),p(d,"class",""),p(t,"class","flex gap-2 items-center mb-1")},m(c,n){z(c,t,n),y(t,i),ze(s,i,null),y(t,a),y(t,d),y(d,o),h&&h.m(d,null),y(d,r),u&&u.m(d,null),y(t,_),g=!0},p(c,n){const m={};n[0]&32&&(m.item=c[28]),s.$set(m),(!g||n[0]&32)&&l!==(l=(c[28].shortname||c[28].name)+"")&&Q(o,l),c[28].hidden?h||(h=ae(),h.c(),h.m(d,r)):h&&(h.d(1),h=null),c[28].segments[c[29]].title?u?u.p(c,n):(u=re(c),u.c(),u.m(d,null)):u&&(u.d(1),u=null)},i(c){g||($(s.$$.fragment,c),g=!0)},o(c){W(s.$$.fragment,c),g=!1},d(c){c&&b(t),Me(s),h&&h.d(),u&&u.d()}}}function de(e){let t,i,s,a=T(new Date(e[20]),"eee ",{timeZone:H.tz})+"",d,l,o=T(new Date(e[20]),"d",{timeZone:H.tz})+"",r,_,g;return{c(){t=k("div"),i=k("a"),s=k("span"),d=O(a),l=Z(),r=O(o),_=Z(),this.h()},l(h){t=D(h,"DIV",{class:!0,style:!0});var u=E(t);i=D(u,"A",{href:!0});var c=E(i);s=D(c,"SPAN",{class:!0});var n=E(s);d=N(n,a),n.forEach(b),l=X(c),r=N(c,o),c.forEach(b),_=X(u),u.forEach(b),this.h()},h(){p(s,"class","hidden md:inline-block"),p(i,"href",_e+"/day/"+T(new Date(e[20]),"yyyy-MM-dd",{timeZone:H.tz})),p(t,"class",g="mb-1 uppercase "+(e[0]&&e[0]!==e[20]?"text-gray-400 text-lg":"text-bbw-navy text-lg")),q(t,"width",1/(e[6].length/100)+"%")},m(h,u){z(h,t,u),y(t,i),y(i,s),y(s,d),y(i,l),y(i,r),y(t,_)},p(h,u){u[0]&1&&g!==(g="mb-1 uppercase "+(h[0]&&h[0]!==h[20]?"text-gray-400 text-lg":"text-bbw-navy text-lg"))&&p(t,"class",g)},d(h){h&&b(t)}}}function fe(e){let t,i,s,a,d;return{c(){t=k("div"),this.h()},l(l){t=D(l,"DIV",{id:!0,"data-events":!0,"data-score":!0,class:!0,style:!0}),E(t).forEach(b),this.h()},h(){p(t,"id",e[20]+"-"+e[23]),p(t,"data-events",i=e[4][[e[20],e[23]].join(";")].events),p(t,"data-score",s=e[4][[e[20],e[23]].join(";")].score),p(t,"class","md:hover:border md:hover:border-bbw-yellow flex-grow cursor-pointer"),q(t,"width",1/(e[7].length/50)+"%"),q(t,"background-color","rgba("+(!e[0]||e[0]===e[20]?"0, 36, 225":"115, 115, 115")+", "+e[4][[e[20],e[23]].join(";")].perc+"%)")},m(l,o){z(l,t,o),a||(d=[P(t,"click",function(){x(e[9](e[20],e[23],e[4][[e[20],e[23]].join(";")]))&&e[9](e[20],e[23],e[4][[e[20],e[23]].join(";")]).apply(this,arguments)}),P(t,"mouseenter",function(){x(e[8](e[20],e[23],e[4][[e[20],e[23]].join(";")]))&&e[8](e[20],e[23],e[4][[e[20],e[23]].join(";")]).apply(this,arguments)}),P(t,"mouseleave",e[10])],a=!0)},p(l,o){e=l,o[0]&16&&i!==(i=e[4][[e[20],e[23]].join(";")].events)&&p(t,"data-events",i),o[0]&16&&s!==(s=e[4][[e[20],e[23]].join(";")].score)&&p(t,"data-score",s),o[0]&17&&q(t,"background-color","rgba("+(!e[0]||e[0]===e[20]?"0, 36, 225":"115, 115, 115")+", "+e[4][[e[20],e[23]].join(";")].perc+"%)")},d(l){l&&b(t),a=!1,je(d)}}}function he(e){let t,i,s,a=e[7],d=[];for(let l=0;l<a.length;l+=1)d[l]=fe(le(e,a,l));return{c(){t=k("div");for(let l=0;l<d.length;l+=1)d[l].c();i=Z(),this.h()},l(l){t=D(l,"DIV",{class:!0,style:!0});var o=E(t);for(let r=0;r<d.length;r+=1)d[r].l(o);i=X(o),o.forEach(b),this.h()},h(){p(t,"class","h-10 flex flex-grow hover:bg-bbw-yellow/20"),p(t,"style",s="width: "+1/(e[6].length/100)+"%; "+(e[0]&&e[0]===e[20]?"border: 1px solid rgb(0, 36, 225);":e[0]?e[6].length-e[22]>1?"border-right: 1px solid silver;":"":"border-right: 1px solid rgb(0, 36, 225);"))},m(l,o){z(l,t,o);for(let r=0;r<d.length;r+=1)d[r].m(t,null);y(t,i)},p(l,o){if(o[0]&2001){a=l[7];let r;for(r=0;r<a.length;r+=1){const _=le(l,a,r);d[r]?d[r].p(_,o):(d[r]=fe(_),d[r].c(),d[r].m(t,i))}for(;r<d.length;r+=1)d[r].d(1);d.length=a.length}o[0]&1&&s!==(s="width: "+1/(l[6].length/100)+"%; "+(l[0]&&l[0]===l[20]?"border: 1px solid rgb(0, 36, 225);":l[0]?l[6].length-l[22]>1?"border-right: 1px solid silver;":"":"border-right: 1px solid rgb(0, 36, 225);"))&&p(t,"style",s)},d(l){l&&b(t),F(d,l)}}}function Ne(e){let t,i,s,a,d,l,o,r,_=e[1]&&ie(e),g=e[6],h=[];for(let n=0;n<g.length;n+=1)h[n]=de(ne(e,g,n));let u=e[6],c=[];for(let n=0;n<u.length;n+=1)c[n]=he(te(e,u,n));return{c(){t=k("div"),_&&_.c(),i=Z(),s=k("div");for(let n=0;n<h.length;n+=1)h[n].c();d=Z(),l=k("div");for(let n=0;n<c.length;n+=1)c[n].c();this.h()},l(n){t=D(n,"DIV",{class:!0});var m=E(t);_&&_.l(m),i=X(m),s=D(m,"DIV",{class:!0});var f=E(s);for(let S=0;S<h.length;S+=1)h[S].l(f);f.forEach(b),d=X(m),l=D(m,"DIV",{class:!0});var M=E(l);for(let S=0;S<c.length;S+=1)c[S].l(M);M.forEach(b),m.forEach(b),this.h()},h(){p(s,"class","flex text-center text-gray-400 text-sm items-end h-10"),ce(()=>e[13].call(s)),p(l,"class",o="w-full border "+(e[0]?"border-gray-300":"border-bbw-navy")+" flex"),p(t,"class","w-full mb-10 relative")},m(n,m){z(n,t,m),_&&_.m(t,null),y(t,i),y(t,s);for(let f=0;f<h.length;f+=1)h[f].m(s,null);a=ue(s,e[13].bind(s)),y(t,d),y(t,l);for(let f=0;f<c.length;f+=1)c[f].m(l,null);r=!0},p(n,m){if(n[1]?_?(_.p(n,m),m[0]&2&&$(_,1)):(_=ie(n),_.c(),$(_,1),_.m(t,i)):_&&(J(),W(_,1,1,()=>{_=null}),K()),m[0]&65){g=n[6];let f;for(f=0;f<g.length;f+=1){const M=ne(n,g,f);h[f]?h[f].p(M,m):(h[f]=de(M),h[f].c(),h[f].m(s,null))}for(;f<h.length;f+=1)h[f].d(1);h.length=g.length}if(m[0]&2001){u=n[6];let f;for(f=0;f<u.length;f+=1){const M=te(n,u,f);c[f]?c[f].p(M,m):(c[f]=he(M),c[f].c(),c[f].m(l,null))}for(;f<c.length;f+=1)c[f].d(1);c.length=u.length}(!r||m[0]&1&&o!==(o="w-full border "+(n[0]?"border-gray-300":"border-bbw-navy")+" flex"))&&p(l,"class",o)},i(n){r||($(_),r=!0)},o(n){W(_),r=!1},d(n){n&&b(t),_&&_.d(),F(h,n),a(),F(c,n)}}}const G="2024-05-18",We="2024-05-27",B=60,Ae="09:00-18:00";function qe(e,t,i){let s,{data:a}=t,{highlightDay:d=!1}=t;const l=a.bundle;let o,r,_=null;const g=[];let h=G;for(;U(new Date(h),new Date(We))<=0;)g.push(T(new Date(h),"yyyy-MM-dd",{timeZone:H.tz})),h=ee(new Date(h),1);const u=[];let c="00:00";for(;!u.includes(c);)u.push(T(new Date(G+"T"+c),"HH:mm",{timeZone:H.tz})),c=T(C(new Date(G+"T"+c),B),"HH:mm",{timeZone:H.tz});const n={};for(const v of g)for(const w of u)n[[v,w].join(";")]={score:0,events:[]};function m(v,w,I,j){for(const V of g)for(const A of u){const R=new Date(`${V}T${A}`),pe=new Date(C(R,B));if(U(R,v.end)<0&&U(pe,v.start)>0){const ye=I?I>3e3?3e3:I<200?200:I:0,Y=n[[V,A].join(";")];Y.score+=ye||0,Y.events.push([w,j])}}}for(const v of l.events)for(let w=0;w<v.segments.length;w++){const I=v.segments[w],[j,V]=(I.times||Ae).split("-"),A={start:new Date(`${I.date}T${j}`),end:new Date(`${V<=j?T(ee(new Date(I.date),1),"yyyy-MM-dd",{timeZone:H.tz}):I.date}T${V}`)};m(A,v.id,I.ecap||v.attendees,w)}const f=Math.max(...Object.keys(n).map(v=>n[v].score));for(const v of Object.keys(n)){const w=n[v];w.perc=w.score/(f/100)}function M(v,w,I){const j=new Date(`${v}T${w}`),V=T(j,"EEEE MMMM d | HH:mm - ",{timeZone:H.tz})+T(C(j,B),"HH:mm",{timeZone:H.tz});return A=>{i(1,_={day:v,segment:w,data:I,event:A,title:V})}}function S(v,w,I){const j=new Date(`${v}T${w}`),V=C(j,B);Se(`${_e}/day/${v}?start=${j.toISOString()}&end=${V.toISOString()}`)}function me(){i(1,_=null)}function ge(v){return l.events.find(w=>w.id===v)}function ve(){o=this.clientWidth,i(2,o)}function be(){r=this.clientWidth,i(3,r)}return e.$$set=v=>{"data"in v&&i(11,a=v.data),"highlightDay"in v&&i(0,d=v.highlightDay)},e.$$.update=()=>{e.$$.dirty[0]&2&&i(5,s=_?_.data.events.map(v=>[ge(v[0]),v[1]]):[])},[d,_,o,r,n,s,g,u,M,S,me,a,ve,be]}class Le extends we{constructor(t){super(),ke(this,t,qe,Ne,De,{data:11,highlightDay:0},null,[-1,-1])}}export{Le as T};