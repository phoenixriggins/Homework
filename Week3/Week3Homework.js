pizzaToppings = ["Pepperoni", "Mushroom", "Sausage", "Olives"];

function greetCustomer () {

    let toppingAmount = (`Welcome to Pizza House, our toppings are ` );

    for(let toppings of pizzaToppings){
        toppingAmount += `${toppings}`;
    }
    console.log(`${toppingAmount}`)
    }


function getPizzaOrder(size, crust, ...toppings){
  let order = `One ${size} ${crust} crust pizza with`;
  for(let topping of toppings ){
    order += '${topping}'
  }
  console.log(`${order} ... coming up!`);
  return [size, crust, toppings]
}

greetCustomer();

let customersOrder = getPizzaOrder("large", "thick", "mushroom", "sausage", "olives");

function preparePizza ([Size, Crust, listToppings]){
console.log("...cooking pizza...");
return {
    size: Size,
    crust: Crust,
    toppings: listToppings
}
}
let cookedPizza = preparePizza(customersOrder);

function servePizza(pizza){
    let orderReady = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with `;
    for (let topping of pizza.toppings){
        orderReady += `${topping}, `
    }
    console.log(`${orderReady} ..Enjoy!`);
return pizza

}
servePizza(cookedPizza);