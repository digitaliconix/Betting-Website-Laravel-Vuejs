(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{f9f4:function(t,r,a){"use strict";function e(t,r,a){var o=r||new FormData;for(var d in t)if(t.hasOwnProperty(d)){var n=a?a+"["+d+"]":d;if(t[d]!==Object(t[d])||t[d]instanceof File)if(t[d]instanceof Array)for(var s=0;s<t[d].length;s++)e(t[d][s],o,"".concat(n,"[").concat(s,"]"));else{var _=null===t[d]?"":t[d];o.append(n,_)}else e(t[d],o,n)}return o}a.d(r,"a",(function(){return e}))},"hbd/":function(t,r,a){"use strict";a.d(r,"b",(function(){return d})),a.d(r,"c",(function(){return n})),a.d(r,"a",(function(){return s}));var e=a("Poqw"),o=a.n(e);a("f9f4");function d(t,r){return o()({method:"GET",url:t,params:r})}function n(t,r){return s("POST",t,r)}function s(t,r,a){return o()({method:t,url:r,data:a})}},iYaw:function(t,r,a){"use strict";a.r(r);var e=a("djKw"),o=a.n(e),d=a("IAPz"),n=a("+4WA"),s=a("3uf8"),_=a("cbbs"),c=a("e9yv"),i=a("VOL1"),v=a("hbd/"),u={name:"show",components:{BCard:d.a,BCardText:n.a,BLink:s.a,BRow:_.a,BCol:c.a,BButton:i.a},created:function(){var t=this;Object(v.b)("/admin/api/client_orders/".concat(this.$route.params.id)).then((function(r){r.data.data&&(o.a.set(t.$data,"orderData",r.data.data),t.show=!0)}))},data:function(){return{show:!1,orderData:null}}},p=a("KHd+"),l=Object(p.a)(u,(function(){var t=this,r=t.$createElement,a=t._self._c||r;return t.show?a("div",[a("b-card",{attrs:{title:""}},[a("b-row",[a("table",{staticClass:"table table-bordered"},[a("thead",[a("tr",[a("th",{staticClass:"text-center",attrs:{colspan:"2",scope:"col"}},[t._v("Order Detail")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{attrs:{scope:"row"}},[t._v("Order Number")]),t._v(" "),a("td",[t._v(t._s(t.orderData.order_number))])]),t._v(" "),a("tr",[a("td",{attrs:{scope:"row"}},[t._v("Order Date")]),t._v(" "),a("td",[t._v(t._s(t.orderData.created_at))])]),t._v(" "),a("tr",[a("td",{attrs:{scope:"row"}},[t._v("Product Name")]),t._v(" "),a("td",[t._v(t._s(t.orderData.product.title))])]),t._v(" "),a("tr",[a("td",{attrs:{scope:"row"}},[t._v("Product Coin")]),t._v(" "),a("td",[t._v(t._s(t.orderData.product.unit_price))])]),t._v(" "),a("tr",[a("td",{attrs:{scope:"row"}},[t._v("Name")]),t._v(" "),a("td",[t._v(t._s(t.orderData.name))])]),t._v(" "),a("tr",[a("td",{attrs:{scope:"row"}},[t._v("Email")]),t._v(" "),a("td",[t._v(t._s(t.orderData.email))])]),t._v(" "),a("tr",[a("td",{attrs:{scope:"row"}},[t._v("Phone")]),t._v(" "),a("td",[t._v(t._s(t.orderData.phone))])]),t._v(" "),a("tr",[a("td",{attrs:{scope:"row"}},[t._v("City")]),t._v(" "),a("td",[t._v(t._s(t.orderData.city))])]),t._v(" "),a("tr",[a("td",{attrs:{scope:"row"}},[t._v("State")]),t._v(" "),a("td",[t._v(t._s(t.orderData.state))])]),t._v(" "),a("tr",[a("td",{attrs:{scope:"row"}},[t._v("Country")]),t._v(" "),a("td",[t._v(t._s(t.orderData.country))])]),t._v(" "),a("tr",[a("td",{attrs:{scope:"row"}},[t._v("Zipcode")]),t._v(" "),a("td",[t._v(t._s(t.orderData.zipcode))])]),t._v(" "),a("tr",[a("td",{attrs:{scope:"row"}},[t._v("Shipping Address")]),t._v(" "),a("td",[t._v(t._s(t.orderData.address))])]),t._v(" "),a("tr",[a("td",{attrs:{scope:"row"}},[t._v("Additional Information")]),t._v(" "),a("td",[t._v(t._s(t.orderData.additional_info))])])])])]),t._v(" "),a("b-row",{staticClass:"mt-2"},[a("b-col",[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],attrs:{type:"reset",variant:"outline-secondary",to:{name:"view-client-orders"}}},[t._v("\n                    Back\n                ")])],1)],1)],1)],1):t._e()}),[],!1,null,"383c635b",null);r.default=l.exports}}]);