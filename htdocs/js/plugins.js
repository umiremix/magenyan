// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/*!
 * fullPage 2.6.6
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
(function(c,l){"function"===typeof define&&define.amd?define(["jquery"],function(k){return l(k,c,c.document,c.Math)}):"undefined"!==typeof exports?module.exports=l(require("jquery"),c,c.document,c.Math):l(jQuery,c,c.document,c.Math)})("undefined"!==typeof window?window:this,function(c,l,k,n,H){var m=c(l),r=c(k);c.fn.fullpage=function(d){function Ia(a){a.find(".fp-slides").after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>');"#fff"!=d.controlArrowColor&&(a.find(".fp-controlArrow.fp-next").css("border-color",
"transparent transparent transparent "+d.controlArrowColor),a.find(".fp-controlArrow.fp-prev").css("border-color","transparent "+d.controlArrowColor+" transparent transparent"));d.loopHorizontal||a.find(".fp-controlArrow.fp-prev").hide()}function Ja(){p.append('<div id="fp-nav"><ul></ul></div>');z=c("#fp-nav");z.addClass(function(){return d.showActiveTooltip?"fp-show-active "+d.navigationPosition:d.navigationPosition});for(var a=0;a<c(".fp-section").length;a++){var b="";d.anchors.length&&(b=d.anchors[a]);
var b='<li><a href="#'+b+'"><span></span></a>',g=d.navigationTooltips[a];"undefined"!==typeof g&&""!==g&&(b+='<div class="fp-tooltip '+d.navigationPosition+'">'+g+"</div>");b+="</li>";z.find("ul").append(b)}}function da(){c(".fp-section").each(function(){var a=c(this).find(".fp-slide");a.length?a.each(function(){I(c(this))}):I(c(this))});ea()}function ea(){var a=c(".fp-section.active"),b=a.find("SLIDES_WRAPPER"),g=a.find(".fp-scrollable");b.length&&(g=b.find(".fp-slide.active"));g.mouseover();fa(a);
c.isFunction(d.afterLoad)&&d.afterLoad.call(a,a.data("anchor"),a.index(".fp-section")+1);c.isFunction(d.afterRender)&&d.afterRender.call(this)}function ga(){var a;if(!d.autoScrolling||d.scrollBar){for(var b=m.scrollTop(),g=0,J=n.abs(b-k.querySelectorAll(".fp-section")[0].offsetTop),e=k.querySelectorAll(".fp-section"),f=0;f<e.length;++f){var h=n.abs(b-e[f].offsetTop);h<J&&(g=f,J=h)}a=c(e).eq(g)}if(!d.autoScrolling||d.scrollBar){if(!a.hasClass("active")){U=!0;b=c(".fp-section.active");g=b.index(".fp-section")+
1;J=V(a);e=a.data("anchor");f=a.index(".fp-section")+1;h=a.find(".fp-slide.active");if(h.length)var l=h.data("anchor"),p=h.index();u&&(a.addClass("active").siblings().removeClass("active"),c.isFunction(d.onLeave)&&d.onLeave.call(b,g,f,J),c.isFunction(d.afterLoad)&&d.afterLoad.call(a,e,f),K(e,f-1),d.anchors.length&&(A=e,W(p,l,e,f)));clearTimeout(ha);ha=setTimeout(function(){U=!1},100)}d.fitToSection&&(clearTimeout(ia),ia=setTimeout(function(){u&&(c(".fp-section.active").is(a)&&(v=!0),B(a),v=!1)},1E3))}}
function ja(a){return a.find(".fp-slides").length?a.find(".fp-slide.active").find(".fp-scrollable"):a.find(".fp-scrollable")}function L(a,b){if(h.m[a]){var d,c;"down"==a?(d="bottom",c=e.moveSectionDown):(d="top",c=e.moveSectionUp);if(0<b.length)if(d="top"===d?!b.scrollTop():"bottom"===d?b.scrollTop()+1+b.innerHeight()>=b[0].scrollHeight:void 0,d)c();else return!0;else c()}}function Ka(a){var b=a.originalEvent;if(!ka(a.target)&&X(b)){d.autoScrolling&&a.preventDefault();a=c(".fp-section.active");var g=
ja(a);u&&!w&&(b=la(b),D=b.y,M=b.x,a.find(".fp-slides").length&&n.abs(N-M)>n.abs(E-D)?n.abs(N-M)>m.width()/100*d.touchSensitivity&&(N>M?h.m.right&&e.moveSlideRight():h.m.left&&e.moveSlideLeft()):d.autoScrolling&&n.abs(E-D)>m.height()/100*d.touchSensitivity&&(E>D?L("down",g):D>E&&L("up",g)))}}function ka(a,b){b=b||0;var g=c(a).parent();return b<d.normalScrollElementTouchThreshold&&g.is(d.normalScrollElements)?!0:b==d.normalScrollElementTouchThreshold?!1:ka(g,++b)}function X(a){return"undefined"===typeof a.pointerType||
"mouse"!=a.pointerType}function La(a){a=a.originalEvent;d.fitToSection&&x.stop();X(a)&&(a=la(a),E=a.y,N=a.x)}function ma(a,b){for(var d=0,c=a.slice(n.max(a.length-b,1)),e=0;e<c.length;e++)d+=c[e];return n.ceil(d/b)}function t(a){var b=(new Date).getTime();if(d.autoScrolling&&!O){a=l.event||a;var g=a.wheelDelta||-a.deltaY||-a.detail,e=n.max(-1,n.min(1,g));149<C.length&&C.shift();C.push(n.abs(g));d.scrollBar&&(a.preventDefault?a.preventDefault():a.returnValue=!1);a=c(".fp-section.active");a=ja(a);g=
b-na;na=b;200<g&&(C=[]);u&&(b=ma(C,10),g=ma(C,70),b>=g&&(0>e?L("down",a):L("up",a)));return!1}d.fitToSection&&x.stop()}function oa(a){var b=c(".fp-section.active").find(".fp-slides"),g=b.find(".fp-slide").length;if(!(!b.length||w||2>g)){var g=b.find(".fp-slide.active"),e=null,e="prev"===a?g.prev(".fp-slide"):g.next(".fp-slide");if(!e.length){if(!d.loopHorizontal)return;e="prev"===a?g.siblings(":last"):g.siblings(":first")}w=!0;F(b,e)}}function pa(){c(".fp-slide.active").each(function(){Y(c(this),
"internal")})}function B(a,b,g){var e=a.position();if("undefined"!==typeof e&&(b={element:a,callback:b,isMovementUp:g,dest:e,dtop:e.top,yMovement:V(a),anchorLink:a.data("anchor"),sectionIndex:a.index(".fp-section"),activeSlide:a.find(".fp-slide.active"),activeSection:c(".fp-section.active"),leavingSection:c(".fp-section.active").index(".fp-section")+1,localIsResizing:v},!(b.activeSection.is(a)&&!v||d.scrollBar&&m.scrollTop()===b.dtop))){if(b.activeSlide.length)var f=b.activeSlide.data("anchor"),h=
b.activeSlide.index();d.autoScrolling&&d.continuousVertical&&"undefined"!==typeof b.isMovementUp&&(!b.isMovementUp&&"up"==b.yMovement||b.isMovementUp&&"down"==b.yMovement)&&(b.isMovementUp?c(".fp-section.active").before(b.activeSection.nextAll(".fp-section")):c(".fp-section.active").after(b.activeSection.prevAll(".fp-section").get().reverse()),y(c(".fp-section.active").position().top),pa(),b.wrapAroundElements=b.activeSection,b.dest=b.element.position(),b.dtop=b.dest.top,b.yMovement=V(b.element));
if(c.isFunction(d.onLeave)&&!b.localIsResizing){if(!1===d.onLeave.call(b.activeSection,b.leavingSection,b.sectionIndex+1,b.yMovement))return;Ma(b.activeSection)}a.addClass("active").siblings().removeClass("active");u=!1;W(h,f,b.anchorLink,b.sectionIndex);Na(b);A=b.anchorLink;K(b.anchorLink,b.sectionIndex)}}function Na(a){if(d.css3&&d.autoScrolling&&!d.scrollBar)qa("translate3d(0px, -"+a.dtop+"px, 0px)",!0),d.scrollingSpeed?setTimeout(function(){Z(a)},d.scrollingSpeed):Z(a);else{var b=Oa(a);c(b.element).animate(b.options,
d.scrollingSpeed,d.easing).promise().done(function(){Z(a)})}}function Oa(a){var b={};d.autoScrolling&&!d.scrollBar?(b.options={top:-a.dtop},b.element=".fullpage-wrapper"):(b.options={scrollTop:a.dtop},b.element="html, body");return b}function Z(a){a.wrapAroundElements&&a.wrapAroundElements.length&&(a.isMovementUp?c(".fp-section:first").before(a.wrapAroundElements):c(".fp-section:last").after(a.wrapAroundElements),y(c(".fp-section.active").position().top),pa());a.element.find(".fp-scrollable").mouseover();
c.isFunction(d.afterLoad)&&!a.localIsResizing&&d.afterLoad.call(a.element,a.anchorLink,a.sectionIndex+1);fa(a.element);Pa(a.element);u=!0;c.isFunction(a.callback)&&a.callback.call(this)}function fa(a){a.find("img[data-src], video[data-src], audio[data-src]").each(function(){c(this).attr("src",c(this).data("src"));c(this).removeAttr("data-src")})}function Pa(a){a.find("video, audio").each(function(){var a=c(this).get(0);a.hasAttribute("autoplay")&&"function"===typeof a.play&&a.play()})}function Ma(a){a.find("video, audio").each(function(){var a=
c(this).get(0);a.hasAttribute("data-ignore")||"function"!==typeof a.pause||a.pause()})}function ra(){if(!U&&!d.lockAnchors){var a=l.location.hash.replace("#","").split("/"),b=a[0],a=a[1];if(b.length){var c="undefined"===typeof A,e="undefined"===typeof A&&"undefined"===typeof a&&!w;(b&&b!==A&&!c||e||!w&&aa!=a)&&ba(b,a)}}}function Qa(a){u&&(a.pageY<P?e.moveSectionUp():a.pageY>P&&e.moveSectionDown());P=a.pageY}function F(a,b){var g=b.position(),e=b.index(),f=a.closest(".fp-section"),h=f.index(".fp-section"),
k=f.data("anchor"),l=f.find(".fp-slidesNav"),m=sa(b),p=v;if(d.onSlideLeave){var t=f.find(".fp-slide.active"),q=t.index(),r;r=q==e?"none":q>e?"left":"right";if(!p&&"none"!==r&&c.isFunction(d.onSlideLeave)&&!1===d.onSlideLeave.call(t,k,h+1,q,r,e)){w=!1;return}}b.addClass("active").siblings().removeClass("active");!d.loopHorizontal&&d.controlArrows&&(f.find(".fp-controlArrow.fp-prev").toggle(0!==e),f.find(".fp-controlArrow.fp-next").toggle(!b.is(":last-child")));f.hasClass("active")&&W(e,m,k,h);var u=
function(){p||c.isFunction(d.afterSlideLoad)&&d.afterSlideLoad.call(b,k,h+1,m,e);w=!1};d.css3?(g="translate3d(-"+n.round(g.left)+"px, 0px, 0px)",ta(a.find(".fp-slidesContainer"),0<d.scrollingSpeed).css(ua(g)),setTimeout(function(){u()},d.scrollingSpeed,d.easing)):a.animate({scrollLeft:n.round(g.left)},d.scrollingSpeed,d.easing,function(){u()});l.find(".active").removeClass("active");l.find("li").eq(e).find("a").addClass("active")}function va(){wa();if(Q){var a=c(k.activeElement);a.is("textarea")||
a.is("input")||a.is("select")||(a=m.height(),n.abs(a-ca)>20*n.max(ca,a)/100&&(e.reBuild(!0),ca=a))}else clearTimeout(xa),xa=setTimeout(function(){e.reBuild(!0)},350)}function wa(){var a=d.responsive||d.responsiveWidth,b=d.responsiveHeight;a&&e.setResponsive(m.width()<a);b&&(f.hasClass("fp-responsive")||e.setResponsive(m.height()<b))}function ta(a){var b="all "+d.scrollingSpeed+"ms "+d.easingcss3;a.removeClass("fp-notransition");return a.css({"-webkit-transition":b,transition:b})}function Ra(a,b){if(825>
a||900>b){var d=n.min(100*a/825,100*b/900).toFixed(2);p.css("font-size",d+"%")}else p.css("font-size","100%")}function K(a,b){d.menu&&(c(d.menu).find(".active").removeClass("active"),c(d.menu).find('[data-menuanchor="'+a+'"]').addClass("active"));d.navigation&&(c("#fp-nav").find(".active").removeClass("active"),a?c("#fp-nav").find('a[href="#'+a+'"]').addClass("active"):c("#fp-nav").find("li").eq(b).find("a").addClass("active"))}function V(a){var b=c(".fp-section.active").index(".fp-section");a=a.index(".fp-section");
return b==a?"none":b>a?"up":"down"}function I(a){a.css("overflow","hidden");var b=a.closest(".fp-section"),c=a.find(".fp-scrollable"),e;c.length?e=c.get(0).scrollHeight:(e=a.get(0).scrollHeight,d.verticalCentered&&(e=a.find(".fp-tableCell").get(0).scrollHeight));b=q-parseInt(b.css("padding-bottom"))-parseInt(b.css("padding-top"));e>b?c.length?c.css("height",b+"px").parent().css("height",b+"px"):(d.verticalCentered?a.find(".fp-tableCell").wrapInner('<div class="fp-scrollable" />'):a.wrapInner('<div class="fp-scrollable" />'),
a.find(".fp-scrollable").slimScroll({allowPageScroll:!0,height:b+"px",size:"10px",alwaysVisible:!0})):ya(a);a.css("overflow","")}function ya(a){a.find(".fp-scrollable").children().first().unwrap().unwrap();a.find(".slimScrollBar").remove();a.find(".slimScrollRail").remove()}function za(a){a.addClass("fp-table").wrapInner('<div class="fp-tableCell" style="height:'+Aa(a)+'px;" />')}function Aa(a){var b=q;if(d.paddingTop||d.paddingBottom)b=a,b.hasClass("fp-section")||(b=a.closest(".fp-section")),a=parseInt(b.css("padding-top"))+
parseInt(b.css("padding-bottom")),b=q-a;return b}function qa(a,b){b?ta(f):f.addClass("fp-notransition");f.css(ua(a));setTimeout(function(){f.removeClass("fp-notransition")},10)}function Ba(a){var b=c('.fp-section[data-anchor="'+a+'"]');b.length||(b=c(".fp-section").eq(a-1));return b}function ba(a,b){var d=Ba(a);"undefined"===typeof b&&(b=0);a===A||d.hasClass("active")?Ca(d,b):B(d,function(){Ca(d,b)})}function Ca(a,b){if("undefined"!==typeof b){var d=a.find(".fp-slides"),c;c=a.find(".fp-slides");var e=
c.find('.fp-slide[data-anchor="'+b+'"]');e.length||(e=c.find(".fp-slide").eq(b));c=e;c.length&&F(d,c)}}function Sa(a,b){a.append('<div class="fp-slidesNav"><ul></ul></div>');var c=a.find(".fp-slidesNav");c.addClass(d.slidesNavPosition);for(var e=0;e<b;e++)c.find("ul").append('<li><a href="#"><span></span></a></li>');c.css("margin-left","-"+c.width()/2+"px");c.find("li").first().find("a").addClass("active")}function W(a,b,c,e){e="";d.anchors.length&&!d.lockAnchors&&(a?("undefined"!==typeof c&&(e=c),
"undefined"===typeof b&&(b=a),aa=b,Da(e+"/"+b)):("undefined"!==typeof a&&(aa=b),Da(c)));Ea()}function Da(a){if(d.recordHistory)location.hash=a;else if(Q||R)history.replaceState(H,H,"#"+a);else{var b=l.location.href.split("#")[0];l.location.replace(b+"#"+a)}}function sa(a){var b=a.data("anchor");a=a.index();"undefined"===typeof b&&(b=a);return b}function Ea(){var a=c(".fp-section.active"),b=a.find(".fp-slide.active"),e=a.data("anchor"),f=sa(b),a=a.index(".fp-section"),a=String(a);d.anchors.length&&
(a=e);b.length&&(a=a+"-"+f);a=a.replace("/","-").replace("#","");p[0].className=p[0].className.replace(RegExp("\\b\\s?fp-viewing-[^\\s]+\\b","g"),"");p.addClass("fp-viewing-"+a)}function Ta(){var a=k.createElement("p"),b,c={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};k.body.insertBefore(a,null);for(var d in c)a.style[d]!==H&&(a.style[d]="translate3d(1px,1px,1px)",b=l.getComputedStyle(a).getPropertyValue(c[d]));
k.body.removeChild(a);return b!==H&&0<b.length&&"none"!==b}function Ua(){if(Q||R){var a=Fa();c(".fullpage-wrapper").off("touchstart "+a.down).on("touchstart "+a.down,La);c(".fullpage-wrapper").off("touchmove "+a.move).on("touchmove "+a.move,Ka)}}function Va(){if(Q||R){var a=Fa();c(".fullpage-wrapper").off("touchstart "+a.down);c(".fullpage-wrapper").off("touchmove "+a.move)}}function Fa(){return l.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function la(a){var b=
[];b.y="undefined"!==typeof a.pageY&&(a.pageY||a.pageX)?a.pageY:a.touches[0].pageY;b.x="undefined"!==typeof a.pageX&&(a.pageY||a.pageX)?a.pageX:a.touches[0].pageX;R&&X(a)&&(b.y=a.touches[0].pageY,b.x=a.touches[0].pageX);return b}function Y(a,b){e.setScrollingSpeed(0,"internal");"undefined"!==typeof b&&(v=!0);F(a.closest(".fp-slides"),a);"undefined"!==typeof b&&(v=!1);e.setScrollingSpeed(G.scrollingSpeed,"internal")}function y(a){d.scrollBar?f.scrollTop(a):d.css3?qa("translate3d(0px, -"+a+"px, 0px)",
!1):f.css("top",-a)}function ua(a){return{"-webkit-transform":a,"-moz-transform":a,"-ms-transform":a,transform:a}}function Ga(a,b,c){switch(b){case "up":h[c].up=a;break;case "down":h[c].down=a;break;case "left":h[c].left=a;break;case "right":h[c].right=a;break;case "all":"m"==c?e.setAllowScrolling(a):e.setKeyboardScrolling(a)}}function Wa(){y(0);c("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove();c(".fp-section").css({height:"","background-color":"",padding:""});c(".fp-slide").css({width:""});
f.css({height:"",position:"","-ms-touch-action":"","touch-action":""});c(".fp-section, .fp-slide").each(function(){ya(c(this));c(this).removeClass("fp-table active")});f.addClass("fp-notransition");f.find(".fp-tableCell, .fp-slidesContainer, .fp-slides").each(function(){c(this).replaceWith(this.childNodes)});x.scrollTop(0)}function S(a,b,c){d[a]=b;"internal"!==c&&(G[a]=b)}function T(a,b){console&&console[a]&&console[a]("fullPage: "+b)}var x=c("html, body"),p=c("body"),e=c.fn.fullpage;d=c.extend({menu:!1,
anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,normalScrollElements:null,scrollOverflow:!1,touchSensitivity:5,normalScrollElementTouchThreshold:5,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,
controlArrowColor:"#fff",verticalCentered:!0,resize:!1,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,sectionSelector:".section",slideSelector:".slide",afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},d);(function(){d.continuousVertical&&(d.loopTop||d.loopBottom)&&(d.continuousVertical=!1,T("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"));
d.continuousVertical&&d.scrollBar&&(d.continuousVertical=!1,T("warn","Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"));c.each(d.anchors,function(a,b){(c("#"+b).length||c('[name="'+b+'"]').length)&&T("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")})})();c.extend(c.easing,{easeInOutCubic:function(a,b,c,d,e){return 1>(b/=e/2)?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c}});c.extend(c.easing,{easeInQuart:function(a,
b,c,d,e){return d*(b/=e)*b*b*b+c}});e.setAutoScrolling=function(a,b){S("autoScrolling",a,b);var g=c(".fp-section.active");d.autoScrolling&&!d.scrollBar?(x.css({overflow:"hidden",height:"100%"}),e.setRecordHistory(d.recordHistory,"internal"),f.css({"-ms-touch-action":"none","touch-action":"none"}),g.length&&y(g.position().top)):(x.css({overflow:"visible",height:"initial"}),e.setRecordHistory(!1,"internal"),f.css({"-ms-touch-action":"","touch-action":""}),y(0),g.length&&x.scrollTop(g.position().top))};
e.setRecordHistory=function(a,b){S("recordHistory",a,b)};e.setScrollingSpeed=function(a,b){S("scrollingSpeed",a,b)};e.setFitToSection=function(a,b){S("fitToSection",a,b)};e.setLockAnchors=function(a){d.lockAnchors=a};e.setMouseWheelScrolling=function(a){a?k.addEventListener?(k.addEventListener("mousewheel",t,!1),k.addEventListener("wheel",t,!1),k.addEventListener("DOMMouseScroll",t,!1)):k.attachEvent("onmousewheel",t):k.addEventListener?(k.removeEventListener("mousewheel",t,!1),k.removeEventListener("wheel",
t,!1),k.removeEventListener("DOMMouseScroll",t,!1)):k.detachEvent("onmousewheel",t)};e.setAllowScrolling=function(a,b){"undefined"!==typeof b?(b=b.replace(/ /g,"").split(","),c.each(b,function(b,c){Ga(a,c,"m")})):a?(e.setMouseWheelScrolling(!0),Ua()):(e.setMouseWheelScrolling(!1),Va())};e.setKeyboardScrolling=function(a,b){"undefined"!==typeof b?(b=b.replace(/ /g,"").split(","),c.each(b,function(b,c){Ga(a,c,"k")})):d.keyboardScrolling=a};e.moveSectionUp=function(){var a=c(".fp-section.active").prev(".fp-section");
a.length||!d.loopTop&&!d.continuousVertical||(a=c(".fp-section").last());a.length&&B(a,null,!0)};e.moveSectionDown=function(){var a=c(".fp-section.active").next(".fp-section");a.length||!d.loopBottom&&!d.continuousVertical||(a=c(".fp-section").first());!a.length||d.onBeforeMoveSection&&c.isFunction(d.onBeforeMoveSection)&&!1===d.onBeforeMoveSection.call(this,direction,currentSlide,destiny,slides,activeSection)||B(a,null,!1)};e.silentMoveTo=function(a,b){e.setScrollingSpeed(0,"internal");e.moveTo(a,
b);e.setScrollingSpeed(G.scrollingSpeed,"internal")};e.moveTo=function(a,b){var c=Ba(a);"undefined"!==typeof b?ba(a,b):0<c.length&&B(c)};e.moveSlideRight=function(){oa("next")};e.moveSlideLeft=function(){oa("prev")};e.reBuild=function(a){if(!f.hasClass("fp-destroyed")){v=!0;var b=m.width();q=m.height();d.resize&&Ra(q,b);c(".fp-section").each(function(){var a=c(this).find(".fp-slides"),b=c(this).find(".fp-slide");d.verticalCentered&&c(this).find(".fp-tableCell").css("height",Aa(c(this))+"px");c(this).css("height",
q+"px");d.scrollOverflow&&(b.length?b.each(function(){I(c(this))}):I(c(this)));1<b.length&&F(a,a.find(".fp-slide.active"))});(b=c(".fp-section.active").index(".fp-section"))&&e.silentMoveTo(b+1);v=!1;c.isFunction(d.afterResize)&&a&&d.afterResize.call(f);c.isFunction(d.afterReBuild)&&!a&&d.afterReBuild.call(f)}};e.setResponsive=function(a){var b=f.hasClass("fp-responsive");a?b||(e.setAutoScrolling(!1,"internal"),e.setFitToSection(!1,"internal"),c("#fp-nav").hide(),f.addClass("fp-responsive")):b&&(e.setAutoScrolling(G.autoScrolling,
"internal"),e.setFitToSection(G.autoScrolling,"internal"),c("#fp-nav").show(),f.removeClass("fp-responsive"))};var w=!1,Q=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),R="ontouchstart"in l||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,f=c(this),q=m.height(),v=!1,A,aa,u=!0,C=[],z,O,h={m:{up:!0,down:!0,left:!0,right:!0}};h.k=c.extend(!0,{},h.m);var G=c.extend(!0,{},d);c(this).length?(f.css({height:"100%",
position:"relative"}),f.addClass("fullpage-wrapper"),c("html").addClass("fp-enabled")):T("error","Error! Fullpage.js needs to be initialized with a selector. For example: $('#myContainer').fullpage();");d.css3&&(d.css3=Ta());e.setAllowScrolling(!0);f.removeClass("fp-destroyed");c(d.sectionSelector).each(function(){c(this).addClass("fp-section")});c(d.slideSelector).each(function(){c(this).addClass("fp-slide")});d.navigation&&Ja();c(".fp-section").each(function(a){var b=c(this),e=c(this).find(".fp-slide"),
f=e.length;a||0!==c(".fp-section.active").length||c(this).addClass("active");c(this).css("height",q+"px");d.paddingTop&&c(this).css("padding-top",d.paddingTop);d.paddingBottom&&c(this).css("padding-bottom",d.paddingBottom);"undefined"!==typeof d.sectionsColor[a]&&c(this).css("background-color",d.sectionsColor[a]);"undefined"!==typeof d.anchors[a]&&(c(this).attr("data-anchor",d.anchors[a]),c(this).hasClass("active")&&K(d.anchors[a],a));if(0<f){a=100*f;var h=100/f;e.wrapAll('<div class="fp-slidesContainer" />');
e.parent().wrap('<div class="fp-slides" />');c(this).find(".fp-slidesContainer").css("width",a+"%");1<f&&(d.controlArrows&&Ia(c(this)),d.slidesNavigation&&Sa(c(this),f));e.each(function(a){c(this).css("width",h+"%");d.verticalCentered&&za(c(this))});b=b.find(".fp-slide.active");b.length?Y(b):e.eq(0).addClass("active")}else d.verticalCentered&&za(c(this))}).promise().done(function(){e.setAutoScrolling(d.autoScrolling,"internal");var a=c(".fp-section.active").find(".fp-slide.active");a.length&&(0!==
c(".fp-section.active").index(".fp-section")||0===c(".fp-section.active").index(".fp-section")&&0!==a.index())&&Y(a);d.fixedElements&&d.css3&&c(d.fixedElements).appendTo(p);d.navigation&&(z.css("margin-top","-"+z.height()/2+"px"),z.find("li").eq(c(".fp-section.active").index(".fp-section")).find("a").addClass("active"));d.menu&&d.css3&&c(d.menu).closest(".fullpage-wrapper").length&&c(d.menu).appendTo(p);d.scrollOverflow?("complete"===k.readyState&&da(),m.on("load",da)):ea();wa();if(!d.animateAnchor&&
(a=l.location.hash.replace("#","").split("/")[0],a.length)){var b=c('[data-anchor="'+a+'"]');b.length&&(d.autoScrolling?y(b.position().top):(y(0),x.scrollTop(b.position().top)),K(a,null),c.isFunction(d.afterLoad)&&d.afterLoad.call(b,a,b.index(".fp-section")+1),b.addClass("active").siblings().removeClass("active"))}Ea();m.on("load",function(){var a=l.location.hash.replace("#","").split("/"),b=a[0],a=a[1];b&&ba(b,a)})});var ha,ia,U=!1;m.on("scroll",ga);var E=0,N=0,D=0,M=0,na=(new Date).getTime();m.on("hashchange",
ra);r.keydown(function(a){clearTimeout(Ha);var b=c(":focus");b.is("textarea")||b.is("input")||b.is("select")||!d.keyboardScrolling||!d.autoScrolling||(-1<c.inArray(a.which,[40,38,32,33,34])&&a.preventDefault(),Ha=setTimeout(function(){var b=a.shiftKey;O=a.ctrlKey;switch(a.which){case 38:case 33:h.k.up&&e.moveSectionUp();break;case 32:if(b&&h.k.up){e.moveSectionUp();break}case 40:case 34:h.k.down&&e.moveSectionDown();break;case 36:h.k.up&&e.moveTo(1);break;case 35:h.k.down&&e.moveTo(c(".fp-section").length);
break;case 37:h.k.left&&e.moveSlideLeft();break;case 39:h.k.right&&e.moveSlideRight()}},150))});r.keyup(function(a){O=a.ctrlKey});c(l).blur(function(){O=!1});var Ha;f.mousedown(function(a){2==a.which&&(P=a.pageY,f.on("mousemove",Qa))});f.mouseup(function(a){2==a.which&&f.off("mousemove")});var P=0;r.on("click touchstart","#fp-nav a",function(a){a.preventDefault();a=c(this).parent().index();B(c(".fp-section").eq(a))});r.on("click touchstart",".fp-slidesNav a",function(a){a.preventDefault();a=c(this).closest(".fp-section").find(".fp-slides");
var b=a.find(".fp-slide").eq(c(this).closest("li").index());F(a,b)});d.normalScrollElements&&(r.on("mouseenter",d.normalScrollElements,function(){e.setMouseWheelScrolling(!1)}),r.on("mouseleave",d.normalScrollElements,function(){e.setMouseWheelScrolling(!0)}));c(".fp-section").on("click touchstart",".fp-controlArrow",function(){c(this).hasClass("fp-prev")?h.m.left&&e.moveSlideLeft():h.m.right&&e.moveSlideRight()});m.resize(va);var ca=q,xa;e.destroy=function(a){e.setAutoScrolling(!1,"internal");e.setAllowScrolling(!1);
e.setKeyboardScrolling(!1);f.addClass("fp-destroyed");m.off("scroll",ga).off("hashchange",ra).off("resize",va);r.off("click","#fp-nav a").off("mouseenter","#fp-nav li").off("mouseleave","#fp-nav li").off("click",".fp-slidesNav a").off("mouseover",d.normalScrollElements).off("mouseout",d.normalScrollElements);c(".fp-section").off("click",".fp-controlArrow");a&&Wa()}}});

