class Bank
  attr_accessor :name, :location, :accounts

  def initialize(name, location)
    @name = name
    @location = location
    @accounts = []
    puts " the name of the bank #{@name} and location #{@location}"
  end

  def create_account(name, balance = 0)
    new_account = BankAccount.new(name, balance)
    puts "the name is :#{@name} and the balance is #{@balance}"
    @accounts.push(new_account)
    new_account
  end
end

class BankAccount
  attr_accessor :name, :balance

  def initialize(name, balance = 0)
    puts "A new Account "
    @name = name
    @balance = balance
  end

  def withdraw(numbers)
    if @balance > numbers
      @balance -= numbers
      puts "Your Withdrawn #{@numbers} from your account."
      puts "Your Balance: #{@balance}"
      if @balance < 100
        puts "Low balance please add funds."
      end
    else
      puts " account only has #{@balance} "
    end
  end

  def deposit(num)
    @balance += num
    puts "You have Deposited #{num} into your Account"
  end

  def name_of_account
    puts "Name: #{@name}, Balance: #{@balance}"
  end
end

myBank = Bank.new("al-ryadh", "Al-meddinah")

account = myBank.create_account("mohammed", 10000)

account.withdraw(50)
