$(document).ready(function(){
    $(".slide_box .slider").slick({
        infinite : true,
        slidesToShow : 1,
        slidesToScroll : 1,
        autoplay : true,
        autoplaySpeed : 3000,
        speed : 1000,
    });

    const $business_arr = [
        {bg: "01_img.png", tit: "업무시설", detail: "예술적이고 쾌적한 사무용 빌딩을<br>한화건설이 만듭니다."},
        {bg: "02_img.png", tit: "레저시설", detail: "아름다운 자연환경에 편리함이<br>조화를 이뤄 여유로운 레저생활을 창조합니다."},
        {bg: "03_img.png", tit: "판매/영업시설", detail: "시선과 발길이 머무는 공간을 완성합니다."},
        {bg: "04_img.png", tit: "의료/교육시설", detail: "최적의 의료환경, 최고의 교육환경을<br>만들어 갑니다."},
        {bg: "05_img.png", tit: "특수시설", detail: "대전 엑스포 한빛탑, 종합운동장, 서울역사 등<br>지역의 랜드마크를만들어갑니다."},
        {bg: "06_img.png", tit: "리모델링", detail: "시오래된 건물이 꿈에 그리던<br>아름다운 모습으로 재탄생합니다."},
    ];

    let $box_case = "";
    const $box = `
    <div class="box">
        <h1></h1>
        <p></p>
    </div>
    `;
    for(i=0; i<$business_arr.length; i++){
        $box_case += $box;
        // console.log($box_case);
    }
    $("#six_conts").html($box_case);

    $("#six_conts .box").each(function(index){
        // console.log(index);
        // console.log($business_arr[index].bg);
        $(this).css("background-image", `url(./img/business/${$business_arr[index].bg})`);
        $(this).find("h1").html(`<span>0${index+1}</span>${$business_arr[index].tit}`);
        $(this).find("p").html(`${$business_arr[index].detail}`);
    });
});