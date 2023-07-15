//MODEL CUSTOMER
let customer = [
    {
        customerId: '',
        name: "",
        email: "",
        balance: 5000000
    }
]

function generateCustomerId() {
    return Math.random().toString(10).substr(2, 6)
}

export function getAllCustomer() {
    return customer;
}

export function getCustomer(customerId) {
    return customer.fint((c) => c.customerId === customerId);
}

export function createCustomer(name, email, initialBalance) {
    let newCustomer = {
        customerId: generateCustomerId(),
        name: name,
        email: email,
        balance: initialBalance
    }
    return newCustomer
}



// MODEL TRANSACTION
let transactions = [
    {
        transactionId: '',
        sourceId: "",
        destinationId: "",
        amount: 0,
        timestamp: ""
    }
]

export function createTransaction(sourceId, destinationId, amount) {
    const transaction = {
        transactionId: generateTransactionId(),
        sourceId,
        destinationId,
        amount,
        timestamp: new Date().toISOString()
    };
    transactions.push(transaction);
    return transaction;
}
// Helper function to generate a unique transaction ID
function generateTransactionId() {
    // Generate a random string or use a unique ID generation algorithm
    return Math.random().toString(36).substr(2, 9);
}