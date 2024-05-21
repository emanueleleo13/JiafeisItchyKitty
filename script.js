const accounts = [
    "@mariavittorialeo02",
    "@emanueleleo13",
    "@mattweetyC",
    "@JuliaCuccioleta'smom",
    "@Myfavouriterobloxgameispiggy",
    "@Jiafeiisarockstar",
    "@itching&burning01",
    "@Hizizifranca",
    "@UserEat",
    "@Precious100054"
];

document.getElementById('randomize-button').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * accounts.length);
    const randomAccount = accounts[randomIndex];
    document.getElementById('account-display').textContent = randomAccount;
});
