var member = 90;
var generalMember = 80;
var totalTimes = 100;
var clicked = false;
var btnClick = 0;
var winnerArray = new Array(member);
var appearNumTimesArray = new Array(member+1);
var nowTimes = 0;
var tenDigits, digits;
var speed = 80;
var tempNum;
var showAllWinBtnTF = false;
var showFiveNumTF = false;
var audioDom;

function setup() {
}


$(function () {

    $('.into_big_light').click(function () {
        $('.start_light').removeClass('start_light_animation');
        $('.start_light').css('width', '0vh');
        setTimeout("intoGame()", 100);
    });

    for (var i = 0; i < member; i++) {
        winnerArray[i] = 0;
        appearNumTimesArray[i+1] = 0;
    }
    $('.button').click(function () {
        if(clicked == false){
            btnClick++;
            clicked = true;
            document.getElementById("winnerBox").innerHTML = '';
            $(this).css({
                'width': '0px',
                'height': '0px'
            });
            startRand();
        }
    });
    $('#showAllWinBtn').click(function () {
        if(showAllWinBtnTF == false){
            $("#allWinner").animate({
                right: '0'
            }, 1500, 'easeOutBounce', function(){
                showAllWinBtnTF = true;
            });
        }else{
            $("#allWinner").animate({
                right: '-96.3vw'
            }, 1500, 'easeOutBounce', function(){
                showAllWinBtnTF = false;
            });
        }
        
    });

    $('.showFiveNum').click(function () {
        if(showFiveNumTF == false){
            $('.showFiveNum').css('transform', 'rotateZ(180deg)');
            $("#allWinnerBox1").animate({
                right: '-96.3vw'
            }, 1500, 'easeOutBounce');
            $("#allWinnerBox2").animate({
                right: '0'
            }, 1500, 'easeOutBounce');
            showFiveNumTF = true;
        }else{
            $('.showFiveNum').css('transform', 'rotateZ(0deg)');
            $("#allWinnerBox2").animate({
                right: '-96.3vw'
            }, 1500, 'easeOutBounce');
            $("#allWinnerBox1").animate({
                right: '0'
            }, 1500, 'easeOutBounce');
            showFiveNumTF = false;
        }
    });
});

function startRand() {
    if (nowTimes < totalTimes) {
        if (nowTimes < btnClick*10) {
            smallNumAndTurn();
            appearTableNum();
        } else {
            $(".button").css({
                'width': '18vh',
                'height': '18vh'
            });
            $('.light').css({
                'width': '0vh',
                'height': '0vh'
            });
            $('#num').css({
                'width': '0vh',
                'height': '0vh'
            });
            clicked = false;
        }
    } else {
        end();
    }
}

function randTempNum() {
    tempNum = Math.floor(Math.random() * (member) + 1);
    tenDigits = Math.floor(tempNum / 10);
    digits = tempNum % 10;
    $('.tenDigits').css('background-position', 'center ' + tenDigits * 10 + '%');
    $('.digits').css('background-position', 'center ' + digits * 10 + '%');
    speed--;
}

function appearTableNum() {
    if (speed > 20) {
        randTempNum();
        smallLight();
        setTimeout("appearTableNum()", 50);
    } else if (speed > 0) {
        randTempNum();
        smallLight();
        setTimeout("appearTableNum()", 150);
    } else if (speed == 0) {
        randWinNum();
        bigLight();
        setTimeout("appearWinner()", 1000);
    }
}

function randWinNum() {
    winnerArray[nowTimes] = Math.floor(Math.random() * (member) + 1);
        while(winnerArray[nowTimes] > generalMember && appearNumTimesArray[(winnerArray[nowTimes])] > 0){
            winnerArray[nowTimes] = Math.floor(Math.random()*(member)+1);
        }
        appearNumTimesArray[(winnerArray[nowTimes])]++;

    tenDigits = Math.floor(winnerArray[nowTimes] / 10);
    digits = winnerArray[nowTimes] % 10;
    bigNum();
    $('.tenDigits').css('background-position', 'center ' + tenDigits * 10 + '%');
    $('.digits').css('background-position', 'center ' + digits * 10 + '%');
    speed--;
}

function smallLight() {
    $('.light').css({
        'width': '54vh',
        'height': '54vh'
    });
}

function bigLight() {
    $('.light').css({
        'width': '68vh',
        'height': '68vh'
    });
}

function smallNumAndTurn() {
    $('#num').removeClass('animated bounceIn slow');
    $('#num').css({
        'width': 'calc( 34vh * 1.1 )',
        'height': 'calc( 25.1vh * 1.1 )'
    });
    $('.tableCicle').css('transform', 'rotateZ(' + (nowTimes + 1) * 2160 + 'deg)');
    
    audioDom = document.getElementById("audioHint");
    audioDom.play();
}

function bigNum() {
    $('#num').css({
        'width': 'calc( 34vh * 1.35 )',
        'height': 'calc( 25.1vh * 1.35 )'
    });
    $('#num').addClass('animated bounceIn slow');
}

