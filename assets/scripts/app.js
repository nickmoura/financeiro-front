async function displayAccounts() {
    const accounts = await fetchAccounts();
    const accountsList = document.getElementById('accounts-list');
    accountsList.innerHTML = accounts.map(account => `<p>${account.name}: R$${account.balance}</p>`).join('');
}

async function addAccount(event) {
    event.preventDefault();
    const name = document.getElementById('account-name').value;
    const balance = parseFloat(document.getElementById('account-balance').value);
    await createAccount(name, balance);
    displayAccounts();
}

// Similar funções para cartões de crédito e transações
async function displayCreditCards() {
    const cards = await fetchCreditCards();
    const cardsList = document.getElementById('credit-cards-list');
    cardsList.innerHTML = cards.map(card => `<p>${card.name}: Limite de R$${card.limit_amount}</p>`).join('');
}
