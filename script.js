let totalAmount = 0;
let orderDetails = [];

function addToOrder(price, itemName) {
    let quantityInputId = `${itemName.toLowerCase().replace(' ', '-')}-quantity`;
    let quantity = parseInt(document.getElementById(quantityInputId).value) || 0;

    if (quantity > 0) {
        totalAmount += price * quantity;
        orderDetails.push(`${quantity} x ${itemName}`);
    }
}

function finalizeOrder() {
    if (totalAmount > 0) {
        const totalWithTax = (totalAmount * 1.08).toFixed(2);

        // Set the form values
        document.getElementById('order-details').value = orderDetails.join(', ');
        document.getElementById('total-amount').value = totalAmount.toFixed(2);
        document.getElementById('total-with-tax').value = totalWithTax;

        // Submit the form to redirect to the confirmation page
        document.getElementById('order-form').submit();
    } else {
        alert("Please order at least one item.");
    }
}
