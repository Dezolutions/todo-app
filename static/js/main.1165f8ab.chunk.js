(this["webpackJsonpapp-todo"]=this["webpackJsonpapp-todo"]||[]).push([[0],{22:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),s=c.n(a),i=c(6),o=c.n(i),r=(c(22),c(15)),l=c(4),d=c(2),p=function(e){return{type:"ADD_TODO",id:Date.now(),text:e}},O=c(9),j=c.n(O),u=function(e){var t=e.text,c=e.id,a=e.completed,s=Object(d.b)(),i=j()("app__list-item",{"app__list-item-completed":a}),o=j()("app__btn-delete",{"app__btn-delete-completed":a}),r=j()("custom-checkbox",{"custom-checkbox-checked":a});return Object(n.jsxs)("li",{className:i,onClick:function(){s(function(e){return{type:"TOGGLE_TODO",id:e}}(c))},children:[Object(n.jsx)("input",{className:"app__list-checkbox",type:"checkbox",readOnly:!0,checked:a}),Object(n.jsx)("span",{className:r,children:Object(n.jsx)("i",{className:"fas fa-check"})}),Object(n.jsx)("p",{className:"app__list-text",children:t}),Object(n.jsx)("button",{onClick:function(){s(function(e){return{type:"REMOVE_TODO",id:e}}(c))},className:o,children:Object(n.jsx)("i",{className:"fas fa-trash"})})]})},b=function(e){var t=e.todos;return Object(n.jsx)("ul",{className:"app__list",children:t.map((function(e){return Object(n.jsx)(u,Object(l.a)({},e),e.id)}))})};var _=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e})),c=s.a.useState(""),a=Object(r.a)(c,2),i=a[0],o=a[1];return s.a.useEffect((function(){localStorage.setItem("todos",JSON.stringify(t))}),[t]),Object(n.jsx)("div",{className:"app",children:Object(n.jsxs)("div",{className:"app__block",children:[Object(n.jsx)("div",{className:"app__block-header",children:Object(n.jsx)("h1",{className:"app__block-title",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447"})}),Object(n.jsxs)("div",{className:"app__main",children:[Object(n.jsxs)("div",{className:"app__main-input",children:[Object(n.jsx)("input",{onChange:function(e){o(e.target.value)},onKeyPress:function(t){"Enter"===t.key&&(e(p(i)),o(""))},value:i,type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438"}),Object(n.jsx)("button",{onClick:function(){e(p(i)),o("")},className:"app__btn-add",children:"+"})]}),Object(n.jsx)(b,{todos:t})]})]})})},m=(c(28),c(32),c(33),c(34),c(8)),h=c(16),x=JSON.parse(localStorage.getItem("todos"));var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(h.a)(e),[{id:t.id,text:t.text,completed:!1}]);case"TOGGLE_TODO":return e.map((function(e){return e.id===t.id?Object(l.a)(Object(l.a)({},e),{},{completed:!e.completed}):e}));case"REMOVE_TODO":return e.filter((function(e){return e.id!==t.id}));default:return e}},N=Object(m.b)(f,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(d.a,{store:N,children:Object(n.jsx)(_,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.1165f8ab.chunk.js.map