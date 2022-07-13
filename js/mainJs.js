
        $(function () {
            var header = $(".bg-transparent");
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
  
                if (scroll >= 100) {
                    header.removeClass('bg-transparent')
                            .addClass("bg-black");
                } else {
                    header.removeClass("bg-black")
                            .addClass('bg-transparent');
                }
            });
        });

        
        
        function closeNav() {
            document.getElementById("OtherSidebar").style.width = "0";
            //$('.navbar-toggler').show();
        }


        function openOtherNav() {

            if(document.getElementById("OtherSidebar").style.width == "300px"){
                document.getElementById("OtherSidebar").style.width = "0";
                //$('.navbar-toggler').show();

            }else{
                document.getElementById("OtherSidebar").style.width = "300px";
               // $('.navbar-toggler').hide();
            }
        };

        function ShowCloseButton(){
            $("#CloseButton").show();
        }

function  CloseMobileNav(){
    // nav =$(".navbar-nav")
   // if(document.getElementById("collapsibleNavbar").style.width =="50%"){
        // alert("we here");
        $(".navbar-collapse").removeClass("show");
        $(".navbar-collapse").css("transition", "right 0.5s ease");
        $("#CloseButton").hide();

        //("#collapsibleNavbar").hide("slow");
   // }
}



$( document ).ready(function() {
 $('.pastoral').on('mouseover', function(){
   // alert('hi');
   $(this).find('.socials').css({
    backgroundColor:"rgba(0, 0, 0, 0.696)"
    
 })
   $(this).find('.socials a').css({
      display:"inline-block"
      
   })

  })
  

  $('.pastoral').on('mouseout', function(){
    $(this).find('.socials').css({
     backgroundColor:"transparent"
     
  })
    $(this).find('.socials a').css({
       display:"none"
       
    })
 
   })

});
       