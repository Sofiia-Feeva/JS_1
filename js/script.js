/* Завдання 1 */
let city = 'Kyiv';
city = 'Lviv';
var address = ` ${city}` 
console.log(address)

/* Завдання 2 */
var n = 5;
var result = `${ n*n*n}` ;
console.log(result);

/* Завдання 3 */
var pen = 4;
var pencil = 6;
var pr_pen = 5.25;
var pr_pencil = 3.5;
var all_cost = `${pen * pr_pen+pencil * pr_pencil}`;
console.log(all_cost);
var price_all = {
    pen_number: `${pen}`,
    pencil_number: `${pencil}`,
    pencil_price : `${pr_pencil}` ,
    pen_price: `${pr_pen}`,
    total_cost : `${all_cost}`
}
console.log(price_all);
document.write(`${all_cost}`);