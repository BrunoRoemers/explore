import{S as we,i as ke,s as De,k,a as H,l as D,m as E,c as X,h as p,n as b,a1 as ce,b as I,T as y,a2 as ue,f as O,g as K,t as A,d as Q,a0 as L,q as N,r as W,p as C,u as R,O as P,w as Ee,x as ze,y as Ie,z as Me,N as U,a3 as x,U as je}from"./singletons-2e385432.js";import{g as Se}from"./Disclaimer-5096a831.js";import{t as Ve,c as Te,m as Ze,a as G,f as S,b as V,d as ee,I as He}from"./Footer-abb653ea.js";function Xe(e,t){const i=+Ve(e);return Te(e,i+t)}function B(e,t){return Xe(e,t*Ze)}function te(e,t,i){const n=e.slice();return n[21]=t[i],n[23]=i,n}function le(e,t,i){const n=e.slice();return n[24]=t[i],n}function ne(e,t,i){const n=e.slice();return n[21]=t[i],n}function se(e,t,i){const n=e.slice();return n[29]=t[i][0],n[30]=t[i][1],n}function ie(e){let t,i,n=e[2].title+"",a,d,l,o,r,m,v;const _=[Ne,Oe],c=[];function f(s,u){return s[6].length>0?0:1}return l=f(e),o=c[l]=_[l](e),{c(){t=k("div"),i=k("div"),a=N(n),d=H(),o.c(),this.h()},l(s){t=D(s,"DIV",{class:!0,style:!0});var u=E(t);i=D(u,"DIV",{class:!0});var h=E(i);a=W(h,n),h.forEach(p),d=X(u),o.l(u),u.forEach(p),this.h()},h(){b(i,"class","uppercase bbw-text-color-secondary text-lg"),b(t,"class",r="absolute top-[81px] w-[300px] border dark:border-gray-400 bg-white dark:bg-bbw-dark dark:text-gray-200 z-50 py-2 px-4 "+(e[2]?"hidden md:block":"hidden")),C(t,"left",(e[2].event.layerX+e[3]<e[4]?e[2].event.layerX:e[2].event.layerX-e[3])+"px"),ce(()=>e[13].call(t))},m(s,u){I(s,t,u),y(t,i),y(i,a),y(t,d),c[l].m(t,null),m=ue(t,e[13].bind(t)),v=!0},p(s,u){(!v||u[0]&4)&&n!==(n=s[2].title+"")&&R(a,n);let h=l;l=f(s),l===h?c[l].p(s,u):(K(),A(c[h],1,1,()=>{c[h]=null}),Q(),o=c[l],o?o.p(s,u):(o=c[l]=_[l](s),o.c()),O(o,1),o.m(t,null)),(!v||u[0]&4&&r!==(r="absolute top-[81px] w-[300px] border dark:border-gray-400 bg-white dark:bg-bbw-dark dark:text-gray-200 z-50 py-2 px-4 "+(s[2]?"hidden md:block":"hidden")))&&b(t,"class",r),(!v||u[0]&28)&&C(t,"left",(s[2].event.layerX+s[3]<s[4]?s[2].event.layerX:s[2].event.layerX-s[3])+"px")},i(s){v||(O(o),v=!0)},o(s){A(o),v=!1},d(s){s&&p(t),c[l].d(),m()}}}function Oe(e){let t,i;return{c(){t=k("div"),i=N("No events"),this.h()},l(n){t=D(n,"DIV",{class:!0});var a=E(t);i=W(a,"No events"),a.forEach(p),this.h()},h(){b(t,"class","text-lg mt-4 bbw-text-color-secondary")},m(n,a){I(n,t,a),y(t,i)},p:P,i:P,o:P,d(n){n&&p(t)}}}function Ne(e){let t,i,n=e[6],a=[];for(let l=0;l<n.length;l+=1)a[l]=oe(se(e,n,l));const d=l=>A(a[l],1,1,()=>{a[l]=null});return{c(){t=k("div");for(let l=0;l<a.length;l+=1)a[l].c();this.h()},l(l){t=D(l,"DIV",{class:!0});var o=E(t);for(let r=0;r<a.length;r+=1)a[r].l(o);o.forEach(p),this.h()},h(){b(t,"class","text-xl mt-4")},m(l,o){I(l,t,o);for(let r=0;r<a.length;r+=1)a[r].m(t,null);i=!0},p(l,o){if(o[0]&64){n=l[6];let r;for(r=0;r<n.length;r+=1){const m=se(l,n,r);a[r]?(a[r].p(m,o),O(a[r],1)):(a[r]=oe(m),a[r].c(),O(a[r],1),a[r].m(t,null))}for(K(),r=n.length;r<a.length;r+=1)d(r);Q()}},i(l){if(!i){for(let o=0;o<n.length;o+=1)O(a[o]);i=!0}},o(l){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)A(a[o]);i=!1},d(l){l&&p(t),L(a,l)}}}function ae(e){let t;return{c(){t=N("*")},l(i){t=W(i,"*")},m(i,n){I(i,t,n)},d(i){i&&p(t)}}}function re(e){let t,i=e[29].segments[e[30]].title+"",n;return{c(){t=N("- "),n=N(i)},l(a){t=W(a,"- "),n=W(a,i)},m(a,d){I(a,t,d),I(a,n,d)},p(a,d){d[0]&64&&i!==(i=a[29].segments[a[30]].title+"")&&R(n,i)},d(a){a&&p(t),a&&p(n)}}}function oe(e){let t,i,n,a,d,l=(e[29].shortname||e[29].name)+"",o,r,m,v;n=new He({props:{item:e[29],width:"h-8"}});let _=e[29].hidden&&ae(),c=e[29].segments[e[30]].title&&re(e);return{c(){t=k("div"),i=k("div"),Ee(n.$$.fragment),a=H(),d=k("div"),o=N(l),_&&_.c(),r=H(),c&&c.c(),m=H(),this.h()},l(f){t=D(f,"DIV",{class:!0});var s=E(t);i=D(s,"DIV",{class:!0});var u=E(i);ze(n.$$.fragment,u),u.forEach(p),a=X(s),d=D(s,"DIV",{class:!0});var h=E(d);o=W(h,l),_&&_.l(h),r=X(h),c&&c.l(h),h.forEach(p),m=X(s),s.forEach(p),this.h()},h(){b(i,"class",""),b(d,"class",""),b(t,"class","flex gap-2 items-center mb-1")},m(f,s){I(f,t,s),y(t,i),Ie(n,i,null),y(t,a),y(t,d),y(d,o),_&&_.m(d,null),y(d,r),c&&c.m(d,null),y(t,m),v=!0},p(f,s){const u={};s[0]&64&&(u.item=f[29]),n.$set(u),(!v||s[0]&64)&&l!==(l=(f[29].shortname||f[29].name)+"")&&R(o,l),f[29].hidden?_||(_=ae(),_.c(),_.m(d,r)):_&&(_.d(1),_=null),f[29].segments[f[30]].title?c?c.p(f,s):(c=re(f),c.c(),c.m(d,null)):c&&(c.d(1),c=null)},i(f){v||(O(n.$$.fragment,f),v=!0)},o(f){A(n.$$.fragment,f),v=!1},d(f){f&&p(t),Me(n),_&&_.d(),c&&c.d()}}}function de(e){let t,i,n,a=S(new Date(e[21]),"eee ",{timeZone:V.tz})+"",d,l,o=S(new Date(e[21]),"d",{timeZone:V.tz})+"",r,m,v,_;return{c(){t=k("div"),i=k("a"),n=k("span"),d=N(a),l=H(),r=N(o),v=H(),this.h()},l(c){t=D(c,"DIV",{class:!0,style:!0});var f=E(t);i=D(f,"A",{href:!0});var s=E(i);n=D(s,"SPAN",{class:!0});var u=E(n);d=W(u,a),u.forEach(p),l=X(s),r=W(s,o),s.forEach(p),v=X(f),f.forEach(p),this.h()},h(){b(n,"class","hidden md:inline-block"),b(i,"href",m=e[1]+"/day/"+S(new Date(e[21]),"yyyy-MM-dd",{timeZone:V.tz})),b(t,"class",_="mb-1 uppercase "+(e[0]&&e[0]!==e[21]?"text-gray-400 text-lg":"text-bbw-navy text-lg")),C(t,"width",1/(e[7].length/100)+"%")},m(c,f){I(c,t,f),y(t,i),y(i,n),y(n,d),y(i,l),y(i,r),y(t,v)},p(c,f){f[0]&2&&m!==(m=c[1]+"/day/"+S(new Date(c[21]),"yyyy-MM-dd",{timeZone:V.tz}))&&b(i,"href",m),f[0]&1&&_!==(_="mb-1 uppercase "+(c[0]&&c[0]!==c[21]?"text-gray-400 text-lg":"text-bbw-navy text-lg"))&&b(t,"class",_)},d(c){c&&p(t)}}}function fe(e){let t,i,n,a,d;return{c(){t=k("div"),this.h()},l(l){t=D(l,"DIV",{id:!0,"data-events":!0,"data-score":!0,class:!0,style:!0}),E(t).forEach(p),this.h()},h(){b(t,"id",e[21]+"-"+e[24]),b(t,"data-events",i=e[5][[e[21],e[24]].join(";")].events),b(t,"data-score",n=e[5][[e[21],e[24]].join(";")].score),b(t,"class","md:hover:border md:hover:border-bbw-yellow flex-grow cursor-pointer"),C(t,"width",1/(e[8].length/50)+"%"),C(t,"background-color","rgba("+(!e[0]||e[0]===e[21]?"0, 36, 225":"115, 115, 115")+", "+e[5][[e[21],e[24]].join(";")].perc+"%)")},m(l,o){I(l,t,o),a||(d=[U(t,"click",function(){x(e[10](e[21],e[24],e[5][[e[21],e[24]].join(";")]))&&e[10](e[21],e[24],e[5][[e[21],e[24]].join(";")]).apply(this,arguments)}),U(t,"mouseenter",function(){x(e[9](e[21],e[24],e[5][[e[21],e[24]].join(";")]))&&e[9](e[21],e[24],e[5][[e[21],e[24]].join(";")]).apply(this,arguments)}),U(t,"mouseleave",e[11])],a=!0)},p(l,o){e=l,o[0]&32&&i!==(i=e[5][[e[21],e[24]].join(";")].events)&&b(t,"data-events",i),o[0]&32&&n!==(n=e[5][[e[21],e[24]].join(";")].score)&&b(t,"data-score",n),o[0]&33&&C(t,"background-color","rgba("+(!e[0]||e[0]===e[21]?"0, 36, 225":"115, 115, 115")+", "+e[5][[e[21],e[24]].join(";")].perc+"%)")},d(l){l&&p(t),a=!1,je(d)}}}function he(e){let t,i,n,a=e[8],d=[];for(let l=0;l<a.length;l+=1)d[l]=fe(le(e,a,l));return{c(){t=k("div");for(let l=0;l<d.length;l+=1)d[l].c();i=H(),this.h()},l(l){t=D(l,"DIV",{class:!0,style:!0});var o=E(t);for(let r=0;r<d.length;r+=1)d[r].l(o);i=X(o),o.forEach(p),this.h()},h(){b(t,"class","h-10 flex flex-grow hover:bg-bbw-yellow/20"),b(t,"style",n="width: "+1/(e[7].length/100)+"%; "+(e[0]&&e[0]===e[21]?"border: 1px solid rgb(0, 36, 225);":e[0]?e[7].length-e[23]>1?"border-right: 1px solid silver;":"":"border-right: 1px solid rgb(0, 36, 225);"))},m(l,o){I(l,t,o);for(let r=0;r<d.length;r+=1)d[r].m(t,null);y(t,i)},p(l,o){if(o[0]&4001){a=l[8];let r;for(r=0;r<a.length;r+=1){const m=le(l,a,r);d[r]?d[r].p(m,o):(d[r]=fe(m),d[r].c(),d[r].m(t,i))}for(;r<d.length;r+=1)d[r].d(1);d.length=a.length}o[0]&1&&n!==(n="width: "+1/(l[7].length/100)+"%; "+(l[0]&&l[0]===l[21]?"border: 1px solid rgb(0, 36, 225);":l[0]?l[7].length-l[23]>1?"border-right: 1px solid silver;":"":"border-right: 1px solid rgb(0, 36, 225);"))&&b(t,"style",n)},d(l){l&&p(t),L(d,l)}}}function We(e){let t,i,n,a,d,l,o,r,m=e[2]&&ie(e),v=e[7],_=[];for(let s=0;s<v.length;s+=1)_[s]=de(ne(e,v,s));let c=e[7],f=[];for(let s=0;s<c.length;s+=1)f[s]=he(te(e,c,s));return{c(){t=k("div"),m&&m.c(),i=H(),n=k("div");for(let s=0;s<_.length;s+=1)_[s].c();d=H(),l=k("div");for(let s=0;s<f.length;s+=1)f[s].c();this.h()},l(s){t=D(s,"DIV",{class:!0});var u=E(t);m&&m.l(u),i=X(u),n=D(u,"DIV",{class:!0});var h=E(n);for(let T=0;T<_.length;T+=1)_[T].l(h);h.forEach(p),d=X(u),l=D(u,"DIV",{class:!0});var M=E(l);for(let T=0;T<f.length;T+=1)f[T].l(M);M.forEach(p),u.forEach(p),this.h()},h(){b(n,"class","flex text-center text-gray-400 text-sm items-end h-10"),ce(()=>e[14].call(n)),b(l,"class",o="w-full border "+(e[0]?"border-gray-300":"border-bbw-navy")+" flex"),b(t,"class","w-full mb-10 relative")},m(s,u){I(s,t,u),m&&m.m(t,null),y(t,i),y(t,n);for(let h=0;h<_.length;h+=1)_[h].m(n,null);a=ue(n,e[14].bind(n)),y(t,d),y(t,l);for(let h=0;h<f.length;h+=1)f[h].m(l,null);r=!0},p(s,u){if(s[2]?m?(m.p(s,u),u[0]&4&&O(m,1)):(m=ie(s),m.c(),O(m,1),m.m(t,i)):m&&(K(),A(m,1,1,()=>{m=null}),Q()),u[0]&131){v=s[7];let h;for(h=0;h<v.length;h+=1){const M=ne(s,v,h);_[h]?_[h].p(M,u):(_[h]=de(M),_[h].c(),_[h].m(n,null))}for(;h<_.length;h+=1)_[h].d(1);_.length=v.length}if(u[0]&4001){c=s[7];let h;for(h=0;h<c.length;h+=1){const M=te(s,c,h);f[h]?f[h].p(M,u):(f[h]=he(M),f[h].c(),f[h].m(l,null))}for(;h<f.length;h+=1)f[h].d(1);f.length=c.length}(!r||u[0]&1&&o!==(o="w-full border "+(s[0]?"border-gray-300":"border-bbw-navy")+" flex"))&&b(l,"class",o)},i(s){r||(O(m),r=!0)},o(s){A(m),r=!1},d(s){s&&p(t),m&&m.d(),L(_,s),a(),L(f,s)}}}const J="2024-05-18",Ae="2024-05-27",F=60,qe="09:00-18:00";function Ce(e,t,i){let n,{data:a}=t,{highlightDay:d=!1}=t,{prefix:l=""}=t;const o=a.bundle;let r,m,v=null;const _=[];let c=J;for(;G(new Date(c),new Date(Ae))<=0;)_.push(S(new Date(c),"yyyy-MM-dd",{timeZone:V.tz})),c=ee(new Date(c),1);const f=[];let s="00:00";for(;!f.includes(s);)f.push(S(new Date(J+"T"+s),"HH:mm",{timeZone:V.tz})),s=S(B(new Date(J+"T"+s),F),"HH:mm",{timeZone:V.tz});const u={};for(const g of _)for(const w of f)u[[g,w].join(";")]={score:0,events:[]};function h(g,w,z,j){for(const Z of _)for(const q of f){const Y=new Date(`${Z}T${q}`),pe=new Date(B(Y,F));if(G(Y,g.end)<0&&G(pe,g.start)>0){const ye=z?z>3e3?3e3:z<200?200:z:0,$=u[[Z,q].join(";")];$.score+=ye||0,$.events.push([w,j])}}}for(const g of o.events)for(let w=0;w<g.segments.length;w++){const z=g.segments[w],[j,Z]=(z.times||qe).split("-"),q={start:new Date(`${z.date}T${j}`),end:new Date(`${Z<=j?S(ee(new Date(z.date),1),"yyyy-MM-dd",{timeZone:V.tz}):z.date}T${Z}`)};h(q,g.id,z.ecap||g.attendees,w)}const M=Math.max(...Object.keys(u).map(g=>u[g].score));for(const g of Object.keys(u)){const w=u[g];w.perc=w.score/(M/100)}function T(g,w,z){const j=new Date(`${g}T${w}`),Z=S(j,"EEEE MMMM d | HH:mm - ",{timeZone:V.tz})+S(B(j,F),"HH:mm",{timeZone:V.tz});return q=>{i(2,v={day:g,segment:w,data:z,event:q,title:Z})}}function _e(g,w,z){const j=new Date(`${g}T${w}`),Z=B(j,F);Se(`${l}/day/${g}?start=${j.toISOString()}&end=${Z.toISOString()}`)}function me(){i(2,v=null)}function ge(g){return o.events.find(w=>w.id===g)}function ve(){r=this.clientWidth,i(3,r)}function be(){m=this.clientWidth,i(4,m)}return e.$$set=g=>{"data"in g&&i(12,a=g.data),"highlightDay"in g&&i(0,d=g.highlightDay),"prefix"in g&&i(1,l=g.prefix)},e.$$.update=()=>{e.$$.dirty[0]&4&&i(6,n=v?v.data.events.map(g=>[ge(g[0]),g[1]]):[])},[d,l,v,r,m,u,n,_,f,T,_e,me,a,ve,be]}class Pe extends we{constructor(t){super(),ke(this,t,Ce,We,De,{data:12,highlightDay:0,prefix:1},null,[-1,-1])}}export{Pe as T};
