(this.webpackJsonptoboard=this.webpackJsonptoboard||[]).push([[0],{263:function(e,t,n){},265:function(e,t,n){},294:function(e,t){},296:function(e,t){},305:function(e,t){},307:function(e,t){},332:function(e,t){},334:function(e,t){},335:function(e,t){},340:function(e,t){},342:function(e,t){},348:function(e,t){},350:function(e,t){},369:function(e,t){},381:function(e,t){},384:function(e,t){},410:function(e,t){},516:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),a=n(17),r=n.n(a),i=(n(263),n(154)),s=n.n(i),j=n(241),u=n(35),l=(n(265),n(552)),b=n(553),f=n(246),d=n.n(f),O=n(247),p=n.n(O),h=n(248),x=n.n(h),v=n(548),g=n(19),m=n(5);function S(){var e=c.a.useState("/"),t=Object(u.a)(e,2),n=t[0],o=t[1],a=Object(g.f)(),r=a.location.pathname;return n!==r&&o(r),Object(m.jsx)(v.a,{position:"fixed",color:"primary",style:{top:"auto",bottom:0},children:Object(m.jsxs)(l.a,{value:n,onChange:function(e,t){o(t),a.push(t)},showLabels:!0,children:["location.pathname",Object(m.jsx)(b.a,{label:"Home",value:"/toboard/",icon:Object(m.jsx)(d.a,{})}),Object(m.jsx)(b.a,{label:"Favorites",value:"/toboard/favorites",icon:Object(m.jsx)(p.a,{})}),Object(m.jsx)(b.a,{label:"Weekly Progress",value:"/toboard/weekly",icon:Object(m.jsx)(x.a,{})})]})})}var w=n(250),y=n(555),k=n(519),C=n(249),D=n.n(C),E=n(518),F=n(554),P=Object(o.createContext)({entries:[],setEntries:{},projects:[],setProjects:{},goals:[],setGoals:{},favorites:[],setFavorites:function(e){}});function A(e){var t=Object(o.useState)(""),n=Object(u.a)(t,2),c=n[0],a=n[1],r=Object(o.useState)(""),i=Object(u.a)(r,2),s=i[0],j=i[1],l=Object(o.useContext)(P),b=l.favorites,f=l.setFavorites,d=Object(o.useState)(!1),O=Object(u.a)(d,2),p=O[0],h=O[1];return p?Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(E.a,{children:[Object(m.jsx)("h4",{children:"New Favorite"}),Object(m.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(m.jsx)(y.a,{id:"description",label:"Description",onChange:function(e){return a(e.target.value)},placeholder:"",variant:"outlined"}),Object(m.jsx)(y.a,{id:"project",label:"Project",onChange:function(e){return j(e.target.value)},placeholder:"",variant:"outlined"})]}),Object(m.jsxs)(F.a,{variant:"text",color:"primary","aria-label":"text primary button group",children:[Object(m.jsx)(k.a,{onClick:function(){f([].concat(Object(w.a)(b),[{description:c,project:s,position:0}])),h(!1)},children:"Save"}),Object(m.jsx)(k.a,{onClick:function(){return h(!1)},children:"Cancel"})]})]})}):Object(m.jsx)(k.a,{startIcon:Object(m.jsx)(D.a,{fontSize:"large"}),onClick:function(){return h(!0)},size:"large",variant:"contained",color:"primary",children:"New Favorite"})}function I(){var e=Object(o.useContext)(P).favorites;return console.log("hi",e),Object(m.jsxs)(m.Fragment,{children:["Favorites",e.map((function(e){return Object(m.jsx)("div",{children:Object(m.jsxs)("h5",{children:[e.description," "]})})})),Object(m.jsx)("br",{}),Object(m.jsx)(A,{})]})}function N(){return Object(m.jsx)("div",{children:" WeeklyPage "})}function R(){return Object(m.jsx)("div",{children:" Welcome to toboard! "})}var W=n(29),z=new(n.n(W).a)({apiToken:"2ae0238cb610dc7c2f940e02379097a4"});function G(){var e=Object(o.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(o.useState)([]),r=Object(u.a)(a,2),i=r[0],l=r[1],b=Object(o.useState)([]),f=Object(u.a)(b,2),d=f[0],O=f[1],p=Object(o.useState)([]),h=Object(u.a)(p,2),x=h[0],v=h[1],w=Object(o.useMemo)((function(){return{entries:n,setEntries:c,projects:i,setProjects:l,goals:d,setGoals:O,favorites:x,setFavorites:v}}),[n,i,d,x]);return console.log("inited",n,i),Object(o.useEffect)((function(){function e(e){var t=new Set(e.map((function(e){return e.pid}))),n=Array.from(t),o=[];n.forEach((function(t){z.getProjectData(t,(function(t,n){t?console.log("error: ",t):(n.sum=0,e.forEach((function(e){e.pid===n.id&&e.duration>0&&(n.sum+=e.duration)})),o.push(n))}))})),l(o)}console.log("Rendering App"),z.getTimeEntries(function(){var e=new Date,t=e.getDay(),n=new Date;return 0===e.getDay()?n.setDate(e.getDate()-7):n.setDate(e.getDate()-(t-1)),n.setHours(0,0,0,0),n.toISOString()}(),(new Date).toISOString(),function(){var t=Object(j.a)(s.a.mark((function t(n,o){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n?console.log("Error getting timeEntries: ",n):(console.log("Received timeEntries:",o),o.forEach((function(e){e.isRunning=e.duration<0})),c(o),e(o));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())}),[]),Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("header",{className:"App-header",children:[Object(m.jsxs)(g.c,{children:[Object(m.jsx)(g.a,{path:"/toboard/",exact:!0,component:R}),Object(m.jsxs)(P.Provider,{value:w,children:[Object(m.jsx)(g.a,{path:"/toboard/favorites",component:I}),Object(m.jsx)(g.a,{path:"/toboard/weekly",component:N})]})]}),Object(m.jsx)(S,{})]})})}var H=n(107);r.a.render(Object(m.jsx)(H.a,{children:Object(m.jsx)(G,{})}),document.getElementById("root"))}},[[516,1,2]]]);
//# sourceMappingURL=main.e59b1953.chunk.js.map