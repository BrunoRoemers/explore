import{S as ke,i as De,s as we,k as D,a as Z,l as w,m as E,c as X,h as b,n as p,a2 as ce,b as z,T as y,a3 as ue,f as $,g as J,t as W,d as K,a1 as F,q as O,r as N,p as q,u as Q,$ as _e,O as L,w as Ee,x as Ie,y as ze,z as Me,N as P,a4 as x,U as je}from"./singletons-c9b53750.js";import{g as Se}from"./Disclaimer-15eeef6d.js";import{t as Ve,c as Te,m as He,a as U,f as T,b as H,d as ee,I as Ze}from"./Footer-158f70bc.js";function Xe(e,t){const a=+Ve(e);return Te(e,a+t)}function C(e,t){return Xe(e,t*He)}function te(e,t,a){const s=e.slice();return s[20]=t[a],s[22]=a,s}function le(e,t,a){const s=e.slice();return s[23]=t[a],s}function ne(e,t,a){const s=e.slice();return s[20]=t[a],s}function se(e,t,a){const s=e.slice();return s[28]=t[a][0],s[29]=t[a][1],s}function ae(e){let t,a,s=e[1].title+"",r,d,l,o,i,_,g;const h=[Oe,$e],u=[];function c(n,m){return n[5].length>0?0:1}return l=c(e),o=u[l]=h[l](e),{c(){t=D("div"),a=D("div"),r=O(s),d=Z(),o.c(),this.h()},l(n){t=w(n,"DIV",{class:!0,style:!0});var m=E(t);a=w(m,"DIV",{class:!0});var f=E(a);r=N(f,s),f.forEach(b),d=X(m),o.l(m),m.forEach(b),this.h()},h(){p(a,"class","uppercase brand-text-color-secondary text-lg"),p(t,"class",i="absolute top-[81px] w-[300px] border dark:border-gray-400 bg-white dark:bg-brand-dark dark:text-gray-200 z-50 py-2 px-4 "+(e[1]?"hidden md:block":"hidden")),q(t,"left",(e[1].event.layerX+e[2]<e[3]?e[1].event.layerX:e[1].event.layerX-e[2])+"px"),ce(()=>e[12].call(t))},m(n,m){z(n,t,m),y(t,a),y(a,r),y(t,d),u[l].m(t,null),_=ue(t,e[12].bind(t)),g=!0},p(n,m){(!g||m[0]&2)&&s!==(s=n[1].title+"")&&Q(r,s);let f=l;l=c(n),l===f?u[l].p(n,m):(J(),W(u[f],1,1,()=>{u[f]=null}),K(),o=u[l],o?o.p(n,m):(o=u[l]=h[l](n),o.c()),$(o,1),o.m(t,null)),(!g||m[0]&2&&i!==(i="absolute top-[81px] w-[300px] border dark:border-gray-400 bg-white dark:bg-brand-dark dark:text-gray-200 z-50 py-2 px-4 "+(n[1]?"hidden md:block":"hidden")))&&p(t,"class",i),(!g||m[0]&14)&&q(t,"left",(n[1].event.layerX+n[2]<n[3]?n[1].event.layerX:n[1].event.layerX-n[2])+"px")},i(n){g||($(o),g=!0)},o(n){W(o),g=!1},d(n){n&&b(t),u[l].d(),_()}}}function $e(e){let t,a;return{c(){t=D("div"),a=O("No events"),this.h()},l(s){t=w(s,"DIV",{class:!0});var r=E(t);a=N(r,"No events"),r.forEach(b),this.h()},h(){p(t,"class","text-lg mt-4 brand-text-color-secondary")},m(s,r){z(s,t,r),y(t,a)},p:L,i:L,o:L,d(s){s&&b(t)}}}function Oe(e){let t,a,s=e[5],r=[];for(let l=0;l<s.length;l+=1)r[l]=oe(se(e,s,l));const d=l=>W(r[l],1,1,()=>{r[l]=null});return{c(){t=D("div");for(let l=0;l<r.length;l+=1)r[l].c();this.h()},l(l){t=w(l,"DIV",{class:!0});var o=E(t);for(let i=0;i<r.length;i+=1)r[i].l(o);o.forEach(b),this.h()},h(){p(t,"class","text-xl mt-4")},m(l,o){z(l,t,o);for(let i=0;i<r.length;i+=1)r[i].m(t,null);a=!0},p(l,o){if(o[0]&32){s=l[5];let i;for(i=0;i<s.length;i+=1){const _=se(l,s,i);r[i]?(r[i].p(_,o),$(r[i],1)):(r[i]=oe(_),r[i].c(),$(r[i],1),r[i].m(t,null))}for(J(),i=s.length;i<r.length;i+=1)d(i);K()}},i(l){if(!a){for(let o=0;o<s.length;o+=1)$(r[o]);a=!0}},o(l){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)W(r[o]);a=!1},d(l){l&&b(t),F(r,l)}}}function re(e){let t;return{c(){t=O("*")},l(a){t=N(a,"*")},m(a,s){z(a,t,s)},d(a){a&&b(t)}}}function ie(e){let t,a=e[28].segments[e[29]].title+"",s;return{c(){t=O("- "),s=O(a)},l(r){t=N(r,"- "),s=N(r,a)},m(r,d){z(r,t,d),z(r,s,d)},p(r,d){d[0]&32&&a!==(a=r[28].segments[r[29]].title+"")&&Q(s,a)},d(r){r&&b(t),r&&b(s)}}}function oe(e){let t,a,s,r,d,l=(e[28].shortname||e[28].name)+"",o,i,_,g;s=new Ze({props:{item:e[28],width:"h-8"}});let h=e[28].hidden&&re(),u=e[28].segments[e[29]].title&&ie(e);return{c(){t=D("div"),a=D("div"),Ee(s.$$.fragment),r=Z(),d=D("div"),o=O(l),h&&h.c(),i=Z(),u&&u.c(),_=Z(),this.h()},l(c){t=w(c,"DIV",{class:!0});var n=E(t);a=w(n,"DIV",{class:!0});var m=E(a);Ie(s.$$.fragment,m),m.forEach(b),r=X(n),d=w(n,"DIV",{class:!0});var f=E(d);o=N(f,l),h&&h.l(f),i=X(f),u&&u.l(f),f.forEach(b),_=X(n),n.forEach(b),this.h()},h(){p(a,"class",""),p(d,"class",""),p(t,"class","flex gap-2 items-center mb-1")},m(c,n){z(c,t,n),y(t,a),ze(s,a,null),y(t,r),y(t,d),y(d,o),h&&h.m(d,null),y(d,i),u&&u.m(d,null),y(t,_),g=!0},p(c,n){const m={};n[0]&32&&(m.item=c[28]),s.$set(m),(!g||n[0]&32)&&l!==(l=(c[28].shortname||c[28].name)+"")&&Q(o,l),c[28].hidden?h||(h=re(),h.c(),h.m(d,i)):h&&(h.d(1),h=null),c[28].segments[c[29]].title?u?u.p(c,n):(u=ie(c),u.c(),u.m(d,null)):u&&(u.d(1),u=null)},i(c){g||($(s.$$.fragment,c),g=!0)},o(c){W(s.$$.fragment,c),g=!1},d(c){c&&b(t),Me(s),h&&h.d(),u&&u.d()}}}function de(e){let t,a,s,r=T(new Date(e[20]),"eee ",{timeZone:H.tz})+"",d,l,o=T(new Date(e[20]),"d",{timeZone:H.tz})+"",i,_,g;return{c(){t=D("div"),a=D("a"),s=D("span"),d=O(r),l=Z(),i=O(o),_=Z(),this.h()},l(h){t=w(h,"DIV",{class:!0,style:!0});var u=E(t);a=w(u,"A",{href:!0});var c=E(a);s=w(c,"SPAN",{class:!0});var n=E(s);d=N(n,r),n.forEach(b),l=X(c),i=N(c,o),c.forEach(b),_=X(u),u.forEach(b),this.h()},h(){p(s,"class","hidden md:inline-block"),p(a,"href",_e+"/day/"+T(new Date(e[20]),"yyyy-MM-dd",{timeZone:H.tz})),p(t,"class",g="mb-1 uppercase "+(e[0]&&e[0]!==e[20]?"text-gray-400 text-lg":"text-brand-navy text-lg")),q(t,"width",1/(e[6].length/100)+"%")},m(h,u){z(h,t,u),y(t,a),y(a,s),y(s,d),y(a,l),y(a,i),y(t,_)},p(h,u){u[0]&1&&g!==(g="mb-1 uppercase "+(h[0]&&h[0]!==h[20]?"text-gray-400 text-lg":"text-brand-navy text-lg"))&&p(t,"class",g)},d(h){h&&b(t)}}}function fe(e){let t,a,s,r,d;return{c(){t=D("div"),this.h()},l(l){t=w(l,"DIV",{id:!0,"data-events":!0,"data-score":!0,class:!0,style:!0}),E(t).forEach(b),this.h()},h(){p(t,"id",e[20]+"-"+e[23]),p(t,"data-events",a=e[4][[e[20],e[23]].join(";")].events),p(t,"data-score",s=e[4][[e[20],e[23]].join(";")].score),p(t,"class","md:hover:border md:hover:border-brand-yellow flex-grow cursor-pointer"),q(t,"width",1/(e[7].length/50)+"%"),q(t,"background-color","rgba("+(!e[0]||e[0]===e[20]?"0, 36, 225":"115, 115, 115")+", "+e[4][[e[20],e[23]].join(";")].perc+"%)")},m(l,o){z(l,t,o),r||(d=[P(t,"click",function(){x(e[9](e[20],e[23],e[4][[e[20],e[23]].join(";")]))&&e[9](e[20],e[23],e[4][[e[20],e[23]].join(";")]).apply(this,arguments)}),P(t,"mouseenter",function(){x(e[8](e[20],e[23],e[4][[e[20],e[23]].join(";")]))&&e[8](e[20],e[23],e[4][[e[20],e[23]].join(";")]).apply(this,arguments)}),P(t,"mouseleave",e[10])],r=!0)},p(l,o){e=l,o[0]&16&&a!==(a=e[4][[e[20],e[23]].join(";")].events)&&p(t,"data-events",a),o[0]&16&&s!==(s=e[4][[e[20],e[23]].join(";")].score)&&p(t,"data-score",s),o[0]&17&&q(t,"background-color","rgba("+(!e[0]||e[0]===e[20]?"0, 36, 225":"115, 115, 115")+", "+e[4][[e[20],e[23]].join(";")].perc+"%)")},d(l){l&&b(t),r=!1,je(d)}}}function he(e){let t,a,s,r=e[7],d=[];for(let l=0;l<r.length;l+=1)d[l]=fe(le(e,r,l));return{c(){t=D("div");for(let l=0;l<d.length;l+=1)d[l].c();a=Z(),this.h()},l(l){t=w(l,"DIV",{class:!0,style:!0});var o=E(t);for(let i=0;i<d.length;i+=1)d[i].l(o);a=X(o),o.forEach(b),this.h()},h(){p(t,"class","h-10 flex flex-grow hover:bg-brand-yellow/20"),p(t,"style",s="width: "+1/(e[6].length/100)+"%; "+(e[0]&&e[0]===e[20]?"border: 1px solid rgb(0, 36, 225);":e[0]?e[6].length-e[22]>1?"border-right: 1px solid silver;":"":"border-right: 1px solid rgb(0, 36, 225);"))},m(l,o){z(l,t,o);for(let i=0;i<d.length;i+=1)d[i].m(t,null);y(t,a)},p(l,o){if(o[0]&2001){r=l[7];let i;for(i=0;i<r.length;i+=1){const _=le(l,r,i);d[i]?d[i].p(_,o):(d[i]=fe(_),d[i].c(),d[i].m(t,a))}for(;i<d.length;i+=1)d[i].d(1);d.length=r.length}o[0]&1&&s!==(s="width: "+1/(l[6].length/100)+"%; "+(l[0]&&l[0]===l[20]?"border: 1px solid rgb(0, 36, 225);":l[0]?l[6].length-l[22]>1?"border-right: 1px solid silver;":"":"border-right: 1px solid rgb(0, 36, 225);"))&&p(t,"style",s)},d(l){l&&b(t),F(d,l)}}}function Ne(e){let t,a,s,r,d,l,o,i,_=e[1]&&ae(e),g=e[6],h=[];for(let n=0;n<g.length;n+=1)h[n]=de(ne(e,g,n));let u=e[6],c=[];for(let n=0;n<u.length;n+=1)c[n]=he(te(e,u,n));return{c(){t=D("div"),_&&_.c(),a=Z(),s=D("div");for(let n=0;n<h.length;n+=1)h[n].c();d=Z(),l=D("div");for(let n=0;n<c.length;n+=1)c[n].c();this.h()},l(n){t=w(n,"DIV",{class:!0});var m=E(t);_&&_.l(m),a=X(m),s=w(m,"DIV",{class:!0});var f=E(s);for(let S=0;S<h.length;S+=1)h[S].l(f);f.forEach(b),d=X(m),l=w(m,"DIV",{class:!0});var M=E(l);for(let S=0;S<c.length;S+=1)c[S].l(M);M.forEach(b),m.forEach(b),this.h()},h(){p(s,"class","flex text-center text-gray-400 text-sm items-end h-10"),ce(()=>e[13].call(s)),p(l,"class",o="w-full border "+(e[0]?"border-gray-300":"border-brand-navy")+" flex"),p(t,"class","w-full mb-10 relative")},m(n,m){z(n,t,m),_&&_.m(t,null),y(t,a),y(t,s);for(let f=0;f<h.length;f+=1)h[f].m(s,null);r=ue(s,e[13].bind(s)),y(t,d),y(t,l);for(let f=0;f<c.length;f+=1)c[f].m(l,null);i=!0},p(n,m){if(n[1]?_?(_.p(n,m),m[0]&2&&$(_,1)):(_=ae(n),_.c(),$(_,1),_.m(t,a)):_&&(J(),W(_,1,1,()=>{_=null}),K()),m[0]&65){g=n[6];let f;for(f=0;f<g.length;f+=1){const M=ne(n,g,f);h[f]?h[f].p(M,m):(h[f]=de(M),h[f].c(),h[f].m(s,null))}for(;f<h.length;f+=1)h[f].d(1);h.length=g.length}if(m[0]&2001){u=n[6];let f;for(f=0;f<u.length;f+=1){const M=te(n,u,f);c[f]?c[f].p(M,m):(c[f]=he(M),c[f].c(),c[f].m(l,null))}for(;f<c.length;f+=1)c[f].d(1);c.length=u.length}(!i||m[0]&1&&o!==(o="w-full border "+(n[0]?"border-gray-300":"border-brand-navy")+" flex"))&&p(l,"class",o)},i(n){i||($(_),i=!0)},o(n){W(_),i=!1},d(n){n&&b(t),_&&_.d(),F(h,n),r(),F(c,n)}}}const G="2024-05-18",We="2024-05-27",B=60,Ae="09:00-18:00";function qe(e,t,a){let s,{data:r}=t,{highlightDay:d=!1}=t;const l=r.bundle;let o,i,_=null;const g=[];let h=G;for(;U(new Date(h),new Date(We))<=0;)g.push(T(new Date(h),"yyyy-MM-dd",{timeZone:H.tz})),h=ee(new Date(h),1);const u=[];let c="00:00";for(;!u.includes(c);)u.push(T(new Date(G+"T"+c),"HH:mm",{timeZone:H.tz})),c=T(C(new Date(G+"T"+c),B),"HH:mm",{timeZone:H.tz});const n={};for(const v of g)for(const k of u)n[[v,k].join(";")]={score:0,events:[]};function m(v,k,I,j){for(const V of g)for(const A of u){const R=new Date(`${V}T${A}`),pe=new Date(C(R,B));if(U(R,v.end)<0&&U(pe,v.start)>0){const ye=I?I>3e3?3e3:I<200?200:I:0,Y=n[[V,A].join(";")];Y.score+=ye||0,Y.events.push([k,j])}}}for(const v of l.events)for(let k=0;k<v.segments.length;k++){const I=v.segments[k],[j,V]=(I.times||Ae).split("-"),A={start:new Date(`${I.date}T${j}`),end:new Date(`${V<=j?T(ee(new Date(I.date),1),"yyyy-MM-dd",{timeZone:H.tz}):I.date}T${V}`)};m(A,v.id,I.ecap||v.attendees,k)}const f=Math.max(...Object.keys(n).map(v=>n[v].score));for(const v of Object.keys(n)){const k=n[v];k.perc=k.score/(f/100)}function M(v,k,I){const j=new Date(`${v}T${k}`),V=T(j,"EEEE MMMM d | HH:mm - ",{timeZone:H.tz})+T(C(j,B),"HH:mm",{timeZone:H.tz});return A=>{a(1,_={day:v,segment:k,data:I,event:A,title:V})}}function S(v,k,I){const j=new Date(`${v}T${k}`),V=C(j,B);Se(`${_e}/day/${v}?start=${j.toISOString()}&end=${V.toISOString()}`)}function me(){a(1,_=null)}function ge(v){return l.events.find(k=>k.id===v)}function ve(){o=this.clientWidth,a(2,o)}function be(){i=this.clientWidth,a(3,i)}return e.$$set=v=>{"data"in v&&a(11,r=v.data),"highlightDay"in v&&a(0,d=v.highlightDay)},e.$$.update=()=>{e.$$.dirty[0]&2&&a(5,s=_?_.data.events.map(v=>[ge(v[0]),v[1]]):[])},[d,_,o,i,n,s,g,u,M,S,me,r,ve,be]}class Le extends ke{constructor(t){super(),De(this,t,qe,Ne,we,{data:11,highlightDay:0},null,[-1,-1])}}export{Le as T};