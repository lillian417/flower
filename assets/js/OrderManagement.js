$( ".arrow" ).click(function() {
    var EachOne = 92 ;//每增加一個所增加的高度
    var Quantity = $(this).parent().find(".changingControl").children(".row").length-1 ; //抓取該訂單扣掉第一個還有幾個
    var FirstOne = 119 ;//只顯示一個時的高度(含padding)
    var AllHeight = ( EachOne * Quantity + FirstOne ).toString() + "px" ;
    
    if($(this).hasClass("reverted")){
        $(this).removeClass("reverted");
        $(this).parent().find(".changingControl").animate({height:"119px"});
    }
    else{
        $(this).addClass("reverted");
        $(this).parent().find(".changingControl").animate({height:AllHeight});
    }
});