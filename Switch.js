function processOrder(item) {
    switch (item) {
        case "burger":
        return "Preparing your burger.It will take 10 minutes.";
        case "pizza":
        return "Baking your pizza! It will be ready in 15 minutes.";
        case "pasta":
        return "Cooking pasta with fresh ingredients. Ready in 12 minutes.";
        default:
            return "Item not available. Please check our menu.";

    }
}

console.log(processOrder("burger"));