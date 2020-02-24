<?php
function dynamicTable() {
    for ($row = 0; $row <= 12; $row++) {
        echo '<tr>';
        for ($column = 0; $column <= 12; $column++) {
            $bomb = getBomb();
            echo '<td class="column" data-x="' . $row . '" data-y="' . $column . '" data-bomb="' . $bomb . '"' . '">' . $bomb . '</td>';
        }
        echo '</tr>';
    }
}
function getBomb() {
    $bom = rand(0, 5);
    if ($bom == 5){
        return '*';
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Mineswooper</title>
    <link type="text/css" rel="stylesheet" href="style.css">
    <script src="jquery-min.js"></script>
    <script src="javascript.js"></script>
</head>
<body>
<header>
    <div id="headerContent">
        <h1>MineSWOOPER</h1>
        <h5>By Pawel Jakubowski</h5>
    </div>

</header>
<div id="table">
    <table>
    <?= dynamicTable(); ?>
    </table>
</div>
<div id="endText">

</div>
<div style="text-align: center;">
    <button type="button" id="refreshButton">Reset</button>
</div>

</body>
</html>