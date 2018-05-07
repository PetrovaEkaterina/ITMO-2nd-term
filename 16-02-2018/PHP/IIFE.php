<?php

    // 1.
    ($add = function ($x, $y) {
        echo $x + $y;
    })(3, 4);

    // 2.
    call_user_func(function ($x, $y) {
        echo $x + $y;
    }, 6, 12);
    
?>