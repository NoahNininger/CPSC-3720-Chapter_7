/*
   1. Create a class that contains the prices of two menu items 
      as private field declarations.
*/
class MenuPriceCalculator
{
 // the prices of two menu items as private field declarations
   #item1Price;
   #item2Price;

 // (how many of each item are being bought)
   #item1Num;
   #item2Num;

 /*
   2. Use the constructor in the class to get the argument values 
      (how many of each item are being bought).
 */
   constructor(item1Price, item2Price, item1Num, item2Num)
   {
      this.#item1Price = item1Price;
      this.#item2Price = item2Price;

      this.#item1Num = item1Num;
      this.#item2Num = item2Num;
   }
 
 /*
   3. Create a method to calculate and return the total cost
      depending on how many of each item the user selects.
 */
   calcTotalCost()
   {
      return (this.#item1Price * this.#item1Num) + 
             (this.#item2Price * this.#item2Num);
   }
 
 /*
   4. Use a getter property to grab the value output by the 
      calculation method.
 */
   get totalCost()
      { return this.calcTotalCost(); }
}
 
/*
   5. Create two or three objects with different combinations of 
      menu selections, and output the total cost in the console.
*/
console.log("Two Objects:");

let obj1 = new MenuPriceCalculator(1.99, 1.99, 1, 1);
console.log("Total Cost: $" + obj1.totalCost.toFixed(2));

let obj2 = new MenuPriceCalculator(1.99, 1.99, 2, 4);
console.log("Total Cost: $" + obj2.totalCost.toFixed(2));


console.log("Three Objects:");

obj1 = new MenuPriceCalculator(2.99, 2.99, 2, 2);
console.log("Total Cost: $" + obj1.totalCost.toFixed(2));

obj2 = new MenuPriceCalculator(2.99, 2.99, 4, 8);
console.log("Total Cost: $" + obj2.totalCost.toFixed(2));

let obj3 = new MenuPriceCalculator(4.50, 8.75, 12, 16);
console.log("Total Cost: $" + obj3.totalCost.toFixed(2));