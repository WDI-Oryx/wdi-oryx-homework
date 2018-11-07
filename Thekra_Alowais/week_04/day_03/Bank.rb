class Bank
  attr_accessor :name, :location, :accounts

  def initialize(name, location)
    @name = name
    @location = location
    @accounts = []
  end

  def create_account(name = "", balance = 0)
    # puts "The name is #{name} and the balance is #{balance}"
    bank_acc = BankAccount.new(name, balance)
    @accounts.push(bank_acc)
    # p "the accounts: #{@accounts}"
    return bank_acc
  end

  # Delete an Account
  def delete_acc(obj)
    @accounts.delete(obj)
    # p @accounts
  end
end

class BankAccount
  attr_accessor :owner, :balance

  def initialize(owner, balance)
    @owner = owner
    @balance = balance
  end

  # Update BankAccount name
  def update_name(newname)
    @owner = newname
  end

  def withdraw(withdraw)
    if @balance >= withdraw
      #   p "the balance #{@balance}"
      @balance -= withdraw
      if @balance < 100
        p "Low balance, please add funds."
      end
    end
  end

  def deposit(deposit)
    @balance += deposit
  end

  # Have a method that prints the name and balance of that BankAccount
  def show_bankaccount()
    p "The owner is #{@owner}, and The balance is #{@balance}"
  end

  # Add the ability to Transfer money to another BankAccount
  def transfer(amount, other)
    @balance -= amount
    other.balance += amount
    puts "#{@owner} your balance will be #{@balance} after the transfering to #{other.owner}"
  end
end

new_bank = Bank.new("alrajhi", "Riyadh")

thekra_account = new_bank.create_account("Thekra", 1000)
noura_account = new_bank.create_account("noura", 12)

puts thekra_account.balance
puts thekra_account.owner
thekra_account.withdraw(100)
puts thekra_account.balance
puts thekra_account.deposit(100)
noura_account.show_bankaccount()
thekra_account.update_name("Koloud")
# p thekra_account
new_bank.delete_acc(noura_account)
thekra_account.transfer(100, noura_account)
# p noura_account
# p thekra_account
