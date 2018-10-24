#class Bank

# attr_reader :name, :location, :accounts

#def create_account (name,location,accounts)

#@name = name
#@location = location
#@accounts =[]

#end
#def total_blance ()

#end

#def delete_account()

#end

#end

#a = Bank.new()
#a.total_blance()
#a.create_account()
#a.delete_account()

#class Bank_Account < Bank

# attr_reader :owner, :balance, :

#def withdraw(owner, balance)
# if money2 <= Money
#  @balance -= amount
# puts "Withdrew #{amount}. New balance: $#{@balance}."
#end
#end

#def deposit(owner, balance)
# if money2 <= Money
#  @balance += amount
# puts "Deposit #{amount}. New Balance: $#{@balance}."
#end
#end

#b=Bank_Account.new()
#b.withdraw()
#b.deposit()
#b.accounts()

class Account
  attr_reader :name, :balance

  def initialize(name, balance = 100)
    @name = name
    @balance = balance
  end

  def Money
    @Money = 100
  end

  def Money_less(money2)
    @money2 = money2
    if money2 <= Money
      p "Low balance, please add funds. "
    end
  end

  def display_balance(money2)
    if money2 <= Money
      puts "#{@name}, your Balance is: $#{@balance}"
    end
  end

  def withdraw(money2, amount)
    if money2 <= Money
      @balance -= amount
      puts "Withdrew #{amount}. New balance: $#{@balance}"
    end
  end

  def deposit(money2, amount)
    if money2 <= Money
      @balance += amount
      puts "Deposit #{amount}. New Balance: $#{@balance}"
    end
  end
end

account0 = Account.new("SARAH", 1_000_000_000)
account1 = Account.new("Hilah", 1_200)
account2 = Account.new("Muneef", 4_330)
account3 = Account.new("Naif", 18_000)

account0.display_balance(1_000)
account1.display_balance(2_000)
account2.display_balance(50)
account3.display_balance(1_900)
