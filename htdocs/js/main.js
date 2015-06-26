//load
window.onload = function() {
document.getElementById('gg0').style.display = 'none';
document.getElementById('gg').style.display = 'block';
}
$(window).load(function(){
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
      onLeave: function(o, n, e){
                 $(this);
                 1 == o && "down" == e && ($(".toTop").fadeIn("slow"), $(".toTop").animate({
                     bottom: "12"
                 }, {
                     duration: 600,
                     queue: !1
                 }))
             },
             afterLoad: function(o, n) {
                 $(this);
                 1 == n && ($(".toTop").fadeOut("fast"), $(".toTop").animate({
                     bottom: "35"
                 }, {
                     duration: 600,
                     queue: !1
                 }))
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
    $('.chara_tb').colorbox({inline:true, href: function(){
        var $getHref = $(this).find('a').attr('href');
        return $getHref;
    }
    });
});