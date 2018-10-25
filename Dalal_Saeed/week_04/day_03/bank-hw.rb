########### Bank Class ###########
class Bank
  attr_accessor :name, :location, :accounts

  def initialize(name, location)
    puts "The bank is ready!"
    @name = name
    @location = location
    @accounts = []
  end

  def create_account(account)
    @accounts.push(account)
  end

  def total_balance
    # @accounts.each { |ac| total = @accounts.balance}  ###wrong
  end

  def delete_account(account)
    @accounts.each { |ac| @accounts.delete(account) }
  end
end

########### BankAccount Class ###########
class BankAccount
  attr_accessor :owner, :balance

  def initialize(owner, balance)
    puts "The acount is ready!"
    @owner = owner
    @balance = balance
  end

  def withdraw(amount)
    if @balance > amount
      @balance -= amount
      puts "Succssuful!"
      if @balance < 100
        puts "Low balance, please add funds."
      end
    else
      puts "low balance , we can't proceed"
    end
  end

  def deposit(amount)
    @balance += amount
    puts "Succssuful!"
  end

  def print_details
    puts "Acoount Owner :  #{@owner} Balance : #{@balance}"
  end

  def transfer(amount, account)
    if @balance >= amount
      @balance -= amount
      account.balance += amount
      puts "Succssuful!"
      if @balance < 100
        puts "Low balance, please add funds."
      end
    else
      puts "low balance , we can't proceed tr"
    end
  end
end

anbank = Bank.new("ANB", "Saudi Arabia")
dalal_account = BankAccount.new("Dalal", 400)
anbank.create_account(dalal_account)
amal_account = BankAccount.new("Amal", 600)
hosam_account = BankAccount.new("Hosam", 6800)
anbank.create_account(hosam_account)
anbank.create_account(amal_account)

dalal_account.withdraw(100)
dalal_account.print_details()
dalal_account.transfer(300, amal_account)
anbank.delete_account(hosam_account)

dalal_account.print_details()
amal_account.print_details()
