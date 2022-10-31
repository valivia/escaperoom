const inventoryItemSection = document.createElement('section');
inventoryItemSection.classList.add('inventory-item');

let open = false;

const getInventoryItem = (imageUrl, inventorySection) => {
    open = !open;
    inventoryItemSection.innerHTML = `<img src="${imageUrl}" alt="letter" class="inventory-image"/>`
    if (open) {
        inventoryItemSection.style.display = 'block'
    } else {
        inventoryItemSection.style.display = 'none'
    }
    inventorySection.appendChild(inventoryItemSection)
}

export default  getInventoryItem;