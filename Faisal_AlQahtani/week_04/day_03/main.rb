class Bank
  attr_accessor :name, :location, :accounts

  def initialize(name, location)
    @name = name
    @location = location
    @accounts = []
    puts "Your Bank is #{@name} in #{@location}"
  end

  def create_acc(name, balance = 0)
    new_acc = BankAccount.new(name, balance)
    @accounts.push(new_acc)
    new_acc
  end

  #   def update_name (old, new)
  #     @
  #   end
end

class BankAccount
  attr_accessor :name, :balance

  def initialize(name, balance = 0)
    puts "A new Account has been made."
    @name = name
    @balance = balance
  end

  def withdraw(num)
    if @balance > num
      @balance -= num
      puts "You have Withdrawn #{num} from your account."
      puts "Your Balance is now: #{@balance}"
      if @balance < 100
        puts "Low balance, please add funds."
      end
    else
      puts "Declined, your account only has #{@balance} "
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

# faisal.withdraw(450)
# faisal.deposit(200)
# p faisal
# faisal.name_of_account

myBank = Bank.new("Alinma", "Al-Riyadh")
my_account = myBank.create_acc("Faisal", 500)
my_account.name_of_account
my_account.withdraw(30)
