(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{113:function(t,e){},125:function(t,e,n){"use strict";n.r(e);var a,r,c,i,o=n(9),u=n.n(o),s=n(64),d=n.n(s),l=n(41),b=n(28),j=new(n(99).a)({supportedChainIds:[1,3,4,5,42]}),f=n(42),h=f.a.div(a||(a=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: normal;\n  align-items: center;\n"]))),p=f.a.div(r||(r=Object(l.a)(["\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: normal;\n  align-items: center;\n  border: 2px solid;\n  width: 100%;\n  border-radius: 8px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n"]))),O=f.a.div(c||(c=Object(l.a)(["\n  text-align: center;\n  font-size: 13px;\n"]))),x=f.a.div(i||(i=Object(l.a)(["\n  text-align: center;\n  font-size: 17px;\n  margin-bottom: 5px;\n  font-weight: 500;\n"]))),v=n(24),m="UPDATE_TOKEN_A",A="UPDATE_TOKEN_B",g="UPDATE_LP",y="UPDATE_SWAP_INPUT",k="UPDATE_SWAP_OUTPUT",B="UPDATE_SWAP_EXPECT",E="UPDATE_ADD_INPUT",w="UPDATE_ADD_INPUT_2",C="UPDATE_TOKEN_A_ADDRESS",T="UPDATE_TOKEN_B_ADDRESS",P=function(t){return{type:m,tokenABalance:t}},I=function(t){return{type:A,tokenBBalance:t}},D=function(t){return{type:y,swapInput:t}},S=function(t){return{type:B,swapExpect:t}},L=function(t){return{type:E,addInput:t}},U=function(t){return{type:w,addInput2:t}},_=function(t){return{type:C,tokenAAddress:t}},F=function(t){return{type:T,tokenBAddress:t}},q=n(13),M=n(25),H=n(8);var N=function(){var t=Object(v.b)(),e=Object(b.b)().chainId;return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("form",{children:Object(H.jsx)("label",{children:Object(H.jsxs)(O,{children:["\ud1a0\ud070 A \uc8fc\uc18c :",Object(H.jsx)("input",{type:"text",onChange:function(n){if(0!==n.target.value.length)try{q.a.utils.getAddress(n.target.value),t(_(n.target.value))}catch(a){"eth"===n.target.value&&t(_(M.d[e].address))}}})]})})}),Object(H.jsx)("form",{children:Object(H.jsx)("label",{children:Object(H.jsxs)(O,{children:["\ud1a0\ud070 B \uc8fc\uc18c :",Object(H.jsx)("input",{type:"text",onChange:function(n){if(0!==n.target.value.length)try{q.a.utils.getAddress(n.target.value),t(F(n.target.value))}catch(a){"eth"===n.target.value&&t(F(M.d[e].address))}}})]})})})]})},K=n(31),R="0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",W=["function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)","function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)","function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)","function addLiquidity(address tokenA, address tokenB, uint amountADesired, uint amountBDesired, uint amountAMin, uint amountBMin, address to, uint deadline) external returns (uint amountA, uint amountB, uint liquidity)","function addLiquidityETH(address token, uint amountTokenDesired, uint amountTokenMin, uint amountETHMin,address to,uint deadline) external payable returns (uint amountToken, uint amountETH, uint liquidity)","function removeLiquidity(address tokenA, address tokenB, uint liquidity, uint amountAMin, uint amountBMin, address to, uint deadline) external returns (uint amountA, uint amountB)","function removeLiquidityETH(address token,uint liquidity, uint amountTokenMin,uint amountETHMin,address to, uint deadline) external returns (uint amountToken, uint amountETH)"],z=["function balanceOf(address account) external view returns (uint)","function totalSupply() external view returns (uint)","function approve(address spender, uint rawAmount) external returns (bool)","function allowance(address owner, address spender) public view returns (uint256)","function decimals() public view returns (uint8)"],J=n(18),G=n(56),X=function(){return{tokenAAddress:Object(v.c)((function(t){return null===t||void 0===t?void 0:t.tokenAAddress})),tokenBAddress:Object(v.c)((function(t){return null===t||void 0===t?void 0:t.tokenBAddress}))}},Q=function(){return{tokenABalance:Object(v.c)((function(t){return null===t||void 0===t?void 0:t.tokenABalance})),tokenBBalance:Object(v.c)((function(t){return null===t||void 0===t?void 0:t.tokenBBalance})),LPBalance:Object(v.c)((function(t){return null===t||void 0===t?void 0:t.LPBalance}))}},V=function(){var t=X(),e=t.tokenAAddress,n=t.tokenBAddress,a=Object(b.b)(),r=a.chainId,c=a.library;return{tokenAContract:e===M.d[r].address?void 0:new q.a.Contract(e,z,c),tokenBContract:n===M.d[r].address?void 0:new q.a.Contract(n,z,c)}},Y=function(){var t=Object(b.b)(),e=t.chainId,n=t.library,a=X(),r=a.tokenAAddress,c=a.tokenBAddress,i=V(),o=i.tokenAContract,u=i.tokenBContract,s=void 0===o?new M.c(e,M.d[e].address,18):new M.c(e,r,18),d=void 0===u?new M.c(e,M.d[e].address,18):new M.c(e,c,18),l=s.sortsBefore(d)?[s,d]:[d,s],j=Object(J.c)(M.a,Object(G.a)(["bytes"],[Object(G.b)(["address","address"],[l[0].address,l[1].address])]),M.b);return{pairTokenContract:new q.a.Contract(j,z,n)}},Z=function(){var t=Object(b.b)(),e=t.account,n=t.library.getSigner(e).connectUnchecked();return{routerContract:new q.a.Contract(R,W,n)}};var $=function(){var t=Object(v.b)(),e=Object(b.b)(),n=e.chainId,a=e.account,r=e.library,c=Q(),i=c.tokenABalance,u=c.tokenBBalance,s=c.LPBalance,d=X(),l=d.tokenAAddress,j=d.tokenBAddress,f=function(){var t=V(),e=t.tokenAContract,n=t.tokenBContract,a=Object(o.useState)(0),r=Object(K.a)(a,2),c=r[0],i=r[1],u=Object(o.useState)(0),s=Object(K.a)(u,2),d=s[0],l=s[1];return null===e||void 0===e||e.decimals().then((function(t){c!==t&&i(t)})),null===n||void 0===n||n.decimals().then((function(t){d!==t&&l(t)})),{ADecimals:c,BDecimals:d}}(),h=f.ADecimals,m=f.BDecimals,A=V(),y=A.tokenAContract,k=A.tokenBContract,B=Y().pairTokenContract;return l!==M.d[n].address?y.balanceOf(a).then((function(e){return t(P(q.a.utils.formatUnits(e,h)))})):r.getBalance(a).then((function(e){return t(P(q.a.utils.formatEther(e)))})),j!==M.d[n].address?k.balanceOf(a).then((function(e){return t(I(q.a.utils.formatUnits(e,m)))})):r.getBalance(a).then((function(e){return t(I(q.a.utils.formatEther(e)))})),null===B||void 0===B||B.balanceOf(a).then((function(e){q.a.utils.formatEther(e)!==s&&t(function(t){return{type:g,LPBalance:t}}(q.a.utils.formatEther(e)))})),Object(H.jsxs)(p,{children:[Object(H.jsx)(x,{children:"\uc794\uc561 \uc815\ubcf4"}),Object(H.jsxs)(O,{children:["\ud1a0\ud070 A \uc794\uc561: ",i]}),Object(H.jsxs)(O,{children:["\ud1a0\ud070 B \uc794\uc561: ",u]}),Object(H.jsxs)(O,{children:["\uc720\ub3d9\uc131 \ud1a0\ud070 \uc794\uc561 : ",s]})]})};var tt=function(){var t=Q().LPBalance,e=Y().pairTokenContract,n=Object(o.useState)(0),a=Object(K.a)(n,2),r=a[0],c=a[1];e.totalSupply().then((function(t){q.a.utils.formatEther(t)!==r&&c(q.a.utils.formatEther(t))}));var i=t/r*100,u=i>=.01?i.toFixed(2):"less than 0.01";return Object(H.jsxs)(p,{children:[Object(H.jsx)(x,{children:"Pool \uc815\ubcf4"}),Object(H.jsxs)(O,{children:["\uc720\ub3d9\uc131 \ubcf4\uc720 \ube44\uc728  : ",u,"%"]})]})};var et=function(){var t=Object(b.b)(),e=t.chainId,n=t.account,a=X(),r=a.tokenAAddress,c=a.tokenBAddress;return Object(H.jsxs)(h,{children:[Object(H.jsx)(O,{style:{color:"green"},children:"Connected "}),Object(H.jsxs)(O,{style:{marginTop:"15px"},children:["ChainId: ",e]}),Object(H.jsxs)(O,{style:{marginBottom:"15px"},children:["Account: ",n]}),Object(H.jsx)(N,{}),""===r||""===c?Object(H.jsx)(H.Fragment,{}):Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)($,{}),Object(H.jsx)(tt,{})]})]})},nt=n(127);var at=function(){var t=Object(b.b)(),e=t.chainId,n=t.account,a=t.library,r=Object(o.useState)(!1),c=Object(K.a)(r,2),i=c[0],u=c[1],s=Object(o.useState)(!1),d=Object(K.a)(s,2),l=d[0],j=d[1],f=Object(o.useState)(!1),h=Object(K.a)(f,2),m=h[0],A=h[1],g=Object(v.b)(),y={input:Object(v.c)((function(t){return null===t||void 0===t?void 0:t.swapInput})),expect:Object(v.c)((function(t){return null===t||void 0===t?void 0:t.swapExpect}))},k=y.input,B=y.expect,E=X(),w=E.tokenAAddress,C=E.tokenBAddress,T=V(),L=T.tokenAContract,U=T.tokenBContract,_=Z().routerContract,F=void 0!==k?q.a.utils.parseEther(k):void 0,N=[w,C],W=n,z=Math.floor(Date.now()/1e3)+1200;function J(){L.approve(R,nt.a).then((function(t){u(!0),t.wait().then((function(){u(!1),j(!0)}))}))}function G(){U.approve(R,nt.a).then((function(t){u(!0),t.wait().then((function(){u(!1),A(!0)}))}))}void 0===F||F.eq(0)?g(S("0")):_.getAmountsOut(F,N,{gasLimit:1e7}).then((function(t){g(S(q.a.utils.formatEther(t[1])))})),void 0!==L?L.allowance(n,R).then((function(t){q.a.utils.formatEther(t)>=q.a.utils.formatEther(nt.a.div(100))&&!l&&j(!0)})):!l&&j(!0),void 0!==U?U.allowance(n,R).then((function(t){q.a.utils.formatEther(t)>=q.a.utils.formatEther(nt.a.div(100))&&!m&&A(!0)})):!m&&A(!0);var Q=void 0!==L&&void 0!==U?function(){_.swapExactTokensForTokens(F,"0",N,W,z,{gasLimit:q.a.utils.hexlify(25e4),gasPrice:q.a.utils.parseUnits("5","gwei")}).then((function(t){u(!0),t.wait().then((function(){a.getBalance(n).then((function(t){return g(P(q.a.utils.formatEther(t)))})),a.getBalance(n).then((function(t){return g(I(q.a.utils.formatEther(t)))})),u(!1),g(D("0"))}))}))}:function(){_.swapExactETHForTokens("0",N,W,z,{value:F,gasLimit:q.a.utils.hexlify(25e4),gasPrice:q.a.utils.parseUnits("5","gwei")}).then((function(t){u(!0),t.wait().then((function(){w!==M.d[e].address?L.balanceOf(n).then((function(t){return g(P(q.a.utils.formatEther(t)))})):a.getBalance(n).then((function(t){return g(P(q.a.utils.formatEther(t)))})),C!==M.d[e].address?U.balanceOf(n).then((function(t){return g(I(q.a.utils.formatEther(t)))})):a.getBalance(n).then((function(t){return g(I(q.a.utils.formatEther(t)))})),u(!1),g(D("0"))}))}))};return Object(H.jsxs)(p,{style:{marginTop:"10px",border:"2px solid"},children:[Object(H.jsx)(x,{children:"\uc2a4\uc651"}),i?Object(H.jsx)(O,{children:"Pending..."}):Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("form",{children:Object(H.jsx)("label",{children:Object(H.jsxs)(O,{children:["Input :",Object(H.jsx)("input",{type:"text",onChange:function(t){0!==t.target.value.length?g(D(t.target.value)):g(D("0"))}})]})})}),Object(H.jsxs)(O,{children:["Output : ",B]}),l&&m?Object(H.jsx)("button",{style:{color:"green"},type:"button",onClick:Q,children:"Swap"}):l?Object(H.jsx)("button",{style:{color:"red"},type:"button",onClick:G,children:"Approve B"}):m?Object(H.jsx)("button",{style:{color:"red"},type:"button",onClick:J,children:"Approve A"}):Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("button",{style:{color:"red"},type:"button",onClick:J,children:"Approve A"}),Object(H.jsx)("button",{style:{color:"red"},type:"button",onClick:G,children:"Approve B"})]})]})]})};var rt=function(){var t=Object(v.b)(),e=Object(b.b)(),n=e.account,a=e.library,r=X(),c=r.tokenAAddress,i=r.tokenBAddress,u={input:Object(v.c)((function(t){return null===t||void 0===t?void 0:t.addInput})),input2:Object(v.c)((function(t){return null===t||void 0===t?void 0:t.addInput2}))},s=u.input,d=u.input2,l=V(),j=l.tokenAContract,f=l.tokenBContract,h=Z().routerContract,m=Object(o.useState)(!1),A=Object(K.a)(m,2),g=A[0],y=A[1],k=Object(o.useState)(!1),B=Object(K.a)(k,2),E=B[0],w=B[1],C=Object(o.useState)(!1),T=Object(K.a)(C,2),D=T[0],S=T[1],_=void 0!==s?q.a.utils.parseEther(s):void 0,F=void 0!==d?q.a.utils.parseEther(d):void 0,M=n,N=Math.floor(Date.now()/1e3)+1200;function W(){j.approve(R,nt.a).then((function(t){S(!0),t.wait().then((function(){S(!1),y(!0)}))}))}function z(){f.approve(R,nt.a).then((function(t){S(!0),t.wait().then((function(){S(!1),w(!0)}))}))}void 0!==j?j.allowance(n,R).then((function(t){q.a.utils.formatEther(t)>=q.a.utils.formatEther(nt.a.div(100))&&!g&&y(!0)})):!g&&y(!0),void 0!==f?f.allowance(n,R).then((function(t){q.a.utils.formatEther(t)>=q.a.utils.formatEther(nt.a.div(100))&&!E&&w(!0)})):!E&&w(!0);var J=void 0===j||void 0===f?function(){h.addLiquidityETH(void 0===j?i:c,F,"0","0",M,N,{value:_,gasLimit:q.a.utils.hexlify(25e4),gasPrice:q.a.utils.parseUnits("5","gwei")}).then((function(e){S(!0),e.wait().then((function(){void 0===j?(f.balanceOf(n).then((function(e){return t(I(q.a.utils.formatEther(e)))})),a.getBalance(n).then((function(e){return t(P(q.a.utils.formatEther(e)))}))):(j.balanceOf(n).then((function(e){return t(P(q.a.utils.formatEther(e)))})),a.getBalance(n).then((function(e){return t(I(q.a.utils.formatEther(e)))}))),S(!1)}))}))}:function(){h.addLiquidity(c,i,_,F,"0","0",M,N,{gasLimit:q.a.utils.hexlify(25e4),gasPrice:q.a.utils.parseUnits("5","gwei")}).then((function(e){S(!0),e.wait().then((function(){j.balanceOf(n).then((function(e){return t(P(q.a.utils.formatEther(e)))})),f.balanceOf(n).then((function(e){return t(I(q.a.utils.formatEther(e)))})),S(!1)}))}))};return Object(H.jsxs)(p,{children:[Object(H.jsx)(x,{children:"\uc720\ub3d9\uc131 \uacf5\uae09"}),D?Object(H.jsx)("button",{style:{color:"pink"},children:"Pending..."}):Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("form",{children:Object(H.jsx)("label",{children:Object(H.jsxs)(O,{children:["Token A Input :",Object(H.jsx)("input",{type:"text",onChange:function(e){0!==e.target.value.length?t(L(e.target.value)):t(L("0"))}})]})})}),Object(H.jsx)("form",{children:Object(H.jsx)("label",{children:Object(H.jsxs)(O,{children:["Token B Input :",Object(H.jsx)("input",{type:"text",onChange:function(e){0!==e.target.value.length?t(U(e.target.value)):t(U("0"))}})]})})}),g&&E?Object(H.jsx)("button",{style:{color:"green"},type:"button",onClick:J,children:"Add Liquidity"}):g?Object(H.jsx)("button",{style:{color:"red"},type:"button",onClick:z,children:"Approve B"}):E?Object(H.jsx)("button",{style:{color:"red"},type:"button",onClick:W,children:"Approve A"}):Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("button",{style:{color:"red"},type:"button",onClick:W,children:"Approve A"}),Object(H.jsx)("button",{style:{color:"red"},type:"button",onClick:z,children:"Approve B"})]})]})]})};var ct=function(){var t=Object(v.b)(),e=Object(b.b)(),n=e.account,a=e.library,r=Q().LPBalance,c=X(),i=c.tokenAAddress,u=c.tokenBAddress,s=Y().pairTokenContract,d=V(),l=d.tokenAContract,j=d.tokenBContract,f=Z().routerContract,h=Object(o.useState)(!1),O=Object(K.a)(h,2),m=O[0],A=O[1],g=Object(o.useState)(!1),y=Object(K.a)(g,2),k=y[0],B=y[1];s.allowance(n,R).then((function(t){q.a.utils.formatEther(t)>=q.a.utils.formatEther(nt.a.div(100))&&!k&&B(!0)}));var E=q.a.utils.parseEther(r),w=n,C=Math.floor(Date.now()/1e3)+1200,T=void 0===l||void 0===j?function(){f.removeLiquidityETH(void 0===l?u:i,E,"0","0",w,C,{gasLimit:q.a.utils.hexlify(25e4),gasPrice:q.a.utils.parseUnits("5","gwei")}).then((function(e){A(!0),e.wait().then((function(){void 0===l?(j.balanceOf(n).then((function(e){return t(I(q.a.utils.formatEther(e)))})),a.getBalance(n).then((function(e){return t(P(q.a.utils.formatEther(e)))}))):(l.balanceOf(n).then((function(e){return t(P(q.a.utils.formatEther(e)))})),a.getBalance(n).then((function(e){return t(I(q.a.utils.formatEther(e)))}))),A(!1)}))}))}:function(){f.removeLiquidity(i,u,E,"0","0",w,C).then((function(e){A(!0),e.wait().then((function(){i.balanceOf(n).then((function(e){return t(P(q.a.utils.formatEther(e)))})),u.balanceOf(n).then((function(e){return t(I(q.a.utils.formatEther(e)))})),A(!1)}))}))};return Object(H.jsxs)(p,{children:[Object(H.jsx)(x,{children:"\uc720\ub3d9\uc131 \uc81c\uac70"}),m?Object(H.jsx)("button",{style:{color:"pink"},children:"Pending..."}):k?Object(H.jsx)("button",{style:{color:"green"},type:"button",onClick:T,children:"Remove Liquidity"}):Object(H.jsx)("button",{style:{color:"red"},type:"button",onClick:function(){s.approve(R,nt.a).then((function(t){A(!0),t.wait().then((function(){A(!1),B(!0)}))}))},children:"Approve"})]})};var it,ot,ut,st,dt=function(){var t=Object(b.b)(),e=t.library,n=t.activate,a=X(),r=a.tokenAAddress,c=a.tokenBAddress,i=[{tab:"Swap",content:Object(H.jsx)(at,{})},{tab:"Add",content:Object(H.jsx)(rt,{})},{tab:"Remove",content:Object(H.jsx)(ct,{})}],u=function(t,e){var n=Object(o.useState)(t),a=Object(K.a)(n,2),r=a[0],c=a[1];return{contentItem:e[r],contentChange:c}}(0,i),s=u.contentItem,d=u.contentChange;return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(O,{style:{fontSize:"30px",marginTop:"30px"},children:"Dong Chang Swap"}),e?Object(H.jsxs)(h,{style:{gap:"30px"},children:[Object(H.jsx)(et,{}),Object(H.jsx)("div",{style:{width:"100%"},children:""!==r&&""!==c?Object(H.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(H.jsx)("div",{style:{alignItems:"center",display:"flex"},children:i.map((function(t,e){return Object(H.jsx)("button",{style:{flexGrow:"1"},onClick:function(){return d(e)},children:t.tab})}))}),Object(H.jsx)("div",{children:s.content})]}):Object(H.jsx)(H.Fragment,{})})]}):Object(H.jsx)("button",{type:"button",onClick:function(){n(j)},children:"Connect"})]})},lt=f.a.div(it||(it=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"]))),bt=(Object(f.a)(lt)(ot||(ot=Object(l.a)(["\n  width: 100%;\n  align-items: center;\n"]))),f.a.div(ut||(ut=Object(l.a)(["\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ",";\n  justify-items: ",";\n"])),(function(t){var e=t.gap;return("sm"===e?"8px":"md"===e&&"12px")||"lg"===e&&"24px"||e}),(function(t){var e=t.justify;return e&&e}))),jt=f.a.div(st||(st=Object(l.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  font-family: 'Spoqa Han Sans Neo', serif;\n"])));var ft=function(){return Object(H.jsx)(jt,{children:Object(H.jsx)(bt,{gap:"lg",children:Object(H.jsx)(dt,{})})})},ht=n(77),pt=n(26),Ot={tokenABalance:"0",tokenBBalance:"0",LPBalance:"0",swapInput:"0",swapOutput:"0",swapExpect:"0",addInput:"0",addInput2:"0",tokenAAddress:"",tokenBAddress:""},xt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:return Object(pt.a)(Object(pt.a)({},t),{},{tokenABalance:e.tokenABalance});case A:return Object(pt.a)(Object(pt.a)({},t),{},{tokenBBalance:e.tokenBBalance});case g:return Object(pt.a)(Object(pt.a)({},t),{},{LPBalance:e.LPBalance});case y:return Object(pt.a)(Object(pt.a)({},t),{},{swapInput:e.swapInput});case k:return Object(pt.a)(Object(pt.a)({},t),{},{swapOutput:e.swapOutput});case B:return Object(pt.a)(Object(pt.a)({},t),{},{swapExpect:e.swapExpect});case w:return Object(pt.a)(Object(pt.a)({},t),{},{addInput2:e.addInput2});case E:return Object(pt.a)(Object(pt.a)({},t),{},{addInput:e.addInput});case C:return Object(pt.a)(Object(pt.a)({},t),{},{tokenAAddress:e.tokenAAddress});case T:return Object(pt.a)(Object(pt.a)({},t),{},{tokenBAddress:e.tokenBAddress});default:return t}},vt=n(97),mt=Object(ht.createStore)(xt,Object(vt.composeWithDevTools)()),At=n(76);var gt=function(t){var e=new At.a(t);return e.pollingInterval=12e3,e};d.a.render(Object(H.jsx)(u.a.StrictMode,{children:Object(H.jsx)(b.a,{getLibrary:gt,children:Object(H.jsx)(v.a,{store:mt,children:Object(H.jsx)(ft,{})})})}),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.4349ba17.chunk.js.map