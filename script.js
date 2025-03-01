//  Control Keys  //

function key(event) {

    if (event.which == 13) {



        if (rw == 0) {

            ss.play();

            fid = sword();

            rw = setInterval(run, 100);
            rs.play();

            bw = setInterval(b, 100);

            sw = setInterval(updateScore, 100);

            fw = setInterval(move, 100);

        }

    }

    if (event.which == 32) {

        if (jw == 0) {

            clearInterval(rw);
            rs.pause();
            rw = -1;

            jw = setInterval(jump, 100);
            js.play();

        }

    }

}



// Audio //

var rs = new Audio("assets/audio/run.mp3");
rs.loop = true;

var js = new Audio("assets/audio/haya_jump.mp3");

var hs = new Audio("assets/audio/haya_select.mp3");

var ss = new Audio("assets/audio/haya_start.mp3");

var hw = new Audio("assets/audio/haya_win.mp3");

var ds = new Audio("assets/audio/haya_death.mp3");



//  Sword //

var fid = 0;
var m = 800;
function sword() {

    for (var y = 0; y < 10; y++) {

        var i = document.createElement("img");

        i.src = "assets/sword.gif";

        i.className = "sword";

        i.style.marginLeft = m + "px";

        i.id = "a" + y;

        if (y <= 4) {

            m = m + 500;
        }

        if (y >= 5 & y <= 10) {

            m = m + 300;
        }

        document.getElementById("b").appendChild(i);

    }

}



//  Background worker //

var bw = 0;
var x = 0;
function b() {

    x = x - 20;

    document.getElementById("b").style.backgroundPositionX = x + "px";

}



// Run worker//

var rw = 0;
var r = 1;
function run() {

    var rimg = document.getElementById("boy");

    r = r + 1;

    if (r == 11) {

        r = 1;
    }

    rimg.src = "assets/images/run/Run (" + r + ").png";

}



//  Score worker //

var sw = 0;
var u = 0;
function updateScore() {

    u = u + 5;

    document.getElementById("score").innerHTML = u;



    // Winning //

    if (u == 1300) {

        var t = document.createElement("img");

        t.src = "assets/Target.gif";

        t.className = "target";

        document.getElementById("b").appendChild(t);

        t.style.visibility = "visible";

        clearInterval(rw);
        rs.pause();
        clearInterval(bw);
        clearInterval(sw);
        clearInterval(fw);
        clearInterval(jw);
        jw = -1;

        document.getElementById("won").style.visibility = "visible";
        hw.play();

    }

}



//  Sword Move  //

var fw = 0;
function move() {

    for (var y = 0; y < 10; y++) {

        var d = document.getElementById("a" + y);

        var z = getComputedStyle(d);

        var p = parseInt(z.marginLeft);

        p = p - 20;

        d.style.marginLeft = p + "px";



        // Lost Area //

        if (p < 240 & p > 100) {

            if (mt > 590) {

                clearInterval(rw);
                rs.pause();
                clearInterval(bw);
                clearInterval(sw);
                clearInterval(fw);
                clearInterval(jw);
                jw = -1;

                dw = setInterval(dead, 100);
                ds.play();

            }

        }

    }

}



//  Jump Worker  //

var jw = 0;
var j = 1;
var mt = 630;
function jump() {

    var jimg = document.getElementById("boy");

    if (j <= 5) {

        mt = mt - 35;
    }

    if (j >= 6) {

        mt = mt + 35;
    }

    jimg.style.marginTop = mt + "px";


    j = j + 1;

    if (j == 11) {

        j = 1;

        clearInterval(jw);

        jw = 0;

        rw = setInterval(run, 100);
        rs.play();

        if (fid == 0) {

            fid = sword();
        }

        if (fw == 0) {

            fw = setInterval(move, 100);
        }

        if (bw == 0) {

            bw = setInterval(b, 100);
        }

        if (sw == 0) {

            sw = setInterval(updateScore, 100);
        }

    }

    jimg.src = "assets/images/jump/Jump (" + j + ").png";

}



// Dead //

var dw = 0;
var d = 0;
function dead() {

    var dimg = document.getElementById("boy");

    d = d + 1;

    if (d == 11) {

        d = 10;

        dimg.style.marginTop = "630px";

        document.getElementById("end").style.visibility = "visible";

        document.getElementById("endscore").innerHTML = u;
    }

    dimg.src = "assets/images/dead/Dead (" + d + ").png";

}



// Play Again //

function re() {

    location.reload();

}



// Game On //

function startclick() {

    window.location = "index.html";

}



// Menu //

function menuclick() {

    window.location = "start.html";
}



// Help //

function helpclick() {

    window.location = "help.html";

}



boyw2 = setInterval(boy2, 100);
hs.play();
var boyw2 = 0;
var b2 = 0;
function boy2() {

    var boy2 = document.getElementById("boy2");

    b2 = b2 + 1;

    if (b2 == 10) {
        b2 = 1;
    }


    boy2.src = "assets/images/boy/Boy (" + b2 + ").png";
}



// info //

function infoclick() {

    alert("Developed By @Rash_522");
}