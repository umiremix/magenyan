(function($) {

// 要素追加
$(function(){
	$(document).ready( function(){
		var arr = ['chara', 'sns'];
		$.each(arr, function(i, value) {
	    $('#' + value).find('.contents').before('<div class="contents_bg_h"><img src="img/sp/contents_bg_h.png"></div>');
	    $('#' + value).find('.contents').after('<div class="contents_bg_f"><img src="img/sp/contents_bg_f.png"></div>');
		});
	});
});

// スムーススクロール
$(function(){
  //   var arr = [
  //     ['#1stPage', '#main'],
  //     ['#2ndPage', '#chara'],
  //     ['#snsPage', '#sns']
  //   ];
  //   $.each(arr, function(i, value1, value2) {
  //     $('a[href^=' + value1 + ']').click(function() {
  //   		var speed = 450;
  //   		$('body,html').animate({scrollTop:$(value2).offset().top}, speed, 'swing');
  //   		return false;
  //   	});
  //   });
  $('a[href^=#1stPage]').click(function() {
		var speed = 450;
		$('body,html').animate({scrollTop:$('#main').offset().top}, speed, 'swing');
		return false;
	});
  $('a[href^=#2ndPage]').click(function() {
		var speed = 450;
		$('body,html').animate({scrollTop:$('#chara').offset().top}, speed, 'swing');
		return false;
	});
  $('a[href^=#snsPage]').click(function() {
		var speed = 450;
		$('body,html').animate({scrollTop:$('#sns').offset().top}, speed, 'swing');
		return false;
	});
});

})(jQuery);
Window size: 1170 x 1053
Viewport size: 1170 x 878