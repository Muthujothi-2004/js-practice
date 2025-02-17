function shopping(items) {
    let total = 0;
    
    for (let i = 0; i < items.length; i++) {
        total = total + (items[i].price * items[i].quantity); 
    }
    
    console.log("Total Price:", total);
}

const items = [    
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 700, quantity: 2 },
    { name: "Keyboard", price: 1500, quantity: 1 }
];

shopping(items); 
