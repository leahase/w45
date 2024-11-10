// BANK ACCOUNT 

const account = {
    accountName:"Leas card", // string 
    balance: 1000,
    accountHolder:"Lea", 

    getBalance(){
        console.log(`show balance: $${this.balance}`); 
    },
    deposit (amount){
        if (amount > 0) {
        this.balance += amount;  //amount + balance
        console.log(`U deposited $${amount}. New balance: $${this.balance}.`);
        } else {
        console.log("Too low, add more than 0.");
        }
    },

    withdrawal(amount){
        if (amount > 0 && amount <= this.balance) { //amount är större än 0 och amount kan dras utifrån nuvarande balance
        this.balance -= amount; //balance - amount som tas
        console.log (`u withdrew $${amount} new balance: $${this.balance}.`);
        } else if (amount <= 0){ //amount mindre eller 0
            console.log("Too low, withdraw more than 0.");
        } else {
            console.log(`you passed ur limit`);
        }

    },
    getAccountName (){
        console.log(`account holder${this.accountHolder}`);
    },
    accountError(errorMessage){
        console.log(`Account error: ${errorMessage}`);

//  - accountError, same as above function! 

//  this one is a bit tricky... it's up to you to figure out how or what you should use this for. 

//  HINT: it's more a thinking poblem than a technical problem :) 
    },


};
function atm (){
    while (true){
        const choice = prompt(`Choose a number between 1 and 4.\n Do you want to   \n 1 show balance, \n 2 make a deposit, \n 3 withdaw money, \n 4 get account name `);

        if (choice === '1'){
            console.log(account.getBalance());
        } else if (choice === '2'){
            const depositAmount = prompt('Enter amount to deposit');
            account.deposit(depositAmount);
            alert(`New balance: ${depositAmount}`)
        } else if (choice === '3'){
            const withdrawAmount = prompt('enter amount u want to withdraw')
            account.withdrawal(withdrawAmount);
        } else if (choice === '4'){
            account.accountName;
        } else{
            (`invalid answer. try again`)
        }
    }
}
// To start the ATM, call the atm function



 

//  The atm() function should be responsible for showing the user interface 

//  and based on the user input show the right meny choice 

atm ();

