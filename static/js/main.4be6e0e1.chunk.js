(this["webpackJsonpninja-turtles"]=this["webpackJsonpninja-turtles"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(10),i=n.n(o),s=(n(8),n(3)),a=n(4),l=n(6),h=n(5),u=(n(9),n(0)),j=function(e){var t=e.name,n=e.email;e.id;return Object(u.jsxs)("div",{className:"NinjaContainer",children:[Object(u.jsx)("img",{alt:"Ninja Turtles",src:"https://robohash.org/op?set=set2"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:t}),Object(u.jsx)("p",{children:n})]})]})},d=n(2),b=function(e){var t=e.robots,n=t.map((function(e,n){return Object(u.jsx)(j,{id:t[n].id,name:t[n].name,email:t[n].email},n)}));return console.log("The Addition of the two numbers is ".concat(Object(d.add)(2,5))),console.log("The subtarction of the two numbers is ".concat(Object(d.subtract)(2,5))),console.log("The Area of the given Circle is ".concat(Object(d.areaOfCircle)(9))),console.log(" The Volume of the given Cylinder is ".concat(Object(d.volumeOfCylinder)(9,5))),console.log(" The Volume of the given Cone is ".concat(Object(d.volumeOfCone)(7,11))),Object(u.jsx)("div",{className:"NinjaContain",children:n})},O=function(e){return Object(u.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"},children:e.children})},f=function(e){e.searchField;var t=e.searchChange;return Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"search",placeholder:"Search Avatar",onChange:t})})},v=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(a.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("h1",{children:"Still Working On Update"}):this.props.children}}]),n}(c.Component),g=(n(16),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(null===t||void 0===t?void 0:t.length)?Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"sega",children:"Ninja Turtles"}),Object(u.jsx)(f,{searchChange:this.onSearchange}),Object(u.jsx)(O,{children:Object(u.jsx)(v,{children:Object(u.jsx)(b,{robots:c})})})]}):Object(u.jsx)("h1",{className:"sega",children:"Loading"})}}]),n}(c.Component)),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),o(e),i(e)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),m()},8:function(e,t,n){},9:function(e,t,n){}},[[17,1,2]]]);
//# sourceMappingURL=main.4be6e0e1.chunk.js.map