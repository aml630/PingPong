$(document).ready(function() {

    var num = prompt("What number do you want to ping-pong up to?");


    for (var start = 1; start <= num; start += 1) {

        if (start % 15 === 0) {
            $("p").append("<li>Ping-Pong</li>");

        } else if (start % 3 === 0) {
            $("p").append("<li>Ping</li>");

        } else if (start % 5 === 0) {
            $("p").append("<li>Pong</li>");



        } else {
            $("p").append("<li>" + start + "</li>");


        }


    }


})
