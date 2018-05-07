<?php

  function sum($number) {
    $firstNumber = $number;

    return function(...$numbers) use (&$firstNumber) {
      foreach ($numbers as $value) {
        $firstNumber = $firstNumber + $value;
      }

      return $firstNumber;
    };
  }

  $two = sum(2);

  echo $two(1)."\n";
  echo $two(3)."\n";
  echo $two(4, 6)."\n";
  
?>