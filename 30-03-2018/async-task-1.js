// Codepen link: https://codepen.io/Chicubi/pen/zWWEXZ

/* 
  Задание: Даны три значения и три адреса.
  Допишите код с борда по адресу https://codepen.io/gossoudarev/pen/zWWBvd?editors=0010
  так, чтобы первое значение передавалось в первый адрес,
  второе значение и полученный ответ во второй адрес,
  аналогично с третьим адресом.
*/

const values = [10, 20, 30];
const URLs = [
  'https://kodaktor.ru/api/m/',
  'https://kodaktor.ru/api/MS2/',
  'https://kodaktor.ru/api/MS3/',
];

const r = {
  result: "10"
};

(async () => { 
  let init = {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  };
  
  for (let i = 0; i < URLs.length; i++) {
    let value = URLs[i] + values[i] + '/' + r.result;
    const x = await fetch(value, init)
      .then(response => response.json());
      r.result = x.result;
  }
  
  document.body.innerHTML = `<h1>${r.result}</h1>`;
})();