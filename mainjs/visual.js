// JavaScript Document


$(function(){
  /*터치 슬라이드 비주얼 영역*/
   window.mySwipe =$('#mySwipe').Swipe({
     auto: 10000,  //배너가 3초 간격으로 이동합니다.
     continuous: true, // 반복해서 롤링됩니다.
     callback: function(index, element) { //이벤트가 완료되면 실행합니다.
    
        /*클래스 "active"를 포함하는 불릿 버튼을 비활성화 버튼으로 만들고, 
        "active" 클래스를 삭제합니다.*/
        $(".touch_bullet .active")
        .attr("src",$(".touch_bullet .active")
        .attr("src").replace("on.png","off.png"))
        .removeClass("active"); 
    
        /*인덱스(index)에 해당하는 불릿 버튼을 활성화된 버튼으로 만들고, 
        "active" 클래스를 생성합니다.*/
        $(".touch_bullet img").eq(index)
        .attr("src",$(".touch_bullet img").eq(index)
        .attr("src").replace("off.png","on.png"))
        .addClass("active");
     }
  }).data('Swipe');
    
    
  /*비주얼 이전, 다음 버튼*/
  $(".touch_left_btn a").on("click",function(){//이전 버튼을 누를 때마다...
     mySwipe.prev(); //이전 배너로 이동합니다.
     return false; //링크를 차단합니다.
  });
  $(".touch_right_btn a").on("click",function(){//다음 버튼을 누를 때마다...
     mySwipe.next(); //다음 배너로 이동합니다.
     return false; //링크를 차단합니다.
  });
});  