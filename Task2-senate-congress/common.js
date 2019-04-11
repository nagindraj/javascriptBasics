$(document).ready(function () {
    $(".nav li").on("click", function () {
        $(".nav li").removeClass("active");
        $(this).addClass("active");
    });
    
    $(".nav li ul li").on("click", function () {
        $(".nav li").removeClass("active");
        $(".nav li:nth-child(1)").addClass("active");
    });
})