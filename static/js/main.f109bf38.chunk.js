(window["webpackJsonpcustomer-management"]=window["webpackJsonpcustomer-management"]||[]).push([[0],{31:function(e){e.exports=JSON.parse('{"customers":[{"id":1,"firstName":"Ross","lastName":"Geller","DOB":"11/03/1950"},{"id":2,"firstName":"Rachel","lastName":"Green","DOB":"01/06/1955"},{"id":3,"firstName":"Chandler","lastName":"Bing","DOB":"22/06/1944"},{"id":4,"firstName":"Monica","lastName":"Geller","DOB":"08/05/1956"}]}')},33:function(e,t,r){e.exports=r(44)},38:function(e,t,r){},44:function(e,t,r){"use strict";r.r(t);var a,n=r(0),s=r.n(n),o=r(13),c=r.n(o),m=(r(38),r(9)),l=r(10);!function(e){e.CREATE_CUSTOMER="CREATE_CUSTOMER",e.EDIT_CUSTOMER="EDIT_CUSTOMER",e.DELETE_CUSTOMER="DELETE_CUSTOMER"}(a||(a={}));var u=r(16),i=r(17),p=r(20),d=r(18),E=r(21),f=r(7),h="/",b=function(e){var t=e.customers,r=e.deleteCustomer;return s.a.createElement("table",{className:"table table-bordered"},s.a.createElement("thead",{className:"thead-light"},s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"Firstname"),s.a.createElement("th",{scope:"col"},"Lastname"),s.a.createElement("th",{scope:"col"},"Date Of Birth"),s.a.createElement("th",{scope:"col"},"Actions"))),s.a.createElement("tbody",null,t&&t.map(function(e){return s.a.createElement("tr",{key:e.id,"data-automation":"customer-row"},s.a.createElement("td",null,e.firstName),s.a.createElement("td",null,e.lastName),s.a.createElement("td",null,e.DOB),s.a.createElement("td",null,s.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},s.a.createElement("div",{className:"btn-group",style:{marginBottom:"20px"}},s.a.createElement(f.b,{to:"".concat("/edit","/").concat(e.id),className:"btn btn-sm btn-outline-secondary"},"EDIT"," "),s.a.createElement("button",{className:"btn btn-sm btn-outline-secondary",onClick:function(){r(Number(e.id))}},"DELETE")))))})))},O=function(e){function t(){var e,r;Object(u.a)(this,t);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(r=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={customers:r.props.customers},r.deleteCustomer=function(e){r.props.deleteCustomer(e)},r.searchCustomer=function(e){e.preventDefault();var t=e.currentTarget.value;if(e.currentTarget.value){var a=r.props.customers.filter(function(e){return e.firstName.toLowerCase().indexOf(t.toLowerCase())>-1||e.lastName.toLowerCase().indexOf(t.toLowerCase())>-1});r.setState({customers:a})}else r.setState({customers:r.props.customers})},r}return Object(E.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){e.customers!==this.props.customers&&this.setState({customers:this.props.customers})}},{key:"render",value:function(){var e=this,t=this.state.customers;return n.createElement("div",null,0===t.length&&n.createElement("div",{className:"text-center"},n.createElement("h2",null,"No customer found")),n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"form-group col-md-12 search"},n.createElement("input",{type:"text",id:"search",onChange:function(t){e.searchCustomer(t)},name:"search",className:"form-control",placeholder:"Search firstName or lastName..."}))),n.createElement("div",{className:"row"},n.createElement(b,{customers:this.state.customers,deleteCustomer:this.deleteCustomer})),n.createElement("div",{className:"row"},n.createElement(f.b,{to:"/create",className:"btn btn-primary"}," ","Create"," "))))}}]),t}(n.Component),N={deleteCustomer:function(e){return function(t){t({id:e,type:a.DELETE_CUSTOMER})}}},v=Object(l.b)(function(e){return{customers:e.customerState.customers}},N)(O),C=r(19),g=function(e){function t(){var e,r;Object(u.a)(this,t);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(r=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={firstName:r.props.customer&&r.props.customer.firstName||"",lastName:r.props.customer&&r.props.customer.lastName||"",DOB:r.props.customer&&r.props.customer.DOB||""},r.processFormSubmission=function(e){e.preventDefault(),r.props.isEdit?r.props.editCustomer(r.state,Number(r.props.match.params.id)):r.props.createCustomer(r.state),r.props.history.push(h)},r.handleInputChanges=function(e){e.preventDefault(),r.setState(Object(C.a)({},e.currentTarget.name,e.currentTarget.value))},r}return Object(E.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return n.createElement("div",null,n.createElement("div",{className:"col-md-12 form-wrapper"},n.createElement("h2",null,"".concat(this.props.isEdit?"Edit customer":"Create customer")),!this.props.customer&&this.props.isEdit&&n.createElement("div",null,n.createElement("p",null,"No customer found"),n.createElement("p",null,n.createElement(f.b,{to:h,className:"btn btn-outline-secondary mr-3"},"Back"))),(!this.props.isEdit||this.props.customer)&&n.createElement("form",{id:"post-form",onSubmit:this.processFormSubmission},n.createElement("div",{className:"form-group col-md-12"},n.createElement("label",{htmlFor:"firstName"}," ","Firstname"," "),n.createElement("input",{type:"text",id:"firstName",required:!0,onChange:function(t){e.handleInputChanges(t)},name:"firstName",className:"form-control",placeholder:"Customer's first name",defaultValue:this.state.firstName})),n.createElement("div",{className:"form-group col-md-12"},n.createElement("label",{htmlFor:"lastName"}," ","Lastname"," "),n.createElement("input",{type:"text",id:"lastName",required:!0,onChange:function(t){e.handleInputChanges(t)},name:"lastName",className:"form-control",placeholder:"Customer's last name",defaultValue:this.state.lastName})),n.createElement("div",{className:"form-group col-md-12"},n.createElement("label",{htmlFor:"DOB"}," ","Date Of Birth"," "),n.createElement("input",{type:"text",id:"DOB",required:!0,onChange:function(t){e.handleInputChanges(t)},name:"DOB",className:"form-control",placeholder:"13/04/1955",defaultValue:this.state.DOB})),n.createElement("div",{className:"form-group col-md-6 btn-toolbar pull-right"},n.createElement("button",{className:"btn btn-success mr-3",type:"submit",id:"submit"},"Submit"),n.createElement(f.b,{to:h,className:"btn btn-outline-secondary mr-3"},"Cancel")))))}}]),t}(n.Component),y=Object(m.f)(g),w={createCustomer:function(e){return function(t){t({data:e,type:a.CREATE_CUSTOMER})}},editCustomer:function(e,t){return function(r){r({data:e,id:t,type:a.EDIT_CUSTOMER})}}},D=Object(l.b)(function(e,t){return{customer:e.customerState.customers.find(function(e){return e.id===Number(t.match.params.id)}),isEdit:!!t.match.params.id}},w)(y),T=function(){return s.a.createElement(m.c,null,s.a.createElement(m.a,{path:h,exact:!0,component:v}),s.a.createElement(m.a,{path:"/create",exact:!0,component:D}),s.a.createElement(m.a,{path:"".concat("/edit","/:id"),exact:!0,component:D}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=r(11),S=r(30),B=r(32);function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(r,!0).forEach(function(t){Object(C.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var M={customers:r(31).customers},U=Object(j.c)({customerState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.CREATE_CUSTOMER:var r=e.customers.length>0?e.customers[e.customers.length-1]&&e.customers[e.customers.length-1].id&&Number(e.customers[e.customers.length-1].id)+1:1;return x({},e,{customers:[].concat(Object(B.a)(e.customers),[x({},t.data,{id:r})])});case a.DELETE_CUSTOMER:var n=e.customers.filter(function(e){return e.id!==t.id});return x({},e,{customers:n});case a.EDIT_CUSTOMER:var s=e.customers.map(function(e){return e.id===t.id?x({},t.data,{id:t.id}):x({},e)});return x({},e,{customers:s});default:return e}}});var _=Object(j.d)(U,void 0,Object(j.a)(S.a));c.a.render(s.a.createElement(f.a,null,s.a.createElement(function(e){return s.a.createElement(l.a,{store:e.store},s.a.createElement(T,null))},{store:_})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.f109bf38.chunk.js.map