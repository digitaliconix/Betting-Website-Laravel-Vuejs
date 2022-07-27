jQuery( document ).ready(function($) {
    /*banner page */
          jQuery("#slider-id").slick({
        autoplay: true,
        arrows:false,
        dots: true,
        infinite: true,
        speed: 4000,
        slidesToShow: 1,
        autoplay:false,
        fade: true,
        speed: 300,
        infinite: true,
        cssEase: 'cubic-bezier(1, 0, 1, 1)',
        touchThreshold: 100,
        customPaging : function(slider, i) {
        var thumb = jQuery(slider.$slides[i]).data();
        return '<a>0'+(i+1)+'</a>';
        // customPaging : function(slider, i) {
        // var thumb = $(slider.$slides[i]).data();
        // return '<a class="dot">'+0+i+'</a>';
        }
        // ,
        // responsive: [{
        // breakpoint: 500,
        // settings: {
        // dots: false,
        // arrows: false,
        // infinite: false,
        // slidesToShow: 2,
        // slidesToScroll: 2
        // }
        // }]
        });
      /*banner page */

  /*Sale page */
  jQuery("#cilent").slick({
        autoplay: true,
        arrows:true,
        dots: false,
        infinite: true,
        speed: 4000,
        slidesToShow: 2,
        autoplay:false,
        fade: false,
        speed: 300,
        infinite: true,
        touchThreshold: 100,
        responsive: [{
        breakpoint: 500,
        settings: {
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2
        }
        }]
        });      
  /*Sale page */   

/*Scroll*/

  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 100) {
  //     $("#scroll").fadeIn();
  //   } else {
  //     $("#scroll").fadeOut();
  //   }
  // });
  // $("#scroll").click(function () {
  //   $("html, body").animate({ scrollTop: 0 }, 600);
  //   return false;
  // });

/*Scroll*/

/*Image lazyload*/
    console.clear();
    ScrollOut({
    targets: ".lazy",
    //once: tr ue,
    onShown: function (el) {
    if (!el.src) {
    el.src = el.dataset.src;
    }
    }
    });
/*Image lazyload*/
});

/*Trade Form*/
var menu_btn = document.querySelector("#menu-btn");
var sidebar = document.querySelector("#sidebar");
var container = document.querySelector(".my-container");
menu_btn.addEventListener("click", () => {
  sidebar.classList.toggle("active-nav");
  container.classList.toggle("active-cont");
});

/*Trade Form*/


// Scroll Out
var ScrollOut=function(){"use strict";function e(){}var t,n=[],r=[];function o(){r.slice().forEach(function(e){return e()});var e=n;n=[],e.forEach(function(e){return e.f.apply(0,e.a)}),t=r.length?requestAnimationFrame(o):0}function i(t){return t=t||e,function(){t.apply(0,arguments)}}function c(e,t,n){return e<t?t:n<e?n:e}function l(e){return(0<e)-(e<0)}var s={};function f(e){return s[e]||(s[e]=e.replace(/([A-Z])/g,u))}function u(e){return"-"+e[0].toLowerCase()}var a=window,v=document.documentElement;function h(e,t){return e&&0!=e.length?e.nodeName?[e]:[].slice.call(e[0].nodeName?e:(t||v).querySelectorAll(e)):[]}var d=i(function(e,t){for(var n in t)e.setAttribute("data-"+f(n),t[n])}),p="scroll",g="resize",m="addEventListener",X="removeEventListener",Y=0;return function(n){var s,u,w,E,S,y,D,L=i((n=n||{}).onChange),P=i(n.onHidden),b=i(n.onShown),A=n.cssProps?(s=n.cssProps,i(function(e,t){for(var n in t)(1==s||s[n])&&e.style.setProperty("--"+f(n),(r=t[n],Math.round(1e4*r)/1e4));var r})):e,H=n.scrollingElement,O=H?h(H)[0]:a,x=H?h(H)[0]:v,W=++Y,N=function(e,t,n){return e[t+W]!=(e[t+W]=JSON.stringify(n))},T=function(){E=!0},$=function(){var e=x.clientWidth,t=x.clientHeight,r=l(-S+(S=x.scrollLeft||a.pageXOffset)),o=l(-y+(y=x.scrollTop||a.pageYOffset)),i=x.scrollLeft/(x.scrollWidth-e||1),s=x.scrollTop/(x.scrollHeight-t||1);u={scrollDirX:r,scrollDirY:o,scrollPercentX:i,scrollPercentY:s},E&&(E=!1,w=h(n.targets||"[data-scroll]",h(n.scope||x)[0]).map(function(e){return{$:e,ctx:{}}})),w.forEach(function(r){for(var o=r.$,i=o,s=0,f=0;s+=i.offsetLeft,f+=i.offsetTop,(i=i.offsetParent)&&i!=O;);var u=o.clientWidth,a=o.clientHeight,v=(c(s+u,S,S+e)-c(s,S,S+e))/u,h=(c(f+a,y,y+t)-c(f,y,y+t))/a,d=c((S-(u/2+s-e/2))/(e/2),-1,1),p=c((y-(a/2+f-t/2))/(t/2),-1,1);r.ctx={elementHeight:a,elementWidth:u,intersectX:1==v?0:l(s-S),intersectY:1==h?0:l(f-y),offsetX:s,offsetY:f,viewportX:d,viewportY:p,visibleX:v,visibleY:h,visible:+(n.offset?n.offset<=y:(n.threshold||0)<v*h)}})},_=(D=function(){if(w){N(x,"_S",u)&&(d(x,{scrollDirX:u.scrollDirX,scrollDirY:u.scrollDirY}),A(x,u));for(var e=w.length-1;-1<e;e--){var t=w[e],r=t.$,o=t.ctx,i=o.visible;N(r,"_SO",o)&&A(r,o),N(r,"_SV",i)&&(d(r,{scroll:i?"in":"out"}),L(r,o,x),(i?b:P)(r,o,x)),i&&n.once&&w.splice(e,1)}}},r.push(D),t||o(),function(){!(r=r.filter(function(e){return e!=D})).length&&t&&cancelAnimationFrame(t)});return T(),$(),a[m](g,T),O[m](p,$),{index:T,update:$,teardown:function(){_(),a[X](g,T),O[X](p,$)}}}}();


