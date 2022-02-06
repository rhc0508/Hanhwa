// main.js

// main_slide
const $slider = document.querySelector("#slider");

const $slide_arr = [
    {img: "main_slide01.jpg", eng1: "" ,eng2: "Aqua planet", kor: "일산 아쿠아 플라넷", detail: "한화건설의 모든 건축물들은 인간 중심의 <br>첨단 기술을 바탕으로예술성과 기능이 조화를 이룬 공간입니다."},
    {img: "main_slide02.jpg", eng1:"Seoul Forest", eng2: "Galleria Foret", kor: "서울숲 갤러리아 포레", detail: "서울숲과 어우러지는 입체적인 조경계획"},
    {img: "main_slide03.jpg", eng1:"", eng2: "Ulsan Bridge", kor: "울산대교", detail: "대한민국을 더욱 풍요롭게 만드는 국토 창조의 힘"},
    {img: "main_slide04.jpg", eng1:"", eng2: "Eco Metro", kor: "인천 에코메트로", detail: "살기좋은 아파트의 대표 브랜드 <꿈에그린>"},
];

let $slide_case = "";
$slide_arr.forEach(function(v, i){
    $slide_case += `
    <div class="slide slide_0${i+1}" style="background-image:url(./img/${v.img})">
        <div class="txtCont">
            <h2>${v.eng1}</h2>
            <h1 class="engTitle font_play">${v.eng2}</h1>
            <h3 class="korTitle">${v.kor}</h3>
            <p>${v.detail}</p>
            <div class="moreBtn">
                <button>MORE</button>
            </div>
        </div>
    </div>
    `;
});
$slider.innerHTML = $slide_case;

// article#business
const $bus_contents = document.querySelector("#business .contents");

const $business_arr = [
    {img1: "main_icon01_off.png", img2: "main_icon01_on.png", txt: "산업발전의 근간이 되는 도로,교량,철도 및 단지 조성 공사부터 생명의 근원인 맑고 깨끗한 물을 전국에 공급하기 위한 수처리 사업에 이르기까지 오늘도 한화건설은 국토 곳곳에 생명을 불어 넣습니다."},
    {img1: "main_icon02_off.png", img2: "main_icon02_on.png", txt: "둘러싼 한화건설의 모든 건축물들은 인간 중심의 첨단 기술을 바탕으로 예술성과 기능이 조화를 이룬 공간입니다. 최고의 효율성과 편의성이 구비된 공간 창조를 통해 행복한 생활과 쾌적한 여유까지 제공해 드립니다."},
    {img1: "main_icon03_off.png", img2: "main_icon03_on.png", txt: "한화건설이 창조하는 주거 공간에는 친환경적인 이상과 인간 중심의 주거 과학이 고스란히 살아 있습니다. 대한민국을 대표하는 최고 수준의 랜드마크에서 누리는 삶, 이 모든 꿈과 행복을 함께 나누고 싶습니다."},
    {img1: "main_icon04_off.png", img2: "main_icon04_on.png", txt: "발전 및 담수플랜트, 화공플랜트 등 국내 플랜트 사업의 선두 주자 한화건설은 사우디 현지법인을설립하여 각종 플랜트 공사를 성공적으로 수행하고 있으며, 중동 및 동남아시장 등으로 사업 영역을 확장하고 있습니다."},
]

let $business_case = "";
$business_arr.forEach(function(v, i){
    $business_case += `
    <div class="contBox" rel="${i}">
        <div class="img">
            <a href=""><img src="./img/${v.img1}" alt="" onmouseover="this.src='./img/${v.img2}'" onmouseout="this.src='./img/${v.img1}'"></a>
        </div>
        <div class="txt">
            <p>${v.txt}</p>
        </div>
    </div>
    `;
});
$bus_contents.innerHTML = $business_case;


// article#images
const $images = document.querySelector("article#images");
const $mid_arr = ["business_img01.jpg", "business_img02.jpg", "business_img03.jpg"];

let $mid_case = "";
for(i=0; i<$mid_arr.length; i++){
    $mid_case += `
    <div class="banner_box" style="background-image:url(./img/${$mid_arr[i]})">
        <div class="dark">
            <div class="icon">
                <a href=""></a>
                <div class="txt">
                    <p class="font_play">more</p>
                </div>
            </div>
        </div>
    </div>
    `;
}
$images.innerHTML = $mid_case;

// article#story
const $story = document.querySelector("article#story .contents");
const $story_arr = [
    {img: "story_img01.jpg", headline: "한화건설, 수원 컨벤션센터 복합개발사업 민관협업 위한 업무협력 약정 체결", txt: "한화건설(대표이사 최광호)은 11일 수원시청 상황실에서 수원 컨벤션센터 복합개발사업의 민관협업을 강화하기 위해..."},
    {img: "story_img02.jpg", headline: "한화건설, 수도권 내 집 마련의 이상형‘김포 풍무 꿈에그린 2차’ 9월 분양", txt: "한화건설(대표 최광호)은 오는 9월 경기도 김포시 풍무5지구 3~5 블록 일원에 총 1,070세대 신축아파트..."},
    {img: "story_img03.jpg", headline: "한화건설, 서울~세종고속도로 안성~구리 건설공사 제10공구 수주", txt: "서울~세종고속도로 건설공사는 수도권 고속도로망 계획 중 남북의 5축을 완성하는 대규모 국책사업으로..."},
]
let $story_case = "";
for(i=0; i<$story_arr.length; i++){
    $story_case += `
    <div class="contBox">
        <div class="img" style="background-image:url(./img/${$story_arr[i].img})"></div>
        <div class="txt">
            <h4 class="headline">${$story_arr[i].headline}</h4>
            <p>${$story_arr[i].txt}</p>
        </div>
    </div>
    `;
}
$story.innerHTML = $story_case;

///////////////// jQuery //////////////////
$(document).ready(function(){
    // const $last = $("#slider .slide").last();
    // console.log($last);
    // $("#slider").prepend($last);
    
    // 자동 슬라이드
    setInterval(function(){
        const $stop = $(".play_ctrl .playBtn").hasClass("stop");

        if($stop){

        }else{
            const $first = $("#slider .slide").first();
            // console.log($first);
    
            $("#slider").stop().animate({"margin-left":"-200%"}, 1000, function(){
                $("#slider").append($first).css("margin-left","-100%");
            });
        }
    }, 4000);

    // 화살표 기능
    $(".play_ctrl .prev").click(function(){
        const $lastSlide = $("#slider .slide").last();
        $("#slider").stop().animate({"margin-left":"0%"}, 1000, function(){
            $("#slider").prepend($lastSlide).css("margin-left", "-100%");
        });
        return false;
    });

    $(".play_ctrl .next").click(function(){
        const $firstSlide = $("#slider .slide").first();
        $("#slider").stop().animate({"margin-left":"-200%"}, 1000, function(){
            $("#slider").append($firstSlide).css("margin-left", "-100%");
        });
        return false;
    });

    // 재생, 정지 기능
    $(".play_ctrl .playBtn").click(function(){
        const $state = $(this).hasClass("stop");
        if(!$state){
            $(this).addClass("stop");
            $(this).find("img").attr("src", "./img/btn_play.png");
        }else{
            $(this).removeClass("stop");
            $(this).find("img").attr("src", "./img/btn_stop.png");
        }
        return false;
    });

});