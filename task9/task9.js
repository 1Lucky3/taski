const goods = [
  {id: 1, type: 'mango', price: 53},
  {id: 2, type: 'mango', price: 77},
  {id: 3, type: 'potato', price: 48},
  {id: 4, type: 'potato', price: 52},
  {id: 5, type: 'mango', price: 33},
  {id: 6, type: 'apple', price: 50},
  {id: 7, type: 'mango', price: 89},
  {id: 8, type: 'apple', price: 60},
  {id: 9, type: 'mango', price: 51},
  {id: 10, type: 'apple', price: 80},
];

/*Способ 1*/

for(i = 0; i < goods.length; i++) {
  if(goods[i].type==='mango') {
    goods.splice(i,1);
    i--;
  }
  else if(goods[i].type==='apple'){
    let newPrice = goods[i].price;
    goods[i].price = newPrice * 3;
  }
}

/* Способ второй */

/*
let newGoods = []
goods.map((item) => {
  if(item.type==='potato') {
    return newGoods.push(item);
  }
  else if(item.type==='apple') {
    let newPrice = item.price;
    item.price = 3 * newPrice;
    return newGoods.push(item);;
  }
});

*/

console.log(goods);
console.log(newGoods);