/*!
 Colorbox 1.6.1
 license: MIT
 http://www.jacklmoore.com/colorbox
 */
(function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(A+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in y[0]&&!y[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),y.focus())}function c(t){c.str!==t&&(y.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){A=0,e&&e!==!1&&"nofollow"!==e?(W=t("."+te).filter(function(){var i=t.data(this,Y),n=new r(this,i);return n.get("rel")===e}),A=W.index(_.el),-1===A&&(W=W.add(_.el),A=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data(Y),_=new r(i,o),g(_.get("rel")),!$){$=q=!0,c(_.get("className")),y.css({visibility:"hidden",display:"block",opacity:""}),I=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(I),j=T.height()+k.height()+b.outerHeight(!0)-b.height(),D=C.width()+H.width()+b.outerWidth(!0)-b.width(),N=I.outerHeight(!0),z=I.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=(l!==!1?Math.min(h,a(l,"x")):h)-z-D,_.h=(f!==!1?Math.min(s,a(f,"y")):s)-N-j,I.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(S).hide(),y.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}var p=parseFloat(_.get("opacity"));v.css({opacity:p===p?p:"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){y||(V=!1,E=t(i),y=n(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),M=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),x=n(se,"Wrapper"),b=n(se,"Content").append(S=n(se,"Title"),F=n(se,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),R=n("button","Slideshow"),M),B=t('<button type="button"/>').attr({id:Z+"Close"}),x.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({"float":"left"}),L=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(F).add(R)),e.body&&!y.parent().length&&t(e.body).append(v,y.append(x,L))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return y?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;$&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),$&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var e,o,r,h=J.prep,d=++le;if(q=!0,U=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-N-j:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-z-D:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-z-D,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-N-j,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){M.show()},100),_.get("inline")){var c=t(e);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),U=_.get("createImg"),t(U).addClass(Z+"Photo").bind("error."+Z,function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var e;_.get("retinaImage")&&i.devicePixelRatio>1&&(U.height=U.height/i.devicePixelRatio,U.width=U.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){U.height-=U.height*e,U.width-=U.width*e},_.mw&&U.width>_.mw&&(e=(U.width-_.mw)/U.width,o()),_.mh&&U.height>_.mh&&(e=(U.height-_.mh)/U.height,o())),_.h&&(U.style.marginTop=Math.max(_.mh-U.height,0)/2+"px"),W[1]&&(_.get("loop")||W[A+1])&&(U.style.cursor="pointer",t(U).bind("click."+Z,function(){J.next()})),U.style.width=U.width+"px",U.style.height=U.height+"px",h(U)},1)}),U.src=e):e&&L.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,y,x,b,T,C,H,k,W,E,I,L,M,S,F,R,K,P,B,O,_,j,D,N,z,A,U,$,q,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title},createImg:function(){var e=new Image,i=t(this).data("cbox-img-attrs");return"object"==typeof i&&t.each(i,function(t,i){e[t]=i}),e},createIframe:function(){var i=e.createElement("iframe"),n=t(this).data("cbox-iframe-attrs");return"object"==typeof n&&t.each(n,function(t,e){i[t]=e}),"frameBorder"in i&&(i.frameBorder=0),"allowTransparency"in i&&(i.allowTransparency="true"),i.name=(new Date).getTime(),i.allowFullScreen=!0,i}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[A+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){R.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),y.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),R.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),y.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,R.hide(),t(),ae.unbind(ne,e).unbind(ie,t),y.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),R.show())}}();t[Y]||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;return e=e||{},t.isFunction(o)&&(o=t("<a/>"),e.open=!0),o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(y[0].style.width,10)-D+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(y[0].style.height,10)-j+"px"}var r,h,s,l=0,d=0,c=y.offset();if(E.unbind("resize."+Z),y.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,y.css({position:"fixed"})):(l=h,d=s,y.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(E.width()-_.w-z-D-a(_.get("right"),"x"),0):_.get("left")!==!1?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-z-D,0)/2),l+=_.get("bottom")!==!1?Math.max(o()-_.h-N-j-a(_.get("bottom"),"y"),0):_.get("top")!==!1?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-N-j,0)/2),y.css({top:c.top,left:c.left,visibility:"visible"}),x[0].style.width=x[0].style.height="9999px",r={width:_.w+z+D,height:_.h+N+j,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||y.css(r),y.dequeue().animate(r,{duration:e||0,complete:function(){n(),q=!1,x[0].style.width=_.w+z+D+"px",x[0].style.height=_.h+N+j+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),t.isFunction(i)&&i()},step:n})},J.resize=function(t){var e;$&&(t=t||{},t.width&&(_.w=a(t.width,"x")-z-D),t.innerWidth&&(_.w=a(t.innerWidth,"x")),I.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-N-j),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=I.scrollTop(),I.css({height:"auto"}),_.h=I.height()),I.css({height:_.h}),e&&I.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function o(){return _.w=_.w||I.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function a(){return _.h=_.h||I.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if($){var d,g="none"===_.get("transition")?0:_.get("speed");I.remove(),I=n(se,"LoadedContent").append(i),I.hide().appendTo(L.show()).css({width:o(),overflow:_.get("scrolling")?"":"hidden"}).css({height:a()}).prependTo(b),L.hide(),t(U).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&y[0].style.removeAttribute("filter")}var n,o,a=W.length;$&&(o=function(){clearTimeout(Q),M.hide(),u(ne),_.get("onComplete")},S.html(_.get("title")).show(),I.show(),a>1?("string"==typeof _.get("current")&&F.html(_.get("current").replace("{current}",A+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>A?"show":"hide"]().html(_.get("next")),P[_.get("loop")||A?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=_.get("createIframe"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),"class":Z+"Iframe"}).one("load",o).appendTo(I),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?y.fadeTo(g,1,i):i())},"fade"===_.get("transition")?y.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!q&&W[1]&&(_.get("loop")||W[A+1])&&(A=h(1),f(W[A]))},J.prev=function(){!q&&W[1]&&(_.get("loop")||A)&&(A=h(-1),f(W[A]))},J.close=function(){$&&!G&&(G=!0,$=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),y.stop().fadeTo(_.get("fadeOut")||0,0,function(){y.hide(),v.hide(),u(he),I.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){y&&(y.stop(),t[Y].close(),y.stop(!1,!0).remove(),v.remove(),G=!1,y=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);


/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

 /*
 == malihu jquery custom scrollbar plugin ==
 Version: 3.1.3
 Plugin URI: http://manos.malihu.gr/jquery-custom-content-scroller
 Author: malihu
 Author URI: http://manos.malihu.gr
 License: MIT License (MIT)
 */

 /*
 Copyright Manos Malihutsakis (email: manos@malihu.gr)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */

 /*
 The code below is fairly long, fully commented and should be normally used in development.
 For production, use either the minified jquery.mCustomScrollbar.min.js script or
 the production-ready jquery.mCustomScrollbar.concat.min.js which contains the plugin
 and dependencies (minified).
 */

 (function(factory){
 	if(typeof module!=="undefined" && module.exports){
 		module.exports=factory;
 	}else{
 		factory(jQuery,window,document);
 	}
 }(function($){
 (function(init){
 	var _rjs=typeof define==="function" && define.amd, /* RequireJS */
 		_njs=typeof module !== "undefined" && module.exports, /* NodeJS */
 		_dlp=("https:"==document.location.protocol) ? "https:" : "http:", /* location protocol */
 		_url="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
 	if(!_rjs){
 		if(_njs){
 			require("jquery-mousewheel")($);
 		}else{
 			/* load jquery-mousewheel plugin (via CDN) if it's not present or not loaded via RequireJS
 			(works when mCustomScrollbar fn is called on window load) */
 			$.event.special.mousewheel || $("head").append(decodeURI("%3Cscript src="+_dlp+"//"+_url+"%3E%3C/script%3E"));
 		}
 	}
 	init();
 }(function(){

 	/*
 	----------------------------------------
 	PLUGIN NAMESPACE, PREFIX, DEFAULT SELECTOR(S)
 	----------------------------------------
 	*/

 	var pluginNS="mCustomScrollbar",
 		pluginPfx="mCS",
 		defaultSelector=".mCustomScrollbar",





 	/*
 	----------------------------------------
 	DEFAULT OPTIONS
 	----------------------------------------
 	*/

 		defaults={
 			/*
 			set element/content width/height programmatically
 			values: boolean, pixels, percentage
 				option						default
 				-------------------------------------
 				setWidth					false
 				setHeight					false
 			*/
 			/*
 			set the initial css top property of content
 			values: string (e.g. "-100px", "10%" etc.)
 			*/
 			setTop:0,
 			/*
 			set the initial css left property of content
 			values: string (e.g. "-100px", "10%" etc.)
 			*/
 			setLeft:0,
 			/*
 			scrollbar axis (vertical and/or horizontal scrollbars)
 			values (string): "y", "x", "yx"
 			*/
 			axis:"y",
 			/*
 			position of scrollbar relative to content
 			values (string): "inside", "outside" ("outside" requires elements with position:relative)
 			*/
 			scrollbarPosition:"inside",
 			/*
 			scrolling inertia
 			values: integer (milliseconds)
 			*/
 			scrollInertia:950,
 			/*
 			auto-adjust scrollbar dragger length
 			values: boolean
 			*/
 			autoDraggerLength:true,
 			/*
 			auto-hide scrollbar when idle
 			values: boolean
 				option						default
 				-------------------------------------
 				autoHideScrollbar			false
 			*/
 			/*
 			auto-expands scrollbar on mouse-over and dragging
 			values: boolean
 				option						default
 				-------------------------------------
 				autoExpandScrollbar			false
 			*/
 			/*
 			always show scrollbar, even when there's nothing to scroll
 			values: integer (0=disable, 1=always show dragger rail and buttons, 2=always show dragger rail, dragger and buttons), boolean
 			*/
 			alwaysShowScrollbar:0,
 			/*
 			scrolling always snaps to a multiple of this number in pixels
 			values: integer, array ([y,x])
 				option						default
 				-------------------------------------
 				snapAmount					null
 			*/
 			/*
 			when snapping, snap with this number in pixels as an offset
 			values: integer
 			*/
 			snapOffset:0,
 			/*
 			mouse-wheel scrolling
 			*/
 			mouseWheel:{
 				/*
 				enable mouse-wheel scrolling
 				values: boolean
 				*/
 				enable:true,
 				/*
 				scrolling amount in pixels
 				values: "auto", integer
 				*/
 				scrollAmount:"auto",
 				/*
 				mouse-wheel scrolling axis
 				the default scrolling direction when both vertical and horizontal scrollbars are present
 				values (string): "y", "x"
 				*/
 				axis:"y",
 				/*
 				prevent the default behaviour which automatically scrolls the parent element(s) when end of scrolling is reached
 				values: boolean
 					option						default
 					-------------------------------------
 					preventDefault				null
 				*/
 				/*
 				the reported mouse-wheel delta value. The number of lines (translated to pixels) one wheel notch scrolls.
 				values: "auto", integer
 				"auto" uses the default OS/browser value
 				*/
 				deltaFactor:"auto",
 				/*
 				normalize mouse-wheel delta to -1 or 1 (disables mouse-wheel acceleration)
 				values: boolean
 					option						default
 					-------------------------------------
 					normalizeDelta				null
 				*/
 				/*
 				invert mouse-wheel scrolling direction
 				values: boolean
 					option						default
 					-------------------------------------
 					invert						null
 				*/
 				/*
 				the tags that disable mouse-wheel when cursor is over them
 				*/
 				disableOver:["select","option","keygen","datalist","textarea"]
 			},
 			/*
 			scrollbar buttons
 			*/
 			scrollButtons:{
 				/*
 				enable scrollbar buttons
 				values: boolean
 					option						default
 					-------------------------------------
 					enable						null
 				*/
 				/*
 				scrollbar buttons scrolling type
 				values (string): "stepless", "stepped"
 				*/
 				scrollType:"stepless",
 				/*
 				scrolling amount in pixels
 				values: "auto", integer
 				*/
 				scrollAmount:"auto"
 				/*
 				tabindex of the scrollbar buttons
 				values: false, integer
 					option						default
 					-------------------------------------
 					tabindex					null
 				*/
 			},
 			/*
 			keyboard scrolling
 			*/
 			keyboard:{
 				/*
 				enable scrolling via keyboard
 				values: boolean
 				*/
 				enable:true,
 				/*
 				keyboard scrolling type
 				values (string): "stepless", "stepped"
 				*/
 				scrollType:"stepless",
 				/*
 				scrolling amount in pixels
 				values: "auto", integer
 				*/
 				scrollAmount:"auto"
 			},
 			/*
 			enable content touch-swipe scrolling
 			values: boolean, integer, string (number)
 			integer values define the axis-specific minimum amount required for scrolling momentum
 			*/
 			contentTouchScroll:25,
 			/*
 			enable/disable document (default) touch-swipe scrolling
 			*/
 			documentTouchScroll:true,
 			/*
 			advanced option parameters
 			*/
 			advanced:{
 				/*
 				auto-expand content horizontally (for "x" or "yx" axis)
 				values: boolean, integer (the value 2 forces the non scrollHeight/scrollWidth method, the value 3 forces the scrollHeight/scrollWidth method)
 					option						default
 					-------------------------------------
 					autoExpandHorizontalScroll	null
 				*/
 				/*
 				auto-scroll to elements with focus
 				*/
 				autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
 				/*
 				auto-update scrollbars on content, element or viewport resize
 				should be true for fluid layouts/elements, adding/removing content dynamically, hiding/showing elements, content with images etc.
 				values: boolean
 				*/
 				updateOnContentResize:true,
 				/*
 				auto-update scrollbars each time each image inside the element is fully loaded
 				values: "auto", boolean
 				*/
 				updateOnImageLoad:"auto",
 				/*
 				auto-update scrollbars based on the amount and size changes of specific selectors
 				useful when you need to update the scrollbar(s) automatically, each time a type of element is added, removed or changes its size
 				values: boolean, string (e.g. "ul li" will auto-update scrollbars each time list-items inside the element are changed)
 				a value of true (boolean) will auto-update scrollbars each time any element is changed
 					option						default
 					-------------------------------------
 					updateOnSelectorChange		null
 				*/
 				/*
 				extra selectors that'll allow scrollbar dragging upon mousemove/up, pointermove/up, touchend etc. (e.g. "selector-1, selector-2")
 					option						default
 					-------------------------------------
 					extraDraggableSelectors		null
 				*/
 				/*
 				extra selectors that'll release scrollbar dragging upon mouseup, pointerup, touchend etc. (e.g. "selector-1, selector-2")
 					option						default
 					-------------------------------------
 					releaseDraggableSelectors	null
 				*/
 				/*
 				auto-update timeout
 				values: integer (milliseconds)
 				*/
 				autoUpdateTimeout:60
 			},
 			/*
 			scrollbar theme
 			values: string (see CSS/plugin URI for a list of ready-to-use themes)
 			*/
 			theme:"light",
 			/*
 			user defined callback functions
 			*/
 			callbacks:{
 				/*
 				Available callbacks:
 					callback					default
 					-------------------------------------
 					onCreate					null
 					onInit						null
 					onScrollStart				null
 					onScroll					null
 					onTotalScroll				null
 					onTotalScrollBack			null
 					whileScrolling				null
 					onOverflowY					null
 					onOverflowX					null
 					onOverflowYNone				null
 					onOverflowXNone				null
 					onImageLoad					null
 					onSelectorChange			null
 					onBeforeUpdate				null
 					onUpdate					null
 				*/
 				onTotalScrollOffset:0,
 				onTotalScrollBackOffset:0,
 				alwaysTriggerOffsets:true
 			}
 			/*
 			add scrollbar(s) on all elements matching the current selector, now and in the future
 			values: boolean, string
 			string values: "on" (enable), "once" (disable after first invocation), "off" (disable)
 			liveSelector values: string (selector)
 				option						default
 				-------------------------------------
 				live						false
 				liveSelector				null
 			*/
 		},





 	/*
 	----------------------------------------
 	VARS, CONSTANTS
 	----------------------------------------
 	*/

 		totalInstances=0, /* plugin instances amount */
 		liveTimers={}, /* live option timers */
 		oldIE=(window.attachEvent && !window.addEventListener) ? 1 : 0, /* detect IE < 9 */
 		touchActive=false,touchable, /* global touch vars (for touch and pointer events) */
 		/* general plugin classes */
 		classes=[
 			"mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar",
 			"mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer",
 			"mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"
 		],





 	/*
 	----------------------------------------
 	METHODS
 	----------------------------------------
 	*/

 		methods={

 			/*
 			plugin initialization method
 			creates the scrollbar(s), plugin data object and options
 			----------------------------------------
 			*/

 			init:function(options){

 				var options=$.extend(true,{},defaults,options),
 					selector=_selector.call(this); /* validate selector */

 				/*
 				if live option is enabled, monitor for elements matching the current selector and
 				apply scrollbar(s) when found (now and in the future)
 				*/
 				if(options.live){
 					var liveSelector=options.liveSelector || this.selector || defaultSelector, /* live selector(s) */
 						$liveSelector=$(liveSelector); /* live selector(s) as jquery object */
 					if(options.live==="off"){
 						/*
 						disable live if requested
 						usage: $(selector).mCustomScrollbar({live:"off"});
 						*/
 						removeLiveTimers(liveSelector);
 						return;
 					}
 					liveTimers[liveSelector]=setTimeout(function(){
 						/* call mCustomScrollbar fn on live selector(s) every half-second */
 						$liveSelector.mCustomScrollbar(options);
 						if(options.live==="once" && $liveSelector.length){
 							/* disable live after first invocation */
 							removeLiveTimers(liveSelector);
 						}
 					},500);
 				}else{
 					removeLiveTimers(liveSelector);
 				}

 				/* options backward compatibility (for versions < 3.0.0) and normalization */
 				options.setWidth=(options.set_width) ? options.set_width : options.setWidth;
 				options.setHeight=(options.set_height) ? options.set_height : options.setHeight;
 				options.axis=(options.horizontalScroll) ? "x" : _findAxis(options.axis);
 				options.scrollInertia=options.scrollInertia>0 && options.scrollInertia<17 ? 17 : options.scrollInertia;
 				if(typeof options.mouseWheel!=="object" &&  options.mouseWheel==true){ /* old school mouseWheel option (non-object) */
 					options.mouseWheel={enable:true,scrollAmount:"auto",axis:"y",preventDefault:false,deltaFactor:"auto",normalizeDelta:false,invert:false}
 				}
 				options.mouseWheel.scrollAmount=!options.mouseWheelPixels ? options.mouseWheel.scrollAmount : options.mouseWheelPixels;
 				options.mouseWheel.normalizeDelta=!options.advanced.normalizeMouseWheelDelta ? options.mouseWheel.normalizeDelta : options.advanced.normalizeMouseWheelDelta;
 				options.scrollButtons.scrollType=_findScrollButtonsType(options.scrollButtons.scrollType);

 				_theme(options); /* theme-specific options */

 				/* plugin constructor */
 				return $(selector).each(function(){

 					var $this=$(this);

 					if(!$this.data(pluginPfx)){ /* prevent multiple instantiations */

 						/* store options and create objects in jquery data */
 						$this.data(pluginPfx,{
 							idx:++totalInstances, /* instance index */
 							opt:options, /* options */
 							scrollRatio:{y:null,x:null}, /* scrollbar to content ratio */
 							overflowed:null, /* overflowed axis */
 							contentReset:{y:null,x:null}, /* object to check when content resets */
 							bindEvents:false, /* object to check if events are bound */
 							tweenRunning:false, /* object to check if tween is running */
 							sequential:{}, /* sequential scrolling object */
 							langDir:$this.css("direction"), /* detect/store direction (ltr or rtl) */
 							cbOffsets:null, /* object to check whether callback offsets always trigger */
 							/*
 							object to check how scrolling events where last triggered
 							"internal" (default - triggered by this script), "external" (triggered by other scripts, e.g. via scrollTo method)
 							usage: object.data("mCS").trigger
 							*/
 							trigger:null,
 							/*
 							object to check for changes in elements in order to call the update method automatically
 							*/
 							poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}
 						});

 						var d=$this.data(pluginPfx),o=d.opt,
 							/* HTML data attributes */
 							htmlDataAxis=$this.data("mcs-axis"),htmlDataSbPos=$this.data("mcs-scrollbar-position"),htmlDataTheme=$this.data("mcs-theme");

 						if(htmlDataAxis){o.axis=htmlDataAxis;} /* usage example: data-mcs-axis="y" */
 						if(htmlDataSbPos){o.scrollbarPosition=htmlDataSbPos;} /* usage example: data-mcs-scrollbar-position="outside" */
 						if(htmlDataTheme){ /* usage example: data-mcs-theme="minimal" */
 							o.theme=htmlDataTheme;
 							_theme(o); /* theme-specific options */
 						}

 						_pluginMarkup.call(this); /* add plugin markup */

 						if(d && o.callbacks.onCreate && typeof o.callbacks.onCreate==="function"){o.callbacks.onCreate.call(this);} /* callbacks: onCreate */

 						$("#mCSB_"+d.idx+"_container img:not(."+classes[2]+")").addClass(classes[2]); /* flag loaded images */

 						methods.update.call(null,$this); /* call the update method */

 					}

 				});

 			},
 			/* ---------------------------------------- */



 			/*
 			plugin update method
 			updates content and scrollbar(s) values, events and status
 			----------------------------------------
 			usage: $(selector).mCustomScrollbar("update");
 			*/

 			update:function(el,cb){

 				var selector=el || _selector.call(this); /* validate selector */

 				return $(selector).each(function(){

 					var $this=$(this);

 					if($this.data(pluginPfx)){ /* check if plugin has initialized */

 						var d=$this.data(pluginPfx),o=d.opt,
 							mCSB_container=$("#mCSB_"+d.idx+"_container"),
 							mCustomScrollBox=$("#mCSB_"+d.idx),
 							mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")];

 						if(!mCSB_container.length){return;}

 						if(d.tweenRunning){_stop($this);} /* stop any running tweens while updating */

 						if(cb && d && o.callbacks.onBeforeUpdate && typeof o.callbacks.onBeforeUpdate==="function"){o.callbacks.onBeforeUpdate.call(this);} /* callbacks: onBeforeUpdate */

 						/* if element was disabled or destroyed, remove class(es) */
 						if($this.hasClass(classes[3])){$this.removeClass(classes[3]);}
 						if($this.hasClass(classes[4])){$this.removeClass(classes[4]);}

 						/* css flexbox fix, detect/set max-height */
 						mCustomScrollBox.css("max-height","none");
 						if(mCustomScrollBox.height()!==$this.height()){mCustomScrollBox.css("max-height",$this.height());}

 						_expandContentHorizontally.call(this); /* expand content horizontally */

 						if(o.axis!=="y" && !o.advanced.autoExpandHorizontalScroll){
 							mCSB_container.css("width",_contentWidth(mCSB_container));
 						}

 						d.overflowed=_overflowed.call(this); /* determine if scrolling is required */

 						_scrollbarVisibility.call(this); /* show/hide scrollbar(s) */

 						/* auto-adjust scrollbar dragger length analogous to content */
 						if(o.autoDraggerLength){_setDraggerLength.call(this);}

 						_scrollRatio.call(this); /* calculate and store scrollbar to content ratio */

 						_bindEvents.call(this); /* bind scrollbar events */

 						/* reset scrolling position and/or events */
 						var to=[Math.abs(mCSB_container[0].offsetTop),Math.abs(mCSB_container[0].offsetLeft)];
 						if(o.axis!=="x"){ /* y/yx axis */
 							if(!d.overflowed[0]){ /* y scrolling is not required */
 								_resetContentPosition.call(this); /* reset content position */
 								if(o.axis==="y"){
 									_unbindEvents.call(this);
 								}else if(o.axis==="yx" && d.overflowed[1]){
 									_scrollTo($this,to[1].toString(),{dir:"x",dur:0,overwrite:"none"});
 								}
 							}else if(mCSB_dragger[0].height()>mCSB_dragger[0].parent().height()){
 								_resetContentPosition.call(this); /* reset content position */
 							}else{ /* y scrolling is required */
 								_scrollTo($this,to[0].toString(),{dir:"y",dur:0,overwrite:"none"});
 								d.contentReset.y=null;
 							}
 						}
 						if(o.axis!=="y"){ /* x/yx axis */
 							if(!d.overflowed[1]){ /* x scrolling is not required */
 								_resetContentPosition.call(this); /* reset content position */
 								if(o.axis==="x"){
 									_unbindEvents.call(this);
 								}else if(o.axis==="yx" && d.overflowed[0]){
 									_scrollTo($this,to[0].toString(),{dir:"y",dur:0,overwrite:"none"});
 								}
 							}else if(mCSB_dragger[1].width()>mCSB_dragger[1].parent().width()){
 								_resetContentPosition.call(this); /* reset content position */
 							}else{ /* x scrolling is required */
 								_scrollTo($this,to[1].toString(),{dir:"x",dur:0,overwrite:"none"});
 								d.contentReset.x=null;
 							}
 						}

 						/* callbacks: onImageLoad, onSelectorChange, onUpdate */
 						if(cb && d){
 							if(cb===2 && o.callbacks.onImageLoad && typeof o.callbacks.onImageLoad==="function"){
 								o.callbacks.onImageLoad.call(this);
 							}else if(cb===3 && o.callbacks.onSelectorChange && typeof o.callbacks.onSelectorChange==="function"){
 								o.callbacks.onSelectorChange.call(this);
 							}else if(o.callbacks.onUpdate && typeof o.callbacks.onUpdate==="function"){
 								o.callbacks.onUpdate.call(this);
 							}
 						}

 						_autoUpdate.call(this); /* initialize automatic updating (for dynamic content, fluid layouts etc.) */

 					}

 				});

 			},
 			/* ---------------------------------------- */



 			/*
 			plugin scrollTo method
 			triggers a scrolling event to a specific value
 			----------------------------------------
 			usage: $(selector).mCustomScrollbar("scrollTo",value,options);
 			*/

 			scrollTo:function(val,options){

 				/* prevent silly things like $(selector).mCustomScrollbar("scrollTo",undefined); */
 				if(typeof val=="undefined" || val==null){return;}

 				var selector=_selector.call(this); /* validate selector */

 				return $(selector).each(function(){

 					var $this=$(this);

 					if($this.data(pluginPfx)){ /* check if plugin has initialized */

 						var d=$this.data(pluginPfx),o=d.opt,
 							/* method default options */
 							methodDefaults={
 								trigger:"external", /* method is by default triggered externally (e.g. from other scripts) */
 								scrollInertia:o.scrollInertia, /* scrolling inertia (animation duration) */
 								scrollEasing:"mcsEaseInOut", /* animation easing */
 								moveDragger:false, /* move dragger instead of content */
 								timeout:60, /* scroll-to delay */
 								callbacks:true, /* enable/disable callbacks */
 								onStart:true,
 								onUpdate:true,
 								onComplete:true
 							},
 							methodOptions=$.extend(true,{},methodDefaults,options),
 							to=_arr.call(this,val),dur=methodOptions.scrollInertia>0 && methodOptions.scrollInertia<17 ? 17 : methodOptions.scrollInertia;

 						/* translate yx values to actual scroll-to positions */
 						to[0]=_to.call(this,to[0],"y");
 						to[1]=_to.call(this,to[1],"x");

 						/*
 						check if scroll-to value moves the dragger instead of content.
 						Only pixel values apply on dragger (e.g. 100, "100px", "-=100" etc.)
 						*/
 						if(methodOptions.moveDragger){
 							to[0]*=d.scrollRatio.y;
 							to[1]*=d.scrollRatio.x;
 						}

 						methodOptions.dur=_isTabHidden() ? 0 : dur; //skip animations if browser tab is hidden

 						setTimeout(function(){
 							/* do the scrolling */
 							if(to[0]!==null && typeof to[0]!=="undefined" && o.axis!=="x" && d.overflowed[0]){ /* scroll y */
 								methodOptions.dir="y";
 								methodOptions.overwrite="all";
 								_scrollTo($this,to[0].toString(),methodOptions);
 							}
 							if(to[1]!==null && typeof to[1]!=="undefined" && o.axis!=="y" && d.overflowed[1]){ /* scroll x */
 								methodOptions.dir="x";
 								methodOptions.overwrite="none";
 								_scrollTo($this,to[1].toString(),methodOptions);
 							}
 						},methodOptions.timeout);

 					}

 				});

 			},
 			/* ---------------------------------------- */



 			/*
 			plugin stop method
 			stops scrolling animation
 			----------------------------------------
 			usage: $(selector).mCustomScrollbar("stop");
 			*/
 			stop:function(){

 				var selector=_selector.call(this); /* validate selector */

 				return $(selector).each(function(){

 					var $this=$(this);

 					if($this.data(pluginPfx)){ /* check if plugin has initialized */

 						_stop($this);

 					}

 				});

 			},
 			/* ---------------------------------------- */



 			/*
 			plugin disable method
 			temporarily disables the scrollbar(s)
 			----------------------------------------
 			usage: $(selector).mCustomScrollbar("disable",reset);
 			reset (boolean): resets content position to 0
 			*/
 			disable:function(r){

 				var selector=_selector.call(this); /* validate selector */

 				return $(selector).each(function(){

 					var $this=$(this);

 					if($this.data(pluginPfx)){ /* check if plugin has initialized */

 						var d=$this.data(pluginPfx);

 						_autoUpdate.call(this,"remove"); /* remove automatic updating */

 						_unbindEvents.call(this); /* unbind events */

 						if(r){_resetContentPosition.call(this);} /* reset content position */

 						_scrollbarVisibility.call(this,true); /* show/hide scrollbar(s) */

 						$this.addClass(classes[3]); /* add disable class */

 					}

 				});

 			},
 			/* ---------------------------------------- */



 			/*
 			plugin destroy method
 			completely removes the scrollbar(s) and returns the element to its original state
 			----------------------------------------
 			usage: $(selector).mCustomScrollbar("destroy");
 			*/
 			destroy:function(){

 				var selector=_selector.call(this); /* validate selector */

 				return $(selector).each(function(){

 					var $this=$(this);

 					if($this.data(pluginPfx)){ /* check if plugin has initialized */

 						var d=$this.data(pluginPfx),o=d.opt,
 							mCustomScrollBox=$("#mCSB_"+d.idx),
 							mCSB_container=$("#mCSB_"+d.idx+"_container"),
 							scrollbar=$(".mCSB_"+d.idx+"_scrollbar");

 						if(o.live){removeLiveTimers(o.liveSelector || $(selector).selector);} /* remove live timers */

 						_autoUpdate.call(this,"remove"); /* remove automatic updating */

 						_unbindEvents.call(this); /* unbind events */

 						_resetContentPosition.call(this); /* reset content position */

 						$this.removeData(pluginPfx); /* remove plugin data object */

 						_delete(this,"mcs"); /* delete callbacks object */

 						/* remove plugin markup */
 						scrollbar.remove(); /* remove scrollbar(s) first (those can be either inside or outside plugin's inner wrapper) */
 						mCSB_container.find("img."+classes[2]).removeClass(classes[2]); /* remove loaded images flag */
 						mCustomScrollBox.replaceWith(mCSB_container.contents()); /* replace plugin's inner wrapper with the original content */
 						/* remove plugin classes from the element and add destroy class */
 						$this.removeClass(pluginNS+" _"+pluginPfx+"_"+d.idx+" "+classes[6]+" "+classes[7]+" "+classes[5]+" "+classes[3]).addClass(classes[4]);

 					}

 				});

 			}
 			/* ---------------------------------------- */

 		},





 	/*
 	----------------------------------------
 	FUNCTIONS
 	----------------------------------------
 	*/

 		/* validates selector (if selector is invalid or undefined uses the default one) */
 		_selector=function(){
 			return (typeof $(this)!=="object" || $(this).length<1) ? defaultSelector : this;
 		},
 		/* -------------------- */


 		/* changes options according to theme */
 		_theme=function(obj){
 			var fixedSizeScrollbarThemes=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],
 				nonExpandedScrollbarThemes=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],
 				disabledScrollButtonsThemes=["minimal","minimal-dark"],
 				enabledAutoHideScrollbarThemes=["minimal","minimal-dark"],
 				scrollbarPositionOutsideThemes=["minimal","minimal-dark"];
 			obj.autoDraggerLength=$.inArray(obj.theme,fixedSizeScrollbarThemes) > -1 ? false : obj.autoDraggerLength;
 			obj.autoExpandScrollbar=$.inArray(obj.theme,nonExpandedScrollbarThemes) > -1 ? false : obj.autoExpandScrollbar;
 			obj.scrollButtons.enable=$.inArray(obj.theme,disabledScrollButtonsThemes) > -1 ? false : obj.scrollButtons.enable;
 			obj.autoHideScrollbar=$.inArray(obj.theme,enabledAutoHideScrollbarThemes) > -1 ? true : obj.autoHideScrollbar;
 			obj.scrollbarPosition=$.inArray(obj.theme,scrollbarPositionOutsideThemes) > -1 ? "outside" : obj.scrollbarPosition;
 		},
 		/* -------------------- */


 		/* live option timers removal */
 		removeLiveTimers=function(selector){
 			if(liveTimers[selector]){
 				clearTimeout(liveTimers[selector]);
 				_delete(liveTimers,selector);
 			}
 		},
 		/* -------------------- */


 		/* normalizes axis option to valid values: "y", "x", "yx" */
 		_findAxis=function(val){
 			return (val==="yx" || val==="xy" || val==="auto") ? "yx" : (val==="x" || val==="horizontal") ? "x" : "y";
 		},
 		/* -------------------- */


 		/* normalizes scrollButtons.scrollType option to valid values: "stepless", "stepped" */
 		_findScrollButtonsType=function(val){
 			return (val==="stepped" || val==="pixels" || val==="step" || val==="click") ? "stepped" : "stepless";
 		},
 		/* -------------------- */


 		/* generates plugin markup */
 		_pluginMarkup=function(){
 			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
 				expandClass=o.autoExpandScrollbar ? " "+classes[1]+"_expand" : "",
 				scrollbar=["<div id='mCSB_"+d.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+d.idx+"_scrollbar mCS-"+o.theme+" mCSB_scrollTools_vertical"+expandClass+"'><div class='"+classes[12]+"'><div id='mCSB_"+d.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+d.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+d.idx+"_scrollbar mCS-"+o.theme+" mCSB_scrollTools_horizontal"+expandClass+"'><div class='"+classes[12]+"'><div id='mCSB_"+d.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
 				wrapperClass=o.axis==="yx" ? "mCSB_vertical_horizontal" : o.axis==="x" ? "mCSB_horizontal" : "mCSB_vertical",
 				scrollbars=o.axis==="yx" ? scrollbar[0]+scrollbar[1] : o.axis==="x" ? scrollbar[1] : scrollbar[0],
 				contentWrapper=o.axis==="yx" ? "<div id='mCSB_"+d.idx+"_container_wrapper' class='mCSB_container_wrapper' />" : "",
 				autoHideClass=o.autoHideScrollbar ? " "+classes[6] : "",
 				scrollbarDirClass=(o.axis!=="x" && d.langDir==="rtl") ? " "+classes[7] : "";
 			if(o.setWidth){$this.css("width",o.setWidth);} /* set element width */
 			if(o.setHeight){$this.css("height",o.setHeight);} /* set element height */
 			o.setLeft=(o.axis!=="y" && d.langDir==="rtl") ? "989999px" : o.setLeft; /* adjust left position for rtl direction */
 			$this.addClass(pluginNS+" _"+pluginPfx+"_"+d.idx+autoHideClass+scrollbarDirClass).wrapInner("<div id='mCSB_"+d.idx+"' class='mCustomScrollBox mCS-"+o.theme+" "+wrapperClass+"'><div id='mCSB_"+d.idx+"_container' class='mCSB_container' style='position:relative; top:"+o.setTop+"; left:"+o.setLeft+";' dir="+d.langDir+" /></div>");
 			var mCustomScrollBox=$("#mCSB_"+d.idx),
 				mCSB_container=$("#mCSB_"+d.idx+"_container");
 			if(o.axis!=="y" && !o.advanced.autoExpandHorizontalScroll){
 				mCSB_container.css("width",_contentWidth(mCSB_container));
 			}
 			if(o.scrollbarPosition==="outside"){
 				if($this.css("position")==="static"){ /* requires elements with non-static position */
 					$this.css("position","relative");
 				}
 				$this.css("overflow","visible");
 				mCustomScrollBox.addClass("mCSB_outside").after(scrollbars);
 			}else{
 				mCustomScrollBox.addClass("mCSB_inside").append(scrollbars);
 				mCSB_container.wrap(contentWrapper);
 			}
 			_scrollButtons.call(this); /* add scrollbar buttons */
 			/* minimum dragger length */
 			var mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")];
 			mCSB_dragger[0].css("min-height",mCSB_dragger[0].height());
 			mCSB_dragger[1].css("min-width",mCSB_dragger[1].width());
 		},
 		/* -------------------- */


 		/* calculates content width */
 		_contentWidth=function(el){
 			var val=[el[0].scrollWidth,Math.max.apply(Math,el.children().map(function(){return $(this).outerWidth(true);}).get())],w=el.parent().width();
 			return val[0]>w ? val[0] : val[1]>w ? val[1] : "100%";
 		},
 		/* -------------------- */


 		/* expands content horizontally */
 		_expandContentHorizontally=function(){
 			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
 				mCSB_container=$("#mCSB_"+d.idx+"_container");
 			if(o.advanced.autoExpandHorizontalScroll && o.axis!=="y"){
 				/* calculate scrollWidth */
 				mCSB_container.css({"width":"auto","min-width":0,"overflow-x":"scroll"});
 				var w=Math.ceil(mCSB_container[0].scrollWidth);
 				if(o.advanced.autoExpandHorizontalScroll===3 || (o.advanced.autoExpandHorizontalScroll!==2 && w>mCSB_container.parent().width())){
 					mCSB_container.css({"width":w,"min-width":"100%","overflow-x":"inherit"});
 				}else{
 					/*
 					wrap content with an infinite width div and set its position to absolute and width to auto.
 					Setting width to auto before calculating the actual width is important!
 					We must let the browser set the width as browser zoom values are impossible to calculate.
 					*/
 					mCSB_container.css({"overflow-x":"inherit","position":"absolute"})
 						.wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />")
 						.css({ /* set actual width, original position and un-wrap */
 							/*
 							get the exact width (with decimals) and then round-up.
 							Using jquery outerWidth() will round the width value which will mess up with inner elements that have non-integer width
 							*/
 							"width":(Math.ceil(mCSB_container[0].getBoundingClientRect().right+0.4)-Math.floor(mCSB_container[0].getBoundingClientRect().left)),
 							"min-width":"100%",
 							"position":"relative"
 						}).unwrap();
 				}
 			}
 		},
 		/* -------------------- */


 		/* adds scrollbar buttons */
 		_scrollButtons=function(){
 			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
 				mCSB_scrollTools=$(".mCSB_"+d.idx+"_scrollbar:first"),
 				tabindex=!_isNumeric(o.scrollButtons.tabindex) ? "" : "tabindex='"+o.scrollButtons.tabindex+"'",
 				btnHTML=[
 					"<a href='#' class='"+classes[13]+"' oncontextmenu='return false;' "+tabindex+" />",
 					"<a href='#' class='"+classes[14]+"' oncontextmenu='return false;' "+tabindex+" />",
 					"<a href='#' class='"+classes[15]+"' oncontextmenu='return false;' "+tabindex+" />",
 					"<a href='#' class='"+classes[16]+"' oncontextmenu='return false;' "+tabindex+" />"
 				],
 				btn=[(o.axis==="x" ? btnHTML[2] : btnHTML[0]),(o.axis==="x" ? btnHTML[3] : btnHTML[1]),btnHTML[2],btnHTML[3]];
 			if(o.scrollButtons.enable){
 				mCSB_scrollTools.prepend(btn[0]).append(btn[1]).next(".mCSB_scrollTools").prepend(btn[2]).append(btn[3]);
 			}
 		},
 		/* -------------------- */


 		/* auto-adjusts scrollbar dragger length */
 		_setDraggerLength=function(){
 			var $this=$(this),d=$this.data(pluginPfx),
 				mCustomScrollBox=$("#mCSB_"+d.idx),
 				mCSB_container=$("#mCSB_"+d.idx+"_container"),
 				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],
 				ratio=[mCustomScrollBox.height()/mCSB_container.outerHeight(false),mCustomScrollBox.width()/mCSB_container.outerWidth(false)],
 				l=[
 					parseInt(mCSB_dragger[0].css("min-height")),Math.round(ratio[0]*mCSB_dragger[0].parent().height()),
 					parseInt(mCSB_dragger[1].css("min-width")),Math.round(ratio[1]*mCSB_dragger[1].parent().width())
 				],
 				h=oldIE && (l[1]<l[0]) ? l[0] : l[1],w=oldIE && (l[3]<l[2]) ? l[2] : l[3];
 			mCSB_dragger[0].css({
 				"height":h,"max-height":(mCSB_dragger[0].parent().height()-10)
 			}).find(".mCSB_dragger_bar").css({"line-height":l[0]+"px"});
 			mCSB_dragger[1].css({
 				"width":w,"max-width":(mCSB_dragger[1].parent().width()-10)
 			});
 		},
 		/* -------------------- */


 		/* calculates scrollbar to content ratio */
 		_scrollRatio=function(){
 			var $this=$(this),d=$this.data(pluginPfx),
 				mCustomScrollBox=$("#mCSB_"+d.idx),
 				mCSB_container=$("#mCSB_"+d.idx+"_container"),
 				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],
 				scrollAmount=[mCSB_container.outerHeight(false)-mCustomScrollBox.height(),mCSB_container.outerWidth(false)-mCustomScrollBox.width()],
 				ratio=[
 					scrollAmount[0]/(mCSB_dragger[0].parent().height()-mCSB_dragger[0].height()),
 					scrollAmount[1]/(mCSB_dragger[1].parent().width()-mCSB_dragger[1].width())
 				];
 			d.scrollRatio={y:ratio[0],x:ratio[1]};
 		},
 		/* -------------------- */


 		/* toggles scrolling classes */
 		_onDragClasses=function(el,action,xpnd){
 			var expandClass=xpnd ? classes[0]+"_expanded" : "",
 				scrollbar=el.closest(".mCSB_scrollTools");
 			if(action==="active"){
 				el.toggleClass(classes[0]+" "+expandClass); scrollbar.toggleClass(classes[1]);
 				el[0]._draggable=el[0]._draggable ? 0 : 1;
 			}else{
 				if(!el[0]._draggable){
 					if(action==="hide"){
 						el.removeClass(classes[0]); scrollbar.removeClass(classes[1]);
 					}else{
 						el.addClass(classes[0]); scrollbar.addClass(classes[1]);
 					}
 				}
 			}
 		},
 		/* -------------------- */


 		/* checks if content overflows its container to determine if scrolling is required */
 		_overflowed=function(){
 			var $this=$(this),d=$this.data(pluginPfx),
 				mCustomScrollBox=$("#mCSB_"+d.idx),
 				mCSB_container=$("#mCSB_"+d.idx+"_container"),
 				contentHeight=d.overflowed==null ? mCSB_container.height() : mCSB_container.outerHeight(false),
 				contentWidth=d.overflowed==null ? mCSB_container.width() : mCSB_container.outerWidth(false),
 				h=mCSB_container[0].scrollHeight,w=mCSB_container[0].scrollWidth;
 			if(h>contentHeight){contentHeight=h;}
 			if(w>contentWidth){contentWidth=w;}
 			return [contentHeight>mCustomScrollBox.height(),contentWidth>mCustomScrollBox.width()];
 		},
 		/* -------------------- */


 		/* resets content position to 0 */
 		_resetContentPosition=function(){
 			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
 				mCustomScrollBox=$("#mCSB_"+d.idx),
 				mCSB_container=$("#mCSB_"+d.idx+"_container"),
 				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")];
 			_stop($this); /* stop any current scrolling before resetting */
 			if((o.axis!=="x" && !d.overflowed[0]) || (o.axis==="y" && d.overflowed[0])){ /* reset y */
 				mCSB_dragger[0].add(mCSB_container).css("top",0);
 				_scrollTo($this,"_resetY");
 			}
 			if((o.axis!=="y" && !d.overflowed[1]) || (o.axis==="x" && d.overflowed[1])){ /* reset x */
 				var cx=dx=0;
 				if(d.langDir==="rtl"){ /* adjust left position for rtl direction */
 					cx=mCustomScrollBox.width()-mCSB_container.outerWidth(false);
 					dx=Math.abs(cx/d.scrollRatio.x);
 				}
 				mCSB_container.css("left",cx);
 				mCSB_dragger[1].css("left",dx);
 				_scrollTo($this,"_resetX");
 			}
 		},
 		/* -------------------- */


 		/* binds scrollbar events */
 		_bindEvents=function(){
 			var $this=$(this),d=$this.data(pluginPfx),o=d.opt;
 			if(!d.bindEvents){ /* check if events are already bound */
 				_draggable.call(this);
 				if(o.contentTouchScroll){_contentDraggable.call(this);}
 				_selectable.call(this);
 				if(o.mouseWheel.enable){ /* bind mousewheel fn when plugin is available */
 					function _mwt(){
 						mousewheelTimeout=setTimeout(function(){
 							if(!$.event.special.mousewheel){
 								_mwt();
 							}else{
 								clearTimeout(mousewheelTimeout);
 								_mousewheel.call($this[0]);
 							}
 						},100);
 					}
 					var mousewheelTimeout;
 					_mwt();
 				}
 				_draggerRail.call(this);
 				_wrapperScroll.call(this);
 				if(o.advanced.autoScrollOnFocus){_focus.call(this);}
 				if(o.scrollButtons.enable){_buttons.call(this);}
 				if(o.keyboard.enable){_keyboard.call(this);}
 				d.bindEvents=true;
 			}
 		},
 		/* -------------------- */


 		/* unbinds scrollbar events */
 		_unbindEvents=function(){
 			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
 				namespace=pluginPfx+"_"+d.idx,
 				sb=".mCSB_"+d.idx+"_scrollbar",
 				sel=$("#mCSB_"+d.idx+",#mCSB_"+d.idx+"_container,#mCSB_"+d.idx+"_container_wrapper,"+sb+" ."+classes[12]+",#mCSB_"+d.idx+"_dragger_vertical,#mCSB_"+d.idx+"_dragger_horizontal,"+sb+">a"),
 				mCSB_container=$("#mCSB_"+d.idx+"_container");
 			if(o.advanced.releaseDraggableSelectors){sel.add($(o.advanced.releaseDraggableSelectors));}
 			if(o.advanced.extraDraggableSelectors){sel.add($(o.advanced.extraDraggableSelectors));}
 			if(d.bindEvents){ /* check if events are bound */
 				/* unbind namespaced events from document/selectors */
 				$(document).add($(!_canAccessIFrame() || top.document)).unbind("."+namespace);
 				sel.each(function(){
 					$(this).unbind("."+namespace);
 				});
 				/* clear and delete timeouts/objects */
 				clearTimeout($this[0]._focusTimeout); _delete($this[0],"_focusTimeout");
 				clearTimeout(d.sequential.step); _delete(d.sequential,"step");
 				clearTimeout(mCSB_container[0].onCompleteTimeout); _delete(mCSB_container[0],"onCompleteTimeout");
 				d.bindEvents=false;
 			}
 		},
 		/* -------------------- */


 		/* toggles scrollbar visibility */
 		_scrollbarVisibility=function(disabled){
 			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
 				contentWrapper=$("#mCSB_"+d.idx+"_container_wrapper"),
 				content=contentWrapper.length ? contentWrapper : $("#mCSB_"+d.idx+"_container"),
 				scrollbar=[$("#mCSB_"+d.idx+"_scrollbar_vertical"),$("#mCSB_"+d.idx+"_scrollbar_horizontal")],
 				mCSB_dragger=[scrollbar[0].find(".mCSB_dragger"),scrollbar[1].find(".mCSB_dragger")];
 			if(o.axis!=="x"){
 				if(d.overflowed[0] && !disabled){
 					scrollbar[0].add(mCSB_dragger[0]).add(scrollbar[0].children("a")).css("display","block");
 					content.removeClass(classes[8]+" "+classes[10]);
 				}else{
 					if(o.alwaysShowScrollbar){
 						if(o.alwaysShowScrollbar!==2){mCSB_dragger[0].css("display","none");}
 						content.removeClass(classes[10]);
 					}else{
 						scrollbar[0].css("display","none");
 						content.addClass(classes[10]);
 					}
 					content.addClass(classes[8]);
 				}
 			}
 			if(o.axis!=="y"){
 				if(d.overflowed[1] && !disabled){
 					scrollbar[1].add(mCSB_dragger[1]).add(scrollbar[1].children("a")).css("display","block");
 					content.removeClass(classes[9]+" "+classes[11]);
 				}else{
 					if(o.alwaysShowScrollbar){
 						if(o.alwaysShowScrollbar!==2){mCSB_dragger[1].css("display","none");}
 						content.removeClass(classes[11]);
 					}else{
 						scrollbar[1].css("display","none");
 						content.addClass(classes[11]);
 					}
 					content.addClass(classes[9]);
 				}
 			}
 			if(!d.overflowed[0] && !d.overflowed[1]){
 				$this.addClass(classes[5]);
 			}else{
 				$this.removeClass(classes[5]);
 			}
 		},
 		/* -------------------- */


 		/* returns input coordinates of pointer, touch and mouse events (relative to document) */
 		_coordinates=function(e){
 			var t=e.type,o=e.target.ownerDocument!==document ? [$(frameElement).offset().top,$(frameElement).offset().left] : null,
 				io=_canAccessIFrame() && e.target.ownerDocument!==top.document ? [$(e.view.frameElement).offset().top,$(e.view.frameElement).offset().left] : [0,0];
 			switch(t){
 				case "pointerdown": case "MSPointerDown": case "pointermove": case "MSPointerMove": case "pointerup": case "MSPointerUp":
 					return o ? [e.originalEvent.pageY-o[0]+io[0],e.originalEvent.pageX-o[1]+io[1],false] : [e.originalEvent.pageY,e.originalEvent.pageX,false];
 					break;
 				case "touchstart": case "touchmove": case "touchend":
 					var touch=e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
 						touches=e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
 					return e.target.ownerDocument!==document ? [touch.screenY,touch.screenX,touches>1] : [touch.pageY,touch.pageX,touches>1];
 					break;
 				default:
 					return o ? [e.pageY-o[0]+io[0],e.pageX-o[1]+io[1],false] : [e.pageY,e.pageX,false];
 			}
 		},
 		/* -------------------- */


 		/*
 		SCROLLBAR DRAG EVENTS
 		scrolls content via scrollbar dragging
 		*/
 		_draggable=function(){
 			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
 				namespace=pluginPfx+"_"+d.idx,
 				draggerId=["mCSB_"+d.idx+"_dragger_vertical","mCSB_"+d.idx+"_dragger_horizontal"],
 				mCSB_container=$("#mCSB_"+d.idx+"_container"),
 				mCSB_dragger=$("#"+draggerId[0]+",#"+draggerId[1]),
 				draggable,dragY,dragX,
 				rds=o.advanced.releaseDraggableSelectors ? mCSB_dragger.add($(o.advanced.releaseDraggableSelectors)) : mCSB_dragger,
 				eds=o.advanced.extraDraggableSelectors ? $(!_canAccessIFrame() || top.document).add($(o.advanced.extraDraggableSelectors)) : $(!_canAccessIFrame() || top.document);
 			mCSB_dragger.bind("mousedown."+namespace+" touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace,function(e){
 				e.stopImmediatePropagation();
 				e.preventDefault();
 				if(!_mouseBtnLeft(e)){return;} /* left mouse button only */
 				touchActive=true;
 				if(oldIE){document.onselectstart=function(){return false;}} /* disable text selection for IE < 9 */
 				_iframe(false); /* enable scrollbar dragging over iframes by disabling their events */
 				_stop($this);
 				draggable=$(this);
 				var offset=draggable.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left,
 					h=draggable.height()+offset.top,w=draggable.width()+offset.left;
 				if(y<h && y>0 && x<w && x>0){
 					dragY=y;
 					dragX=x;
 				}
 				_onDragClasses(draggable,"active",o.autoExpandScrollbar);
 			}).bind("touchmove."+namespace,function(e){
 				e.stopImmediatePropagation();
 				e.preventDefault();
 				var offset=draggable.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left;
 				_drag(dragY,dragX,y,x);
 			});
 			$(document).add(eds).bind("mousemove."+namespace+" pointermove."+namespace+" MSPointerMove."+namespace,function(e){
 				if(draggable){
 					var offset=draggable.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left;
 					if(dragY===y && dragX===x){return;} /* has it really moved? */
 					_drag(dragY,dragX,y,x);
 				}
 			}).add(rds).bind("mouseup."+namespace+" touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace,function(e){
 				if(draggable){
 					_onDragClasses(draggable,"active",o.autoExpandScrollbar);
 					draggable=null;
 				}
 				touchActive=false;
 				if(oldIE){document.onselectstart=null;} /* enable text selection for IE < 9 */
 				_iframe(true); /* enable iframes events */
 			});
 			function _iframe(evt){
 				var el=mCSB_container.find("iframe");
 				if(!el.length){return;} /* check if content contains iframes */
 				var val=!evt ? "none" : "auto";
 				el.css("pointer-events",val); /* for IE11, iframe's display property should not be "block" */
 			}
 			function _drag(dragY,dragX,y,x){
 				mCSB_container[0].idleTimer=o.scrollInertia<233 ? 250 : 0;
 				if(draggable.attr("id")===draggerId[1]){
 					var dir="x",to=((draggable[0].offsetLeft-dragX)+x)*d.scrollRatio.x;
 				}else{
 					var dir="y",to=((draggable[0].offsetTop-dragY)+y)*d.scrollRatio.y;
 				}
 				_scrollTo($this,to.toString(),{dir:dir,drag:true});
 			}
 		},
 		/* -------------------- */


 		/*
 		TOUCH SWIPE EVENTS
 		scrolls content via touch swipe
 		Emulates the native touch-swipe scrolling with momentum found in iOS, Android and WP devices
 		*/
 		_contentDraggable=function(){
 			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
 				namespace=pluginPfx+"_"+d.idx,
 				mCustomScrollBox=$("#mCSB_"+d.idx),
 				mCSB_container=$("#mCSB_"+d.idx+"_container"),
 				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],
 				draggable,dragY,dragX,touchStartY,touchStartX,touchMoveY=[],touchMoveX=[],startTime,runningTime,endTime,distance,speed,amount,
 				durA=0,durB,overwrite=o.axis==="yx" ? "none" : "all",touchIntent=[],touchDrag,docDrag,
 				iframe=mCSB_container.find("iframe"),
 				events=[
 					"touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace, //start
 					"touchmove."+namespace+" pointermove."+namespace+" MSPointerMove."+namespace, //move
 					"touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace //end
 				],
 				touchAction=document.body.style.touchAction!==undefined;
 			mCSB_container.bind(events[0],function(e){
 				_onTouchstart(e);
 			}).bind(events[1],function(e){
 				_onTouchmove(e);
 			});
 			mCustomScrollBox.bind(events[0],function(e){
 				_onTouchstart2(e);
 			}).bind(events[2],function(e){
 				_onTouchend(e);
 			});
 			if(iframe.length){
 				iframe.each(function(){
 					$(this).load(function(){
 						/* bind events on accessible iframes */
 						if(_canAccessIFrame(this)){
 							$(this.contentDocument || this.contentWindow.document).bind(events[0],function(e){
 								_onTouchstart(e);
 								_onTouchstart2(e);
 							}).bind(events[1],function(e){
 								_onTouchmove(e);
 							}).bind(events[2],function(e){
 								_onTouchend(e);
 							});
 						}
 					});
 				});
 			}
 			function _onTouchstart(e){
 				if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){touchable=0; return;}
 				touchable=1; touchDrag=0; docDrag=0; draggable=1;
 				$this.removeClass("mCS_touch_action");
 				var offset=mCSB_container.offset();
 				dragY=_coordinates(e)[0]-offset.top;
 				dragX=_coordinates(e)[1]-offset.left;
 				touchIntent=[_coordinates(e)[0],_coordinates(e)[1]];
 			}
 			function _onTouchmove(e){
 				if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){return;}
 				if(!o.documentTouchScroll){e.preventDefault();}
 				e.stopImmediatePropagation();
 				if(docDrag && !touchDrag){return;}
 				if(draggable){
 					runningTime=_getTime();
 					var offset=mCustomScrollBox.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left,
 						easing="mcsLinearOut";
 					touchMoveY.push(y);
 					touchMoveX.push(x);
 					touchIntent[2]=Math.abs(_coordinates(e)[0]-touchIntent[0]); touchIntent[3]=Math.abs(_coordinates(e)[1]-touchIntent[1]);
 					if(d.overflowed[0]){
 						var limit=mCSB_dragger[0].parent().height()-mCSB_dragger[0].height(),
 							prevent=((dragY-y)>0 && (y-dragY)>-(limit*d.scrollRatio.y) && (touchIntent[3]*2<touchIntent[2] || o.axis==="yx"));
 					}
 					if(d.overflowed[1]){
 						var limitX=mCSB_dragger[1].parent().width()-mCSB_dragger[1].width(),
 							preventX=((dragX-x)>0 && (x-dragX)>-(limitX*d.scrollRatio.x) && (touchIntent[2]*2<touchIntent[3] || o.axis==="yx"));
 					}
 					if(prevent || preventX){ /* prevent native document scrolling */
 						if(!touchAction){e.preventDefault();}
 						touchDrag=1;
 					}else{
 						docDrag=1;
 						$this.addClass("mCS_touch_action");
 					}
 					if(touchAction){e.preventDefault();}
 					amount=o.axis==="yx" ? [(dragY-y),(dragX-x)] : o.axis==="x" ? [null,(dragX-x)] : [(dragY-y),null];
 					mCSB_container[0].idleTimer=250;
 					if(d.overflowed[0]){_drag(amount[0],durA,easing,"y","all",true);}
 					if(d.overflowed[1]){_drag(amount[1],durA,easing,"x",overwrite,true);}
 				}
 			}
 			function _onTouchstart2(e){
 				if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){touchable=0; return;}
 				touchable=1;
 				e.stopImmediatePropagation();
 				_stop($this);
 				startTime=_getTime();
 				var offset=mCustomScrollBox.offset();
 				touchStartY=_coordinates(e)[0]-offset.top;
 				touchStartX=_coordinates(e)[1]-offset.left;
 				touchMoveY=[]; touchMoveX=[];
 			}
 			function _onTouchend(e){
 				if(!_pointerTouch(e) || touchActive || _coordinates(e)[2]){return;}
 				draggable=0;
 				e.stopImmediatePropagation();
 				touchDrag=0; docDrag=0;
 				endTime=_getTime();
 				var offset=mCustomScrollBox.offset(),y=_coordinates(e)[0]-offset.top,x=_coordinates(e)[1]-offset.left;
 				if((endTime-runningTime)>30){return;}
 				speed=1000/(endTime-startTime);
 				var easing="mcsEaseOut",slow=speed<2.5,
 					diff=slow ? [touchMoveY[touchMoveY.length-2],touchMoveX[touchMoveX.length-2]] : [0,0];
 				distance=slow ? [(y-diff[0]),(x-diff[1])] : [y-touchStartY,x-touchStartX];
 				var absDistance=[Math.abs(distance[0]),Math.abs(distance[1])];
 				speed=slow ? [Math.abs(distance[0]/4),Math.abs(distance[1]/4)] : [speed,speed];
 				var a=[
 					Math.abs(mCSB_container[0].offsetTop)-(distance[0]*_m((absDistance[0]/speed[0]),speed[0])),
 					Math.abs(mCSB_container[0].offsetLeft)-(distance[1]*_m((absDistance[1]/speed[1]),speed[1]))
 				];
 				amount=o.axis==="yx" ? [a[0],a[1]] : o.axis==="x" ? [null,a[1]] : [a[0],null];
 				durB=[(absDistance[0]*4)+o.scrollInertia,(absDistance[1]*4)+o.scrollInertia];
 				var md=parseInt(o.contentTouchScroll) || 0; /* absolute minimum distance required */
 				amount[0]=absDistance[0]>md ? amount[0] : 0;
 				amount[1]=absDistance[1]>md ? amount[1] : 0;
 				if(d.overflowed[0]){_drag(amount[0],durB[0],easing,"y",overwrite,false);}
 				if(d.overflowed[1]){_drag(amount[1],durB[1],easing,"x",overwrite,false);}
 			}
 			function _m(ds,s){
 				var r=[s*1.5,s*2,s/1.5,s/2];
 				if(ds>90){
 					return s>4 ? r[0] : r[3];
 				}else if(ds>60){
 					return s>3 ? r[3] : r[2];
 				}else if(ds>30){
 					return s>8 ? r[1] : s>6 ? r[0] : s>4 ? s : r[2];
 				}else{
 					return s>8 ? s : r[3];
 				}
 			}
 			function _drag(amount,dur,easing,dir,overwrite,drag){
 				if(!amount){return;}
 				_scrollTo($this,amount.toString(),{dur:dur,scrollEasing:easing,dir:dir,overwrite:overwrite,drag:drag});
 			}
 		},
 		/* -------------------- */


 		/*
 		SELECT TEXT EVENTS
 		scrolls content when text is selected
 		*/
 		_selectable=function(){
 			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,seq=d.sequential,
 				namespace=pluginPfx+"_"+d.idx,
 				mCSB_container=$("#mCSB_"+d.idx+"_container"),
 				wrapper=mCSB_container.parent(),
 				action;
 			mCSB_container.bind("mousedown."+namespace,function(e){
 				if(touchable){return;}
 				if(!action){action=1; touchActive=true;}
 			}).add(document).bind("mousemove."+namespace,function(e){
 				if(!touchable && action && _sel()){
 					var offset=mCSB_container.offset(),
 						y=_coordinates(e)[0]-offset.top+mCSB_container[0].offsetTop,x=_coordinates(e)[1]-offset.left+mCSB_container[0].offsetLeft;
 					if(y>0 && y<wrapper.height() && x>0 && x<wrapper.width()){
 						if(seq.step){_seq("off",null,"stepped");}
 					}else{
 						if(o.axis!=="x" && d.overflowed[0]){
 							if(y<0){
 								_seq("on",38);
 							}else if(y>wrapper.height()){
 								_seq("on",40);
 							}
 						}
 						if(o.axis!=="y" && d.overflowed[1]){
 							if(x<0){
 								_seq("on",37);
 							}else if(x>wrapper.width()){
 								_seq("on",39);
 							}
 						}
 					}
 				}
 			}).bind("mouseup."+namespace+" dragend."+namespace,function(e){
 				if(touchable){return;}
 				if(action){action=0; _seq("off",null);}
 				touchActive=false;
 			});
 			function _sel(){
 				return 	window.getSelection ? window.getSelection().toString() :
 						document.selection && document.selection.type!="Control" ? document.selection.createRange().text : 0;
 			}
 			function _seq(a,c,s){
 				seq.type=s && action ? "stepped" : "stepless";
 				seq.scrollAmount=10;
 				_sequentialScroll($this,a,c,"mcsLinearOut",s ? 60 : null);
 			}
 		},
 		/* -------------------- */


 		/*
 		MOUSE WHEEL EVENT
 		scrolls content via mouse-wheel
 		via mouse-wheel plugin (https://github.com/brandonaaron/jquery-mousewheel)
 		*/
 		_mousewheel=function(){
 			if(!$(this).data(pluginPfx)){return;} /* Check if the scrollbar is ready to use mousewheel events (issue: #185) */
 			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
 				namespace=pluginPfx+"_"+d.idx,
 				mCustomScrollBox=$("#mCSB_"+d.idx),
 				mCSB_dragger=[$("#mCSB_"+d.idx+"_dragger_vertical"),$("#mCSB_"+d.idx+"_dragger_horizontal")],
 				iframe=$("#mCSB_"+d.idx+"_container").find("iframe");
 			if(iframe.length){
 				iframe.each(function(){
 					$(this).load(function(){
 						/* bind events on accessible iframes */
 						if(_canAccessIFrame(this)){
 							$(this.contentDocument || this.contentWindow.document).bind("mousewheel."+namespace,function(e,delta){
 								_onMousewheel(e,delta);
 							});
 						}
 					});
 				});
 			}
 			mCustomScrollBox.bind("mousewheel."+namespace,function(e,delta){
 				_onMousewheel(e,delta);
 			});
 			function _onMousewheel(e,delta){
 				_stop($this);
 				if(_disableMousewheel($this,e.target)){return;} /* disables mouse-wheel when hovering specific elements */
 				var deltaFactor=o.mouseWheel.deltaFactor!=="auto" ? parseInt(o.mouseWheel.deltaFactor) : (oldIE && e.deltaFactor<100) ? 100 : e.deltaFactor || 100,
 					dur=o.scrollInertia;
 				if(o.axis==="x" || o.mouseWheel.axis==="x"){
 					var dir="x",
 						px=[Math.round(deltaFactor*d.scrollRatio.x),parseInt(o.mouseWheel.scrollAmount)],
 						amount=o.mouseWheel.scrollAmount!=="auto" ? px[1] : px[0]>=mCustomScrollBox.width() ? mCustomScrollBox.width()*0.9 : px[0],
 						contentPos=Math.abs($("#mCSB_"+d.idx+"_container")[0].offsetLeft),
 						draggerPos=mCSB_dragger[1][0].offsetLeft,
 						limit=mCSB_dragger[1].parent().width()-mCSB_dragger[1].width(),
 						dlt=e.deltaX || e.deltaY || delta;
 				}else{
 					var dir="y",
 						px=[Math.round(deltaFactor*d.scrollRatio.y),parseInt(o.mouseWheel.scrollAmount)],
 						amount=o.mouseWheel.scrollAmount!=="auto" ? px[1] : px[0]>=mCustomScrollBox.height() ? mCustomScrollBox.height()*0.9 : px[0],
 						contentPos=Math.abs($("#mCSB_"+d.idx+"_container")[0].offsetTop),
 						draggerPos=mCSB_dragger[0][0].offsetTop,
 						limit=mCSB_dragger[0].parent().height()-mCSB_dragger[0].height(),
 						dlt=e.deltaY || delta;
 				}
 				if((dir==="y" && !d.overflowed[0]) || (dir==="x" && !d.overflowed[1])){return;}
 				if(o.mouseWheel.invert || e.webkitDirectionInvertedFromDevice){dlt=-dlt;}
 				if(o.mouseWheel.normalizeDelta){dlt=dlt<0 ? -1 : 1;}
 				if((dlt>0 && draggerPos!==0) || (dlt<0 && draggerPos!==limit) || o.mouseWheel.preventDefault){
 					e.stopImmediatePropagation();
 					e.preventDefault();
 				}
 				if(e.deltaFactor<2 && !o.mouseWheel.normalizeDelta){
 					//very low deltaFactor values mean some kind of delta acceleration (e.g. osx trackpad), so adjusting scrolling accordingly
 					amount=e.deltaFactor; dur=17;
 				}
 				_scrollTo($this,(contentPos-(dlt*amount)).toString(),{dir:dir,dur:dur});
 			}
 		},
 		/* -------------------- */


 		/* checks if iframe can be accessed */
 		_canAccessIFrame=function(iframe){
 			var html=null;
 			if(!iframe){
 				try{
 					var doc=top.document;
 					html=doc.body.innerHTML;
 				}catch(err){/* do nothing */}
 				return(html!==null);
 			}else{
 				try{
 					var doc=iframe.contentDocument || iframe.contentWindow.document;
 					html=doc.body.innerHTML;
 				}catch(err){/* do nothing */}
 				return(html!==null);
 			}
 		},
 		/* -------------------- */


 		/* disables mouse-wheel when hovering specific elements like select, datalist etc. */
 		_disableMousewheel=function(el,target){
 			var tag=target.nodeName.toLowerCase(),
 				tags=el.data(pluginPfx).opt.mouseWheel.disableOver,
 				/* elements that require focus */
 				focusTags=["select","textarea"];
 			return $.inArray(tag,tags) > -1 && !($.inArray(tag,focusTags) > -1 && !$(target).is(":focus"));
 		},
 		/* -------------------- */


 		/*
 		DRAGGER RAIL CLICK EVENT
 		scrolls content via dragger rail
 		*/
 		_draggerRail=function(){
 			var $this=$(this),d=$this.data(pluginPfx),
 				namespace=pluginPfx+"_"+d.idx,
 				mCSB_container=$("#mCSB_"+d.idx+"_container"),
 				wrapper=mCSB_container.parent(),
 				mCSB_draggerContainer=$(".mCSB_"+d.idx+"_scrollbar ."+classes[12]),
 				clickable;
 			mCSB_draggerContainer.bind("mousedown."+namespace+" touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace,function(e){
 				touchActive=true;
 				if(!$(e.target).hasClass("mCSB_dragger")){clickable=1;}
 			}).bind("touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace,function(e){
 				touchActive=false;
 			}).bind("click."+namespace,function(e){
 				if(!clickable){return;}
 				clickable=0;
 				if($(e.target).hasClass(classes[12]) || $(e.target).hasClass("mCSB_draggerRail")){
 					_stop($this);
 					var el=$(this),mCSB_dragger=el.find(".mCSB_dragger");
 					if(el.parent(".mCSB_scrollTools_horizontal").length>0){
 						if(!d.overflowed[1]){return;}
 						var dir="x",
 							clickDir=e.pageX>mCSB_dragger.offset().left ? -1 : 1,
 							to=Math.abs(mCSB_container[0].offsetLeft)-(clickDir*(wrapper.width()*0.9));
 					}else{
 						if(!d.overflowed[0]){return;}
 						var dir="y",
 							clickDir=e.pageY>mCSB_dragger.offset().top ? -1 : 1,
 							to=Math.abs(mCSB_container[0].offsetTop)-(clickDir*(wrapper.height()*0.9));
 					}
 					_scrollTo($this,to.toString(),{dir:dir,scrollEasing:"mcsEaseInOut"});
 				}
 			});
 		},
 		/* -------------------- */


 		/*
 		FOCUS EVENT
 		scrolls content via element focus (e.g. clicking an input, pressing TAB key etc.)
 		*/
 		_focus=function(){
 			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
 				namespace=pluginPfx+"_"+d.idx,
 				mCSB_container=$("#mCSB_"+d.idx+"_container"),
 				wrapper=mCSB_container.parent();
 			mCSB_container.bind("focusin."+namespace,function(e){
 				var el=$(document.activeElement),
 					nested=mCSB_container.find(".mCustomScrollBox").length,
 					dur=0;
 				if(!el.is(o.advanced.autoScrollOnFocus)){return;}
 				_stop($this);
 				clearTimeout($this[0]._focusTimeout);
 				$this[0]._focusTimer=nested ? (dur+17)*nested : 0;
 				$this[0]._focusTimeout=setTimeout(function(){
 					var	to=[_childPos(el)[0],_childPos(el)[1]],
 						contentPos=[mCSB_container[0].offsetTop,mCSB_container[0].offsetLeft],
 						isVisible=[
 							(contentPos[0]+to[0]>=0 && contentPos[0]+to[0]<wrapper.height()-el.outerHeight(false)),
 							(contentPos[1]+to[1]>=0 && contentPos[0]+to[1]<wrapper.width()-el.outerWidth(false))
 						],
 						overwrite=(o.axis==="yx" && !isVisible[0] && !isVisible[1]) ? "none" : "all";
 					if(o.axis!=="x" && !isVisible[0]){
 						_scrollTo($this,to[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:overwrite,dur:dur});
 					}
 					if(o.axis!=="y" && !isVisible[1]){
 						_scrollTo($this,to[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:overwrite,dur:dur});
 					}
 				},$this[0]._focusTimer);
 			});
 		},
 		/* -------------------- */


 		/* sets content wrapper scrollTop/scrollLeft always to 0 */
 		_wrapperScroll=function(){
 			var $this=$(this),d=$this.data(pluginPfx),
 				namespace=pluginPfx+"_"+d.idx,
 				wrapper=$("#mCSB_"+d.idx+"_container").parent();
 			wrapper.bind("scroll."+namespace,function(e){
 				if(wrapper.scrollTop()!==0 || wrapper.scrollLeft()!==0){
 					$(".mCSB_"+d.idx+"_scrollbar").css("visibility","hidden"); /* hide scrollbar(s) */
 				}
 			});
 		},
 		/* -------------------- */


 		/*
 		BUTTONS EVENTS
 		scrolls content via up, down, left and right buttons
 		*/
 		_buttons=function(){
 			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,seq=d.sequential,
 				namespace=pluginPfx+"_"+d.idx,
 				sel=".mCSB_"+d.idx+"_scrollbar",
 				btn=$(sel+">a");
 			btn.bind("mousedown."+namespace+" touchstart."+namespace+" pointerdown."+namespace+" MSPointerDown."+namespace+" mouseup."+namespace+" touchend."+namespace+" pointerup."+namespace+" MSPointerUp."+namespace+" mouseout."+namespace+" pointerout."+namespace+" MSPointerOut."+namespace+" click."+namespace,function(e){
 				e.preventDefault();
 				if(!_mouseBtnLeft(e)){return;} /* left mouse button only */
 				var btnClass=$(this).attr("class");
 				seq.type=o.scrollButtons.scrollType;
 				switch(e.type){
 					case "mousedown": case "touchstart": case "pointerdown": case "MSPointerDown":
 						if(seq.type==="stepped"){return;}
 						touchActive=true;
 						d.tweenRunning=false;
 						_seq("on",btnClass);
 						break;
 					case "mouseup": case "touchend": case "pointerup": case "MSPointerUp":
 					case "mouseout": case "pointerout": case "MSPointerOut":
 						if(seq.type==="stepped"){return;}
 						touchActive=false;
 						if(seq.dir){_seq("off",btnClass);}
 						break;
 					case "click":
 						if(seq.type!=="stepped" || d.tweenRunning){return;}
 						_seq("on",btnClass);
 						break;
 				}
 				function _seq(a,c){
 					seq.scrollAmount=o.scrollButtons.scrollAmount;
 					_sequentialScroll($this,a,c);
 				}
 			});
 		},
 		/* -------------------- */


 		/*
 		KEYBOARD EVENTS
 		scrolls content via keyboard
 		Keys: up arrow, down arrow, left arrow, right arrow, PgUp, PgDn, Home, End
 		*/
 		_keyboard=function(){
 			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,seq=d.sequential,
 				namespace=pluginPfx+"_"+d.idx,
 				mCustomScrollBox=$("#mCSB_"+d.idx),
 				mCSB_container=$("#mCSB_"+d.idx+"_container"),
 				wrapper=mCSB_container.parent(),
 				editables="input,textarea,select,datalist,keygen,[contenteditable='true']",
 				iframe=mCSB_container.find("iframe"),
 				events=["blur."+namespace+" keydown."+namespace+" keyup."+namespace];
 			if(iframe.length){
 				iframe.each(function(){
 					$(this).load(function(){
 						/* bind events on accessible iframes */
 						if(_canAccessIFrame(this)){
 							$(this.contentDocument || this.contentWindow.document).bind(events[0],function(e){
 								_onKeyboard(e);
 							});
 						}
 					});
 				});
 			}
 			mCustomScrollBox.attr("tabindex","0").bind(events[0],function(e){
 				_onKeyboard(e);
 			});
 			function _onKeyboard(e){
 				switch(e.type){
 					case "blur":
 						if(d.tweenRunning && seq.dir){_seq("off",null);}
 						break;
 					case "keydown": case "keyup":
 						var code=e.keyCode ? e.keyCode : e.which,action="on";
 						if((o.axis!=="x" && (code===38 || code===40)) || (o.axis!=="y" && (code===37 || code===39))){
 							/* up (38), down (40), left (37), right (39) arrows */
 							if(((code===38 || code===40) && !d.overflowed[0]) || ((code===37 || code===39) && !d.overflowed[1])){return;}
 							if(e.type==="keyup"){action="off";}
 							if(!$(document.activeElement).is(editables)){
 								e.preventDefault();
 								e.stopImmediatePropagation();
 								_seq(action,code);
 							}
 						}else if(code===33 || code===34){
 							/* PgUp (33), PgDn (34) */
 							if(d.overflowed[0] || d.overflowed[1]){
 								e.preventDefault();
 								e.stopImmediatePropagation();
 							}
 							if(e.type==="keyup"){
 								_stop($this);
 								var keyboardDir=code===34 ? -1 : 1;
 								if(o.axis==="x" || (o.axis==="yx" && d.overflowed[1] && !d.overflowed[0])){
 									var dir="x",to=Math.abs(mCSB_container[0].offsetLeft)-(keyboardDir*(wrapper.width()*0.9));
 								}else{
 									var dir="y",to=Math.abs(mCSB_container[0].offsetTop)-(keyboardDir*(wrapper.height()*0.9));
 								}
 								_scrollTo($this,to.toString(),{dir:dir,scrollEasing:"mcsEaseInOut"});
 							}
 						}else if(code===35 || code===36){
 							/* End (35), Home (36) */
 							if(!$(document.activeElement).is(editables)){
 								if(d.overflowed[0] || d.overflowed[1]){
 									e.preventDefault();
 									e.stopImmediatePropagation();
 								}
 								if(e.type==="keyup"){
 									if(o.axis==="x" || (o.axis==="yx" && d.overflowed[1] && !d.overflowed[0])){
 										var dir="x",to=code===35 ? Math.abs(wrapper.width()-mCSB_container.outerWidth(false)) : 0;
 									}else{
 										var dir="y",to=code===35 ? Math.abs(wrapper.height()-mCSB_container.outerHeight(false)) : 0;
 									}
 									_scrollTo($this,to.toString(),{dir:dir,scrollEasing:"mcsEaseInOut"});
 								}
 							}
 						}
 						break;
 				}
 				function _seq(a,c){
 					seq.type=o.keyboard.scrollType;
 					seq.scrollAmount=o.keyboard.scrollAmount;
 					if(seq.type==="stepped" && d.tweenRunning){return;}
 					_sequentialScroll($this,a,c);
 				}
 			}
 		},
 		/* -------------------- */


 		/* scrolls content sequentially (used when scrolling via buttons, keyboard arrows etc.) */
 		_sequentialScroll=function(el,action,trigger,e,s){
 			var d=el.data(pluginPfx),o=d.opt,seq=d.sequential,
 				mCSB_container=$("#mCSB_"+d.idx+"_container"),
 				once=seq.type==="stepped" ? true : false,
 				steplessSpeed=o.scrollInertia < 26 ? 26 : o.scrollInertia, /* 26/1.5=17 */
 				steppedSpeed=o.scrollInertia < 1 ? 17 : o.scrollInertia;
 			switch(action){
 				case "on":
 					seq.dir=[
 						(trigger===classes[16] || trigger===classes[15] || trigger===39 || trigger===37 ? "x" : "y"),
 						(trigger===classes[13] || trigger===classes[15] || trigger===38 || trigger===37 ? -1 : 1)
 					];
 					_stop(el);
 					if(_isNumeric(trigger) && seq.type==="stepped"){return;}
 					_on(once);
 					break;
 				case "off":
 					_off();
 					if(once || (d.tweenRunning && seq.dir)){
 						_on(true);
 					}
 					break;
 			}

 			/* starts sequence */
 			function _on(once){
 				if(o.snapAmount){seq.scrollAmount=!(o.snapAmount instanceof Array) ? o.snapAmount : seq.dir[0]==="x" ? o.snapAmount[1] : o.snapAmount[0];} /* scrolling snapping */
 				var c=seq.type!=="stepped", /* continuous scrolling */
 					t=s ? s : !once ? 1000/60 : c ? steplessSpeed/1.5 : steppedSpeed, /* timer */
 					m=!once ? 2.5 : c ? 7.5 : 40, /* multiplier */
 					contentPos=[Math.abs(mCSB_container[0].offsetTop),Math.abs(mCSB_container[0].offsetLeft)],
 					ratio=[d.scrollRatio.y>10 ? 10 : d.scrollRatio.y,d.scrollRatio.x>10 ? 10 : d.scrollRatio.x],
 					amount=seq.dir[0]==="x" ? contentPos[1]+(seq.dir[1]*(ratio[1]*m)) : contentPos[0]+(seq.dir[1]*(ratio[0]*m)),
 					px=seq.dir[0]==="x" ? contentPos[1]+(seq.dir[1]*parseInt(seq.scrollAmount)) : contentPos[0]+(seq.dir[1]*parseInt(seq.scrollAmount)),
 					to=seq.scrollAmount!=="auto" ? px : amount,
 					easing=e ? e : !once ? "mcsLinear" : c ? "mcsLinearOut" : "mcsEaseInOut",
 					onComplete=!once ? false : true;
 				if(once && t<17){
 					to=seq.dir[0]==="x" ? contentPos[1] : contentPos[0];
 				}
 				_scrollTo(el,to.toString(),{dir:seq.dir[0],scrollEasing:easing,dur:t,onComplete:onComplete});
 				if(once){
 					seq.dir=false;
 					return;
 				}
 				clearTimeout(seq.step);
 				seq.step=setTimeout(function(){
 					_on();
 				},t);
 			}
 			/* stops sequence */
 			function _off(){
 				clearTimeout(seq.step);
 				_delete(seq,"step");
 				_stop(el);
 			}
 		},
 		/* -------------------- */


 		/* returns a yx array from value */
 		_arr=function(val){
 			var o=$(this).data(pluginPfx).opt,vals=[];
 			if(typeof val==="function"){val=val();} /* check if the value is a single anonymous function */
 			/* check if value is object or array, its length and create an array with yx values */
 			if(!(val instanceof Array)){ /* object value (e.g. {y:"100",x:"100"}, 100 etc.) */
 				vals[0]=val.y ? val.y : val.x || o.axis==="x" ? null : val;
 				vals[1]=val.x ? val.x : val.y || o.axis==="y" ? null : val;
 			}else{ /* array value (e.g. [100,100]) */
 				vals=val.length>1 ? [val[0],val[1]] : o.axis==="x" ? [null,val[0]] : [val[0],null];
 			}
 			/* check if array values are anonymous functions */
 			if(typeof vals[0]==="function"){vals[0]=vals[0]();}
 			if(typeof vals[1]==="function"){vals[1]=vals[1]();}
 			return vals;
 		},
 		/* -------------------- */


 		/* translates values (e.g. "top", 100, "100px", "#id") to actual scroll-to positions */
 		_to=function(val,dir){
 			if(val==null || typeof val=="undefined"){return;}
 			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
 				mCSB_container=$("#mCSB_"+d.idx+"_container"),
 				wrapper=mCSB_container.parent(),
 				t=typeof val;
 			if(!dir){dir=o.axis==="x" ? "x" : "y";}
 			var contentLength=dir==="x" ? mCSB_container.outerWidth(false) : mCSB_container.outerHeight(false),
 				contentPos=dir==="x" ? mCSB_container[0].offsetLeft : mCSB_container[0].offsetTop,
 				cssProp=dir==="x" ? "left" : "top";
 			switch(t){
 				case "function": /* this currently is not used. Consider removing it */
 					return val();
 					break;
 				case "object": /* js/jquery object */
 					var obj=val.jquery ? val : $(val);
 					if(!obj.length){return;}
 					return dir==="x" ? _childPos(obj)[1] : _childPos(obj)[0];
 					break;
 				case "string": case "number":
 					if(_isNumeric(val)){ /* numeric value */
 						return Math.abs(val);
 					}else if(val.indexOf("%")!==-1){ /* percentage value */
 						return Math.abs(contentLength*parseInt(val)/100);
 					}else if(val.indexOf("-=")!==-1){ /* decrease value */
 						return Math.abs(contentPos-parseInt(val.split("-=")[1]));
 					}else if(val.indexOf("+=")!==-1){ /* inrease value */
 						var p=(contentPos+parseInt(val.split("+=")[1]));
 						return p>=0 ? 0 : Math.abs(p);
 					}else if(val.indexOf("px")!==-1 && _isNumeric(val.split("px")[0])){ /* pixels string value (e.g. "100px") */
 						return Math.abs(val.split("px")[0]);
 					}else{
 						if(val==="top" || val==="left"){ /* special strings */
 							return 0;
 						}else if(val==="bottom"){
 							return Math.abs(wrapper.height()-mCSB_container.outerHeight(false));
 						}else if(val==="right"){
 							return Math.abs(wrapper.width()-mCSB_container.outerWidth(false));
 						}else if(val==="first" || val==="last"){
 							var obj=mCSB_container.find(":"+val);
 							return dir==="x" ? _childPos(obj)[1] : _childPos(obj)[0];
 						}else{
 							if($(val).length){ /* jquery selector */
 								return dir==="x" ? _childPos($(val))[1] : _childPos($(val))[0];
 							}else{ /* other values (e.g. "100em") */
 								mCSB_container.css(cssProp,val);
 								methods.update.call(null,$this[0]);
 								return;
 							}
 						}
 					}
 					break;
 			}
 		},
 		/* -------------------- */


 		/* calls the update method automatically */
 		_autoUpdate=function(rem){
 			var $this=$(this),d=$this.data(pluginPfx),o=d.opt,
 				mCSB_container=$("#mCSB_"+d.idx+"_container");
 			if(rem){
 				/*
 				removes autoUpdate timer
 				usage: _autoUpdate.call(this,"remove");
 				*/
 				clearTimeout(mCSB_container[0].autoUpdate);
 				_delete(mCSB_container[0],"autoUpdate");
 				return;
 			}
 			upd();
 			function upd(){
 				clearTimeout(mCSB_container[0].autoUpdate);
 				if($this.parents("html").length===0){
 					/* check element in dom tree */
 					$this=null;
 					return;
 				}
 				mCSB_container[0].autoUpdate=setTimeout(function(){
 					/* update on specific selector(s) length and size change */
 					if(o.advanced.updateOnSelectorChange){
 						d.poll.change.n=sizesSum();
 						if(d.poll.change.n!==d.poll.change.o){
 							d.poll.change.o=d.poll.change.n;
 							doUpd(3);
 							return;
 						}
 					}
 					/* update on main element and scrollbar size changes */
 					if(o.advanced.updateOnContentResize){
 						d.poll.size.n=$this[0].scrollHeight+$this[0].scrollWidth+mCSB_container[0].offsetHeight+$this[0].offsetHeight+$this[0].offsetWidth;
 						if(d.poll.size.n!==d.poll.size.o){
 							d.poll.size.o=d.poll.size.n;
 							doUpd(1);
 							return;
 						}
 					}
 					/* update on image load */
 					if(o.advanced.updateOnImageLoad){
 						if(!(o.advanced.updateOnImageLoad==="auto" && o.axis==="y")){ //by default, it doesn't run on vertical content
 							d.poll.img.n=mCSB_container.find("img").length;
 							if(d.poll.img.n!==d.poll.img.o){
 								d.poll.img.o=d.poll.img.n;
 								mCSB_container.find("img").each(function(){
 									imgLoader(this);
 								});
 								return;
 							}
 						}
 					}
 					if(o.advanced.updateOnSelectorChange || o.advanced.updateOnContentResize || o.advanced.updateOnImageLoad){upd();}
 				},o.advanced.autoUpdateTimeout);
 			}
 			/* a tiny image loader */
 			function imgLoader(el){
 				if($(el).hasClass(classes[2])){doUpd(); return;}
 				var img=new Image();
 				function createDelegate(contextObject,delegateMethod){
 					return function(){return delegateMethod.apply(contextObject,arguments);}
 				}
 				function imgOnLoad(){
 					this.onload=null;
 					$(el).addClass(classes[2]);
 					doUpd(2);
 				}
 				img.onload=createDelegate(img,imgOnLoad);
 				img.src=el.src;
 			}
 			/* returns the total height and width sum of all elements matching the selector */
 			function sizesSum(){
 				if(o.advanced.updateOnSelectorChange===true){o.advanced.updateOnSelectorChange="*";}
 				var total=0,sel=mCSB_container.find(o.advanced.updateOnSelectorChange);
 				if(o.advanced.updateOnSelectorChange && sel.length>0){sel.each(function(){total+=this.offsetHeight+this.offsetWidth;});}
 				return total;
 			}
 			/* calls the update method */
 			function doUpd(cb){
 				clearTimeout(mCSB_container[0].autoUpdate);
 				methods.update.call(null,$this[0],cb);
 			}
 		},
 		/* -------------------- */


 		/* snaps scrolling to a multiple of a pixels number */
 		_snapAmount=function(to,amount,offset){
 			return (Math.round(to/amount)*amount-offset);
 		},
 		/* -------------------- */


 		/* stops content and scrollbar animations */
 		_stop=function(el){
 			var d=el.data(pluginPfx),
 				sel=$("#mCSB_"+d.idx+"_container,#mCSB_"+d.idx+"_container_wrapper,#mCSB_"+d.idx+"_dragger_vertical,#mCSB_"+d.idx+"_dragger_horizontal");
 			sel.each(function(){
 				_stopTween.call(this);
 			});
 		},
 		/* -------------------- */


 		/*
 		ANIMATES CONTENT
 		This is where the actual scrolling happens
 		*/
 		_scrollTo=function(el,to,options){
 			var d=el.data(pluginPfx),o=d.opt,
 				defaults={
 					trigger:"internal",
 					dir:"y",
 					scrollEasing:"mcsEaseOut",
 					drag:false,
 					dur:o.scrollInertia,
 					overwrite:"all",
 					callbacks:true,
 					onStart:true,
 					onUpdate:true,
 					onComplete:true
 				},
 				options=$.extend(defaults,options),
 				dur=[options.dur,(options.drag ? 0 : options.dur)],
 				mCustomScrollBox=$("#mCSB_"+d.idx),
 				mCSB_container=$("#mCSB_"+d.idx+"_container"),
 				wrapper=mCSB_container.parent(),
 				totalScrollOffsets=o.callbacks.onTotalScrollOffset ? _arr.call(el,o.callbacks.onTotalScrollOffset) : [0,0],
 				totalScrollBackOffsets=o.callbacks.onTotalScrollBackOffset ? _arr.call(el,o.callbacks.onTotalScrollBackOffset) : [0,0];
 			d.trigger=options.trigger;
 			if(wrapper.scrollTop()!==0 || wrapper.scrollLeft()!==0){ /* always reset scrollTop/Left */
 				$(".mCSB_"+d.idx+"_scrollbar").css("visibility","visible");
 				wrapper.scrollTop(0).scrollLeft(0);
 			}
 			if(to==="_resetY" && !d.contentReset.y){
 				/* callbacks: onOverflowYNone */
 				if(_cb("onOverflowYNone")){o.callbacks.onOverflowYNone.call(el[0]);}
 				d.contentReset.y=1;
 			}
 			if(to==="_resetX" && !d.contentReset.x){
 				/* callbacks: onOverflowXNone */
 				if(_cb("onOverflowXNone")){o.callbacks.onOverflowXNone.call(el[0]);}
 				d.contentReset.x=1;
 			}
 			if(to==="_resetY" || to==="_resetX"){return;}
 			if((d.contentReset.y || !el[0].mcs) && d.overflowed[0]){
 				/* callbacks: onOverflowY */
 				if(_cb("onOverflowY")){o.callbacks.onOverflowY.call(el[0]);}
 				d.contentReset.x=null;
 			}
 			if((d.contentReset.x || !el[0].mcs) && d.overflowed[1]){
 				/* callbacks: onOverflowX */
 				if(_cb("onOverflowX")){o.callbacks.onOverflowX.call(el[0]);}
 				d.contentReset.x=null;
 			}
 			if(o.snapAmount){ /* scrolling snapping */
 				var snapAmount=!(o.snapAmount instanceof Array) ? o.snapAmount : options.dir==="x" ? o.snapAmount[1] : o.snapAmount[0];
 				to=_snapAmount(to,snapAmount,o.snapOffset);
 			}
 			switch(options.dir){
 				case "x":
 					var mCSB_dragger=$("#mCSB_"+d.idx+"_dragger_horizontal"),
 						property="left",
 						contentPos=mCSB_container[0].offsetLeft,
 						limit=[
 							mCustomScrollBox.width()-mCSB_container.outerWidth(false),
 							mCSB_dragger.parent().width()-mCSB_dragger.width()
 						],
 						scrollTo=[to,to===0 ? 0 : (to/d.scrollRatio.x)],
 						tso=totalScrollOffsets[1],
 						tsbo=totalScrollBackOffsets[1],
 						totalScrollOffset=tso>0 ? tso/d.scrollRatio.x : 0,
 						totalScrollBackOffset=tsbo>0 ? tsbo/d.scrollRatio.x : 0;
 					break;
 				case "y":
 					var mCSB_dragger=$("#mCSB_"+d.idx+"_dragger_vertical"),
 						property="top",
 						contentPos=mCSB_container[0].offsetTop,
 						limit=[
 							mCustomScrollBox.height()-mCSB_container.outerHeight(false),
 							mCSB_dragger.parent().height()-mCSB_dragger.height()
 						],
 						scrollTo=[to,to===0 ? 0 : (to/d.scrollRatio.y)],
 						tso=totalScrollOffsets[0],
 						tsbo=totalScrollBackOffsets[0],
 						totalScrollOffset=tso>0 ? tso/d.scrollRatio.y : 0,
 						totalScrollBackOffset=tsbo>0 ? tsbo/d.scrollRatio.y : 0;
 					break;
 			}
 			if(scrollTo[1]<0 || (scrollTo[0]===0 && scrollTo[1]===0)){
 				scrollTo=[0,0];
 			}else if(scrollTo[1]>=limit[1]){
 				scrollTo=[limit[0],limit[1]];
 			}else{
 				scrollTo[0]=-scrollTo[0];
 			}
 			if(!el[0].mcs){
 				_mcs();  /* init mcs object (once) to make it available before callbacks */
 				if(_cb("onInit")){o.callbacks.onInit.call(el[0]);} /* callbacks: onInit */
 			}
 			clearTimeout(mCSB_container[0].onCompleteTimeout);
 			_tweenTo(mCSB_dragger[0],property,Math.round(scrollTo[1]),dur[1],options.scrollEasing);
 			if(!d.tweenRunning && ((contentPos===0 && scrollTo[0]>=0) || (contentPos===limit[0] && scrollTo[0]<=limit[0]))){return;}
 			_tweenTo(mCSB_container[0],property,Math.round(scrollTo[0]),dur[0],options.scrollEasing,options.overwrite,{
 				onStart:function(){
 					if(options.callbacks && options.onStart && !d.tweenRunning){
 						/* callbacks: onScrollStart */
 						if(_cb("onScrollStart")){_mcs(); o.callbacks.onScrollStart.call(el[0]);}
 						d.tweenRunning=true;
 						_onDragClasses(mCSB_dragger);
 						d.cbOffsets=_cbOffsets();
 					}
 				},onUpdate:function(){
 					if(options.callbacks && options.onUpdate){
 						/* callbacks: whileScrolling */
 						if(_cb("whileScrolling")){_mcs(); o.callbacks.whileScrolling.call(el[0]);}
 					}
 				},onComplete:function(){
 					if(options.callbacks && options.onComplete){
 						if(o.axis==="yx"){clearTimeout(mCSB_container[0].onCompleteTimeout);}
 						var t=mCSB_container[0].idleTimer || 0;
 						mCSB_container[0].onCompleteTimeout=setTimeout(function(){
 							/* callbacks: onScroll, onTotalScroll, onTotalScrollBack */
 							if(_cb("onScroll")){_mcs(); o.callbacks.onScroll.call(el[0]);}
 							if(_cb("onTotalScroll") && scrollTo[1]>=limit[1]-totalScrollOffset && d.cbOffsets[0]){_mcs(); o.callbacks.onTotalScroll.call(el[0]);}
 							if(_cb("onTotalScrollBack") && scrollTo[1]<=totalScrollBackOffset && d.cbOffsets[1]){_mcs(); o.callbacks.onTotalScrollBack.call(el[0]);}
 							d.tweenRunning=false;
 							mCSB_container[0].idleTimer=0;
 							_onDragClasses(mCSB_dragger,"hide");
 						},t);
 					}
 				}
 			});
 			/* checks if callback function exists */
 			function _cb(cb){
 				return d && o.callbacks[cb] && typeof o.callbacks[cb]==="function";
 			}
 			/* checks whether callback offsets always trigger */
 			function _cbOffsets(){
 				return [o.callbacks.alwaysTriggerOffsets || contentPos>=limit[0]+tso,o.callbacks.alwaysTriggerOffsets || contentPos<=-tsbo];
 			}
 			/*
 			populates object with useful values for the user
 			values:
 				content: this.mcs.content
 				content top position: this.mcs.top
 				content left position: this.mcs.left
 				dragger top position: this.mcs.draggerTop
 				dragger left position: this.mcs.draggerLeft
 				scrolling y percentage: this.mcs.topPct
 				scrolling x percentage: this.mcs.leftPct
 				scrolling direction: this.mcs.direction
 			*/
 			function _mcs(){
 				var cp=[mCSB_container[0].offsetTop,mCSB_container[0].offsetLeft], /* content position */
 					dp=[mCSB_dragger[0].offsetTop,mCSB_dragger[0].offsetLeft], /* dragger position */
 					cl=[mCSB_container.outerHeight(false),mCSB_container.outerWidth(false)], /* content length */
 					pl=[mCustomScrollBox.height(),mCustomScrollBox.width()]; /* content parent length */
 				el[0].mcs={
 					content:mCSB_container, /* original content wrapper as jquery object */
 					top:cp[0],left:cp[1],draggerTop:dp[0],draggerLeft:dp[1],
 					topPct:Math.round((100*Math.abs(cp[0]))/(Math.abs(cl[0])-pl[0])),leftPct:Math.round((100*Math.abs(cp[1]))/(Math.abs(cl[1])-pl[1])),
 					direction:options.dir
 				};
 				/*
 				this refers to the original element containing the scrollbar(s)
 				usage: this.mcs.top, this.mcs.leftPct etc.
 				*/
 			}
 		},
 		/* -------------------- */


 		/*
 		CUSTOM JAVASCRIPT ANIMATION TWEEN
 		Lighter and faster than jquery animate() and css transitions
 		Animates top/left properties and includes easings
 		*/
 		_tweenTo=function(el,prop,to,duration,easing,overwrite,callbacks){
 			if(!el._mTween){el._mTween={top:{},left:{}};}
 			var callbacks=callbacks || {},
 				onStart=callbacks.onStart || function(){},onUpdate=callbacks.onUpdate || function(){},onComplete=callbacks.onComplete || function(){},
 				startTime=_getTime(),_delay,progress=0,from=el.offsetTop,elStyle=el.style,_request,tobj=el._mTween[prop];
 			if(prop==="left"){from=el.offsetLeft;}
 			var diff=to-from;
 			tobj.stop=0;
 			if(overwrite!=="none"){_cancelTween();}
 			_startTween();
 			function _step(){
 				if(tobj.stop){return;}
 				if(!progress){onStart.call();}
 				progress=_getTime()-startTime;
 				_tween();
 				if(progress>=tobj.time){
 					tobj.time=(progress>tobj.time) ? progress+_delay-(progress-tobj.time) : progress+_delay-1;
 					if(tobj.time<progress+1){tobj.time=progress+1;}
 				}
 				if(tobj.time<duration){tobj.id=_request(_step);}else{onComplete.call();}
 			}
 			function _tween(){
 				if(duration>0){
 					tobj.currVal=_ease(tobj.time,from,diff,duration,easing);
 					elStyle[prop]=Math.round(tobj.currVal)+"px";
 				}else{
 					elStyle[prop]=to+"px";
 				}
 				onUpdate.call();
 			}
 			function _startTween(){
 				_delay=1000/60;
 				tobj.time=progress+_delay;
 				_request=(!window.requestAnimationFrame) ? function(f){_tween(); return setTimeout(f,0.01);} : window.requestAnimationFrame;
 				tobj.id=_request(_step);
 			}
 			function _cancelTween(){
 				if(tobj.id==null){return;}
 				if(!window.requestAnimationFrame){clearTimeout(tobj.id);
 				}else{window.cancelAnimationFrame(tobj.id);}
 				tobj.id=null;
 			}
 			function _ease(t,b,c,d,type){
 				switch(type){
 					case "linear": case "mcsLinear":
 						return c*t/d + b;
 						break;
 					case "mcsLinearOut":
 						t/=d; t--; return c * Math.sqrt(1 - t*t) + b;
 						break;
 					case "easeInOutSmooth":
 						t/=d/2;
 						if(t<1) return c/2*t*t + b;
 						t--;
 						return -c/2 * (t*(t-2) - 1) + b;
 						break;
 					case "easeInOutStrong":
 						t/=d/2;
 						if(t<1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
 						t--;
 						return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
 						break;
 					case "easeInOut": case "mcsEaseInOut":
 						t/=d/2;
 						if(t<1) return c/2*t*t*t + b;
 						t-=2;
 						return c/2*(t*t*t + 2) + b;
 						break;
 					case "easeOutSmooth":
 						t/=d; t--;
 						return -c * (t*t*t*t - 1) + b;
 						break;
 					case "easeOutStrong":
 						return c * ( -Math.pow( 2, -10 * t/d ) + 1 ) + b;
 						break;
 					case "easeOut": case "mcsEaseOut": default:
 						var ts=(t/=d)*t,tc=ts*t;
 						return b+c*(0.499999999999997*tc*ts + -2.5*ts*ts + 5.5*tc + -6.5*ts + 4*t);
 				}
 			}
 		},
 		/* -------------------- */


 		/* returns current time */
 		_getTime=function(){
 			if(window.performance && window.performance.now){
 				return window.performance.now();
 			}else{
 				if(window.performance && window.performance.webkitNow){
 					return window.performance.webkitNow();
 				}else{
 					if(Date.now){return Date.now();}else{return new Date().getTime();}
 				}
 			}
 		},
 		/* -------------------- */


 		/* stops a tween */
 		_stopTween=function(){
 			var el=this;
 			if(!el._mTween){el._mTween={top:{},left:{}};}
 			var props=["top","left"];
 			for(var i=0; i<props.length; i++){
 				var prop=props[i];
 				if(el._mTween[prop].id){
 					if(!window.requestAnimationFrame){clearTimeout(el._mTween[prop].id);
 					}else{window.cancelAnimationFrame(el._mTween[prop].id);}
 					el._mTween[prop].id=null;
 					el._mTween[prop].stop=1;
 				}
 			}
 		},
 		/* -------------------- */


 		/* deletes a property (avoiding the exception thrown by IE) */
 		_delete=function(c,m){
 			try{delete c[m];}catch(e){c[m]=null;}
 		},
 		/* -------------------- */


 		/* detects left mouse button */
 		_mouseBtnLeft=function(e){
 			return !(e.which && e.which!==1);
 		},
 		/* -------------------- */


 		/* detects if pointer type event is touch */
 		_pointerTouch=function(e){
 			var t=e.originalEvent.pointerType;
 			return !(t && t!=="touch" && t!==2);
 		},
 		/* -------------------- */


 		/* checks if value is numeric */
 		_isNumeric=function(val){
 			return !isNaN(parseFloat(val)) && isFinite(val);
 		},
 		/* -------------------- */


 		/* returns element position according to content */
 		_childPos=function(el){
 			var p=el.parents(".mCSB_container");
 			return [el.offset().top-p.offset().top,el.offset().left-p.offset().left];
 		},
 		/* -------------------- */


 		/* checks if browser tab is hidden/inactive via Page Visibility API */
 		_isTabHidden=function(){
 			var prop=_getHiddenProp();
 			if(!prop) return false;
 			return document[prop];
 			function _getHiddenProp(){
 				var pfx=["webkit","moz","ms","o"];
 				if("hidden" in document) return "hidden"; //natively supported
 				for(var i=0; i<pfx.length; i++){ //prefixed
 				    if((pfx[i]+"Hidden") in document)
 				        return pfx[i]+"Hidden";
 				}
 				return null; //not supported
 			}
 		};
 		/* -------------------- */





 	/*
 	----------------------------------------
 	PLUGIN SETUP
 	----------------------------------------
 	*/

 	/* plugin constructor functions */
 	$.fn[pluginNS]=function(method){ /* usage: $(selector).mCustomScrollbar(); */
 		if(methods[method]){
 			return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
 		}else if(typeof method==="object" || !method){
 			return methods.init.apply(this,arguments);
 		}else{
 			$.error("Method "+method+" does not exist");
 		}
 	};
 	$[pluginNS]=function(method){ /* usage: $.mCustomScrollbar(); */
 		if(methods[method]){
 			return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
 		}else if(typeof method==="object" || !method){
 			return methods.init.apply(this,arguments);
 		}else{
 			$.error("Method "+method+" does not exist");
 		}
 	};

 	/*
 	allow setting plugin default options.
 	usage: $.mCustomScrollbar.defaults.scrollInertia=500;
 	to apply any changed default options on default selectors (below), use inside document ready fn
 	e.g.: $(document).ready(function(){ $.mCustomScrollbar.defaults.scrollInertia=500; });
 	*/
 	$[pluginNS].defaults=defaults;

 	/*
 	add window object (window.mCustomScrollbar)
 	usage: if(window.mCustomScrollbar){console.log("custom scrollbar plugin loaded");}
 	*/
 	window[pluginNS]=true;

 	$(window).load(function(){

 		$(defaultSelector)[pluginNS](); /* add scrollbars automatically on default selector */

 		/* extend jQuery expressions */
 		$.extend($.expr[":"],{
 			/* checks if element is within scrollable viewport */
 			mcsInView:$.expr[":"].mcsInView || function(el){
 				var $el=$(el),content=$el.parents(".mCSB_container"),wrapper,cPos;
 				if(!content.length){return;}
 				wrapper=content.parent();
 				cPos=[content[0].offsetTop,content[0].offsetLeft];
 				return 	cPos[0]+_childPos($el)[0]>=0 && cPos[0]+_childPos($el)[0]<wrapper.height()-$el.outerHeight(false) &&
 						cPos[1]+_childPos($el)[1]>=0 && cPos[1]+_childPos($el)[1]<wrapper.width()-$el.outerWidth(false);
 			},
 			/* checks if element is overflowed having visible scrollbar(s) */
 			mcsOverflow:$.expr[":"].mcsOverflow || function(el){
 				var d=$(el).data(pluginPfx);
 				if(!d){return;}
 				return d.overflowed[0] || d.overflowed[1];
 			}
 		});

 	});

 }))}));
