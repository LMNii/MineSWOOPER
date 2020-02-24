$( document ).ready(function() {
    let position;
    $("td").click(function() {
        let idPostition = $(this).attr( 'id' );
        let x = $(this).position();
        console.log("ID = " + idPostition);
        console.log("Top position: " + x.top + " Left position: " + x.left);
        let $tds = $(this).html();
        console.log($(this).html());
        if ($tds.length == 0){
            console.log("Deze cell heeft geen bom");
            $(this).css("background-color" , "white");
            $( "<td>1</td>" ).appendTo('#' + idPostition);
        } else{
            console.log("Deze cell heeft WEL een bom");
        }
    });
    $("#refreshButton").click(function () {
        location.reload();
        console.log("Page has been reloaded");
    })
});