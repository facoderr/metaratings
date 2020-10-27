(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"../blocks/spider/spider.js":function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"init",(function(){return a}));var i=n("../../node_modules/chart.js/dist/Chart.js"),o=n.n(i);n("../../node_modules/chartjs-plugin-style/dist/chartjs-plugin-style.js");function a(){var e=t(".spider"),n="#e8e8e8",i="#000",a="#fff",r="#a7b0b580",s=t(document.body).hasClass("dark-theme"),l=t(document.body).hasClass("gray-theme");s?(n="#26292c",i="#fff",a="#26292c",r="#00000080"):l&&(n="#e9eaed",i="#1d2d4a");var d=function(t){var e=[],n="";return t.forEach((function(t){n.length+t.length+1<=25?n+=t+" ":(e.push(n),n=t+" ")})),e.push(n),e},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"100%",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"100%";return'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="spider-svg" width="'+t+'" height="'+e+'"></svg>'},h=function(t,e,n,i){var o=(i-90)*Math.PI/180;return{x:t+n*Math.cos(o),y:e+n*Math.sin(o)}},c=function(t,e,n,i,o){var a=h(t,e,n,o),r=h(t,e,n,i),s=o-i<=180?"0":"1";return["M",a.x,a.y,"A",n,n,0,s,0,r.x,r.y].join(" ")};e.each((function(){var e,h,u,f,g,v=t(this),b=v.find("canvas"),x=b.data("settings"),w=v.parents(".overview-sidebar").length,y=v.parents(".overview-similar").length,m=[],C=[],j=[];g=t(w?p(v.parent().width()+10,v.parent().width()+10):p(v.parent().width()+40,v.parent().width()+40)),t(this).append(g),x.forEach((function(t,e){m.push(t.label),C.push(t.tooltip),j.push(t.meta);var n=g.width(),i=13,o=6;w||(i=11),x.length>4&&(i=12,o=5),x.length>5&&(i=11,o=4);var a=t.label.substr(0,t.label.indexOf(" ")),r=t.label.substr(t.label.indexOf(" ")+1),s=(a.length-r.length)*o;if(a.length||(a=r,r="",s=0),g.get(0).insertAdjacentHTML("afterbegin",function(t,e,n,i){var o=360/n,a=c(t/2,t/2,t/2,45+e*o-o,45+(e*o+o)-o);if(0===e){var r=t/100;a="M"+14.625*r+" "+14.625*r+" c "+17.3*r+"-"+18.5*r+" "+50.6*r+"-"+20.5*r+" "+70.7*r+" 0"}return'<defs><path id="curvedTextPath'+e+"_"+i.index(".spider")+'" d="'+a+'" /></defs>'}(n,e,x.length,v)),0===e){var l=r.length?15:28,d=a.length>10?14:28;g.get(0).insertAdjacentHTML("beforeend",'<text dy="'+l+'" font-size="'+i+'" fill="#999999"><textPath color="#999999" startOffset="'+d+'%" xlink:href="#curvedTextPath'+e+"_"+v.index(".spider")+'"><tspan x="0" style="letter-spacing: 0.15em;">'+a+'</tspan><tspan dy="1em" x="'+s+'px" style="letter-spacing: 0.15em;">'+r+"</tspan></textPath></text>")}else g.get(0).insertAdjacentHTML("beforeend",'<text dy="-20" font-size="'+i+'" fill="#999999"><textPath color="#999999" startOffset="30%" xlink:href="#curvedTextPath'+e+"_"+v.index(".spider")+'"><tspan x="0" style="letter-spacing: 0.15em;">'+a+'</tspan><tspan dy="1em" x="'+s+'px" style="letter-spacing: 0.15em;">'+r+"</tspan></textPath></text>")})),u=j.length,h=(f=j.reduce((function(t,e){return t+e}),0)/u)<20?l?"#dd0a19":"#d0021b":f<40?"#d07202":f<60?"#f5a623":f<80?"#7ca920":l?"#20a980":"#20a94a",e={labels:m,datasets:[{data:j,backgroundColor:s?h+"33":h+"99",borderColor:h,pointBorderColor:h,pointBackgroundColor:h,pointRadius:2,pointHoverRadius:3,pointHitRadius:20,pointHoverShadowOffsetX:0,pointHoverShadowOffsetY:3,pointHoverShadowBlur:5,pointHoverShadowColor:r,tooltipLabel:C}]};var k=new o.a(b,{type:"radar",data:e,options:{aspectRatio:1,layout:{padding:{top:20,bottom:20,right:50,left:50}},elements:{line:{tension:.45,borderWidth:1},point:{borderWidth:1}},scale:{gridLines:{circular:!0,lineWidth:3,color:n},angleLines:{display:!0,lineWidth:3,color:n},pointLabels:{fontSize:0,fontStyle:"400",fontColor:"#999",fontFamily:"Helvetica Neue, Helvetica, Arial, sans-serif"},ticks:{display:!1,beginAtZero:!0,min:-50,max:100,stepSize:50}},tooltips:{callbacks:{title:function(t,e){return function(t,e){var n=e.labels[t[0].index];if(void 0!==n){if(n.length<=25)return[n];var i=n.split(" ");return d(i)}}(t,e)},label:function(t,e){return function(t,e){var n=e.datasets[0].tooltipLabel[t.index];if(void 0!==n){if(n.length<=25)return[n];var i=n.split(" ");return d(i)}}(t,e)}},displayColors:!1,backgroundColor:a,titleFontSize:16,titleFontColor:i,titleSpacing:5,titleMarginBottom:10,bodyFontColor:i,bodyFontSize:14,bodySpacing:5,cornerRadius:10,caretSize:8,xPadding:10,yPadding:10,shadowOffsetX:0,shadowOffsetY:3,shadowBlur:10,shadowColor:r},legend:{display:!1},hover:{onHover:function(t){}}}});w&&(k.options.tooltips.enabled=!1,k.options.tooltips.titleMarginBottom=0,k.update()),y&&(k.options.tooltips.enabled=!1,k.options.tooltips.titleMarginBottom=0,k.update())}))}}.call(this,n("../../node_modules/clean_jquery/dist/jquery.js"))}}]);