(function(e){function t(t){for(var r,o,i=t[0],l=t[1],u=t[2],d=0,p=[];d<i.length;d++)o=i[d],n[o]&&p.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],r=!0,i=1;i<s.length;i++){var l=s[i];0!==n[l]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=s[0]))}return e}var r={},n={app:0},a=[];function o(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=r,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(s,r,function(t){return e[t]}.bind(null,r));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var r=s("64a9"),n=s.n(r);n.a},"0524":function(e,t,s){"use strict";var r=s("18c7"),n=s.n(r);n.a},"18c7":function(e,t,s){},"31b5":function(e,t,s){"use strict";var r=s("c37b"),n=s.n(r);n.a},"56d7":function(e,t,s){"use strict";s.r(t);var r=s("a026"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("h1",[e._v("Word Search Toolset")]),s("router-view")],1)},a=[],o={name:"app"},i=o,l=(s("034f"),s("2877")),u=Object(l["a"])(i,n,a,!1,null,null,null),c=u.exports,d=s("8c4f"),p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"messages"},[s("message-container",{attrs:{messages:e.messages}})],1),s("div",{staticClass:"word-search"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.findWords(t)}}},[s("p",[s("label",[e._v("Find synonyms for "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.phrase,expression:"phrase"}],attrs:{type:"text",placeholder:"word or phrase"},domProps:{value:e.phrase},on:{input:function(t){t.target.composing||(e.phrase=t.target.value)}}}),e._v(" that:")])]),s("ul",[s("li",[s("label",[e._v("sounds like "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.soundsLike,expression:"soundsLike"}],attrs:{type:"text",placeholder:"word or phrase"},domProps:{value:e.soundsLike},on:{input:function(t){t.target.composing||(e.soundsLike=t.target.value)}}})])]),s("li",[s("label",[e._v("start with the letter "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.startLetter,expression:"startLetter"}],attrs:{type:"text",placeholder:"single letter"},domProps:{value:e.startLetter},on:{input:function(t){t.target.composing||(e.startLetter=t.target.value)}}})])]),s("li",[s("label",[e._v("end with the letter "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.endLetter,expression:"endLetter"}],attrs:{type:"text",placeholder:"single letter"},domProps:{value:e.endLetter},on:{input:function(t){t.target.composing||(e.endLetter=t.target.value)}}})])])]),e._m(0)])]),s("div",{staticClass:"word-list-container"},[s("h2",[e._v("Word List")]),s("ul",{staticClass:"word-list"},[s("transition-group",{attrs:{name:"slideRight",tag:"div",appear:""}},e._l(e.wordList,function(t){return s("li",{key:t},[e._v(e._s(t)+" "),s("button",{staticClass:"remove-word",on:{click:function(s){e.removeWord(t)}}},[e._v("x")])])}),0)],1)]),s("div",{staticClass:"results-container"},[e.showSpinner?s("spinner"):e._e(),e.results&&e.results.length>0?s("h2",[e._v(e._s(e.results.length)+" Words Found")]):e._e(),e.results&&e.results.length>0?s("ul",{staticClass:"results"},[s("transition-group",{attrs:{name:"fade",tag:"div",appear:""}},e._l(e.results,function(t){return s("li",{key:t.word,staticClass:"item"},[s("p",{staticClass:"result-word"},[e._v(e._s(t.word))]),s("p",[s("button",{staticClass:"add-word",on:{click:function(s){e.addWord(t.word)}}},[e._v("Add to WordList")])])])}),0)],1):e.results&&0===e.results.length?s("div",{staticClass:"no-results"},[s("h2",[e._v("No Words Found")]),s("p",[e._v("Please adjust your search to find more words.")])]):e._e()],1)])},f=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[s("button",{attrs:{type:"submit"}},[e._v("Search")])])}],h=s("bc3a"),v=s.n(h),m=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},g=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",[e._v("Loading...")]),s("div",{staticClass:"sk-folding-cube"},[s("div",{staticClass:"sk-cube1 sk-cube"}),s("div",{staticClass:"sk-cube2 sk-cube"}),s("div",{staticClass:"sk-cube4 sk-cube"}),s("div",{staticClass:"sk-cube3 sk-cube"})])])}],w={name:"CubeSpinner"},_=w,b=(s("de62"),Object(l["a"])(_,m,g,!1,null,"fe181480",null)),y=b.exports,L=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.messages.length>0?s("ul",e._l(e.messages,function(e){return s("message-item",{key:e.text,attrs:{message:e}})}),1):e._e()])},x=[],k=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"fade",appear:"",tag:"div"}},[s("li",{directives:[{name:"show",rawName:"v-show",value:e.showMessage,expression:"showMessage"}],class:[e.message.type,"message"]},[e._v("\n    "+e._s(e.message.text)+"\n    "),s("button",{on:{click:e.close}},[e._v("close")])])])},C=[];s("9ddc");var O={name:"MessageContainer",props:{message:Object},data(){return{showMessage:!0}},methods:{close:function(){this.showMessage=!1}}},W=O,j=(s("0524"),Object(l["a"])(W,k,C,!1,null,"353fa968",null)),S=j.exports;s("9ddc");var $={name:"MessageContainer",props:{messages:Array},components:{"message-item":S}},P=$,M=(s("31b5"),Object(l["a"])(P,L,x,!1,null,"55061970",null)),E=M.exports;s("9ddc");var N={name:"WordSearch",components:{spinner:y,"message-container":E},data(){return{results:null,wordList:[],messages:[],phrase:"",soundsLike:"",startLetter:"",endLetter:"",showSpinner:!1}},methods:{addWord:function(e){-1===this.wordList.indexOf(e)?(this.wordList.push(e),console.log(`Added ${e} to wordList.`),this.messages.push({type:"success",text:`${e} added to WordList.`})):(console.log("Word is already on wordlist."),this.messages.push({type:"info",text:`${e} is already on the WordList.`}))},removeWord:function(e){this.wordList.splice(this.wordList.indexOf(e),1),this.messages.push({type:"success",text:`${e} removed from WordList.`})},findWords:function(){this.showSpinner=!0,this.results=null,v.a.get("https://api.datamuse.com/words",{params:{ml:this.phrase,sl:this.soundsLike,sp:`${this.startLetter}*${this.endLetter}`}}).then(e=>{this.showSpinner=!1,this.results=e.data}).catch(e=>{this.showSpinner=!1,this.messages.push({type:"error",text:e.message})})}}},A=N,T=(s("7407"),Object(l["a"])(A,p,f,!1,null,"3dfd3ffa",null)),F=T.exports;r["a"].use(d["a"]);var J=new d["a"]({routes:[{path:"/",name:"WordSearch",component:F}]});r["a"].config.productionTip=!1,new r["a"]({el:"#app",router:J,template:"<App/>",components:{App:c}})},"5f22":function(e,t,s){},"64a9":function(e,t,s){},7407:function(e,t,s){"use strict";var r=s("db8f"),n=s.n(r);n.a},c37b:function(e,t,s){},db8f:function(e,t,s){},de62:function(e,t,s){"use strict";var r=s("5f22"),n=s.n(r);n.a}});
//# sourceMappingURL=app.8b22ee92.js.map