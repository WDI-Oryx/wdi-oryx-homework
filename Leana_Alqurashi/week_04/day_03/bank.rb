class Bank
  attr_accessor :name, :location, :accounts

  def initialize(name, location)
    @name = name
    @location = location
    @accounts = []
  end

  def create_account(info)
    @accounts.push(info)
  end

  def total_balance
    sum = 0
    @accounts.each do |account|
      sum += account[:balance]
    end
    puts "Bank Total Balance is: #{sum}"
  end

  def delete_account(to_be_deleted)
    @accounts.delete_if { |account| account[:owner] == to_be_deleted }

    puts @accounts
  end

  def transfer(from, to, amount)
    @accounts.each do |account|
      if account[:owner] == from
        puts account[:balance] -= amount
      end
      if account[:owner] == to
        puts account[:balance] += amount
      end
    end
  end
end

class BankAccount < Bank
  attr_accessor :owner, :balance

  def initialize(owner, balance)
    @owner = owner
    @balance = balance
  end

  def info
    account_info = {owner: @owner, balance: @balance}
  end

  def withdraw(ammount)
    @balance = @balance - ammount
    puts "You withdrawed #{ammount} SR, your current balance is #{@balance} SR"
  end

  def deposit(ammount)
    @balance = @balance + ammount
    puts "you deposited #{ammount} SR,your current balance is #{@balance} SR "
  end
end

jack = BankAccount.new("jack", 478000)
leana = BankAccount.new("leana", 79000)
razan = BankAccount.new("razan", 50000)
riyadh_bank = Bank.new("Riyadh Bank", "Saudi Arabia")

riyadh_bank.create_account(jack.info)
riyadh_bank.create_account(leana.info)
riyadh_bank.create_account(razan.info)
riyadh_bank.total_balance
puts "all bank accounts"
puts riyadh_bank.accounts
puts "After deleting account: "
riyadh_bank.delete_account("razan")
riyadh_bank.total_balance
puts "accounts before transfer: "
puts riyadh_bank.accounts
riyadh_bank.transfer("leana", "jack", 10)
puts "accounts after transfering 10 SR from Leana to Jack: "
puts riyadh_bank.accounts
# leana.withdraw(200)
# leana.deposit(2000)
# p riyadh_bank
