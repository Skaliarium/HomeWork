var flag = 0; //0 - timer is off; 1 - timer is running
var hh = 0, mm = 0, ss = 0, msec = 0;
var hhLeadingZero = "", mmLeadingZero = "", ssLeadingZero = "", msecLeadingZero = "";
var timerZeroText = "00:00:00<span>000</span>";
var TimerText;
var myInterval;


document.getElementById("Start").addEventListener("click", function() {
    timerStartPauseContinue();
});

document.getElementById("Clear").addEventListener("click", function() {
    timerClear();
});


function timerStartPauseContinue() {
    if (flag === 0) { // start or continue
        myInterval = setInterval(timerGo, 5);
        timerGo();
        flag = 1;

        document.getElementById("Start").innerHTML = "Pause";
        document.getElementById("Start").className = "btn btn-info btn-block";


    } else { // pause

        flag = 0;
        clearTimeout(myInterval);

        document.getElementById("Start").innerHTML = "Continue";
        document.getElementById("Start").className = "btn btn-success btn-block";


    }
}

function timerGo() {
    if (msec === 995) {
        msec = 0;
        if (ss === 59) {
            ss = 0;
            if (mm === 59) {
                mm = 0;
                if (hh === 59) { hh = 0; } else { hh++; }
            } else { mm++; }
        } else { ss++; }
    } else { msec += 5; }


    msecLeadingZero = (msec < 10) ? "00" : msecLeadingZero = (msec < 100) ? "0" : "";
    ssLeadingZero = (ss < 10) ? "0" : "";
    mmLeadingZero = (mm < 10) ? "0" : "";
    hhLeadingZero = (hh < 10) ? "0" : "";

    timerText = hhLeadingZero + hh + ":" + mmLeadingZero + mm + ":" + ssLeadingZero + ss + "<span>" + msecLeadingZero + msec + "</span>";
    document.getElementById("Timer").innerHTML = timerText;
}

function timerClear() {
    flag = 0;
    hh = 0;
    mm = 0;
    ss = 0;
    document.getElementById("Timer").innerHTML = timerZeroText;

    document.getElementById("Start").innerHTML = "Start";
    document.getElementById("Start").className = "btn btn-success btn-block";

    clearTimeout(myInterval);


}
