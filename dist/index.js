import{jsx as e}from"react/jsx-runtime";import{configureStore as r,createSlice as n}from"@reduxjs/toolkit";import{useDispatch as t,useSelector as o}from"react-redux";import{setDecrementValue as i}from"decrement-button";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var c=function(){return c=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},c.apply(this,arguments)};r({reducer:{}});var a=o,s=n({name:"increment",initialState:{value:0},reducers:{setIncrementValue:function(e){console.log("setIncrementValue new state"),e.value++}}}),l=s.actions.setIncrementValue,u=s.reducer;!function(e,r){void 0===r&&(r={});var n=r.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&t.firstChild?t.insertBefore(o,t.firstChild):t.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".btn {\r\n  border-radius: 5px;\r\n  padding: 8px 16px;\r\n  background: rgb(109, 124, 253);\r\n  transition: 0.4s;\r\n  cursor: pointer;\r\n  border: none;\r\n  margin-left: 20px;\r\n  color: white;\r\n}\r\n\r\n.btn:hover {\r\n  background: rgb(66, 84, 245);\r\n  color: white;\r\n}\r\n");var d=function(){var r=a((function(e){return e})),n=t();console.log(r),console.log("dispatch");return e("button",c({className:"btn",onClick:function(){console.log("hiiiiii99999333333"),n(l()),n(i(1e4))}},{children:"Increment"}))};export{d as Increment,u as IncrementSlice,l as setIncrementValue};
//# sourceMappingURL=index.js.map
