$(function(){
    $('.title').on('click', function(){
        $(this).next().slideToggle();
        $(this).toggleClass("open");
        $('.title').not(this).removeClass('open');
        $('.title').not($(this)).next('.inner').slideUp();
    });
});
