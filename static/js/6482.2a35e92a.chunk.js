"use strict";(self.webpackChunkgambit_interface=self.webpackChunkgambit_interface||[]).push([[6482],{40248:(e,t,s)=>{s.d(t,{mb:()=>C,Ao:()=>b,vZ:()=>y,pV:()=>H,D8:()=>K,IN:()=>I,jL:()=>m,lH:()=>Q,dC:()=>Y});Symbol();const o=Symbol();const n=Object.getPrototypeOf,a=new WeakMap,i=e=>e&&(a.has(e)?a.get(e):n(e)===Object.prototype||n(e)===Array.prototype),r=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];a.set(e,t)},l=e=>"object"===typeof e&&null!==e,c=new WeakMap,d=new WeakSet,p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.is,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e,t)=>new Proxy(e,t),s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e=>l(e)&&!d.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new WeakMap,p=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n;const o=a.get(e);if((null==o?void 0:o[0])===t)return o[1];const i=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return r(i,!0),a.set(e,[t,i]),Reflect.ownKeys(e).forEach((t=>{if(Object.getOwnPropertyDescriptor(i,t))return;const o=Reflect.get(e,t),n={value:o,enumerable:!0,configurable:!0};if(d.has(o))r(o,!1);else if(o instanceof Promise)delete n.value,n.get=()=>s(o);else if(c.has(o)){const[e,t]=c.get(o);n.value=p(e,t(),s)}Object.defineProperty(i,t,n)})),Object.preventExtensions(i)},u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new WeakMap,g=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[1,1],h=arguments.length>8&&void 0!==arguments[8]?arguments[8]:n=>{if(!l(n))throw new Error("object required");const a=u.get(n);if(a)return a;let r=g[0];const f=new Set,m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:++g[0];r!==t&&(r=t,f.forEach((s=>s(e,t))))};let b=g[1];const v=e=>(t,s)=>{const o=[...t];o[1]=[e,...o[1]],m(o,s)},y=new Map,w=e=>{var t;const s=y.get(e);s&&(y.delete(e),null==(t=s[1])||t.call(s))},I=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),W={deleteProperty(e,t){const s=Reflect.get(e,t);w(t);const o=Reflect.deleteProperty(e,t);return o&&m(["delete",[t],s]),o},set(t,n,a,r){const p=Reflect.has(t,n),g=Reflect.get(t,n,r);if(p&&(e(g,a)||u.has(a)&&e(g,u.get(a))))return!0;w(n),l(a)&&(a=(e=>i(e)&&e[o]||null)(a)||a);let b=a;if(a instanceof Promise)a.then((e=>{a.status="fulfilled",a.value=e,m(["resolve",[n],e])})).catch((e=>{a.status="rejected",a.reason=e,m(["reject",[n],e])}));else{!c.has(a)&&s(a)&&(b=h(a));const e=!d.has(b)&&c.get(b);e&&((e,t)=>{if(y.has(e))throw new Error("prop listener already exists");if(f.size){const s=t[3](v(e));y.set(e,[t,s])}else y.set(e,[t])})(n,e)}return Reflect.set(t,n,b,r),m(["set",[n],a,g]),!0}},C=t(I,W);u.set(n,C);const O=[I,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:++g[1];return b===e||f.size||(b=e,y.forEach((t=>{let[s]=t;const o=s[1](e);o>r&&(r=o)}))),r},p,e=>{f.add(e),1===f.size&&y.forEach(((e,t)=>{let[s,o]=e;if(o)throw new Error("remove already exists");const n=s[3](v(t));y.set(t,[s,n])}));return()=>{f.delete(e),0===f.size&&y.forEach(((e,t)=>{let[s,o]=e;o&&(o(),y.set(t,[s]))}))}}];return c.set(C,O),Reflect.ownKeys(n).forEach((e=>{const t=Object.getOwnPropertyDescriptor(n,e);"value"in t&&(C[e]=n[e],delete t.value,delete t.writable),Object.defineProperty(I,e,t)})),C};return[h,c,d,e,t,s,n,a,p,u,g]},[u]=p();function g(){return u(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function h(e,t,s){const o=c.get(e);let n;o||console.warn("Please use proxy object");const a=[],i=o[3];let r=!1;const l=i((e=>{a.push(e),s?t(a.splice(0)):n||(n=Promise.resolve().then((()=>{n=void 0,r&&t(a.splice(0))})))}));return r=!0,()=>{r=!1,l()}}const f=g({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),m={state:f,subscribe:e=>h(f,(()=>e(f))),push(e,t){e!==f.view&&(f.view=e,t&&(f.data=t),f.history.push(e))},reset(e){f.view=e,f.history=[e]},replace(e){f.history.length>1&&(f.history[f.history.length-1]=e,f.view=e)},goBack(){if(f.history.length>1){f.history.pop();const[e]=f.history.slice(-1);f.view=e}},setData(e){f.data=e}},b={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>"undefined"!==typeof window&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/.test(navigator.userAgent)),isAndroid:()=>b.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){const e=navigator.userAgent.toLowerCase();return b.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,isTelegram:()=>"undefined"!==typeof window&&(Boolean(window.TelegramWebviewProxy)||Boolean(window.Telegram)||Boolean(window.TelegramWebviewProxyProto)),formatNativeUrl(e,t,s){if(b.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let o=e;o.includes("://")||(o=e.replaceAll("/","").replaceAll(":",""),o="".concat(o,"://")),o.endsWith("/")||(o="".concat(o,"/")),this.setWalletConnectDeepLink(o,s);const n=encodeURIComponent(t);return"".concat(o,"wc?uri=").concat(n)},formatUniversalUrl(e,t,s){if(!b.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let o=e;if(o.startsWith("https://t.me")){const e=Buffer.from(t).toString("base64").replace(/[=]/g,"");o.endsWith("/")&&(o=o.slice(0,-1)),this.setWalletConnectDeepLink(o,s);const n=new URL(o);n.searchParams.set("startapp",e);return n.toString()}o.endsWith("/")||(o="".concat(o,"/")),this.setWalletConnectDeepLink(o,s);const n=encodeURIComponent(t);return"".concat(o,"wc?uri=").concat(n)},wait:async e=>new Promise((t=>{setTimeout(t,e)})),openHref(e,t){const s=this.isTelegram()?"_blank":t;window.open(e,s,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(b.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch(s){console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(b.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch(t){console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(b.WALLETCONNECT_DEEPLINK_CHOICE)}catch(e){console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{"undefined"!==typeof localStorage&&localStorage.setItem(b.WCM_VERSION,"2.7.0")}catch(e){console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=null==(e=m.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},v=g({enabled:"undefined"!==typeof location&&(location.hostname.includes("localhost")||location.protocol.includes("https")),userSessionId:"",events:[],connectedWalletId:void 0}),y={state:v,subscribe:e=>h(v.events,(()=>e(function(e,t){const s=c.get(e);s||console.warn("Please use proxy object");const[o,n,a]=s;return a(o,n(),t)}(v.events[v.events.length-1])))),initialize(){v.enabled&&"undefined"!==typeof(null==crypto?void 0:crypto.randomUUID)&&(v.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){v.connectedWalletId=e},click(e){if(v.enabled){const t={type:"CLICK",name:e.name,userSessionId:v.userSessionId,timestamp:Date.now(),data:e};v.events.push(t)}},track(e){if(v.enabled){const t={type:"TRACK",name:e.name,userSessionId:v.userSessionId,timestamp:Date.now(),data:e};v.events.push(t)}},view(e){if(v.enabled){const t={type:"VIEW",name:e.name,userSessionId:v.userSessionId,timestamp:Date.now(),data:e};v.events.push(t)}}},w=g({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),I={state:w,subscribe:e=>h(w,(()=>e(w))),setChains(e){w.chains=e},setWalletConnectUri(e){w.walletConnectUri=e},setIsCustomDesktop(e){w.isCustomDesktop=e},setIsCustomMobile(e){w.isCustomMobile=e},setIsDataLoaded(e){w.isDataLoaded=e},setIsUiLoaded(e){w.isUiLoaded=e},setIsAuth(e){w.isAuth=e}},W=g({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),C={state:W,subscribe:e=>h(W,(()=>e(W))),setConfig(e){var t,s;y.initialize(),I.setChains(e.chains),I.setIsAuth(Boolean(e.enableAuthMode)),I.setIsCustomMobile(Boolean(null==(t=e.mobileWallets)?void 0:t.length)),I.setIsCustomDesktop(Boolean(null==(s=e.desktopWallets)?void 0:s.length)),b.setModalVersionInStorage(),Object.assign(W,e)}};var O=Object.defineProperty,E=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,A=(e,t,s)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const k="https://explorer-api.walletconnect.com",M="wcm",D="js-".concat("2.7.0");async function U(e,t){const s=((e,t)=>{for(var s in t||(t={}))L.call(t,s)&&A(e,s,t[s]);if(E)for(var s of E(t))j.call(t,s)&&A(e,s,t[s]);return e})({sdkType:M,sdkVersion:D},t),o=new URL(e,k);o.searchParams.append("projectId",C.state.projectId),Object.entries(s).forEach((e=>{let[t,s]=e;s&&o.searchParams.append(t,String(s))}));return(await fetch(o)).json()}const P={getDesktopListings:async e=>U("/w3m/v1/getDesktopListings",e),getMobileListings:async e=>U("/w3m/v1/getMobileListings",e),getInjectedListings:async e=>U("/w3m/v1/getInjectedListings",e),getAllListings:async e=>U("/w3m/v1/getAllListings",e),getWalletImageUrl:e=>"".concat(k,"/w3m/v1/getWalletImage/").concat(e,"?projectId=").concat(C.state.projectId,"&sdkType=").concat(M,"&sdkVersion=").concat(D),getAssetImageUrl:e=>"".concat(k,"/w3m/v1/getAssetImage/").concat(e,"?projectId=").concat(C.state.projectId,"&sdkType=").concat(M,"&sdkVersion=").concat(D)};var S=Object.defineProperty,N=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,R=(e,t,s)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const _=b.isMobile(),B=g({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),H={state:B,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=C.state;if("NONE"===e||"ALL"===t&&!e)return B.recomendedWallets;if(b.isArray(e)){const t={recommendedIds:e.join(",")},{listings:s}=await P.getAllListings(t),o=Object.values(s);o.sort(((t,s)=>e.indexOf(t.id)-e.indexOf(s.id))),B.recomendedWallets=o}else{const{chains:e,isAuth:s}=I.state,o=null==e?void 0:e.join(","),n=b.isArray(t),a={page:1,sdks:s?"auth_v1":void 0,entries:b.RECOMMENDED_WALLET_AMOUNT,chains:o,version:2,excludedIds:n?t.join(","):void 0},{listings:i}=_?await P.getMobileListings(a):await P.getDesktopListings(a);B.recomendedWallets=Object.values(i)}return B.recomendedWallets},async getWallets(e){const t=((e,t)=>{for(var s in t||(t={}))T.call(t,s)&&R(e,s,t[s]);if(N)for(var s of N(t))x.call(t,s)&&R(e,s,t[s]);return e})({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:o}=C.state,{recomendedWallets:n}=B;if("ALL"===o)return B.wallets;n.length?t.excludedIds=n.map((e=>e.id)).join(","):b.isArray(s)&&(t.excludedIds=s.join(",")),b.isArray(o)&&(t.excludedIds=[t.excludedIds,o].filter(Boolean).join(",")),I.state.isAuth&&(t.sdks="auth_v1");const{page:a,search:i}=e,{listings:r,total:l}=_?await P.getMobileListings(t):await P.getDesktopListings(t),c=Object.values(r),d=i?"search":"wallets";return B[d]={listings:[...B[d].listings,...c],total:l,page:null!=a?a:1},{listings:c,total:l}},getWalletImageUrl:e=>P.getWalletImageUrl(e),getAssetImageUrl:e=>P.getAssetImageUrl(e),resetSearch(){B.search={listings:[],total:0,page:1}}},V=g({open:!1}),K={state:V,subscribe:e=>h(V,(()=>e(V))),open:async e=>new Promise((t=>{const{isUiLoaded:s,isDataLoaded:o}=I.state;if(b.removeWalletConnectDeepLink(),I.setWalletConnectUri(null==e?void 0:e.uri),I.setChains(null==e?void 0:e.chains),m.reset("ConnectWallet"),s&&o)V.open=!0,t();else{const e=setInterval((()=>{const s=I.state;s.isUiLoaded&&s.isDataLoaded&&(clearInterval(e),V.open=!0,t())}),200)}})),close(){V.open=!1}};var z=Object.defineProperty,J=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,F=(e,t,s)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const G=g({themeMode:"undefined"!==typeof matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}),Q={state:G,subscribe:e=>h(G,(()=>e(G))),setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(G.themeMode=t),s&&(G.themeVariables=((e,t)=>{for(var s in t||(t={}))q.call(t,s)&&F(e,s,t[s]);if(J)for(var s of J(t))Z.call(t,s)&&F(e,s,t[s]);return e})({},s))}},X=g({open:!1,message:"",variant:"success"}),Y={state:X,subscribe:e=>h(X,(()=>e(X))),openToast(e,t){X.open=!0,X.message=e,X.variant=t},closeToast(){X.open=!1}}},36482:(e,t,s)=>{s.d(t,{WalletConnectModal:()=>n});var o=s(40248);class n{constructor(e){this.openModal=o.D8.open,this.closeModal=o.D8.close,this.subscribeModal=o.D8.subscribe,this.setTheme=o.lH.setThemeConfig,o.lH.setThemeConfig(e),o.mb.setConfig(e),this.initUi()}async initUi(){if("undefined"!==typeof window){await s.e(5389).then(s.bind(s,95389));const e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),o.IN.setIsUiLoaded(!0)}}}}}]);