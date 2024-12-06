let loggedIn = true
let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)', 'Tomato']

if (loggedIn) {
    console.log(`Here are the products we have available: `)
    for (let i = 0; i < cart.length; i++) {
        console.log(cart[i])
    }
}
else {
    console.log(`Please log in before viewing our selection.`)
}


let bankAccount = 1000;

function deposit(deposit) {
    if (deposit <= 0) {
        console.log(`${deposit} is not a valid entry for a deposit, please try again.`)
    }
    else {
        bankAccount = bankAccount + deposit
        console.log(`Deposit successful. Your current balance is $${bankAccount}`)
    }
};

function withdraw(withdraw) {
    if (withdraw > bankAccount) {
        console.log(`You don't have that much money in your account.`)
    }
    else if (withdraw >= 0) {
        console.log(`${withdraw} is not a valid entry for a withdrawal, please try again.`)
    }
    else {
        bankAccount = bankAccount - withdraw
        console.log(`Withdrawal successful. Your current balance is $${bankAccount}`)
    }
};

function checkBalance() {
    console.log(`Your current balance is $${bankAccount}`)
};

checkBalance();

deposit(200);
deposit(0);
deposit(-200);

withdraw(2000);
withdraw(0);
withdraw(500);


