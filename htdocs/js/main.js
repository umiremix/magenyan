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

//sp
$(function(){
   $
});