require "pry"

class Bank
  attr_accessor :name

  def initialize(name = "new user", balance = 0)
    @balance = balance
    @name = name
    # @bank_accounts = []
  end
end

class BankAccount
  def initialize
    # @userid  = rand(1000-9000)
    # @bank_accounts.push(@userid)

    def withdraw(amount)
      @balance -= amount
      puts "Your new balance is #{@balance}"
      if @balance < amount
        puts "You don't have enough money"
      end
      if @balance < 100
        puts "Low balance, please add funds"
      end
    end

    def deposit(amount)
      @balance += amount
      puts "Your new balance is #{@balance}"
    end

    def banker
      puts "#{@name}: You have #{@balance} $ in your account"
    end
  end
end

moi = Bank.new("moi", 100000)
# moi = BankAccount.new
