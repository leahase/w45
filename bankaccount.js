// BANK ACCOUNT 



// REQUIREMENTS 

// Create an object called account that has the following properties: 


// This property should contain the name of the account holder 

const account = {
    accountName:"card", // // accountName, should be the data type string 
    balance: 1000,
    accountHolder:"Lea", // - balance, should be the data type number 
    // this property should contain the total amount of the account 
    getBalance(){
        console.log(`show balance: $${this.balance}`); //  - getBalance, should be a function this function should display the total amount of the account to the user 
    },
    deposit (amount){
        if (amount > 0) {
        this.balance += amount;  //amount + balance
        console.log(`U deposited $${amount}. New balance: $${this.balance}.`);
        } else {
        console.log("Too low, add more than 0.");
        }
    },
        //  this function should be able to deposit money onto the balance of the account         
    withdrawal(amount){
        if (amount > 0) {
        this.balance +- amount; //balance - amount som tas
        console.log (`u withdrew $${amount} new balance: $${this.balance}.`);
        } else {
        console.log("Too low, withdraw more than 0.");
        }
        //  this function should be able do withdrawal money from the balance of the account 
    },
    getAccountName (){
        //  this function should dispaly the account holders name to the user 

    },
    accountError(){

//  - accountError, same as above function! 

//  this one is a bit tricky... it's up to you to figure out how or what you should use this for. 

//  HINT: it's more a thinking poblem than a technical problem :) 
    },


}
console.log(account.getAccountName());

 

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



