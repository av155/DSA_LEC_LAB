// Prompt for item choice
let choice = prompt("Enter your items:");
// Prompt for quantity
let amount = parseFloat(prompt("Enter the quantity to be ordered:"));

let cost = 0;
switch (choice) {
    case "A":
        console.log("Pepsi Cola");
        cost = 17;
        break;
    case "B":
        console.log("Coca Cola");
        cost = 17;
        break;
    case "C":
        console.log("Apple (per kg)");
        cost = 15;
        break;
    case "D":
        console.log("Orange (per kg)");
        cost = 20;
        break;
    case "E":
        console.log("Hotdogs (per kg)");
        cost = 65;
        break;
    default:
        alert("No matching Item! Try to re-run the program.");
}

// Calculate total cost if valid item
if (cost > 0) {
    let total = cost * amount;
    alert(The Total Price of the order (${choice}) x (${amount}): ${total});
}