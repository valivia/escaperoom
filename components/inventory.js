import {getButtonWithIcon, getButtonWithText} from "./button.js";
import {showPopup} from "./popup.js";
import getInventoryItem from "../handlers/inventoryItem.js";


const section = document.createElement('section');
section.classList.add('inventory')

const itemsSection = document.createElement('section');
itemsSection.classList.add('inventory-items')

const generateCurrentInventoryItems = () => {
    const inventory = [
        {
            key: localStorage.getItem("key1"),
            iconUrl: `/assets/icons/items/letter.svg`,
            handler: () => getInventoryItem('assets/frames/inventory/letter.jpg', section)
        },
        {
            key: localStorage.getItem("key2"),
            iconUrl: `/assets/icons/items/secrets.svg`,
            handler: () => getInventoryItem('assets/frames/inventory/TODO.png', section)
        }
    ]

    // You can change the key and the property value to your likings

    console.log(inventory)

    return inventory;
}

const getInventory = () => {
    const currentInventoryItems = generateCurrentInventoryItems()

    currentInventoryItems.map((item) => {
        item.key ? itemsSection.appendChild(getButtonWithIcon(item.iconUrl, item.handler)) : itemsSection.appendChild(getButtonWithText('X', () => showPopup('Something went wrong', "You don't have this inventory item available", true)))

    })
    section.appendChild(itemsSection);
    return section;
}

export { getInventory };