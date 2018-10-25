class Bank
  attr_accessor :name, :location, :accounts

  def initialize(name, location)
    @name = name
    @location = location
    @accounts = []
  end

  def create_account(balance = 0, owner)
    account = BankAccount.new owner, balance
    @accounts.push account
    puts "Account has been created"
    return @accounts[-1]
  end

  def update(name)
    @name = name
    puts "Name has been updated"
  end
end

class BankAccount < Bank
  attr_accessor :owner, :balance

  def initialize(owner, balance)
    @owner = owner
    @balance = balance
  end

  def withdraw(amount)
    if @balance >= amount
      @balance -= amount
      puts "Withdrew done"
      if @balance < 100
        puts "Low balance, please add funds."
      end
    end
  end

  def deposit(amount)
    @balance += amount
    puts "deposit done"
  end

  def print_name_and_balance
    puts "Name: #{@owner}, Balance: #{@balance}"
  end
end

accounts = Bank.new "SABB", "Saudi Arabia"

user_1 = accounts.create_account 200000, "Sarah"
p user_1
user_1.withdraw 50
user_1.deposit 1000
user_1.print_name_and_balance

user_2 = accounts.create_account 3333, "Sarah"
p user_2
user_1.withdraw 200
user_1.deposit 5000
user_1.print_name_and_balance
