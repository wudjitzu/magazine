import { Magazine } from "./magazine.js";

const mag = new Magazine();

const operations = {
    "1": () => {
        const name = prompt("Podaj nazwę owocu:");
        const amount = parseInt(prompt("Podaj ilość:"));
        mag.Add(name, amount);
    },
    "2": () => mag.Display(),
    "3": () => {
        const id = parseInt(prompt("Podaj ID produktu do zmiany:"));
        const name = prompt("Podaj nową nazwę produktu:");
        const amount = parseInt(prompt("Podaj nową ilość:"));
        mag.Update(id, name, amount);
    },
    "4": () => {
        const id = parseInt(prompt("Podaj ID produktu do usunięcia:"));
        mag.Delete(id);
    },
    "5": () => {
        const name = prompt("Podaj ID produktu do znalezienia:");
        mag.Find(name);
    },
    "6": () => {return false},
};

while (true) {
    const choice = prompt(
        "Wybierz opcję:\n1. Dodaj\n2. Wyświetl\n3. Zaktualizuj\n4. Usuń\n5. Znajdź\n6. Wyjdź"
    );

    if (choice === "6") {
        break; // Wyjście z pętli while
    }

    const selectedOperation = operations[choice];
    if (selectedOperation) {
        selectedOperation();
    } else {
        console.log("Wybrałeś złą opcję. Spróbuj ponownie.");
    }
}