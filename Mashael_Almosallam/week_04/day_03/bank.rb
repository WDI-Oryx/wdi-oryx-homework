class Bank
  attr_accessor :name, :location, :accounts

  def initialize(name, location, accounts)
    @name = name
    @location = location
    @accounts = accounts
    @newAccount = []
  end

  def create_account(owner, balance)
    @newAccount == BankAccount.new(owner, balance)
    @accounts.push(NewAccount)
  end

  def UpdateAccountName(name, newName)
    @accounts.each do |account|
      if account.owner == name
        account.owner == newName
      end
    end
  end

  def delete_account
  end
end

class BankAccount
  attr_accessor :owner, :balance

  def initialize(name, balance)
    @owner = name
    @balance = balance
    puts @owner
    puts @balance
  end

  def withdraw(money)
    # subtract money from balance

    if money < @balance
      money -= @balance
      puts "You withrew #{money} from your account"
    end
    # throw an error if money is larger than balance
    if amount > @balance
      puts "You CANNOT withrow #{money} from your account; because you don't have enough money"
    end

    def deposit(money)
      # add money to balance
      if @balance += amount
        puts "You have deposited #{money} "
        # raise error if money is negative
      else
        puts "you are not depositing money"
      end
    end

    def transfer
    end
  end
end

bank = Bank.new("Mashael", "Riyadh", "Mashael_Mu")
p bank.create_account("Mashael", 100)
p bank
