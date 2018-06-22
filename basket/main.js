const budget = 5000;
const goods = {};
const goodsItems = document.getElementsByClassName('goods__item');
const basket = document.getElementsByClassName('basket')[0];
const basketContainerElement = document.getElementsByClassName('basket__goods-container')[0];
const moneyLeft = document.getElementsByClassName('money-left__amount')[0];
const greet = document.getElementsByClassName('basket__greet')[0];

let purchaseAmount = 0;

for (const goodItem of goodsItems) {
  goodItem.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData(
      'application/json',
      JSON.stringify([event.target.children[1].dataset.price, event.target.id])
    );
  });
}

basket.addEventListener('drop', (event) => {
  const data = event.dataTransfer.getData('application/json');

  if (data) {
    const [price, goodId] = JSON.parse(data);

    basket.dispatchEvent(new CustomEvent('order', { detail: { price, goodId } }));
  }
});

basket.addEventListener('dragover', event => event.preventDefault());

basket.addEventListener('order', ({ detail: { price: stringPrice, goodId } }) => {
  const price = +stringPrice;
  
  greet.style.display = 'none';  

  if (purchaseAmount + price > budget) {
    alert('thats all folks!');
    moneyLeft.textContent = `Another salary spent, huh?`;
  } else {
    const orderedGoodElement = document.getElementById(goodId).cloneNode(true);
    let count = 1;

    if (goods[orderedGoodElement.id]) {
      count = ++goods[orderedGoodElement.id];
      console.log(basketContainerElement.children);
      const countElement = [...basketContainerElement.children]
        .filter(goodElement => goodElement.children[2].dataset.id === `${goodId}-count`)[0];
      countElement.children[2].textContent = count;
    } else {
      goods[orderedGoodElement.id] = count;
      const counterElement = orderedGoodElement.children[2];

      counterElement.dataset.id = counterElement.id;
      counterElement.removeAttribute('id');
      orderedGoodElement.removeAttribute('id');
      orderedGoodElement.setAttribute('draggable', false);
      counterElement.textContent = count;
      basketContainerElement.appendChild(orderedGoodElement);
    }
    purchaseAmount += price;
    moneyLeft.textContent = `You have ${budget - purchaseAmount}$ in your wallet`;
  }
});