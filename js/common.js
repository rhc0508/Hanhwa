/* common.js */
$(document).ready(function(){
    $("header").load("./header.html", function(){
        // 이벤트 영역을 넣는다.

        // #header_1 메뉴 hover시 서브메뉴 보이기
        $("#header_1 .wrap nav > ul > li").hover(function(){
            console.log(this);
            $(this).find("ul").stop().show();
        }, function(){
            $(this).find("ul").stop().hide();
        });

        
        // 햄버거 메뉴바 클릭시 #header_2 열림
        const $menuBar = $("#header_1 .wrap .right .menuBar");
        const $closeBtn = $("#header_2 .close a");
        const $header_2 = $("#header_2");

        $menuBar.on("click", function(){
            const $active = $(this).hasClass("active");
            if(!$active){
                $(this).addClass("active");
                $header_2.addClass("active");
            }else{
                // console.log("닫기");
                $(this).removeClass("active");
                $header_2.removeClass("active");
            }
            return false;
        });
        $closeBtn.on("click", function(){
            $header_2.removeClass("active");
            return false;
        });
 
        // min-width:767px에서 + 버튼 클릭시 서브메뉴 등장
        const plusBtn = $("#header_2 nav > ul > li > a > span.plusBtn");

        plusBtn.on("click", function(){
            console.log("클릭 이벤트!");
            const $show = $(this).hasClass("show");

            if(!$show){
                $("#header_2 .wrap nav > ul > li > a > .plusBtn").removeClass("show");
                $(this).addClass("show");
                $("#header_2 .wrap nav > ul > li > ul").hide();
                $(this).closest("li").find("ul").show();
            }else{
                $(this).removeClass("show");
                $(this).closest("li").find("ul").hide();
            }
            return false;
        });

    

    });


    $(".about").click(function(){

        var offset = $('.who').offset();

        $('html,body').animate({scrollTop:offset.top}, 450);

    }) ;

    $(".topBtn a").click(function(){
        $("html").animate({scrollTop: 0}, 1000);
        return false;
    });

    
    $("footer").load("./footer.html", function(){

    });

});
