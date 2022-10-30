import { getButtonWithIcon, getButtonWithText } from "./button.js";
import { showPopup } from "./popup.js";

const section = document.createElement('section');
section.classList.add('inventory')

const generateCurrentInventoryItems = () => {
    const inventory = []

    // You can change the key and the property value to your likings

    if (localStorage.getItem("key1")) {
        inventory.push(
            {
                key: localStorage.getItem("key1"),
                iconUrl: ``,
                handler: () => alert(localStorage.getItem("key1"))
            }
        )
    } else { inventory.push({ key: null }) }
    if (localStorage.getItem("key2")) {
        inventory.push(
            {
                key: localStorage.getItem("key2"),
                iconUrl: ``,
                handler: () => alert(localStorage.getItem("key2"))
            }
        )
    } else { inventory.push({ key: null }) }

    console.log(inventory)

    return inventory;
}

const getInventory = () => {
    const currentInventoryItems = generateCurrentInventoryItems()
    currentInventoryItems.map((item) => {
        item.key ? section.appendChild(getButtonWithIcon(item.iconUrl, item.handler)) : section.appendChild(getButtonWithText("&#x2715;", () => showPopup('Something went wrong', "You don't have this inventory item available", true)))
    })
    return section;
}

export { getInventory };