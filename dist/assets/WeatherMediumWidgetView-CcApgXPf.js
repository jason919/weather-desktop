import{u as g,W as w,L as W,_ as D,d as y,a as k}from"./WeatherUtils-Dl6ec87V.js";import{d as C,P as I,c as u,o as d,a as V,w as b,e as B,b as e,t as s,g as _,u as l,f as M,n as N,h as S,W as L,p as Y,i as j}from"./index-CGKFotPI.js";import{Q as P}from"./QWeatherApi-ctTIfro5.js";import{c as Q}from"./GeoApi-DP3kH_5D.js";const c=o=>(Y("data-v-88c5fe4f"),o=o(),j(),o),A={class:"flex p-2"},F={class:"flex items-center"},H=["src"],T={class:"current-live__item"},$={class:"text-2xl"},z={class:"current-time ml-auto text-right leading-6"},E=c(()=>e("br",null,null,-1)),K={class:"current-basic flex justify-around justify-center items-center"},U={class:"flex flex-col items-center"},q={class:"flex flex-col items-center"},G=c(()=>e("p",null,"相对湿度",-1)),J={class:"flex flex-col items-center"},O=c(()=>e("p",null,"降水量",-1)),R={class:"flex flex-col items-center"},X=c(()=>e("p",null,"大气压",-1)),Z=C({__name:"WeatherMediumWidgetView",setup(o){I(L,{onDataLoaded(){v()}});function p(){return P.now(r.value.id,f.value)}const{errorMsg:m,responseData:h,now:n,selectLocation:r,apiKey:f,update:v}=g(p),t=u(()=>{var a;return(a=h.value)==null?void 0:a.now}),x=u(()=>{var a;return w.getBackgroundClass(Number.parseInt(((a=t.value)==null?void 0:a.icon)??"100"))});return Q(()=>{n.value=y()},60*1e3),(a,ee)=>(d(),V(D,{"error-msg":l(m)},{default:b(()=>{var i;return[t.value?(d(),B("div",{key:0,class:N(["flex flex-col root theme--light",{[x.value]:!0}])},[e("div",A,[e("div",F,[e("img",{width:"64px",src:`/weather/image/${(i=t.value)==null?void 0:i.icon}.png`,alt:"QWeather"},null,8,H),e("div",T,[e("p",$,s(t.value.temp)+"° ",1),e("p",null,s(t.value.text),1)])]),e("p",z,[_(s(l(n).format("YYYY-MM-DD HH:mm"))+" ",1),E,e("span",null,[M(l(W)),_(s(l(r).name),1)])])]),e("div",K,[e("div",U,[e("p",null,s(t.value.windScale)+"级 ",1),e("p",null,s(t.value.windDir),1)]),e("div",q,[e("p",null,s(t.value.humidity)+"%",1),G]),e("div",J,[e("p",null,s(t.value.precip),1),O]),e("div",R,[e("p",null,s(t.value.pressure)+"hPa",1),X])])],2)):S("",!0)]}),_:1},8,["error-msg"]))}}),le=k(Z,[["__scopeId","data-v-88c5fe4f"]]);export{le as default};
