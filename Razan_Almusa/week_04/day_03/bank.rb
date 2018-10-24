
class Bank
  attr_accessor :owner, :account

  def initialize(name, balance = 0)
    @ownwer = name
    @balance = balance
  end

  @account = []

  def create_bank_account()
    puts "Enter your name"
    @owner = gets.chomp
    puts "Enter your balance"
    @balance = gets.chomp
    @account.push(@owner, @balance)
  end

  def total_balance
    puts "total balance : #{@balance}"
  end
end

class BankAccount < Bank
  def withdraw(amount)
    if amount < @balance
      @balance -= amount
      puts "Your new balance : #{@balance}"
    else
      puts "Sorry , you don't have enough money "
    end
  end

  def deposite(amount)
    @balance += amount
    puts "Your new balance : #{@balance}"
  end
end

acc = BankAccount.new("Razan")
acc.create_bank_account()
acc.withdraw(100)
acc.deposite(200)
aac.total_balance
p acc
