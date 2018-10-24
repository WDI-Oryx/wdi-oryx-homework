class Bank
  attr_accessor :name, :location, :accounts

  def initialize(name, location)
    puts "#{name} has been added"
    @name = name
    @location = location
    @accounts = []
  end

  def add_account(name, balance = 0)
    account = Bank_accounts.new(name, balance)
    @accounts.push(account)
    # p @accounts
  end

  def owner_rename(old_name, new_name)
    @accounts.each do |account|
      if account.owner == old_name
        # p account.owner
        account.owner = new_name
        # p account.owner
      end
    end
  end

  def delete_account(owner)
    @accounts.each do |account|
      if account.owner == owner
        @accounts.delete_at(@accounts.index(account))
      end
    end
  end
end

# class of bank accounts
class Bank_accounts < Bank
  attr_accessor :owner, :balance

  #initial balance should be 0
  def initialize(owner, balance = 0)
    puts "#{owner} account has created"
    @owner = owner
    @balance = balance
  end

  def withdraw(money)
    @balance -= money
    if (@balance < 100)
      puts "Low balance, please add funds."
    end
  end

  def deposit(money)
    @balance += money
  end

  def account_info
    puts "Account owner: #{@owner}| Balance: #{@balance}"
  end
end

# sabb = Bank.new("SABB", "Riyadh")
# sabb.add_account("NouraAbdulaziz")
# sabb.add_account("ReemaAbdulaziz")
# sabb.owner_rename("NouraAbdulaziz", "NouraAlhadlaq")
# sabb.delete_account("NouraAbdulaziz")
# p sabb

# noura = Bank_accounts.new("Noura Alhadlaq", 200)
# noura.withdraw(101)
# p sabb.accounts
# p noura
# noura.account_info
