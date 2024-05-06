/* Exercise - TRANSACTION ANALYSIS

Imagine you have a list of financial transactions and you want to perform various data processing operations.

Use the following instructions as a guide to complete the exercise:
    1. Calculate Total Balance: - Use the reduce method to calculate and display the total balance of all transactions.
    2. Find the Largest Transaction (Income or Expense): - Utilize the reduce method to find the transaction with the largest amount (either income or expense) and display it in the console.
    3. Filter Purchase Transactions: - Use the filter method to obtain and display in the console only the purchase transactions (with negative amounts).
    4. Find a Transaction by Description: - Use the find method to search and display in the console a specific transaction by its description.
    5. Find the Index of a Transaction by Amount: - Employ the findIndex method to find and display in the console the index of a specific transaction by its amount.
    6. Update Transaction Descriptions: - Use the forEach method to update the descriptions of transactions.

Add the prefix "Expense: " to transactions with negative amounts and "Income: " to transactions with positive amounts. Display the updated transactions in the console.

Remember to adapt and combine these operations as needed.
*/

// Defined transactions
const transactions = [
    { id: 1, description: 'Grocery Shopping', amount: -50 },
    { id: 2, description: 'Salary Deposit', amount: 2000 },
    { id: 3, description: 'Utility Bill Payment', amount: -100 },
    { id: 4, description: 'Online Purchase', amount: -30 }
]

// 1. Calculate Total Balance: - Use the reduce method to calculate and display the total balance of all transactions.
function calculateTotalBalance(transactions) {
    return totalBalance = transactions.reduce((total,transaction) => total+transaction.amount, 0)
}

// 2. Find the Largest Transaction (Income or Expense): - Utilize the reduce method to find the transaction with the largest amount (either income or expense) and display it in the console.
function largestTransaction(transactions) {
    const largest = transactions.reduce((max,transaction) => {
        return Math.abs(transaction.amount) > Math.abs(max.amount) ? transaction : max
    }, transactions[0])
    return largest
}

// 3. Filter Purchase Transactions: - Use the filter method to obtain and display in the console only the purchase transactions (with negative amounts).
function filterExpenses(transactions) {
    const expenseTransactions = transactions.filter(transaction => transaction.amount < 0)
    return expenseTransactions
}

// 4. Find a Transaction by Description: - Use the find method to search and display in the console a specific transaction by its description.
function findTransactionDescription(description, transactions) {
    return transactions.find(transaction => transaction.description === description) || 'No transaction found with this description'
}

// 5. Find the Index of a Transaction by Amount: - Employ the findIndex method to find and display in the console the index of a specific transaction by its amount.
function findTransactionIndex(amount, transactions) {
    const foundIndex =  transactions.findIndex(transaction => transaction.amount === amount)
    return foundIndex !== -1 ? foundIndex : 'No index found'
}

// 6. Update Transaction Descriptions: - Use the forEach method to update the descriptions of transactions.
function updateTransactionDescripcion (transactions) {
    transactions.forEach(transaction => {
        if (transaction.amount <= 0) {
            transaction.description = `Expense: ${transaction.description}`
        } else {
            transaction.description = `Income: ${transaction.description}`
        }
    });
    return transactions
}

console.log('The total amount on transactions is: ', calculateTotalBalance(transactions))
console.log('The larger transactions is: ', largestTransaction(transactions))
console.log('Expenses: ', filterExpenses(transactions))
console.log('Find transaction with description "Salary desposit"...', findTransactionDescription('Salary Deposit', transactions))
console.log('Find transaction with description "Fund"...', findTransactionDescription('Fund', transactions))
console.log('Index of transaction with amount 2000...', findTransactionIndex(2000, transactions))
console.log('Index of transaction with amount -1230...', findTransactionIndex(-1230, transactions))
console.log('Transactions without updated descriptions: ', transactions)
console.log('Transactions with updated descriptions: ', updateTransactionDescripcion(transactions))