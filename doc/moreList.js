var show = false;
$(document).ready(function () {
    $("#moreListButton").click(function () {
        if (show === false) {
            $(".moreListContainar").animate({
                height: "85%"
            }, 500);
            show = true;
            $("#moreListButton").text("閉じる");
        } else {
            $(".moreListContainar").animate({
                height: "270px"
            }, 700);
            show = false;
            $("#moreListButton").text("もっと見る");
        }
    });
});
