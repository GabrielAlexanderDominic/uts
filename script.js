function searchItems() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const items = document.querySelectorAll('.list-item .item');
    items.forEach(item => {
        const itemName = item.querySelector('p').innerText.toLowerCase();
        if (itemName.includes(searchInput)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function addItem(name, price) {
    const checkoutItems = document.getElementById('checkoutItems');
    const newItem = document.createElement('div');
    newItem.className = 'item';
    newItem.innerHTML = `<p>${name}</p><p>$${price.toFixed(2)}</p>`;
    checkoutItems.appendChild(newItem);

    updateSummary(price);
}

function updateSummary(price) {
    const netExcludingTax = document.getElementById('netExcludingTax');
    const netPayable = document.getElementById('netPayable');

    const currentNetExcludingTax = parseFloat(netExcludingTax.innerText.replace('$', ''));
    const currentNetPayable = parseFloat(netPayable.innerText.replace('$', ''));

    const newNetExcludingTax = currentNetExcludingTax + price;
    const newNetPayable = currentNetPayable + price;

    netExcludingTax.innerText = `$${newNetExcludingTax.toFixed(2)}`;
    netPayable.innerText = `$${newNetPayable.toFixed(2)}`;
}

function pay() {
    alert('Payment successful!');
    resetCheckout();
}

function resetCheckout() {
    const checkoutItems = document.getElementById('checkoutItems');
    checkoutItems.innerHTML = '<p>Please add an item</p>';

    document.getElementById('netExcludingTax').innerText = '$0.00';
    document.getElementById('netPayable').innerText = '$0.00';
}
