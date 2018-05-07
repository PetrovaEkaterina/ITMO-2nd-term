<?php

    function returnValue($num) {
        return $num !== 1 ? $num * returnValue($num - 1) : 1;
    }

    echo returnValue(5)

?>