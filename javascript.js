$( document ).ready(function() {
    let bombCount = 0;
    let maxX = 12;
    let maxY = 12;
    $("td").click(function() {
        let thisX =  parseInt($(this).attr('data-x'));
        let thisY =  parseInt($(this).attr('data-y'));
        if(checkbomb(thisX, thisY)){
            $("td").css("background-color" , "#D32F2F");
            $("td").css("color" , "white");
            $("td").css("font-size" , "16px");
            $( "<h2>Game Over</h2>" ).appendTo('#endText');
        } else{
            berekenBuren(thisX, thisY);
        }
        if (bombCount < 1) {
            whiteCell(thisX, thisY);
            floodFill(thisX, thisY);
        } else {
            whiteCell(thisX, thisY);
            bombScore(thisX, thisY);
        }
        bombCount = 0;
    });

    $("#refreshButton").click(function () {
        location.reload();
    });
    function whiteCell(paramX, paramY) {
        let td = $('td[data-x="' + paramX + '"][data-y="' + paramY + '"]');
        td.css("background-color" , "white");
    }
    function bombScore(paramX, paramY) {
        let td = $('td[data-x="' + paramX + '"][data-y="' + paramY + '"]');
        // td.css("color" , "black");
        td.text(bombCount);
    }

    function checkbomb(paramX,paramY){
        let td = $('td[data-x="' + paramX + '"][data-y="' + paramY + '"]');
        let ret = false;
        if (td.attr('data-bomb')){
            ret = true;
            console.log("Deze cell heeft wel een bom");
        } else{
            console.log("Deze cell heeft geen een bom");
        }
        return ret;
    }

    //berekent x en y van alle 8 buren van het td waar ik op klik
    function berekenBuren(paramX, paramY) {
        let celRechts = paramY + 1;
        let celLinks = paramY - 1;
        let celBoven = paramX - 1;
        let celOnder = paramX + 1;
        if (checkbomb(paramX, celRechts)) {
            bombCount++;
        }
        if (checkbomb(paramX, celLinks)) {
            bombCount++;
        }
        if (checkbomb(celBoven, paramY)) {
            bombCount++;
        }
        if (checkbomb(celOnder, paramY)) {
            bombCount++;
        }
        //Rechts Boven
        if (checkbomb(celBoven, celRechts)) {
            bombCount++;
        }
        //Rechts Onder
        if (checkbomb(celOnder, celRechts)) {
            bombCount++;
        }
        //Links Boven
        if (checkbomb(celBoven, celLinks)) {
            bombCount++;
        }
        //Links Onder
        if (checkbomb(celOnder, celLinks)) {
            bombCount++;
        }
        return bombCount;
    }
    function floodFill (paramX, paramY) {
        let status = false;
        let interBom = 0;
        let newX = paramX;
        let newY = paramY;
        bombCount = 0;
        //ParamX ++
        while (status !== true) {
            status = checkbomb(newX, paramY);
            interBom = berekenBuren(newX, paramY);
            if (status !== true) {
                whiteCell(newX, paramY);
                if (interBom > 0) {
                    bombScore(newX, paramY);
                    bombCount = 0;
                }
            }
            newX++;
            if (newX >= maxX) {
                break;
            }
        }
        //ParamX --
        status = false;
        newX = paramX;
        interBom = 0;
        bombCount = 0;
        while (status !== true) {
            status = checkbomb(newX, paramY);
            interBom = berekenBuren(newX, paramY);
            if (status !== true) {
                whiteCell(newX, paramY);
                if (interBom > 0) {
                    bombScore(newX, paramY);
                    bombCount = 0;
                }
            }
            newX--;
            if (newX >= maxX) {
                break;
            }
            if (newX < 0) {
                break;
            }
        }
        //ParamY++
        status = false;
        newY = paramY;
        interBom = 0;
        bombCount = 0;
        while (status !== true) {
            status = checkbomb(paramX, newY);
            interBom = berekenBuren(paramX, newY);
            if (status !== true) {
                whiteCell(paramX, newY);
                if (interBom > 0) {
                    bombScore(paramX, newY);
                    bombCount = 0;
                }
            }
            newY++;
            if (newY >= maxY) {
                break;
            }
        }
        //ParamY--
        status = false;
        newY = paramY;
        interBom = 0;
        bombCount = 0;
        while (status !== true) {
            status = checkbomb(paramX, newY);
            interBom = berekenBuren(paramX, newY);
            if (status !== true) {
                whiteCell(paramX, newY);
                if (interBom > 0) {
                    bombScore(paramX, newY);
                    bombCount = 0;
                }
            }
            newY--;
            if (newY >= maxY) {
                break;
            }
            if (newY < 0) {
                break;
            }
        }
    }
});