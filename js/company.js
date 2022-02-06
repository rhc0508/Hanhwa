// company.js
$(document).ready(function(){
    const $company_arr = [
        {korTit: "환경경영", engTit: "[Environmental Management]", sentence: "인간과 환경이 조화로운 세상을 열어가고 환경보전을 최우선으로 생가하는 기업"},
        {korTit: "윤리경영", engTit: "[Ethical Management]", sentence: "기업의 이익에 앞서서 정직과 신용을 바탕으로 고객과 사회, 국가에 대한 의무를 우선하는 윤리경영 실현"},
        {korTit: "인재경영", engTit: "[Human resources management]", sentence: "인재경영을 통해 임직원의 지식과 창의력, 도덕성이 최고로 실현될 수 있도록 역량 집중"},
    ];

    let $circle_case = "";
    const $cir = `
    <div class="cir">
        <h1></h1>
        <h3 class="eng_tit"></h3>
        <p></p>
    </div>
    `;

    for(i=0; i<$company_arr.length; i++){
        $circle_case += $cir;
        // console.log($circle_case);
    }
    $(".circle").html($circle_case);

    $(".circle .cir").each(function(index){
        console.log(index);
        $(this).attr("class", `cir cir${index+1}`)
        $(this).find("h1").text(`${$company_arr[index].korTit}`);
        $(this).find("h3").text(`${$company_arr[index].engTit}`);
        $(this).find("p").text(`${$company_arr[index].sentence}`);
    });
});