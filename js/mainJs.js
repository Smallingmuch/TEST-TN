
        $(function () {
            var header = $(".bg-transparent");
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
  
                if (scroll >= 100) {
                    header.removeClass('bg-transparent')
                            .addClass("bg-dark");
                } else {
                    header.removeClass("bg-dark")
                            .addClass('bg-transparent');
                }
            });
        });

        function openNav() {
           

            if(document.getElementById("mySidebar").style.width == "250px"){
                document.getElementById("mySidebar").style.width = "0";
                $('.navbar-toggler').show();

            }else{
                document.getElementById("mySidebar").style.width = "250px";
                $('.navbar-toggler').hide();
            }
        };
        
        function closeNav() {
            document.getElementById("mySidebar").style.width = "0";
            $('.navbar-toggler').show();
        }

       