function appearWinner() {
    document.getElementById("winnerBox").innerHTML += '<div class="winner winner' + nowTimes + '"><div class="winnerNum winnerNum' + nowTimes + '"><div class="winnerTenDigits winnerTenDigits' + nowTimes + '"></div><div class="winnerDigits winnerDigits' + nowTimes + '"></div></div></div>';
    

    if (nowTimes < 10) {
        document.getElementById("tenWinner1").innerHTML += '<div class="winner_purpleBG winner' + nowTimes + '"><div class="winnerNum winnerNum' + nowTimes + '"><div class="winnerTenDigits winnerTenDigits' + nowTimes + '"></div><div class="winnerDigits winnerDigits' + nowTimes + '"></div></div></div>';
    } else if (nowTimes < 20) {
        document.getElementById("tenWinner2").innerHTML += '<div class="winner_purpleBG winner' + nowTimes + '"><div class="winnerNum winnerNum' + nowTimes + '"><div class="winnerTenDigits winnerTenDigits' + nowTimes + '"></div><div class="winnerDigits winnerDigits' + nowTimes + '"></div></div></div>';
    } else if (nowTimes < 30) {
        document.getElementById("tenWinner3").innerHTML += '<div class="winner_purpleBG winner' + nowTimes + '"><div class="winnerNum winnerNum' + nowTimes + '"><div class="winnerTenDigits winnerTenDigits' + nowTimes + '"></div><div class="winnerDigits winnerDigits' + nowTimes + '"></div></div></div>';
    } else if (nowTimes < 40) {
        document.getElementById("tenWinner4").innerHTML += '<div class="winner_purpleBG winner' + nowTimes + '"><div class="winnerNum winnerNum' + nowTimes + '"><div class="winnerTenDigits winnerTenDigits' + nowTimes + '"></div><div class="winnerDigits winnerDigits' + nowTimes + '"></div></div></div>';
    } else if (nowTimes < 50) {
        document.getElementById("tenWinner5").innerHTML += '<div class="winner_purpleBG winner' + nowTimes + '"><div class="winnerNum winnerNum' + nowTimes + '"><div class="winnerTenDigits winnerTenDigits' + nowTimes + '"></div><div class="winnerDigits winnerDigits' + nowTimes + '"></div></div></div>';
    } else if (nowTimes < 60) {
        document.getElementById("tenWinner6").innerHTML += '<div class="winner_purpleBG winner' + nowTimes + '"><div class="winnerNum winnerNum' + nowTimes + '"><div class="winnerTenDigits winnerTenDigits' + nowTimes + '"></div><div class="winnerDigits winnerDigits' + nowTimes + '"></div></div></div>';
    } else if (nowTimes < 70) {
        document.getElementById("tenWinner7").innerHTML += '<div class="winner_purpleBG winner' + nowTimes + '"><div class="winnerNum winnerNum' + nowTimes + '"><div class="winnerTenDigits winnerTenDigits' + nowTimes + '"></div><div class="winnerDigits winnerDigits' + nowTimes + '"></div></div></div>';
    } else if (nowTimes < 80) {
        document.getElementById("tenWinner8").innerHTML += '<div class="winner_purpleBG winner' + nowTimes + '"><div class="winnerNum winnerNum' + nowTimes + '"><div class="winnerTenDigits winnerTenDigits' + nowTimes + '"></div><div class="winnerDigits winnerDigits' + nowTimes + '"></div></div></div>';
    } else if (nowTimes < 90) {
        document.getElementById("tenWinner9").innerHTML += '<div class="winner_purpleBG winner' + nowTimes + '"><div class="winnerNum winnerNum' + nowTimes + '"><div class="winnerTenDigits winnerTenDigits' + nowTimes + '"></div><div class="winnerDigits winnerDigits' + nowTimes + '"></div></div></div>';
    } else if (nowTimes < 100) {
        document.getElementById("tenWinner10").innerHTML += '<div class="winner_purpleBG winner' + nowTimes + '"><div class="winnerNum winnerNum' + nowTimes + '"><div class="winnerTenDigits winnerTenDigits' + nowTimes + '"></div><div class="winnerDigits winnerDigits' + nowTimes + '"></div></div></div>';
    }
    $('.winnerTenDigits' + nowTimes).css('background-position', 'center ' + tenDigits * 10 + '%');
    $('.winnerDigits' + nowTimes).css('background-position', 'center ' + digits * 10 + '%');
    $('.winner' + nowTimes).addClass('animated bounceIn');
    if (nowTimes > 0) {
        $('.winner' + (nowTimes - 1)).removeClass('animated bounceIn');
    }
    restart();
}

function restart() {
    speed = 80;
    nowTimes++;
    setTimeout("startRand()", 1000);
}

function end() {
    $(".button").css({
        'width': '0vh',
        'height': '0vh'
    });
    $('#num').css({
        'width': '0vh',
        'height': '0vh'
    });
    $('#gameOver').css({
        'width': '80vh',
        'height': '80vh'
    });
    setTimeout("$('#allWinner').animate({ right: '0' }, 1500, 'easeOutBounce');", 2500);
}

function intoGame() {
    audioDom = document.getElementById("startAudioHint");
    audioDom.play();
    $('.into_light').css('width', '100%');
    $('.into_big_light').css('background-size', '500% 500%');
    setTimeout("$('.start').hide();", 2000);
    setTimeout("$('.start_bg').hide();", 2000);

    setTimeout("$('#start').css('background-image','none');", 2000);
    setTimeout("$('.into_big_light').css('opacity','0');", 1000);
    setTimeout("$('#start').hide();", 3000);
    $('header').addClass('animated bounceInRight delay-4s');
    $('#turntable').addClass('animated bounceIn delay-4s');
    $('#bg_object').addClass('animated bounceIn delay-4s');
    setTimeout("$('#allWinner').animate({ right: '-96.3vw' }, 1500, 'easeOutBounce');", 5000);
}
