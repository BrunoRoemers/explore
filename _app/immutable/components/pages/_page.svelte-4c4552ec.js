import{S as Te,i as Ae,s as Pe,a as y,k as g,w as j,q as p,a0 as qe,h as o,c as D,l as v,m as _,x as G,r as $,n as b,b as se,T as t,y as J,u as oe,f as K,t as Q,a1 as Fe,z as W,$ as ie}from"../../chunks/singletons-c9b53750.js";import{C as we}from"../../chunks/CollectionList-ccf4215c.js";import{T as Le}from"../../chunks/TimelineHeatmap-60d898f8.js";import{D as Me}from"../../chunks/Disclaimer-15eeef6d.js";import{F as Se}from"../../chunks/Footer-158f70bc.js";import{p as ze}from"../../chunks/utils-5e2d373b.js";function Ve(a,s,n){const l=a.slice();return l[5]=s[n],l}function He(a){var I;let s,n,l=(a[5].value||((I=a[0].bundle[a[5].col])==null?void 0:I.filter(a[5].filter||Ce).length))+"",h,E,x=a[5].title+"",i,c;return{c(){s=g("a"),n=g("button"),h=p(l),E=y(),i=p(x),c=y(),this.h()},l(m){s=v(m,"A",{href:!0});var k=_(s);n=v(k,"BUTTON",{class:!0});var w=_(n);h=$(w,l),E=D(w),i=$(w,x),w.forEach(o),c=D(k),k.forEach(o),this.h()},h(){b(n,"class","border rounded border-brand-navy hover:bg-brand-navy hover:text-white py-2 px-2 text-brand-navy hover:shadow-lg"),b(s,"href",ie+"/"+a[5].col)},m(m,k){se(m,s,k),t(s,n),t(n,h),t(n,E),t(n,i),t(s,c)},p(m,k){var w;k&1&&l!==(l=(m[5].value||((w=m[0].bundle[m[5].col])==null?void 0:w.filter(m[5].filter||Ce).length))+"")&&oe(h,l)},d(m){m&&o(s)}}}function Be(a){let s,n,l,h,E,x,i,c,I,m,k,w=a[2].length+"",le,ce,fe,M,de,z,T,he,V,B,ue,me,X=a[1].length+"",ae,ge,pe,N,A,ve,H,O,_e,$e,Y=a[0].bundle.places.length+"",ne,be,Ee,R,P,re,q,S,U=a[3],f=[];for(let e=0;e<U.length;e+=1)f[e]=He(Ve(a,U,e));return x=new Le({props:{data:a[0]}}),M=new Me({}),T=new we({props:{arr:a[2],img:"logo",col:"event",offer:!0}}),A=new we({props:{arr:a[1],img:"logo",col:"event"}}),P=new we({props:{arr:a[0].bundle.places,col:"place",img:"photo",offer:!0}}),q=new Se({props:{bundle:a[0].bundle}}),{c(){s=y(),n=g("div"),l=g("div"),h=g("div");for(let e=0;e<f.length;e+=1)f[e].c();E=y(),j(x.$$.fragment),i=y(),c=g("h2"),I=g("a"),m=p("Conferences and Hackathons"),k=p(" ("),le=p(w),ce=p(")"),fe=y(),j(M.$$.fragment),de=y(),z=g("div"),j(T.$$.fragment),he=y(),V=g("h2"),B=g("a"),ue=p("Meetups, parties and other events"),me=p(" ("),ae=p(X),ge=p(")"),pe=y(),N=g("div"),j(A.$$.fragment),ve=y(),H=g("h2"),O=g("a"),_e=p("Places"),$e=p(" ("),ne=p(Y),be=p(")"),Ee=y(),R=g("div"),j(P.$$.fragment),re=y(),j(q.$$.fragment),this.h()},l(e){qe("svelte-1aat59v",document.head).forEach(o),s=D(e),n=v(e,"DIV",{class:!0});var C=_(n);l=v(C,"DIV",{class:!0});var r=_(l);h=v(r,"DIV",{class:!0});var Z=_(h);for(let xe=0;xe<f.length;xe+=1)f[xe].l(Z);Z.forEach(o),E=D(r),G(x.$$.fragment,r),i=D(r),c=v(r,"H2",{class:!0});var F=_(c);I=v(F,"A",{href:!0});var ee=_(I);m=$(ee,"Conferences and Hackathons"),ee.forEach(o),k=$(F," ("),le=$(F,w),ce=$(F,")"),F.forEach(o),fe=D(r),G(M.$$.fragment,r),de=D(r),z=v(r,"DIV",{class:!0});var u=_(z);G(T.$$.fragment,u),u.forEach(o),he=D(r),V=v(r,"H2",{class:!0});var L=_(V);B=v(L,"A",{href:!0});var ye=_(B);ue=$(ye,"Meetups, parties and other events"),ye.forEach(o),me=$(L," ("),ae=$(L,X),ge=$(L,")"),L.forEach(o),pe=D(r),N=v(r,"DIV",{class:!0});var De=_(N);G(A.$$.fragment,De),De.forEach(o),ve=D(r),H=v(r,"H2",{class:!0});var te=_(H);O=v(te,"A",{href:!0});var ke=_(O);_e=$(ke,"Places"),ke.forEach(o),$e=$(te," ("),ne=$(te,Y),be=$(te,")"),te.forEach(o),Ee=D(r),R=v(r,"DIV",{class:!0});var Ie=_(R);G(P.$$.fragment,Ie),Ie.forEach(o),r.forEach(o),C.forEach(o),re=D(e),G(q.$$.fragment,e),this.h()},h(){document.title="Regen Village 2024",b(h,"class","flex flex-wrap gap-2 my-6 text-center text-lg"),b(I,"href",ie+"/events"),b(c,"class","text-2xl uppercase font-bold brand-text-color-secondary"),b(z,"class","grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 my-6 text-center text-2xl"),b(B,"href",ie+"/events"),b(V,"class","text-2xl uppercase font-bold brand-text-color-secondary"),b(N,"class","grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 my-6 text-center text-2xl"),b(O,"href",ie+"/places"),b(H,"class","text-2xl uppercase font-bold mt-10 brand-text-color-secondary"),b(R,"class","grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 my-6 text-center text-2xl"),b(l,"class","max-w-7xl mx-auto pt-2"),b(n,"class","w-full px-6 xl:mx-0")},m(e,d){se(e,s,d),se(e,n,d),t(n,l),t(l,h);for(let C=0;C<f.length;C+=1)f[C].m(h,null);t(l,E),J(x,l,null),t(l,i),t(l,c),t(c,I),t(I,m),t(c,k),t(c,le),t(c,ce),t(l,fe),J(M,l,null),t(l,de),t(l,z),J(T,z,null),t(l,he),t(l,V),t(V,B),t(B,ue),t(V,me),t(V,ae),t(V,ge),t(l,pe),t(l,N),J(A,N,null),t(l,ve),t(l,H),t(H,O),t(O,_e),t(H,$e),t(H,ne),t(H,be),t(l,Ee),t(l,R),J(P,R,null),se(e,re,d),J(q,e,d),S=!0},p(e,[d]){if(d&9){U=e[3];let u;for(u=0;u<U.length;u+=1){const L=Ve(e,U,u);f[u]?f[u].p(L,d):(f[u]=He(L),f[u].c(),f[u].m(h,null))}for(;u<f.length;u+=1)f[u].d(1);f.length=U.length}const C={};d&1&&(C.data=e[0]),x.$set(C),(!S||d&4)&&w!==(w=e[2].length+"")&&oe(le,w);const r={};d&4&&(r.arr=e[2]),T.$set(r),(!S||d&2)&&X!==(X=e[1].length+"")&&oe(ae,X);const Z={};d&2&&(Z.arr=e[1]),A.$set(Z),(!S||d&1)&&Y!==(Y=e[0].bundle.places.length+"")&&oe(ne,Y);const F={};d&1&&(F.arr=e[0].bundle.places),P.$set(F);const ee={};d&1&&(ee.bundle=e[0].bundle),q.$set(ee)},i(e){S||(K(x.$$.fragment,e),K(M.$$.fragment,e),K(T.$$.fragment,e),K(A.$$.fragment,e),K(P.$$.fragment,e),K(q.$$.fragment,e),S=!0)},o(e){Q(x.$$.fragment,e),Q(M.$$.fragment,e),Q(T.$$.fragment,e),Q(A.$$.fragment,e),Q(P.$$.fragment,e),Q(q.$$.fragment,e),S=!1},d(e){e&&o(s),e&&o(n),Fe(f,e),W(x),W(M),W(T),W(A),W(P),e&&o(re),W(q,e)}}}const Ce=a=>a;function Ne(a,s,n){let l,h,{data:E}=s;ze(E.bundle.speakers);const x=[{title:"Days",value:10,col:"schedule"},{title:"Events",col:"events",filter:i=>!i.hidden},{title:"Places",col:"places"}];return a.$$set=i=>{"data"in i&&n(0,E=i.data)},a.$$.update=()=>{a.$$.dirty&1&&n(2,l=E.bundle.events.filter(i=>i.types.find(c=>["conference","hackathon"].includes(c))&&!i.hidden)),a.$$.dirty&1&&n(1,h=E.bundle.events.filter(i=>!i.types.find(c=>["conference","hackathon"].includes(c))&&!i.hidden))},[E,h,l,x]}class Ke extends Te{constructor(s){super(),Ae(this,s,Ne,Be,Pe,{data:0})}}export{Ke as default};
