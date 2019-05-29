import { currentPlayer } from './play.js';

const verticalVictoryCheck = (slots) => {
    let counter = 0;
    for (let i = 0; i < slots.length; i++) {
        if (slots.eq(i).hasClass(currentPlayer)) {
            counter++;
            if (counter == 4) {
                if (currentPlayer === "pred") {
                    $(".column").off("click");
                    $("audio")[0].play();
                    setTimeout(function() {
                        $(".mariowins").addClass("winner");
                    }, 1000);
                } else {
                    $(".column").off("click");
                    $("audio")[0].play();
                    setTimeout(function() {
                        $(".luigiwins").addClass("winner");
                    }, 1000);
                }
            }
        } else {
            counter = 0;
        }
    }
};

const horizontalVictoryCheck = (row) => {
    let counter = 0;
    for (let i = 0; i < row.length; i++) {
        if (row.eq(i).hasClass(currentPlayer)) {
            counter++;
            if (counter === 4) {
                if (currentPlayer === "pred") {
                    $(".column").off("click");
                    $("audio")[0].play();
                    setTimeout(function() {
                        $(".mariowins").addClass("winner");
                    }, 1000);
                } else {
                    $(".column").off("click");
                    $("audio")[0].play();
                    setTimeout(function() {
                        $(".luigiwins").addClass("winner");
                    }, 1000);
                }
            }
        } else {
            counter = 0;
        }
    }
};

const diagonalVictoryCheck = (check) => {
    for (let i = 0; i < check.length; i++) {
        if (
            $($(".slot").eq(check[i][0])).hasClass(currentPlayer) &&
            $($(".slot").eq(check[i][1])).hasClass(currentPlayer) &&
            $($(".slot").eq(check[i][2])).hasClass(currentPlayer) &&
            $($(".slot").eq(check[i][3])).hasClass(currentPlayer)
        ) {
            if (currentPlayer == "pred") {
                $(".column").off("click");
                $("audio")[0].play();
                setTimeout(function() {
                    $(".mariowins").addClass("winner");
                }, 1000);
            } else {
                $(".column").off("click");
                $("audio")[0].play();
                setTimeout(function() {
                    $(".luigiwins").addClass("winner");
                }, 1000);
            }
        }
    }
}

export { verticalVictoryCheck, horizontalVictoryCheck, diagonalVictoryCheck };