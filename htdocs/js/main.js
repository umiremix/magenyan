/*--------------------
 common
----------------------*/
// setting
var h,w;
h = $(window).height();
w = $(window).width();
$(window).resize(function(){
  h = $(window).height();
  w = $(window).width();
});
var getSound = document.getElementById("is--sound");
var getVideo = document.getElementById("is--video");
var getStart = document.getElementById("soundStart");
var getStop = document.getElementById("soundStop");
// load
$(window).load(function(){
    $('#gg0').css({'display':'none'});
    $('#gg').css({'display':'block'});
    $('.load').each(function(){
        $(this).removeClass('load');
    });
});

/*--------------------
 tablet & sp
----------------------*/
// setting
var _ua = (function(u){
  return {
    Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1)
      || u.indexOf("ipad") != -1
      || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
      || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
      || u.indexOf("kindle") != -1
      || u.indexOf("silk") != -1
      || u.indexOf("playbook") != -1,
    Mobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
      || u.indexOf("iphone") != -1
      || u.indexOf("ipod") != -1
      || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
      || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
      || u.indexOf("blackberry") != -1
  }
})(window.navigator.userAgent.toLowerCase());
// sound & video
if(_ua.Tablet || _ua.Mobile){
  getSound.remove();
  getVideo.remove();
  window.orientationchange = function(){
    location.reload();
  }
} else {
  $(window).resize(function(){
    location.reload();
  });
}
$(function(){
  if(w <= 768){
    getSound.pause();
    $('.twitter-timeline').height('200');
    if(h < w){
      $('.section').height(h * 2 + 100);
      $('#sns.section').height(h * 2 + 450);
    }else{
    $('.section').height(h + 100);
    $('#sns.section').height(h + 300);
    }
  }
});
$(window).load(function(){
  if(w <= 768){
    $('.twitter-timeline').height('200');
  }
});

/*--------------------
 PC (tablet & sp)
----------------------*/
// sound
function soundStop(){
  getSound.pause();
  getStart.style.display = "block";
  getStop.style.display = "none";
}
function soundStart(){
  getSound.play();
  getStop.style.display = "block";
  getStart.style.display = "none";
}
// logo
$(window).load(function(){
  if(w > 768){
    $('.logo img').css({'width':w * 2,'margin-left':w * -0.5,'opacity':'0','margin-top': h * -1}).animate({'width':'100%','margin-left':'0','opacity':'1','margin-top':0},160);
  }
});
$(function(){
if(w > 768){
// fullpage
  var topBtn = $('#pageTop');
  $('#fullpage').fullpage({
    resize: true,
      anchors:['mainPage','charaPage','mangaPage','snsPage'],
      onLeave: function(index, nextIndex, direction){
          if(index == 1 && direction =='down'){
              $(".toTop").fadeIn("slow"), $(".toTop").animate({
                  bottom: "12",
                  right: 30
              }, {
                  duration: 600,
                  queue: !1
              });
          }else if(index == 4 && direction == 'up'){
              $(".copyright").fadeOut("fast");
          }
     },
     afterLoad: function(anchorLink,index) {
             if(index == 1){
                 $(".toTop").fadeOut("fast"), $(".toTop").animate({
                     bottom: "35"
                 }, {
                     duration: 600,
                     queue: !1
                 });
             }else if(index == 4){
                 $(".copyright").fadeIn("slow");
             }
     }
  });
}
// colorbox
  if(w > 460){
    $('.chara_tb').colorbox({
        inline:true,rel:'box',width: 597,height: 545,opacity: 0.4,href: function(){
          var $getHref = $(this).find('a').attr('href');
          return $getHref;
    }});
  } else {
    $('.chara_tb').colorbox({
        inline:true,rel:'box',width: 310,height: 282,opacity: 0.4,href: function(){
          var $getHref = $(this).find('a').attr('href');
          return $getHref;
    }});
  }
  //スムーススクロール
  if(w <= 768){
     $('a[href^=#]').click(function(){
       var findClass = $(this).attr('class');
       if (findClass !== 'sc_none') {
         var speed = 500;
         var href= $(this).attr("href").replace('Page','');
         var target = $(href == "#" || href == "" ? 'html' : href);
         var position = target.offset().top;
         $("html, body").animate({scrollTop:position}, speed, "swing");
         return false;
       }
    });
  }

  //ブラウザバグ
  var userAgent = window.navigator.userAgent.toLowerCase();

  if (userAgent.indexOf('firefox') != -1) {
    $('.nehan').each(function(){
      $(this).find('br').remove();
    });
  }

});
