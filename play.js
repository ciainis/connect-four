import { verticalVictoryCheck, horizontalVictoryCheck, diagonalVictoryCheck } from './victory-check.js';
import diags from './diags.js';

let currentPlayer = "pred";

const play = (e) => {
    currentPlayer === 'pgreen' ? $(".luigistarts").removeClass("start") : $(".mariostarts").removeClass("start");

    const slot = $(e.currentTarget).find(".slot");

    for (let i = 5; i >= 0; i--) {
        if (
            !slot.eq(i).hasClass("pred") &&
            !slot.eq(i).hasClass("pgreen")
        ) {
            slot.eq(i).addClass(currentPlayer);

            if (currentPlayer === "pred") {
                $("#mario").addClass("bounce");
                $("#luigi").removeClass("bounce");
            } else {
                $("#luigi").addClass("bounce");
                $("#mario").removeClass("bounce");
            } 

            verticalVictoryCheck(slot);
            diagonalVictoryCheck(diags);
            horizontalVictoryCheck($(".row" + i));
            break;
        }       
    } 
    switchPlayer();
};

const switchPlayer = () => {
    currentPlayer === 'pred' ? currentPlayer = "pgreen" : currentPlayer = "pred";
};

const restart = () => {
    $("audio")[0].pause();
    $("audio")[0].currentTime = 0;
    if ($(".column").off("click", play)) {
        $(".column").on("click", play);
    }

    if (currentPlayer === "pgreen") {
        setTimeout(function() {
            $(".luigistarts").addClass("start");
            $(".mariostarts").removeClass("start");
        }, 700);
    } else {
        setTimeout(function() {
            $(".mariostarts").addClass("start");
            $(".luigistarts").removeClass("start");
        }, 700);
    }

    $(".mariowins").removeClass("winner");
    $(".luigiwins").removeClass("winner");

    for (let i = 0; i < $(".slot").length; i++) {
        if (
            $(".slot")
                .eq(i)
                .hasClass("pred") ||
            $(".slot")
                .eq(i)
                .hasClass("pgreen")
        ) {
            $(".slot")
                .eq(i)
                .removeClass("pred pgreen");
        }
    }
};

export { currentPlayer, play, restart };