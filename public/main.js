$(document).ready(function(){
    $.get('value')
    $('increase').click(function(){
        $.get('/increment')
        console.log(data);
        $('#count').html(data)
    })
    $('decrease').click(function(){
        $.get('/decrement')
        console.log(data);
    })
});