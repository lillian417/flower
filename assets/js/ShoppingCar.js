
/*商品數量調整*/
$(".rightarrow").click(function(){
    var a =  $(this).parent().find(".textbox").val();
    x=parseInt(a)+1;
    $(this).parent().find(".textbox").val(x);
    
})

$(".leftarrow").click(function(){
    var a =  $(this).parent().find(".textbox").val();
    if( a > 1 ){
        x=parseInt(a)-1;
        $(this).parent().find(".textbox").val(x);
    }
})

$(".allchoose").click(function(){
    if($(".allchoose").prop("checked")){//如果全選按鈕有被選擇的話（被選擇是true）
        $("input[name='select']").prop("checked",true);//把所有的核取方框的property都變成勾選
    }
    else{
        $("input[name='select']").prop("checked",false);//把所有的核取方框的property都取消勾選
    }
})
$(".choose").click(function(){//如果全部單一框框都有勾選，則全選框勾選，反之則不勾選
    $(".allchoose").prop("checked",true);
    $("input[name='select']").each(function(){
        if($(this).prop("checked")==false){
            $(".allchoose").prop("checked",false);
        }
    })
})

/*點選結帳時確認是否有勾選任何一個單一框框 */
$(".ReadytoPay").click(function(){
    var a = $("input[name='select']").length;
    var b = 0;
    $("input[name='select']").each(function(){
        if($(this).prop("checked")==true){
            $("#past").attr("action", "ShoppingCar_2.html");
        }
        else{
            b++;
        }
    })
    if( b==a ){
        alert("請至少勾選一樣商品！");
        return false; 
    }
})

/*刪除商品 */
$(".trash").click(function(){
    var productName = $(this).parent().find(".productName").text();
    var productID = $(this).parent().find(".productid").val();
    Swal.fire({
        title: "你確定要刪除「"+productName+"」這項商品？",
        html: "<form action='XXX.jsp' method='POST'><input type='hidden' name='productID' value='"+productID+"'><br><button type='submit' class='delectbtn'>確認刪除</button></form>",
        icon: 'warning',
        showCloseButton: true,
        showConfirmButton: false,
    })
})

/*判斷重要資訊欄是否空白*/
$(".sure").click(function(){
    var name = document.getElementById("person").value; 
    var add = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var mail = document.getElementById("mail").value;
    if(name == "" ){ 
        alert("請填寫收件人！"); 
        return false; 
    }
    if(add == "" ){ 
        alert("請填寫收件地址！"); 
        return false; 
    }
    if(phone == "" ){ 
        alert("請填寫連絡電話！"); 
        return false; 
    }
    if(mail == "" ){ 
        alert("請填寫電子信箱！"); 
        return false; 
    }
    $("#send").attr("action", "ShoppingCar_3.html");
})
