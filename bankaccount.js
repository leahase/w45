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
        this.balance +- amount; //balance - amount som tas
        console.log (`u withdrew $${amount} new balance: $${this.balance}.`);
        } else if (amount <=0){ //amount mindre eller 0
        console.log("Too low, withdraw more than 0.");
        } else {
            console.log(`you passed ur limit`);
        }

    },
    getAccountName (){
        console.log(`account holder${this.accountName}`);

    },
    accountError(){

//  - accountError, same as above function! 

//  this one is a bit tricky... it's up to you to figure out how or what you should use this for. 

//  HINT: it's more a thinking poblem than a technical problem :) 
    },


};


// EXTRA: exitAccount, should be a function 

//  this function should exit the account 

//  HINT: there are a few different ways to do this, it's up to you which way you choose. 

 

//  EXTRA = OPTIONAL NOT MANDATORY 

 

//  Remember that a function is just a value. And if a function is just a 

//  value then we can both pass it as a parameter to a function and 

//  pass it as a property of an object. 

 

//  The object should handle all of the functionality (logic) 

 

//  The atm() function should be responsible for showing the user interface 

//  and based on the user input show the right meny choice 



