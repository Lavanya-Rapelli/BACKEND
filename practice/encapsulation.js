// Encapsulation means restricting direct access to some data inside an object and only exposing necessary parts.


class BankAccount {
    #balance; 

    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
        } else {
            console.log("Invalid deposit amount");
        }
    }

    getBalance() {
        return `Your balance is ${this.#balance}`;
    }
}

const myAccount = new BankAccount(12345, 5000);
myAccount.deposit(2000);
console.log(myAccount.getBalance());
