setTimeout(
    function()
    {
        alert("Please select all the equipments for SETUP !");
    },100
);
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
    $('#next').prop('disabled', true);
});

function opt1(){
    $('#object1').show();
    if($("#object1").is(":visible") && $("#object3").is(":visible")
    && $("#object4").is(":visible") && $("#object5").is(":visible")
    && $("#object11").is(":visible") && $("#object6").is(":visible")){
        $('.switch').show();
        setTimeout(
            function()
            {
                alert("Switch ON");
            },500
        );
        $('#next').show();
    }
};

function opt2(){
    $('#object3').show();
    if($("#object1").is(":visible") && $("#object3").is(":visible")
    && $("#object4").is(":visible") && $("#object5").is(":visible")
    && $("#object11").is(":visible") && $("#object6").is(":visible")){
        $('.switch').show();
        setTimeout(
            function()
            {
                alert("Switch ON");
            },500
        );
        $('#next').show();
    }
};

function opt3(){
    $('#object4').show();
    if($("#object1").is(":visible") && $("#object3").is(":visible")
    && $("#object4").is(":visible") && $("#object5").is(":visible")
    && $("#object11").is(":visible") && $("#object6").is(":visible")){
        $('.switch').show();
        setTimeout(
            function()
            {
                alert("Switch ON");
            },500
        );
        $('#next').show();
    }
};

function opt4(){
    $('#object5').show();
    if($("#object1").is(":visible") && $("#object3").is(":visible")
    && $("#object4").is(":visible") && $("#object5").is(":visible")
    && $("#object11").is(":visible") && $("#object6").is(":visible")){
        $('.switch').show();
        setTimeout(
            function()
            {
                alert("Switch ON");
            },500
        );
        $('#next').show();
    }
};

function opt5(){
    $('#object11').show();
    if($("#object1").is(":visible") && $("#object3").is(":visible")
        && $("#object4").is(":visible") && $("#object5").is(":visible")
        && $("#object11").is(":visible") && $("#object6").is(":visible")){
        $('.switch').show();
        setTimeout(
            function()
            {
                alert("Switch ON");
            },500
        );
        $('#next').show();
    }
};

function opt6(){
    $('#object6').show();
    if($("#object1").is(":visible") && $("#object3").is(":visible")
    && $("#object4").is(":visible") && $("#object5").is(":visible")
    && $("#object11").is(":visible") && $("#object6").is(":visible")){
        $('.switch').show();
        setTimeout(
            function()
            {
                alert("Switch ON");
            },500
        );
        $('#next').show();
    }
};

document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            $('#object2').show();
            $('#object8').show();
            $('#object9').show();
            $('#object6').hide();
            $('#object61').show();
            document.getElementById('object61').style.animationPlayState="running";
            setTimeout(
                function()
                {
                    alert('Now, press 🔵(blue dot) and 🟡(yellow dot) to make connections of welding gun and clamp.');
                },1800
            );
        }
        else{
            $('#object2').hide();
            $('#object8').hide();
            $('#object9').hide();
            $('#object10').hide();
            $('#start').hide();
            $('#object6').show();
            $('#object61').hide();
            $('#object12').hide();
            $('#line1').hide();

            setTimeout(
                function()
                {
                    alert('Click on NEXT button !');
                },400
            );
        }
    });
});

$(document).ready(function(){

    $('#object8').click(function() {
        $('#line1').show();
        if($("#line1").is(":visible") && $("#object10").is(":visible")){
            $('#start').show();
            setTimeout(
                function()
                {
                    alert('Click on START button !');
                },250
            );
        }
    });

    $('#object9').click(function() {
        $('#object10').show();
        if($("#line1").is(":visible") && $("#object10").is(":visible")){
            $('#start').show();
            setTimeout(
                function()
                {
                    alert('Click on START button !');
                },250
            );
        }
    });
    
    $('#start').click(function() {
        $('#object61').hide();
        $('#object12').show();
        $('#object7').show();
        $('#object13').show();
        document.getElementById('object13').style.animationPlayState="running";
        document.getElementById('object12').style.animationPlayState="running";

        let c = 0;
        let n = 173;
        let loader = setInterval(breathe, 28.45);
        function breathe() {
            if (c === 141)
            {
                return
            }
            else
            {
                c += 1;
                n += 1;
                document.getElementById('line1').setAttribute("y2",n);
            }
        }
        document.getElementById("object12").addEventListener("animationend", function() {
            $('#object7').hide();
            document.getElementById('start').disabled=true;
        }, false);

        setTimeout(
            function()
            {
                alert('Switch OFF !');
            },6750
        );
        $('#next').prop('disabled', false);
    });

    $('#next').click(function() {
        $('#b4').prop('disabled', false);
            alert("Now, you can Click on Result to see it !");
            $('#b4').click(function(){
            location.href="task5(4).htm";
        });
    });
});