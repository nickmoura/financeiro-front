// Funções auxiliares para manipular o DOM

function openAccountForm() {
    const accountForm = document.getElementById('account-form');
    accountForm.classList.toggle('d-none'); // Alterna a exibição do formulário de conta
    if (!accountForm.classList.contains('d-none')) {
        accountForm.reset(); // Limpa o formulário se ele estiver visível
    }
}

function openCreditCardForm() {
    const creditCardForm = document.getElementById('credit-card-form');
    creditCardForm.classList.toggle('d-none'); // Alterna a exibição do formulário de cartão
    if (!creditCardForm.classList.contains('d-none')) {
        creditCardForm.reset(); // Limpa o formulário se ele estiver visível
    }
}

function openTransactionForm() {
    const transactionForm = document.getElementById('transaction-form');
    transactionForm.classList.toggle('d-none'); // Alterna a exibição do formulário de transação
    if (!transactionForm.classList.contains('d-none')) {
        transactionForm.reset(); // Limpa o formulário se ele estiver visível
    }
}
