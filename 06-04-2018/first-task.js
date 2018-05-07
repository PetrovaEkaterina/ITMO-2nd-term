// Имея асинхронную функцию следующего вида:

async function five(){ 
  return '5';
}

// как получить возвращаемое ею значение и вывести его в консоль?
// Решение:

five().then( x => console.log( x ));

// board: https://kodaktor.ru/?!=06042018_7afe6