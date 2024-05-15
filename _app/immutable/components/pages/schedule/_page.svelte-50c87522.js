import{S as K,i as O,s as Q,a as S,w as A,k as M,a0 as R,h as $,c as V,x as B,l as k,m as z,n as w,b as C,y as x,T as y,f as T,d as U,t as I,z as F,a1 as X,_ as Y,q as L,r as N,$ as W,u as Z,g as ee}from"../../../chunks/singletons-c9b53750.js";import{p as te}from"../../../chunks/stores-6b80303c.js";import{T as ae}from"../../../chunks/TimelineHeatmap-baedb32d.js";import{D as se}from"../../../chunks/Disclaimer-894f522c.js";import{C as ne}from"../../../chunks/CalendarList-b393cf62.js";import{F as re,g as P,b as H,d as le,a as j}from"../../../chunks/Footer-29bf62a2.js";import{H as oe}from"../../../chunks/EventTypeBadge-3b934b40.js";function G(l,o,r){const i=l.slice();return i[4]=o[r],i}function J(l){let o,r,i,p=P(new Date(l[4].date),H.tz,"MMMM d, yyyy")+"",_,f,m,g,b,u=P(new Date(l[4].date),H.tz,"EEEE")+"",D,c,h,s,t;return s=new ne({props:{date:l[2].params.date,segments:l[4].segments,bundle:l[0].bundle}}),{c(){o=M("div"),r=M("h2"),i=M("a"),_=L(p),m=S(),g=M("span"),b=L("- "),D=L(u),c=S(),h=M("div"),A(s.$$.fragment),this.h()},l(d){o=k(d,"DIV",{class:!0});var e=z(o);r=k(e,"H2",{class:!0});var a=z(r);i=k(a,"A",{href:!0,class:!0});var v=z(i);_=N(v,p),v.forEach($),m=V(a),g=k(a,"SPAN",{class:!0});var E=z(g);b=N(E,"- "),D=N(E,u),E.forEach($),a.forEach($),c=V(e),h=k(e,"DIV",{class:!0});var n=z(h);B(s.$$.fragment,n),n.forEach($),e.forEach($),this.h()},h(){w(i,"href",f=W+"/day/"+l[4].date),w(i,"class","text-bbw-navy hover:underline"),w(g,"class","bbw-text-color-primary"),w(r,"class","text-3xl md:text-3xl"),w(h,"class","mt-6"),w(o,"class","mb-14")},m(d,e){C(d,o,e),y(o,r),y(r,i),y(i,_),y(r,m),y(r,g),y(g,b),y(g,D),y(o,c),y(o,h),x(s,h,null),t=!0},p(d,e){(!t||e&2)&&p!==(p=P(new Date(d[4].date),H.tz,"MMMM d, yyyy")+"")&&Z(_,p),(!t||e&2&&f!==(f=W+"/day/"+d[4].date))&&w(i,"href",f),(!t||e&2)&&u!==(u=P(new Date(d[4].date),H.tz,"EEEE")+"")&&Z(D,u);const a={};e&4&&(a.date=d[2].params.date),e&2&&(a.segments=d[4].segments),e&1&&(a.bundle=d[0].bundle),s.$set(a)},i(d){t||(T(s.$$.fragment,d),t=!0)},o(d){I(s.$$.fragment,d),t=!1},d(d){d&&$(o),F(s)}}}function ie(l){let o,r,i,p,_,f,m,g,b,u,D,c,h;r=new oe({props:{path:!1,type:"schedule"}}),m=new ae({props:{data:l[0],highlightDay:l[2].params.date}});let s=l[1],t=[];for(let e=0;e<s.length;e+=1)t[e]=J(G(l,s,e));const d=e=>I(t[e],1,1,()=>{t[e]=null});return u=new se({props:{type:"events"}}),c=new re({props:{bundle:l[0].bundle}}),{c(){o=S(),A(r.$$.fragment),i=S(),p=M("div"),_=M("div"),f=M("div"),A(m.$$.fragment),g=S();for(let e=0;e<t.length;e+=1)t[e].c();b=S(),A(u.$$.fragment),D=S(),A(c.$$.fragment),this.h()},l(e){R("svelte-3i5odb",document.head).forEach($),o=V(e),B(r.$$.fragment,e),i=V(e),p=k(e,"DIV",{class:!0});var v=z(p);_=k(v,"DIV",{class:!0});var E=z(_);f=k(E,"DIV",{class:!0});var n=z(f);B(m.$$.fragment,n),g=V(n);for(let q=0;q<t.length;q+=1)t[q].l(n);b=V(n),B(u.$$.fragment,n),n.forEach($),E.forEach($),v.forEach($),D=V(e),B(c.$$.fragment,e),this.h()},h(){document.title="Schedule | Berlin Blockchain Week 2024",w(f,"class","mx-4 xl:mx-0"),w(_,"class","max-w-7xl mx-auto pt-5 md:pt-10"),w(p,"class","w-full")},m(e,a){C(e,o,a),x(r,e,a),C(e,i,a),C(e,p,a),y(p,_),y(_,f),x(m,f,null),y(f,g);for(let v=0;v<t.length;v+=1)t[v].m(f,null);y(f,b),x(u,f,null),C(e,D,a),x(c,e,a),h=!0},p(e,[a]){const v={};if(a&1&&(v.data=e[0]),a&4&&(v.highlightDay=e[2].params.date),m.$set(v),a&7){s=e[1];let n;for(n=0;n<s.length;n+=1){const q=G(e,s,n);t[n]?(t[n].p(q,a),T(t[n],1)):(t[n]=J(q),t[n].c(),T(t[n],1),t[n].m(f,b))}for(ee(),n=s.length;n<t.length;n+=1)d(n);U()}const E={};a&1&&(E.bundle=e[0].bundle),c.$set(E)},i(e){if(!h){T(r.$$.fragment,e),T(m.$$.fragment,e);for(let a=0;a<s.length;a+=1)T(t[a]);T(u.$$.fragment,e),T(c.$$.fragment,e),h=!0}},o(e){I(r.$$.fragment,e),I(m.$$.fragment,e),t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)I(t[a]);I(u.$$.fragment,e),I(c.$$.fragment,e),h=!1},d(e){e&&$(o),F(r,e),e&&$(i),e&&$(p),F(m),X(t,e),F(u),e&&$(D),F(c,e)}}}function me(l,o,r){let i,p;Y(l,te,m=>r(2,p=m));let{data:_}=o;function f(m){const g=[];for(let b=0;b<H.days;b++){const u=P(le(new Date(H.date),b),H.tz,"yyyy-MM-dd"),D={start:u+"T00:00",end:u+"T23:59"};let c=[];for(const h of m)for(const s of h.segments)j(new Date(s.startTime),new Date(D.end))<=0&&j(new Date(s.startTime),new Date(D.start))>=0&&c.push({startTime:s.startTime,endTime:s.endTime,event:h,title:s.title,venues:s.venues||h.venues||!1});c=c.sort((h,s)=>h.startTime>s.startTime?1:-1),g.push({date:u,segments:c})}return g}return l.$$set=m=>{"data"in m&&r(0,_=m.data)},l.$$.update=()=>{l.$$.dirty&1&&r(1,i=f(_.bundle.events))},[_,i,p]}class ge extends K{constructor(o){super(),O(this,o,me,ie,Q,{data:0})}}export{ge as default};