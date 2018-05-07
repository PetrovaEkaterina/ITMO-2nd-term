<?php

    // Создайте функцию, возвращающую трёхкомпонентный цвет
    // по трём переданным ей числам

    function getColor($clr1 = 0, $clr2 = 0, $clr3 = 0) {
        return "rgb(".join(", ", [$clr1, $clr2, $clr3]).")";
    };

    function generateColor() {
        return rand(0, 255);
    };

    echo getColor(generateColor(), generateColor(), generateColor()); 
    
?>