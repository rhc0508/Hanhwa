$(document).ready(function(){
// 인재상 배열 반복문
    const $talent_arr = [
        ["icon_challenge.jpg", "CHALLENGE", "도전적인 한화인", "기존의 틀에 안주하지 않고 변화와 혁신을 통해 최고를 추구한다.", "맡은 분야에서 최고가 되기 위해 적극적인 자기개발을 한다. 열린 사고와 창의적 발상으로 새로운 방안과 기회를 찾아낸다. 할 수 있다는자신감으로 도전적인 목표를 설정하고 달성한다."],
        ["icon_dedication.jpg", "DEDICATION", "헌신적인 한화인", "회사, 고객, 동료와의 인연을 소중히 여기며 보다 큰 목표를 위해 혼신의 힘을 다한다.", "고객과 약속을 소중히 여기며 고객가치를 지속적으로 창출한다. 공동운명체의식을 바탕으로, 서로의 가능성을 믿고 협력한다."],
        ["icon_integrity.jpg", "INTEGRITY", "진실된 한화인", "자긍심을 바탕으로 원칙에 따라 바르고 공정하게 행동합니다.", "눈 앞의 이익에 흔들리지 않고 원칙에 따라 정직하게 행동한다. 공과 사를 구분하여 능력과 성과에 따라 투명하고 공정하게 대우한다."],
    ];

    let $box_case = "";
    const $box = `
    <div class="box">
        <div class="img_part">
            <img src="./img/careers/icon_challenge.jpg" alt="">
        </div>
        <div class="txt_part">
            <h5 class="font_play">CHALLENGE</h5>
            <h1>도전적인 한화인</h1>
            <h4>기존의 틀에 안주하지 않고 변화와 혁신을 통해 최고를 추구한다.</h4>
            <p>맡은 분야에서 최고가 되기 위해 적극적인 자기개발을 한다. 열린 사고와 창의적 발상으로 새로운 방안과 기회를 찾아낸다. 할 수 있다는자신감으로 도전적인 목표를 설정하고 달성한다.</p>
        </div>
    </div>
    `;
    for(i=0; i<$talent_arr.length; i++){
        $box_case += $box;
    }
    $("#human .talent .boxes").html($box_case);

    $("#human .talent .boxes .box").each(function(index){
        $(this).find(".img_part img").attr("src", `./img/careers/${$talent_arr[index][0]}`);
        $(this).find(".txt_part h5").text(`${$talent_arr[index][1]}`);
        $(this).find(".txt_part h1").text(`${$talent_arr[index][2]}`);
        $(this).find(".txt_part h4").text(`${$talent_arr[index][3]}`);
        $(this).find(".txt_part p").text(`${$talent_arr[index][4]}`);
    });

// 인재육성 배열 반복문
    const $train_arr = [
        {
            bg : "img01.jpg", 
            icon : "icon01.png", 
            program : "회사 비전 및 가치 공유 프로그램", 
            list_tit1 : "신입사원 조기 전력화 프로그램<span class='onBtn'></span>", 
            list_tit2 : "正道경영 및 가치 공유 프로그램<span class='onBtn'></span>", 
            li_1 : `<li>그룹 입문 과정</li>
                    <li>건설 입문 과정</li>
                    <li>OJT 과정</li>
                    <li>Mentoring 제도</li>
                    <li>Follow-up 과정</li>
                    <li>3급사원 입문 과정</li>`, 
            li_2 : `<li>고객만족 CS특강</li>
                    <li>윤리경영교육</li>
                    <li>승격자 과정</li>
                    <li>관리자 교육</li>
                    <li>경력사원 입문 과정</li>
                    <li></li>`
        },
        {
            bg : "img02.jpg", 
            icon : "icon02.png", 
            program : "전문인력 육성 프로그램", 
            list_tit1 : "전문가 양성 프로그램<span class='onBtn'></span>", 
            list_tit2 : "차세대 리더 양성 프로그램<span class='onBtn'></span>",
            li_1 : `<li>직무 전문가 양성 과정</li>
                    <li>공통 역량 과정</li>
                    <li>동계직무교육</li>
                    <li>학점이수제도</li>
                    <li>석박사 과정 및 고위경영자 과정</li>
                    <li></li>`, 
            li_2 : `<li>차세대 현장 리더 양성 교육</li>
                    <li>핵심인재 육성 프로그램</li>
                    <li>혁신리더 과정</li>
                    <li></li>
                    <li></li>
                    <li></li>`
        },
        {
            bg : "img03.jpg", 
            icon : "icon03.png", 
            program : "GLOBAL 인재 양성 프로그램", 
            list_tit1 : "해외 MBA 프로그램<span class='onBtn'></span>", 
            list_tit2 : "차세대 리더 양성 프로그램<span class='onBtn'></span>",
            li_1 : `<li>Global Executive MBA 과정</li>
                    <li>TOP MBA 과정</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>`,
            li_2 : `<li>어학 지원 제도</li>
                    <li>해외 지역전문가 제도</li>
                    <li>Global Biz 과정</li>
                    <li>해외사업 전문가 과정</li>
                    <li></li>
                    <li></li>`
        },
    ];
    let $list_case = "";
    const $list_box = `
    <div class="box">
        <div class="img_part">
            <div class="icon"></div>
            <h3>회사 비전 및 가치 공유 프로그램</h3>
        </div>
        <div class="list">
            <ul>
                <li><span class="txt_list">신입사원 조기 전력화 프로그램<span class="onBtn"></span></span>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </li>
            </ul>
            <ul>
                <li><span class="txt_list">正道경영 및 가치 공유 프로그램<span class="onBtn"></span></span> 
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </li>
            </ul>
        </div>       
    </div>
    `;
    for(i=0; i<$train_arr.length; i++){
        $list_case += $list_box;
    }
    $("#train .bottom").html($list_case);
    $("#train .bottom .box").each(function(j){
        $(this).find(".img_part").css("background-image", `url(./img/careers/${$train_arr[j].bg})`);
        $(this).find(".img_part .icon").css("background-image", `url(./img/careers/${$train_arr[j].icon})`);
        $(this).find(".img_part h3").text(`${$train_arr[j].program}`);
        $(this).find(".list > ul:nth-child(1) > li > .txt_list").html(`${$train_arr[j].list_tit1}`);
        $(this).find(".list > ul:nth-child(2) > li > .txt_list").html(`${$train_arr[j].list_tit2}`);
        $(this).find(".list > ul:first-child > li > ul").html(`${$train_arr[j].li_1}`)
        $(this).find(".list > ul:last-child > li > ul").html(`${$train_arr[j].li_2}`)
    });

// 아코디언 리스트
    const $list_btn = $("#train span.onBtn");

    // $("#train .box .list > ul > li > ul").hide();
    $list_btn.on("click", function(){
        console.log("클릭");

        const $open = $(this).hasClass("open");

        if(!$open){
            $("#train span.onBtn").removeClass("open");
            $(this).addClass("open");

            $("#train .box .list > ul > li > ul").stop().slideUp();
            $(this).closest("li").find("ul").stop().slideDown();

        }else{
            $(this).removeClass("open");
            $(this).closest("li").find("ul").stop().slideUp();
        }
    });
});