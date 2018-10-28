require "pry"

class Bank
  attr_accessor :name, :location, :accounts

  def initialize(name, location)
    puts "A new bank was established"
    @name = name
    @location = location
    @accounts = []
  end

  def open(name, deposit = 0)
    new_one = Bank_Account.new(name, deposit)
    @accounts.push(new_one)
    puts ("#{name} opend account with SR#{deposit} balance")
  end

  def update_name(old_name, new_name)
    # old_name = @name
    # @name = new_name
    person = @accounts.find { |account| account.name == old_name }
    person.name = new_name
    puts ("the name of account holder changed from #{old_name} to #{new_name}")
  end

  def delete_account(name)
    @name.delete
    puts "#{name} account was deleted"
  end
end

class Bank_Account
  attr_accessor :name, :balance

  def initialize(name, initial_balance)
    puts "A new account was opened"
    @name = name
    @balance = initial_balance
  end

  def withdraw(amount)
    @balance = @balance - amount
    puts "SR#{amount} was withdrawn and the balance became SR#{@balance}"
  end

  def delete_account(name)
    @name.delete
    puts "#{name} account was deleted"
  end
end

# # binding.pry
alinma = Bank.new("Alinma", "Riyadh")
# saud = Bank_Account.new()
alinma.open("Saud", 1000)
alinma.update_name("Saud", "Ali")
alinma.accounts[0].withdraw(500)
# p saud
# p Bank
# khalid = Bank.new()
# khalid.open("Khalid", "Dammam")
p alinma

# khalid.delete
# p khalid
# p Bank
