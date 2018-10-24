class Bank
  attr_accessor :name, :location, :accounts

  def initialize(name, location)
    @name = name
    @location = location
    @accounts = []
  end

  def create_account(name = "", balance = 0)
    puts "The name is #{name} and the balance is #{balance}"
    p acc = @accounts.push(name: name, balance: balance)
    # bank_acc = BankAccount.new(name, balance)

  end

  def update_BankAccount_name(newname, index)
    p @accounts[index]
    if @accounts[index]
      p @accounts[index][:name] = newname
    end
  end

  def total_balance
    total = 0
    @accounts.each do |b|
      total += b[:balance]
    end
    p total
  end
end

class BankAccount < Bank
  attr_accessor :owner, :balance

  def initialize(owner, ba)
    @owner = owner
    @balance = balance
  end

  def withdraw(withdraw)
    if @balance > withdraw
      p @balance -= withdraw
      if @balance < 100
        p "Low balance, please add funds."
      end
    end
  end

  def deposit(deposit)
    p @balance += deposit
  end

  #   Have a method that prints the name and balance of that BankAccount
  #   def show_bankaccount(id)
  #     @accounts.select { |x| puts "#{@owner} and #{balance}" if x == @owner }
  #   end
end

newacc = Bank.new("alrajhi", "Riyadh")
newacc.create_account("thekra", 17)
new_name = newacc.create_account("abdullah", 21)
newacc.total_balance
new_name = newacc.update_BankAccount_name("maha", 0)
p newacc
