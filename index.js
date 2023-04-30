//Add survey results using the key value pairs.//
const customer = {
  firstName: "jake",
  lastName: "smith",
  email: "jaekSmih!aol.com",
  phone: undefined,
  zipCode: "631",
  favoriteFlavors: 32,
  cupSize: "medium",
  favoriteStore: "Target",
  firstVisit: false,
};

// Use bracket notation to fix the 4 properties of the objects. //
// Modify the 4 properties in the customer object //
// change email to "Jak3Smith1992@email.com"//
customer["email"] = "Jak3Smith1992@email.com";

// change phone to "3195551234" //
customer["phone"] = "3195551234";

// change zipCode to "63132" //
customer["zipCode"] = "63132";

// change favoriteFlavors to "coffee", "strawberry", & "Matcha" //
(customer["favoriteFlavors"] = "coffee"), "strawberry", "matcha";

// Delete zipCode and favoriteStore properites from the customer object //
delete customer["zipCode"];
delete customer["favoriteStore"];

// print the updated table to the terminal //
console.table(customer);

// Add new items: toppings, future flavors, & today's purchase cost using dot notation//
customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = "5.32";

// print the updated table //
// Review the finalized list and then print the keys into an array //
console.table(customer);
console.log(customer);
