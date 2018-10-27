class Bank
  attr_accessor :name, :location, :account

  def initialize(name, location)
    @name = name
    @location = location
    @account = []
  end

  def create_account(balance = 0)
    @balance = balance
    p @account.push(@balance, @name)
  end

  def updat_account(name)
    @name = name
    puts "The new name is #{@name}"
  end

  def accounts_array
    @account.each do |details|
      puts details
    end
  end
end

class BankAccount < Bank
  def details
    puts "#{@name} #{@balance} "
  end
end

first_account = BankAccount.new("Rawan", "Riyadh")
first_account.updat_account("R")
first_account.create_account(1000000)
first_account.accounts_array()
first_account.details()

second_account = BankAccount.new("RA", "Qassim")
second_account.create_account(1000)
second_account.details()
