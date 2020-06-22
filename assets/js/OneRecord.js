
$( ".comment" ).click(function() {
    $(this).parent().parent().find(".commentPlace").show(300);
});

$( ".confirmButton" ).click(function() {
    $(this).parent().parent().parent().hide(300);
});


$( ".comment_no" ).click(function() {
    alert("訂單還未完成，還不能評價哦！")
});


