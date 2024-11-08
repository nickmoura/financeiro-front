const apiUrl = 'https://financeiro-back-ruby.vercel.app';

// Funções de comunicação com a API usando fetch

async function fetchAccounts() {
    const response = await fetch(`${apiUrl}/accounts`);
    return await response.json();
}

async function createAccount(name, balance) {
    await fetch(`${apiUrl}/accounts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, balance })
    });
}

async function fetchCreditCards() {
    const response = await fetch(`${apiUrl}/credit-cards`);
    return await response.json();
}

async function createCreditCard(name, limitAmount, dueDate) {
    await fetch(`${apiUrl}/credit-cards`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, limit_amount: limitAmount, due_date: dueDate })
    });
}

async function fetchTransactions() {
    const response = await fetch(`${apiUrl}/transactions`);
    return await response.json();
}

async function createTransaction(description, amount, transactionDate, settlementDate, type, categoryId) {
    await fetch(`${apiUrl}/transactions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            description, amount, transaction_date: transactionDate, settlement_date: settlementDate, type, category_id: categoryId
        })
    });
}
