$(document).ready(function(){
    const $direct_arr = [
        {service : "꿈에그린 고객센터", number : "080 - 279 - 2400", icon : "icon01.png"},
        {service : "꿈에그린 고객문의 >", number : "", icon : "icon02.png"},
        {service : "꿈에그린 A/S문의 >", number : "", icon : "icon03.png"},
    ];

    let $box_case = "";
    const $direct_box = `
    <div class="box">
        <div class="left">
            <p>꿈에그린 고객센터</p>
            <h1>080 - 279 - 2400</h1>
        </div>
        <div class="right">
            <img src="./img/customer/icon01.png" alt="">
        </div>
    </div>
    `;

    for(i=0; i<$direct_arr.length; i++){
        $box_case += $direct_box;
    }
    $("#faq .cust_faq .boxes").html($box_case);

    $("#faq .cust_faq .boxes .box").each(function(i){
        $(this).find(".left p").text(`${$direct_arr[i].service}`);
        $(this).find(".left h1").text(`${$direct_arr[i].number}`);
        $(this).find(".right img").attr("src", `./img/customer/${$direct_arr[i].icon}`);
    });


    $("#agree .termsCont p").html(`
    ▣ 수집하는 개인정보 항목
    <br>
    <br>
    01. 수집하는 개인정보 항목 및 수집방법
    <br>
    회사는 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다.
    <br>
    ο 수집항목 : 작성자 이메일, 휴대전화번호, CI값, DI값, 접속로그, 접속IP
    <br>
    ο 개인정보 수집방법 : 홈페이지(고객문의,사이버신문고)
    <br>
    <br>
    02. 개인정보의 수집 및 이용목적
    <br>
    <br>
    회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
    <br>
    ο 서비스 제공에 관한 계약 이행 및 계약 내용 확인
    <br>
    ο 회원 관리: 회원제 서비스 이용에 따른 본인확인 , 개인 식별 , 불량회원의 부정 이용 방지와 비인가 사용방지 , 가입 의사 확인 , 연령확인 , 불만처리 등 민원처리, 고지사항 전달
    <br>
    마케팅 및 광고에 활용 : 이벤트 등 광고성 정보 전달
    <br>
    <br>
    03. 개인정보의 보유 및 이용기간
    <br>
    <br>
    원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.
    <br>
    ο 보존 항목 : 이름 , 휴대전화번호 , 이메일, 접속로그, IP
    <br>
    ο 보존 근거 : 고객문의 관리 ο 보존 기간 : 3년그리고 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
    <br>
    소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래 등에서의 소비자보호에 관한 법률 시행령 제6조 [사업자가 보존하는거래기록의 대상들])
    <br>
    <br>
    04. 개인정보의 파기절차 및 방법
    <br>
    <br>
    회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.
    <br>
    <br>
    ο 파기절차
    <br>
    회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기되어집니다.
    <br>
    별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다.
    <br>
    <br>
    ο 파기방법
    <br>
    전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
    <br>
    <br>
    ▣ 수집한 개인정보의 위탁
    <br>
    <br>
    회사는 서비스 이행을 위해 아래와 같이 외부 전문업체에 위탁하여 운영하고 있습니다.
    <br>
    <br>
    ο 위탁 대상자 : (주) 한화에스앤씨
    <br>
    ο 위탁업무 내용 : 웹사이트 및 시스템 관리
    <br>
    ο 위탁 대상자 : 엠비앤홀딩스, 산하디앤시, 마켓리더, 내일엔, 파라피앤디, 아인스, 리안컴퍼니, 세웅알앤시, 글로벌탐앤에스, 니소스씨앤디(DnSP PMG), 앰게이츠, 랜드비전, 인송홀딩스, 솔렉스마케팅, 신영엠앤디, 메인코리아, 임팩트씨제이, 건한컨테크, 삼일산업, 미래인, 리얼탑코리아, 유성, 더메이커스, 에프엠플래닝, 청연앤드, 한국부동산마케팅주식회사, ㈜네스트컨설팅, ㈜글로벌맨파워시스템, ㈜건축환경서비스, ㈜하우스링크
    <br>
    ο 위탁업무 내용 : 관심고객 상담, 분양상품 안내, 분양업무 대행, 입주지원업무 대행
    `);
});