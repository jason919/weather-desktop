import{m as L,g as u}from"./index-JX5HRqIc.js";var m={size:"1em",strokeWidth:4,strokeLinecap:"round",strokeLinejoin:"round",rtl:!1,theme:"outline",colors:{outline:{fill:"#333",background:"transparent"},filled:{fill:"#333",background:"#FFF"},twoTone:{fill:"#333",twoTone:"#2F88FF"},multiColor:{outStrokeColor:"#333",outFillColor:"#2F88FF",innerStrokeColor:"#FFF",innerFillColor:"#43CCF8"}},prefix:"i"};function v(){return"icon-"+((1+Math.random())*4294967296|0).toString(16).substring(1)}function y(t,i,r){var e=typeof i.fill=="string"?[i.fill]:i.fill||[],o=[],n=i.theme||r.theme;switch(n){case"outline":o.push(typeof e[0]=="string"?e[0]:"currentColor"),o.push("none"),o.push(typeof e[0]=="string"?e[0]:"currentColor"),o.push("none");break;case"filled":o.push(typeof e[0]=="string"?e[0]:"currentColor"),o.push(typeof e[0]=="string"?e[0]:"currentColor"),o.push("#FFF"),o.push("#FFF");break;case"two-tone":o.push(typeof e[0]=="string"?e[0]:"currentColor"),o.push(typeof e[1]=="string"?e[1]:r.colors.twoTone.twoTone),o.push(typeof e[0]=="string"?e[0]:"currentColor"),o.push(typeof e[1]=="string"?e[1]:r.colors.twoTone.twoTone);break;case"multi-color":o.push(typeof e[0]=="string"?e[0]:"currentColor"),o.push(typeof e[1]=="string"?e[1]:r.colors.multiColor.outFillColor),o.push(typeof e[2]=="string"?e[2]:r.colors.multiColor.innerStrokeColor),o.push(typeof e[3]=="string"?e[3]:r.colors.multiColor.innerFillColor);break}return{size:i.size||r.size,strokeWidth:i.strokeWidth||r.strokeWidth,strokeLinecap:i.strokeLinecap||r.strokeLinecap,strokeLinejoin:i.strokeLinejoin||r.strokeLinejoin,colors:o,id:t}}var g=Symbol("icon-context");function j(t,i,r){var e={name:"icon-"+t,props:["size","strokeWidth","strokeLinecap","strokeLinejoin","theme","fill","spin"],setup:function(n){var a=v(),s=L(g,m);return function(){var c=n.size,h=n.strokeWidth,k=n.strokeLinecap,f=n.strokeLinejoin,p=n.theme,C=n.fill,d=n.spin,F=y(a,{size:c,strokeWidth:h,strokeLinecap:k,strokeLinejoin:f,theme:p,fill:C},s),l=[s.prefix+"-icon"];return l.push(s.prefix+"-icon-"+t),i&&s.rtl&&l.push(s.prefix+"-icon-rtl"),d&&l.push(s.prefix+"-icon-spin"),u("span",{class:l.join(" ")},[r(F)])}}};return e}const x=j("local-two",!1,function(t){return u("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[u("path",{d:"M24 44C24 44 39 32 39 19C39 10.7157 32.2843 4 24 4C15.7157 4 9 10.7157 9 19C9 32 24 44 24 44Z",fill:t.colors[1],stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linejoin":t.strokeLinejoin},null),u("path",{d:"M24 25C27.3137 25 30 22.3137 30 19C30 15.6863 27.3137 13 24 13C20.6863 13 18 15.6863 18 19C18 22.3137 20.6863 25 24 25Z",fill:t.colors[3],stroke:t.colors[2],"stroke-width":t.strokeWidth,"stroke-linejoin":t.strokeLinejoin},null)])}),W=(t,i)=>{const r=t.__vccOpts||t;for(const[e,o]of i)r[e]=o;return r};export{x as L,W as _};
