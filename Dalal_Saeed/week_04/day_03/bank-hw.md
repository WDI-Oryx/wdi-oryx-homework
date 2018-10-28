# Class Homework

Create a `Bank` in Ruby. The `Bank` should have many `BankAccount`s in it.

A Bank should be able to:

- Create a BankAccount with an initial balance and name
  - If no initial balance is given, default initial balance should be 0
- Update BankAccount name

A BankAccount should be able to:

- Withdraw money
  - Takes in the amount to be withdrawn as a parameter and updates the balance when the withdrawal is done
  - You should not be able to withdraw more money than you have
  - If the BankAccount has a new balance of less than 100, print `Low balance, please add funds.`
- Deposit money
  - Takes in the amount to be deposited as a parameter and updates the balance when the deposit is done
- Have a method that prints the name and balance of that BankAccount

## Bonus

Add functionality to allow a Bank to:
- Delete an Account

Add functionality to the BankAccount:
- Add the ability to Transfer money to another `BankAccount`