(function() {
    var currentPlayer = "pred";

    var diags = [
        [0, 7, 14, 21],
        [1, 8, 15, 22],
        [2, 9, 16, 23],
        [3, 8, 13, 18],
        [4, 9, 14, 19],
        [5, 10, 15, 20],
        [6, 13, 20, 27],
        [7, 14, 21, 28],
        [8, 15, 22, 29],
        [9, 14, 19, 24],
        [10, 15, 20, 25],
        [11, 16, 21, 26],
        [12, 19, 26, 33],
        [13, 20, 27, 34],
        [14, 21, 28, 35],
        [15, 20, 25, 30],
        [16, 21, 26, 31],
        [17, 22, 27, 32],
        [18, 25, 32, 39],
        [19, 26, 33, 40],
        [20, 27, 34, 41],
        [21, 26, 31, 36],
        [22, 27, 32, 37],
        [23, 28, 33, 38]
    ];

    $(".column").on("click", play);

    /*function firstRound() {
        if (
            !$(".mariostarts").hasClass("start") ||
            !$(".luigistarts").hasClass("start")
        ) {
            $(".column").off("click");
        }
    }

    firstRound();*/

    function play(e) {
        if (currentPlayer == "pgreen") {
            $(".luigistarts").removeClass("start");
        } else {
            $(".mariostarts").removeClass("start");
        }

        var slotsInCol = $(e.currentTarget).find(".slot");
        for (var i = 5; i >= 0; i--) {
            if (
                !slotsInCol.eq(i).hasClass("pred") &&
                !slotsInCol.eq(i).hasClass("pgreen")
            ) {
                slotsInCol.eq(i).addClass(currentPlayer);
                if (currentPlayer == "pred") {
                    $("#mario").addClass("bounce");
                    $("#luigi").removeClass("bounce");
                } else {
                    $("#luigi").addClass("bounce");
                    $("#mario").removeClass("bounce");
                }
                break;
            }
        } //closes loop
        verticalVictoryCheck(slotsInCol);
        horizontalVictoryCheck($(".row" + i));
        diagonalVictoryCheck(diags);
        switchPlayer();
    } //closes click event

    function switchPlayer() {
        if (currentPlayer == "pred") {
            currentPlayer = "pgreen";
        } else {
            currentPlayer = "pred";
        }
    }

    function verticalVictoryCheck(slots) {
        var counter = 0;
        for (var i = 0; i < slots.length; i++) {
            if (slots.eq(i).hasClass(currentPlayer)) {
                counter++;
                if (counter == 4) {
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
            } else {
                counter = 0;
            }
        }
    }

    function horizontalVictoryCheck(row) {
        var counter = 0;
        for (var i = 0; i < row.length; i++) {
            if (row.eq(i).hasClass(currentPlayer)) {
                counter++;
                if (counter == 4) {
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
            } else {
                counter = 0;
            }
        }
    }

    function diagonalVictoryCheck(check) {
        for (var i = 0; i < check.length; i++) {
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

    $("#restart").on("click", function() {
        $("audio")[0].pause();
        $("audio")[0].currentTime = 0;
        if ($(".column").off("click", play)) {
            $(".column").on("click", play);
        }

        if (currentPlayer == "pgreen") {
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

        for (var i = 0; i < $(".slot").length; i++) {
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
    });
})();
