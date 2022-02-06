$(document).ready(function(){
    const $cont_arr = [
        {h3 : "사회복지", content : "세상은 함께 하기에 더 아름답고,친구가 있어 더 따뜻합니다.한화는 사회적 배려자를 위한 다양한 사회복지 프로그램을 통해 우리 주변 소외된 이웃과 함께 희망을현실로 만들어가고 있습니다.", img : "content_img1.jpg"},
        {h3 : "문화예술", content : "세상은 함께 하기에 더 아름답고,친구가 있어 더 따뜻합니다.한화는 사회적 배려자를 위한 다양한 사회복지 프로그램을 통해 우리 주변 소외된 이웃과 함께 희망을현실로 만들어가고 있습니다.", img : "content_img2.jpg"},
        {h3 : "자원봉사", content : "세상은 함께 하기에 더 아름답고,친구가 있어 더 따뜻합니다.한화는 사회적 배려자를 위한 다양한 사회복지 프로그램을 통해 우리 주변 소외된 이웃과 함께 희망을현실로 만들어가고 있습니다.", img : "content_img3.jpg"},
    ];

    let $content_case = "";
    const $box = `
    <div class="box">
        <div class="top">
            <h3></h3>
            <p></p>
        </div>
        <div class="bottom"></div>
    </div>
    `;
    for(i=0; i<$cont_arr.length; i++){
        $content_case += $box;
    }
    $("#threeSuppt").html($content_case);

    $("#threeSuppt .box").each(function(index){
        $(this).find(".top h3").text(`${$cont_arr[index].h3}`);
        $(this).find(".top p").text(`${$cont_arr[index].content}`);
        $(this).find(".bottom").css("background-image", `url(./img/prcenter/${$cont_arr[index].img})`);
    });

});