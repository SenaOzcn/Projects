$(document).ready(function() {
    $('.show').click(function() {
        $('.text').slideToggle();
        $('.text').css('background-color', '#C70039');
        $('.text').css('box-shadow', 'inset 20px 20px 60px #590019', 'inset -20px -20px 60px #a60e48;');
        $(this).css('background-color', '#C70039');
        $(this).css('box-shadow', 'inset 20px 20px 60px #590019', 'inset -20px -20px 60px #a60e48;');
    });
});
