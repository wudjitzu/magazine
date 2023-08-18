export class Magazine {
    constructor() {
        this.db = [];
    }

    Add(name, amount) { 
        const id = this.db.length + 1;
        this.db.push({ id, name, amount });
    }

    Display() {
        console.log("Zawartość magazynu:");
        this.db.forEach(item => {
            console.log(`ID: ${item.id}, Nazwa: ${item.name}, Ilość: ${item.amount}`);
        });
    }

    Update(id, name, amount) {
        const itemToUpdate = this.db.find(item => item.id === id);
        if (itemToUpdate) {
            itemToUpdate.name = name;
            itemToUpdate.amount = amount;
            console.log(`Produkt o ID ${id} uaktualniony.`);
        } else {
            console.log(`Produkt o ID ${id} nie znaleziony.`);
        }
    }

    Delete(id) {
        const initialLength = this.db.length;
        this.db = this.db.filter(item => item.id !== id);
        if (this.db.length === initialLength - 1) {
            console.log(`Produkt o ID ${id} został usunięty.`);
        } else {
            console.log(`Produkt o ID ${id} nie znaleziony.`);
        }
    }

    Find(name) {
        const foundItem = this.db.find(item => item.name.toLowerCase() === name.toLowerCase());
        if (foundItem) {
            console.log(`Produkt znajduje się w magazynie - Nazwa: ${foundItem.name}, Ilość: ${foundItem.amount}`);
        } else {
            console.log(`Produkt o nazwie '${name}' nie został znaleziony.`);
        }
    }
}
