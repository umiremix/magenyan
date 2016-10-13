/*--------------------
 common
----------------------*/
// setting
var h,w;
h = $(window).height();
w = $(window).width();
$(window).on('resize',function(){
  h = $(window).height();
  w = $(window).width();
});
var getSound = document.getElementById("is--sound");
var getVideo = document.getElementById("is--video");
var getStart = document.getElementById("soundStart");
var getStop = document.getElementById("soundStop");
// load
$(window).on('load',function(){
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
  window.orientationchange = function(){
    location.reload();
  };
};

/*--------------------
 PC (tablet & sp)
----------------------*/
// sound
function soundStop(){
  //getSound.pause();
  getStart.style.display = "block";
  getStop.style.display = "none";
};
function soundStart(){
  getSound.play();
  getStop.style.display = "block";
  getStart.style.display = "none";
};
$(function(){
if(w > 768){
// fullpage
  //var topBtn = $('#pageTop');
  $('#fullpage').fullpage({
    resize: true,
    //normalScrollElements: '#manga .contents_body ul',
      anchors:['firstPage','mainPage','charaPage','snsPage'],
      onLeave: function(index, nextIndex, direction){
          if(index == 3 && direction =='down'){
              $(".toTop").fadeIn("slow"), $(".toTop").animate({
                  bottom: "12",
                  right: 30
              }, {
                  duration: 600,
                  queue: !1
              });
          }else if(index == 4 && direction == 'up'){
              $(".copyright").fadeOut("fast");
          };
     },
     afterLoad: function(anchorLink,index) {
       if(index == 3){
           $(".toTop").fadeOut("fast"), $(".toTop").animate({
               bottom: "35"
           }, {
               duration: 600,
               queue: !1
           });
       } else if(index == 4){
           $(".copyright").fadeIn("slow");
       };
     }
  });
};
// colorbox
  if(w > 768){
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
  };
  //スムーススクロール
  if(w <= 768){
      $('a[href^="#"]').click(function(){
       var findClass = $(this).attr('class');
       if (findClass !== 'sc_none') {
         var speed = 500;
         var href= $(this).attr("href").replace('Page','');
         var target = $(href == "#" || href == "" ? 'html' : href);
         var position = target.offset().top - 500;
         $("html, body").animate({scrollTop:position}, speed);
         return false;
       };
    });
  };

  //ブラウザバグ
  var userAgent = window.navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('firefox') != -1) {
    $('.nehan').each(function(){
      $(this).find('br').remove();
    });
  };
});

// バウンドhover
if(w > 768){
  $(window).on('load',function(){
    $('.bound').each(function(){
      var findImg = $(this).find('img');
      var imgW = $(this).find('img').width();
      $(this).hover(function(){
        findImg.animate({width:imgW + 15},300,"easeOutElastic");
      },function(){
        findImg.animate({width:imgW},300,"easeOutElastic");
      });
    });
  });
};

/* 動画再生 */
if(w > 768){
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var player;
  var ytReady = false;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      videoId: 'A-M-FnHPHzU',
      playerVars: {
          'autoplay': 1,
          'controls': 0,
          'enablejsapi': 1,
          'iv_load_policy': 3,
          'disablekb': 1,
          'showinfo': 0,
          'rel': 0,
          'loop': 1,
          'modestbranding': 1
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  };
  function resizeMovie (){
      var $w = $(window),
            bw = 1200, //基準にする横幅
            bh = (bw/560) * 315, //基準にする高さ(510:315)
            w = $w.width(), //表示サイズ(幅)
            h = $w.height(), //表示サイズ(高さ)
            mw = w, //動画サイズ(幅)
            mh =  Math.round(bh * (mw/bw)); //動画サイズ(高さ)
      if ( mh < h ) { //動画の高さが表示サイズの高さより小さかったら
          mh = h; //表示サイズの高さに変更
          mw = Math.round(bw * (mh/bh)); //高さに合わせて横幅変更
      };
      $('#player').css({
          width: mw,
          height: mh,
          marginTop: (h - mh)/2,
          marginLeft: (w - mw)/2
      });
  };
  resizeMovie();
  $(window).on('load resize',resizeMovie);
  function onPlayerReady(event) {
    ytReady = true;
    player.setPlaybackQuality('hd720');
  };
  function ytReadyCheck() {
  	if(ytReady && YT.PlayerState.PLAYING === 1) {
  		player.playVideo();
      $('#gg,#player').css({'display':'block'});
      $('#gg0').css({'display':'none'});
  	} else {
  		setTimeout(ytReadyCheck, 200);
  	};
  };
  $(window).on('load',function(){
    setTimeout(function() {
  		ytReadyCheck();
  	}, 650);
  });
  $('#soundStop').on('click',function(){
    player.mute();
    getStart.style.display = "block";
    getStop.style.display = "none";
  });
  $('#soundStart').on('click',function(){
    player.unMute();
    getStart.style.display = "none";
    getStop.style.display = "block";
  });
  function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.ENDED) {
          player.playVideo();
      };
  };
} else {
  $(window).on('load',function(){
    $('#gg,#player').css({'display':'block'});
    $('#gg0').css({'display':'none'});
  });
}
var loadFlag;
$(window).on('load',function(){
  if(w > 768){
    loadFlag = 'lgScreen';
  } else {
    loadFlag = 'smScreen';
  }
});
$(window).on('resize',function(){
  if(w > 768 && loadFlag === 'smScreen'){
    location.reload();
    loadFlag = 'lgScreen';
  } else if(w <= 768 && loadFlag === 'lgScreen') {
    location.reload();
    loadFlag = 'smScreen';
  }
});
$(window).on('load resize',function(){
  $('.s-changeImg').each(function(){
      var findSrc = $(this).attr('src');
      if(findSrc.match(/_pc/) && w <= 768){
        $(this).attr('src',findSrc.replace('_pc','_sp'));
      } else if(findSrc.match(/_sp/) && w > 768){
        $(this).attr('src',findSrc.replace('_sp','_pc'));
      }
    });
});
