(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[387],{87157:function($e,Y,n){"use strict";n.r(Y),n.d(Y,{default:function(){return pe}});var g=n(11849),Te=n(71194),J=n(57016),h=n(3182),Re=n(57663),B=n(71577),Se=n(34792),w=n(48086),A=n(2824),re=n(94043),t=n.n(re),O=n(67294),$=n(43653),ne=n(81907),te=n(85224),ae=n(2625),Q=n(57119),P=n(35348);function ue(o){return M.apply(this,arguments)}function M(){return M=(0,h.Z)(t().mark(function o(s){return t().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,P.Z)("/project/index/list",{params:s}));case 1:case"end":return r.stop()}},o)})),M.apply(this,arguments)}function le(o){return H.apply(this,arguments)}function H(){return H=(0,h.Z)(t().mark(function o(s){return t().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,P.Z)("/project/index/created",{method:"POST",data:(0,g.Z)({},s)}));case 1:case"end":return r.stop()}},o)})),H.apply(this,arguments)}function se(o){return L.apply(this,arguments)}function L(){return L=(0,h.Z)(t().mark(function o(s){return t().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,P.Z)("/project/index/updated",{method:"POST",data:(0,g.Z)({},s)}));case 1:case"end":return r.stop()}},o)})),L.apply(this,arguments)}function ie(o){return N.apply(this,arguments)}function N(){return N=(0,h.Z)(t().mark(function o(s){return t().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,P.Z)("/project/index/freeze",{method:"POST",data:(0,g.Z)({},s)}));case 1:case"end":return r.stop()}},o)})),N.apply(this,arguments)}function ce(o){return W.apply(this,arguments)}function W(){return W=(0,h.Z)(t().mark(function o(s){return t().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,P.Z)("/project/index/unfreeze",{method:"POST",data:(0,g.Z)({},s)}));case 1:case"end":return r.stop()}},o)})),W.apply(this,arguments)}var ze=n(57338),X=n(25084),Ie=n(13062),q=n(71230),Ae=n(43358),T=n(16317),Oe=n(89032),C=n(15746),Ue=n(47673),U=n(4107),be=n(9715),p=n(86585),e=n(85893),oe=function(s){var Z=s.visible,r=s.onCancel,E=s.onCreated,k=p.Z.useForm(),b=(0,A.Z)(k,1),j=b[0],v=function(){j.validateFields().then(function(m){E(m,j)}).catch(function(m){var R=m.errorFields;R.length>0&&w.default.error("\u8BF7\u5B8C\u6210\u5FC5\u586B\u9879\u5185\u5BB9")})},D=function(){};return(0,e.jsx)(X.Z,{title:"\u65B0\u5EFA\u9879\u76EE",width:450,visible:Z,onClose:function(){return r(j)},maskClosable:!1,footer:(0,e.jsx)("div",{style:{textAlign:"right",marginRight:10},children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(B.Z,{onClick:function(){return r(j)},style:{marginRight:10},children:"\u5173\u95ED"}),(0,e.jsx)(B.Z,{type:"primary",onClick:v,children:"\u4FDD\u5B58"})]})}),children:(0,e.jsx)(p.Z,{layout:"vertical",form:j,onFinish:v,children:(0,e.jsxs)(q.Z,{gutter:[16,16],children:[(0,e.jsx)(C.Z,{span:24,children:(0,e.jsx)(p.Z.Item,{name:"name",label:"\u9879\u76EE\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u9879\u76EE\u540D\u79F0"}],children:(0,e.jsx)(U.Z,{allowClear:!0,placeholder:"\u8BF7\u586B\u5199\u9879\u76EE\u540D\u79F0"})})}),(0,e.jsx)(C.Z,{span:24,children:(0,e.jsx)(p.Z.Item,{name:"path",label:"\u94FE\u63A5\u5730\u5740",children:(0,e.jsx)(U.Z,{allowClear:!0,placeholder:"\u8BF7\u586B\u5199\u9879\u76EE\u540E\u53F0\u7BA1\u7406\u94FE\u63A5\u5730\u5740"})})}),(0,e.jsx)(C.Z,{span:24,children:(0,e.jsx)(p.Z.Item,{name:"description",label:"\u9879\u76EE\u7B80\u4ECB",children:(0,e.jsx)(U.Z.TextArea,{allowClear:!0,rows:4,placeholder:"\u8BF7\u586B\u5199\u9879\u76EE\u7B80\u4ECB"})})}),(0,e.jsx)(C.Z,{span:24,children:(0,e.jsx)(p.Z.Item,{name:"duration",label:"\u4F7F\u7528\u65F6\u957F",initialValue:"365",children:(0,e.jsxs)(T.Z,{allowClear:!0,style:{width:"100%"},onChange:D,children:[(0,e.jsx)(T.Z.Option,{value:"30",children:"\u8BD5\u7528\u4E00\u6708"}),(0,e.jsx)(T.Z.Option,{value:"365",children:"\u4F7F\u7528\u4E00\u5E74"}),(0,e.jsx)(T.Z.Option,{value:"0",children:"\u6C38\u4E45\u4F7F\u7528"})]})})})]})})})},de=oe,he=function(s){var Z=s.visible,r=s.fields,E=s.onCancel,k=s.onUpdated,b=p.Z.useForm(),j=(0,A.Z)(b,1),v=j[0];(0,O.useEffect)(function(){Object.keys(r).length>0&&v.setFieldsValue(r)},[s.fields]);var D=function(){v.validateFields().then(function(R){k((0,g.Z)((0,g.Z)({},r),R),v)}).catch(function(R){var G=R.errorFields;G.length>0&&w.default.error("\u8BF7\u5B8C\u6210\u5FC5\u586B\u9879\u5185\u5BB9")})},y=function(){};return(0,e.jsx)(X.Z,{title:"\u66F4\u65B0\u9879\u76EE",width:450,visible:Z,onClose:E,maskClosable:!1,footer:(0,e.jsx)("div",{style:{textAlign:"right",marginRight:10},children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(B.Z,{onClick:E,style:{marginRight:10},children:"\u5173\u95ED"}),(0,e.jsx)(B.Z,{type:"primary",onClick:D,children:"\u4FDD\u5B58"})]})}),children:(0,e.jsx)(p.Z,{layout:"vertical",form:v,onFinish:D,children:(0,e.jsxs)(q.Z,{gutter:[16,16],children:[(0,e.jsx)(C.Z,{span:24,children:(0,e.jsx)(p.Z.Item,{name:"name",label:"\u9879\u76EE\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u9879\u76EE\u540D\u79F0"}],children:(0,e.jsx)(U.Z,{allowClear:!0,placeholder:"\u8BF7\u586B\u5199\u9879\u76EE\u540D\u79F0"})})}),(0,e.jsx)(C.Z,{span:24,children:(0,e.jsx)(p.Z.Item,{name:"path",label:"\u94FE\u63A5\u5730\u5740",children:(0,e.jsx)(U.Z,{allowClear:!0,placeholder:"\u8BF7\u586B\u5199\u9879\u76EE\u540E\u53F0\u7BA1\u7406\u94FE\u63A5\u5730\u5740"})})}),(0,e.jsx)(C.Z,{span:24,children:(0,e.jsx)(p.Z.Item,{name:"description",label:"\u9879\u76EE\u7B80\u4ECB",children:(0,e.jsx)(U.Z.TextArea,{allowClear:!0,rows:4,placeholder:"\u8BF7\u586B\u5199\u9879\u76EE\u7B80\u4ECB"})})}),r.expire_at&&(0,e.jsx)(C.Z,{span:24,children:(0,e.jsx)(p.Z.Item,{name:"duration",label:"\u5EF6\u957F\u4F7F\u7528\u65F6\u957F",children:(0,e.jsxs)(T.Z,{allowClear:!0,style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u5EF6\u957F\u4F7F\u7528\u65F6\u957F",onChange:y,children:[(0,e.jsx)(T.Z.Option,{value:"365",children:"\u5EF6\u957F\u4E00\u5E74"}),(0,e.jsx)(T.Z.Option,{value:"0",children:"\u6C38\u4E45\u4F7F\u7528"})]})})})]})})})},fe=he,ve=function(){var s=(0,O.useState)(!1),Z=(0,A.Z)(s,2),r=Z[0],E=Z[1],k=(0,O.useState)(!1),b=(0,A.Z)(k,2),j=b[0],v=b[1],D=(0,O.useState)([]),y=(0,A.Z)(D,2),m=y[0],R=y[1],G=(0,O.useState)({}),_=(0,A.Z)(G,2),ee=_[0],me=_[1],V=(0,O.useRef)(),S=(0,$.md)(),Fe=(0,$.YB)(),Ze=[{title:"\u9879\u76EE\u540D\u79F0",dataIndex:"name"},{title:"\u9879\u76EE\u63CF\u8FF0",dataIndex:"description",valueType:"textarea"},{title:"\u94FE\u63A5\u5730\u5740",dataIndex:"path",width:120,renderText:function(a){return(0,e.jsx)("a",{href:a,target:"_blank",children:a})}},{title:"\u72B6\u6001",dataIndex:"status",hideInForm:!0,valueEnum:{40:{text:"\u5DF2\u51BB\u7ED3",status:"Error"},44:{text:"\u5DF2\u5230\u671F",status:"Error"},80:{text:"\u6B63\u5E38",status:"Success"}}},{title:"\u5230\u671F\u65F6\u95F4",dataIndex:"expire_at",sorter:!0,valueType:"dateTime",hideInForm:!0},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"created_at",sorter:!0,valueType:"dateTime",hideInForm:!0},{title:(0,e.jsx)($._H,{id:"pages.searchTable.titleOption",defaultMessage:"\u64CD\u4F5C"}),dataIndex:"option",valueType:"option",render:function(a,l){return[(0,e.jsx)($.Nv,{accessible:S.canProjectUpdated,fallback:(0,e.jsx)("a",{onClick:function(){return w.default.error("\u6CA1\u6709\u6743\u9650")},children:"-"}),children:(0,e.jsx)("a",{onClick:function(){me(l),v(!0)},children:"\u66F4\u65B0"})},"a")]}}],xe=function(){console.log("access:",S);var a=S.canProjectCreated;return a?(0,e.jsx)(B.Z,{type:"primary",onClick:function(){return E(!0)},children:(0,e.jsx)($._H,{id:"pages.searchTable.new",defaultMessage:"New"})},"primary"):null},je=function(){console.log("access:",S);var a=S.canProjectFreeze;return a?(0,e.jsx)(B.Z,{danger:!0,type:"primary",onClick:(0,h.Z)(t().mark(function l(){return t().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,ye(m);case 2:case"end":return u.stop()}},l)})),children:"\u6279\u91CF\u51BB\u7ED3"}):null},ge=function(){console.log("access:",S);var a=S.canProjectUnfreeze;return a?(0,e.jsx)(B.Z,{type:"primary",onClick:(0,h.Z)(t().mark(function l(){return t().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Be(m);case 2:case"end":return u.stop()}},l)})),children:"\u6279\u91CF\u89E3\u51BB"}):null},Ce=function(){var c=(0,h.Z)(t().mark(function a(l,f){var u,F,d;return t().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,le(l);case 2:u=i.sent,u.status==="success"&&(f.resetFields(),E(!1),(F=V.current)===null||F===void 0||(d=F.reloadAndRest)===null||d===void 0||d.call(F),w.default.success("\u64CD\u4F5C\u6210\u529F"));case 4:case"end":return i.stop()}},a)}));return function(l,f){return c.apply(this,arguments)}}(),Ee=function(){var c=(0,h.Z)(t().mark(function a(l,f){var u,F,d;return t().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,se(l);case 2:u=i.sent,u.status==="success"&&(f.resetFields(),v(!1),(F=V.current)===null||F===void 0||(d=F.reloadAndRest)===null||d===void 0||d.call(F),w.default.success("\u64CD\u4F5C\u6210\u529F"));case 4:case"end":return i.stop()}},a)}));return function(l,f){return c.apply(this,arguments)}}(),ye=function(){var c=(0,h.Z)(t().mark(function a(l){return t().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:J.Z.confirm({icon:(0,e.jsx)(Q.Z,{}),title:"\u63D0\u793A",content:"\u51BB\u7ED3\u540E\u65E0\u6CD5\u4F7F\u7528\uFF0C\u786E\u5B9A\u8981\u6279\u91CF\u51BB\u7ED3\u9009\u62E9\u9879\uFF1F",onOk:function(){return(0,h.Z)(t().mark(function d(){var z,i,I;return t().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,ie({key:l.map(function(K){return K.id})});case 2:z=x.sent,z.status==="success"&&(v(!1),(i=V.current)===null||i===void 0||(I=i.reloadAndRest)===null||I===void 0||I.call(i),w.default.success("\u64CD\u4F5C\u6210\u529F"));case 4:case"end":return x.stop()}},d)}))()}});case 1:case"end":return u.stop()}},a)}));return function(l){return c.apply(this,arguments)}}(),Be=function(){var c=(0,h.Z)(t().mark(function a(l){return t().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:J.Z.confirm({icon:(0,e.jsx)(Q.Z,{}),title:"\u63D0\u793A",content:"\u89E3\u51BB\u540E\u6062\u590D\u4F7F\u7528\uFF0C\u786E\u5B9A\u8981\u6279\u91CF\u89E3\u51BB\u9009\u62E9\u9879\uFF1F",onOk:function(){return(0,h.Z)(t().mark(function d(){var z,i,I;return t().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,ce({key:l.map(function(K){return K.id})});case 2:z=x.sent,z.status==="success"&&(v(!1),(i=V.current)===null||i===void 0||(I=i.reloadAndRest)===null||I===void 0||I.call(i),w.default.success("\u64CD\u4F5C\u6210\u529F"));case 4:case"end":return x.stop()}},d)}))()}});case 1:case"end":return u.stop()}},a)}));return function(l){return c.apply(this,arguments)}}();return(0,e.jsxs)(ne.ZP,{children:[(0,e.jsx)(ae.ZP,{headerTitle:Fe.formatMessage({id:"pages.searchTable.title",defaultMessage:"Enquiry form"}),actionRef:V,rowKey:"id",search:{labelWidth:120},toolBarRender:function(){return[(0,e.jsx)(xe,{})]},request:function(){var c=(0,h.Z)(t().mark(function a(l,f,u){return t().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",ue((0,g.Z)((0,g.Z)({},l),f)));case 1:case"end":return d.stop()}},a)}));return function(a,l,f){return c.apply(this,arguments)}}(),columns:Ze,rowSelection:{onChange:function(a,l){R(l)}}}),(m==null?void 0:m.length)>0&&(0,e.jsxs)(te.Z,{extra:(0,e.jsxs)("div",{children:[(0,e.jsx)($._H,{id:"pages.searchTable.chosen",defaultMessage:"\u5DF2\u9009\u62E9"})," ",(0,e.jsx)("a",{style:{fontWeight:600},children:m.length})," ",(0,e.jsx)($._H,{id:"pages.searchTable.item",defaultMessage:"\u9879"})]}),children:[(0,e.jsx)(ge,{}),(0,e.jsx)(je,{})]}),(0,e.jsx)(de,{visible:r,onCreated:Ce,onCancel:function(a){E(!1),a.resetFields()}}),ee&&(0,e.jsx)(fe,{visible:j,fields:ee,onUpdated:Ee,onCancel:function(){return v(!1)}})]})},pe=ve}}]);
