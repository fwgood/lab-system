(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"2AEw":function(e,t,l){"use strict";var a=l("TqRt"),u=l("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,l("IzEo");var r=a(l("bx4M"));l("+L6B");var n=a(l("2/Rp"));l("7Kak");var d=a(l("9yH6"));l("giR+");var f=a(l("fyUT"));l("5Dmo");var m=a(l("3S7+"));l("Pwec");var c=a(l("CtXQ")),i=a(l("pVnL")),s=a(l("lwsE")),o=a(l("W8MJ")),p=a(l("a1gu")),E=a(l("Nsbk")),g=a(l("7W2i"));l("5NDa");var v=a(l("5rEg"));l("iQDF");var h=a(l("+eQT"));l("OaEy");var b=a(l("2fM7"));l("y8nQ");var y,w,k,x=a(l("Vl3Y")),R=u(l("q1tI")),q=l("MuoO"),T=a(l("zHco")),F=a(l("Zpge")),M=x.default.Item,N=b.default.Option,C=h.default.RangePicker,D=v.default.TextArea,S=(y=(0,q.connect)(function(e){var t=e.loading;return{submitting:t.effects["form/submitRegularForm"]}}),w=x.default.create(),y(k=w(k=function(e){function t(){var e,l;(0,s.default)(this,t);for(var a=arguments.length,u=new Array(a),r=0;r<a;r++)u[r]=arguments[r];return l=(0,p.default)(this,(e=(0,E.default)(t)).call.apply(e,[this].concat(u))),l.handleSubmit=function(e){var t=l.props,a=t.dispatch,u=t.form;e.preventDefault(),u.validateFieldsAndScroll(function(e,t){e||a({type:"form/submitRegularForm",payload:t})})},l}return(0,g.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props.submitting,t=this.props.form,l=t.getFieldDecorator,a=t.getFieldValue,u={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},s={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}};return R.default.createElement(T.default,{title:"\u57fa\u7840\u8868\u53552",content:"\u8868\u5355\u9875\u7528\u4e8e\u5411\u7528\u6237\u6536\u96c6\u6216\u9a8c\u8bc1\u4fe1\u606f\uff0c\u57fa\u7840\u8868\u5355\u5e38\u89c1\u4e8e\u6570\u636e\u9879\u8f83\u5c11\u7684\u8868\u5355\u573a\u666f\u3002"},R.default.createElement(r.default,{bordered:!1},R.default.createElement(x.default,{onSubmit:this.handleSubmit,hideRequiredMark:!0,style:{marginTop:8}},R.default.createElement(M,(0,i.default)({},u,{label:"\u6807\u9898"}),l("title",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6807\u9898"}]})(R.default.createElement(v.default,{placeholder:"\u7ed9\u76ee\u6807\u8d77\u4e2a\u540d\u5b57"}))),R.default.createElement(M,(0,i.default)({},u,{label:"\u8d77\u6b62\u65e5\u671f"}),l("date",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u8d77\u6b62\u65e5\u671f"}]})(R.default.createElement(C,{style:{width:"100%"},placeholder:["\u5f00\u59cb\u65e5\u671f","\u7ed3\u675f\u65e5\u671f"]}))),R.default.createElement(M,(0,i.default)({},u,{label:"\u76ee\u6807\u63cf\u8ff0"}),l("goal",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u76ee\u6807\u63cf\u8ff0"}]})(R.default.createElement(D,{style:{minHeight:32},placeholder:"\u8bf7\u8f93\u5165\u4f60\u7684\u9636\u6bb5\u6027\u5de5\u4f5c\u76ee\u6807",rows:4}))),R.default.createElement(M,(0,i.default)({},u,{label:"\u8861\u91cf\u6807\u51c6"}),l("standard",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8861\u91cf\u6807\u51c6"}]})(R.default.createElement(D,{style:{minHeight:32},placeholder:"\u8bf7\u8f93\u5165\u8861\u91cf\u6807\u51c6",rows:4}))),R.default.createElement(M,(0,i.default)({},u,{label:R.default.createElement("span",null,"\u5ba2\u6237",R.default.createElement("em",{className:F.default.optional},"\uff08\u9009\u586b\uff09",R.default.createElement(m.default,{title:"\u76ee\u6807\u7684\u670d\u52a1\u5bf9\u8c61"},R.default.createElement(c.default,{type:"info-circle-o",style:{marginRight:4}}))))}),l("client")(R.default.createElement(v.default,{placeholder:"\u8bf7\u63cf\u8ff0\u4f60\u670d\u52a1\u7684\u5ba2\u6237\uff0c\u5185\u90e8\u5ba2\u6237\u76f4\u63a5 @\u59d3\u540d\uff0f\u5de5\u53f7"}))),R.default.createElement(M,(0,i.default)({},u,{label:R.default.createElement("span",null,"\u9080\u8bc4\u4eba",R.default.createElement("em",{className:F.default.optional},"\uff08\u9009\u586b\uff09"))}),l("invites")(R.default.createElement(v.default,{placeholder:"\u8bf7\u76f4\u63a5 @\u59d3\u540d\uff0f\u5de5\u53f7\uff0c\u6700\u591a\u53ef\u9080\u8bf7 5 \u4eba"}))),R.default.createElement(M,(0,i.default)({},u,{label:R.default.createElement("span",null,"\u6743\u91cd",R.default.createElement("em",{className:F.default.optional},"\uff08\u9009\u586b\uff09"))}),l("weight")(R.default.createElement(f.default,{placeholder:"\u8bf7\u8f93\u5165",min:0,max:100})),R.default.createElement("span",{className:"ant-form-text"},"%")),R.default.createElement(M,(0,i.default)({},u,{label:"\u76ee\u6807\u516c\u5f00",help:"\u5ba2\u6237\u3001\u9080\u8bc4\u4eba\u9ed8\u8ba4\u88ab\u5206\u4eab"}),R.default.createElement("div",null,l("public",{initialValue:"1"})(R.default.createElement(d.default.Group,null,R.default.createElement(d.default,{value:"1"},"\u516c\u5f00"),R.default.createElement(d.default,{value:"2"},"\u90e8\u5206\u516c\u5f00"),R.default.createElement(d.default,{value:"3"},"\u4e0d\u516c\u5f00"))),R.default.createElement(M,{style:{marginBottom:0}},l("publicUsers")(R.default.createElement(b.default,{mode:"multiple",placeholder:"\u516c\u5f00\u7ed9",style:{margin:"8px 0",display:"2"===a("public")?"block":"none"}},R.default.createElement(N,{value:"1"},"\u540c\u4e8b\u7532"),R.default.createElement(N,{value:"2"},"\u540c\u4e8b\u4e59"),R.default.createElement(N,{value:"3"},"\u540c\u4e8b\u4e19")))))),R.default.createElement(M,(0,i.default)({},s,{style:{marginTop:32}}),R.default.createElement(n.default,{type:"primary",htmlType:"submit",loading:e},"\u63d0\u4ea4"),R.default.createElement(n.default,{style:{marginLeft:8}},"\u4fdd\u5b58")))))}}]),t}(R.PureComponent))||k)||k),A=S;t.default=A}}]);