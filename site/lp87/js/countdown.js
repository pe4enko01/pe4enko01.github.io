

$(document).ready(function(){
    function counter(){
        var now = new Date();
        var finDate = new Date("December 27,2050,03:00:00");
        var totalRemains = (finDate.getTime() - now.getTime());
        if (totalRemains > 1){
            var RemainsSec = (parseInt(totalRemains / 1000));
            var RemainsFullDays = (parseInt(RemainsSec/(24 * 60 * 60)));
             if (RemainsFullDays < 10){
                RemainsFullDays = "0" + RemainsFullDays
            };
            var secInLastDay = RemainsSec-RemainsFullDays * 24 * 3600;
            var RemainsFullHours = (parseInt(secInLastDay / 3600));
            if (RemainsFullHours < 10){
                RemainsFullHours = "0" + RemainsFullHours
            };
            var secInLastHour = secInLastDay - RemainsFullHours * 3600;
            var RemainsMinutes = (parseInt(secInLastHour / 60));
            if (RemainsMinutes < 10){
                RemainsMinutes = "0" + RemainsMinutes
            };
            var lastSec = secInLastHour - RemainsMinutes * 60;
            if (lastSec < 10){
                lastSec = "0" + lastSec
            };
            // var mcend = Date.parse("Jan 1, 2009, 00:00:00");
            // var mcnow = now.getTime();
            // var mc = ((mcend - mcnow)/10).toFixed(0).substr(8);
            
            $(".counter .days").html(RemainsFullDays);
            $(".counter .hours").html(RemainsFullHours);
            $(".counter .minutes").html(RemainsMinutes);
            $(".counter .seconds").html(lastSec);
        }
        else {
            $(".counter").html("Время вышло.");

        }
    };
    setInterval(counter, 1000);
});
