$(document).ready(function(){
    document.getElementById('b1').disabled=true;
    document.getElementById('b2').disabled=true;
    document.getElementById('b3').disabled=true;
    document.getElementById('b4').disabled=true;
    $('#b5').click(function(){
    location.href="index.htm";
    });
    $('#b6').click(function(){
        $('#Ins').show();
    });
    $('.Cbtn').click(function(){
        $('#Ins').hide();
    });
});