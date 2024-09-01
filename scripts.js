// Un simplu exemplu de validare a formularului
document.querySelector('form').addEventListener('submit', function(event) {
    const nume = document.getElementById('nume').value.trim();
    const email = document.getElementById('email').value.trim();
    const mesaj = document.getElementById('mesaj').value.trim();

    if (!nume || !email || !mesaj) {
        alert('Toate câmpurile sunt obligatorii.');
        event.preventDefault(); // Opresc trimiterea formularului
    }
});
