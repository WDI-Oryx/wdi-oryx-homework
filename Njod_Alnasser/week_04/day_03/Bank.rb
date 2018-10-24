# puts "hello"

#1- Bank class 

class Bank
    attr_accessor :name, :location, :acounts
  
    def initialize name, location
      @name = name
      @location = location
      @accounts = []
    end

#2- Create a BankAccount

    def create_account name, balance = 0
      puts "New account has been created and added to the list"
      new_account = BankAccount.new(name, balance)
      @accounts.push(new_account)
      puts new_account
    end

#3- Update BankAccount 

    def update_account_name oldName, newName 
      account_change = @accounts.find { |account| account.owner == oldName }
      account_change.owner = newName
      puts account_change
    end

  end

# BankAccount class

class Bank_Accounts

    attr_accessor :owner, :balance

    def initialize owner, balance = 0
      @owner = owner
      @balance = balance
    end

    # Withdraw money
     def withdraw money 
      @balance = @balance - money
      if @balance < 100
        puts "Low balance, please add funds."
      end
    end
    
    # Deposit money
     def deposit money
      @balance = @balance + money
    end
    
    # prints the name and balance of that BankAccount
     def account_info
      puts "Account owner: #{@owner}| Balance: #{@balance}"
    end
  end


