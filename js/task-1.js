function makeTransaction(quantity, pricePerDroid, customerCredits) {
    if (pricePerDroid * quantity > customerCredits) {
        return "insufficient funds!";
    }
    return `You ordered ${quantity} droids worth ${pricePerDroid * quantity} credits!`; 
}
