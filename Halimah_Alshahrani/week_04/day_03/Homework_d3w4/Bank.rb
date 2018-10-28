require "pry"

class Bank
  attr_accessor :Bank_name, :location, :accounts

  def initialize(name, location)
    @Bank_name = name
    @location = location
    @accounts = []
  end

  def name_update(old_name, new_name)
    @accounts.each do |account|
      if account.name == old_name
        account.name = new_name
      end
    end
  end

  def add_account(name, init_balance)
    account = Bank_account.new(name, init_balance)
    @accounts.push(account)
  end

  def accounts_list
    puts "Here are all the accounts:"
    @accounts.each do |account|
      puts @accounts
    end
  end
end

class Bank_account < Bank
  attr_accessor :name, :init_balance

  def initialize(name, init_balance = 0)
    puts "#{name} account has created"
    @name = name
    @init_balance = init_balance
  end

  def withdrawal(name, amount)
    if amount > 0
      @init_balance -= amount
      puts "#{name} withdrew $#{amount} now #{name}'s account has #{@init_balance}."
    end
  end

  def deposit(name, amount)
    if amount > 0
      @init_balance += amount
      puts "#{name} deposited $#{amount} now #{name}'s account has #{@init_balance}."
    end
  end
end

my_bank = Bank.new("ANB", "Riyadh")
my_account = Bank_account.new("Halima", "15000000")
# my_account.withdrawal("Halima", 100000)
my_bank.add_account(account)
p my_bank
# p my_account

binding.pry
