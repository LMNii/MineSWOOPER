let x = $(this).position();
let boxLeft = x.left + 36;
let boxLeftNegative = x.left - 36;
console.log("Top position: " + x.top + " Left position: " + x.left);
console.log("Left Posistion next box: " + boxLeft);
console.log("Rechts positie next box: " + boxLeftNegative);

$( document ).ready(function() {
    $("td").click(function() {
        let datax = $(this).attr('data-x');
        let dataxInt = parseInt(datax);
        let datay = $(this).attr('data-y');
        let datayInt = parseInt(datay);
        let boxRight = datayInt + 1;
        let boxLeft = datayInt - 1;
        let $tds = $(this).html();
        console.log("X: " + datax + " Y: " + datay);
        console.log ("X: " + datax + " Y: " + boxRight);
        // console.log ("X: " + datax + " Y: " + boxLeft);
        // console.log($(this).html());
        // console.log("Top position: " + x.top + " Left position: " + x.left);
        // console.log("Left Posistion next box: " + boxLeft);
        // console.log("Rechts positie next box: " + boxLeftNegative);
        if ($tds.length == 0){
            // console.log("Deze cell heeft geen bom");
            $(this).css("background-color" , "white");
        } else{
            // console.log("Deze cell heeft WEL een bom");
        }
    });
    $("#refreshButton").click(function () {
        location.reload();
    })
});