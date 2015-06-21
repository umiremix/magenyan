//load

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
//etc
! function (t) {
    t(function () {
        t("a img").each(function () {
            if (String(t(this).attr("src")).match(/_of\.(.*)$/)) {
                var i = new Image;
                i.src = String(t(this).attr("src")).replace(/_off\.(.*)$/, "_ov.$1")
            }
        })
    }), t(function () {
        t("a img").not("a.navOv img").hover(function () {
            t(this).attr("src", t(this).attr("src").replace("_of.", "_ov."))
        }, function () {
            t(this).attr("src", t(this).attr("src").replace("_ov.", "_of."))
        })
    }), t(function () {
        var i = ["chara","sns"];
        t.each(i, function (i, n) {
            t("#" + n).append('<div class="point"><img src="img/' + n + '_ttl_point.png"></div>')
        })
    }), t(window).on("load resize", function () {
        t(document).ready(function (t) {
            t.ajax(window.matchMedia("(min-width: 769px)").matches ? {
                url: "js/pc.js",
                dataType: "script",
                cache: !1
            } : {
                url: "js/sp.js",
                dataType: "script",
                cache: !1
            })
        })
    }), t(document).ready(function () {
        t(".is--inline").colorbox({
            inline: !0,
            opacity: .4,
            transition: "fade",
            scrolling: !1
        })
    })
}(jQuery);
