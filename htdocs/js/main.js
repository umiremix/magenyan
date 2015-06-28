/*--------------------
common
----------------------*/

//load
$(window).load(function(){
    $('#gg0').css({'display':'none'});
    $('#gg').css({'display':'block'});
    $('.load').each(function(){
        $(this).removeClass('load');
    });
});

// sound
var getSound = document.getElementById("is--sound");
var getStart = document.getElementById("soundStart");
var getStop = document.getElementById("soundStop");
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

// fullpage
$(function() {
  var topBtn = $('#pageTop');
  $('#fullpage').fullpage({
      anchors:['mainPage','charaPage','mangaPage','snsPage'],
      onLeave: function(index, nextIndex, direction){
                  if(index == 1 && direction =='down'){
                      $(".toTop").fadeIn("slow"), $(".toTop").animate({
                          bottom: "12"
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
});

//point
$(function(t) {
  var i = ["chara","sns"];
  t.each(i, function (i, n) {
    t("#" + n).append('<div class="point"><img src="img/' + n + '_ttl_point.png"></div>')
  });
});

//colorbox
$(function(){
    $('.chara_tb').colorbox({inline:true,rel:'box',width: 597,height: 545,opacity: 0.4,href: function(){
        var $getHref = $(this).find('a').attr('href');
        return $getHref;
    }
  });
});
// function openCallBack(){
//   var $getHref = $(this).find('a').attr('href');
//   console.log($getHref);
// //       $('.chara_img').animate({
// //           opacity: 1,
// //         if(getId === 'koyama'){
// //           bottom: "-40px",
// //           left: "-109px"
// //         } else if(getId === 'musashi'){
// //           bottom: "-42px",
// //           left: "-36px"
// //         } else if(getId === 'myanya'){
// //           bottom: "-51px",
// //           left: "-78px"
// //         } else if(getId === 'momo'){
// //           bottom: "-42px",
// //           left: "-34px"
// //         } else if(getId === 'magenyan'){
// //           bottom: "-43px",
// //           left: "-110px"
// //         } else if(getId === 'taro'){
// //           bottom: "-48px",
// //           left: "-53px"
// //         }
// }

/*--------------------
 tablet & sp
----------------------*/
//setting
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

//sound & video
if(_ua.Mobile || _ua.Mobile){
  $('#is--sound').remove();
  $('#is--video').remove();
}
