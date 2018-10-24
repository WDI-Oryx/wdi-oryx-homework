require "pry"
# Create a BankAccount with an initial balance and name
# If no initial balance is given, default initial balance should be 0
# Update BankAccount name
class Bank
  attr_accessor :name, :BankAccounts

  def initialize(name)
    @name = name
    @BankAccounts = []
  end

  def delete_acc(acc_id)
    @BankAccounts.delete_if { |acc| acc.id == acc_id }
  end

  def transfer_money(source_id, dist_id, amount)
    sba = @BankAccounts.select { |ba| ba.id == source_id }
    dba = @BankAccounts.select { |ba| ba.id == dist_id }
    if (sba[0].balance > amount)
      sba[0].balance -= amount
      dba[0].balance += amount
    else
      p "operation can`t be completed no enugh money"
    end
  end
end
# alrajhi.transfer_money(112,115,50)
class BankAccount
  attr_accessor :owner, :id, :balance

  def initialize(id, owner, balance = 0)
    @id = id
    @owner = owner
    @balance = balance
  end

  def update_bank_account_id(id)
    @id = id
  end

  def Withdraw(amount)
    if (amount > @balance)
      puts "you can`t Withdraw, there is no enugh blance"
    else
      @balance -= amount
      if (@balance < 100)
        puts "Low balance, please add funds."
      end
    end
  end

  def deposit(amount)
    @balance += amount
    puts "new balance is #{@balance}"
  end

  def print_acc_info
    puts "owner=#{@owner} id=#{@id}  balance=#{@balance}"
  end
end

# Withdraw money
# Takes in the amount to be withdrawn as a parameter and updates the balance when the withdrawal is done
# You should not be able to withdraw more money than you have
# If the BankAccount has a new balance of less than 100, print Low balance, please add funds.

alrajhi = Bank.new("alrajhi")
sultan_acc1 = BankAccount.new(111, "sultan", 10000)
sultan_acc2 = BankAccount.new(112, "sultan", 15000)
sultan_acc3 = BankAccount.new(113, "sultan")
moath_acc1 = BankAccount.new(114, "moath", 50000)
moath_acc2 = BankAccount.new(115, "moath", 8000000)
sultan_acc3.update_bank_account_id(119)
alrajhi.BankAccounts.push(sultan_acc1)
alrajhi.BankAccounts.push(sultan_acc2)
alrajhi.BankAccounts.push(sultan_acc3)
alrajhi.BankAccounts.push(moath_acc1)
alrajhi.BankAccounts.push(moath_acc2)
p alrajhi

binding.pry
