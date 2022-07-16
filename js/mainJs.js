
// Navbar transparency and black backgroundColor on scrolling
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


// closing the right nav bar
function closeNav() {
    document.getElementById("OtherSidebar").style.width = "0";
}


// Opening and toggline the right navbar width
function openOtherNav() {

    if (document.getElementById("OtherSidebar").style.width == "300px") {
        document.getElementById("OtherSidebar").style.width = "0";

    } else {
        document.getElementById("OtherSidebar").style.width = "300px";
    }
};

// displaying the close button for the main navbar
function ShowCloseButton() {
    $("#CloseButton").show();
}

// closing the main navbar
function CloseMobileNav() {
    $(".navbar-collapse").removeClass("show");
    $("#CloseButton").hide();
}

// Consuming youtube video api to get the 
// Title, Date and Views of a video using the video id

function APIparser() {
    const myArray = {id:'NdB5MsG-MoQ', id:'cWDsDeWdN0g', id:'w3prfQ6ePHY'};
    var vSRC = "https://www.youtube.com/embed/SYdtoOgFGTs"
    var newVsrc = vSRC.split("/");
    var vId = newVsrc[4];
    var Vdate;

    var apiPath = 'https://www.googleapis.com/youtube/v3/videos?id=' + vId + '&key=AIzaSyD6ongb8ei-ZpyDEqxoKLYCca8Yyun1erA&fields=items(id,snippet(publishedAt,channelId,title,categoryId),statistics)&part=snippet,statistics';


    var responseClone; // 1
    fetch(apiPath)
        .then(function (response) {
            responseClone = response.clone(); // 2
            return response.json();
        })
        .then(function (data) {
            //Loging the data on the console
            console.log(data);

            //  setting the source and title attribute of the iframe
            $(".vSRC").attr('src', vSRC);
            $(".vSRC").attr('title', data['items'][0]['snippet']['title']);

            $(".vTitle").text(data['items'][0]['snippet']['title']);

            // Spliting the date to get only the data value
            Vdate = data['items'][0]['snippet']['publishedAt'].split("T");
            $(".vDate").text(Vdate[0]);

            $(".vViews").text(data['items'][0]['statistics']['viewCount']);

        }, function (rejectionReason) { // 3
            console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
            responseClone.text() // 5
                .then(function (bodyText) {
                    console.log('Received the following instead of valid JSON:', bodyText); // 6
                });
        });

};


$(document).ready(function () {
    APIparser();
    
    // Start Event to create a hover action on the pastoral card
    $('.pastoral').on('mouseover', function () {
        $(this).find('.socials').css({
            backgroundColor: "rgba(0, 0, 0, 0.696)"

        })
        $(this).find('.socials a').css({
            display: "inline-block"

        })

    })
    // End Event to create a hover action on the pastoral card


    // Start Event to take off hover action from the pastoral card
    $('.pastoral').on('mouseout', function () {
        $(this).find('.socials').css({
            backgroundColor: "transparent"
        })
        $(this).find('.socials a').css({
            display: "none"

        })

    })

    // End Event to take off hover action from the pastoral card



});
