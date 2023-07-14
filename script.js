$('#two-btn').on('click', function(){
        $('.one, .three').css('display', 'none');
        $('.two').css('display', 'block');
});
$('#one-btn').on('click', function(){
        $('.two, .three').css('display', 'none');
        $('.one').css('display', 'block');
});
$('#three-btn').on('click', function(){
        $('.two, .one').css('display', 'none');
        $('.three').css('display', 'block');
});