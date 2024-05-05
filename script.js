// Eine Funktion, um die Mengen umzurechnen
function umrechnen(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Formulars

    // Lesen der Eingaben von der Benutzerin
    const personenImRezept = parseInt(document.getElementById('personenImRezept').value);
    const vorhandeneMenge = parseInt(document.getElementById('vorhandeneMenge').value);
    const gewuenschtePersonen = parseInt(document.getElementById('gewuenschtePersonen').value);

    // Hier die Umrechnungslogik implementieren
    // Dies ist nur ein Platzhalter
    const neueMenge = (vorhandeneMenge / personenImRezept) * gewuenschtePersonen;

    // Anzeigen des Ergebnisses
    document.getElementById('ergebnis').innerText = `Die neue Menge beträgt: ${neueMenge.toFixed(2)} Einheiten`;
}

// Ereignislistener hinzufügen, um die Umrechnungsfunktion aufzurufen
document.getElementById('umrechner-form').addEventListener('submit', umrechnen);
