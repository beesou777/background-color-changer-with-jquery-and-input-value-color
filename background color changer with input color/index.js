$(document).ready(function(){
    $("#color_changer").on("input change",function(){
        $("body").css("background-color",$(this).val())
        if($('#color_changer').val()<="#242424"){
            $("h1").css("color","white");
        }else{
            $("h1").css("color","black");
        }
    });
});

