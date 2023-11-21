const menuItems = {
    Milk_shake: { price: 5, image: 'milkshake.jpg' },
    Chicken_wrap: { price: 15, image: 'wrap.png' },
    Ice_cream: { price: 2, image: 'ice cream.png' },
    Duncked_Wings: { price: 5, image: 'duncked wings.jpg' },
    Burger: { price: 10, image: 'Burger.jpg' },
    
};

const placedOrders = [];

function addToOrder(item) {
    const customerName = prompt("Enter customer name:");
    const preparationTime = menuItems[item].price;

    const order = {
        customerName,
        menuItem: item,
        estimatedCompletionTime: calculateCompletionTime(preparationTime),
    };

    placedOrders.push(order);
    updateOrderList();
}

function calculateCompletionTime(preparationTime) {
    const now = new Date();
    const completionTime = new Date(now.getTime() + preparationTime * 60000);
    return completionTime.toLocaleTimeString();
}

function updateOrderList() {
    const orderList = document.getElementById("order-list");
    orderList.innerHTML = "";

    placedOrders.forEach(order => {
        const listItem = document.createElement("li");

        // Create an image element
        const img = document.createElement("img");
        img.src = menuItems[order.menuItem].image;
        img.alt = order.menuItem;
        img.style.width = "50px"; 
        img.style.marginRight = "10px"; 
        listItem.appendChild(img);

        // Display order information with styled text
        const orderInfo = document.createElement("span");
        orderInfo.innerHTML = `${order.customerName} - ${order.menuItem} - <span style="font-style: italic; font-weight: bold;">WILL BE READY AT:</span> <span style="font-style: italic; font-family: 'Arial', sans-serif;">${order.estimatedCompletionTime}</span>`;
        listItem.appendChild(orderInfo);

        orderList.appendChild(listItem);
    });
}
