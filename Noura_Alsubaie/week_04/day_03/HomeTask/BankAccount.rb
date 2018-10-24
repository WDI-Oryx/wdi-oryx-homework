
class BankAccount
attr_accessor :owner, :balance

    def initialize ( name, amount)
        @balance=0
        @owner = name
        @balance= balance + amount
        if (@balance < 100)
      puts "Low balance, please add funds."
    end

    end

def deposit(amount)
@balance = @balance +  amount
    
end
def withdraw(amount)
    
    if (amount > @balance)
         puts "The balance available in your account is not enough to complete this process "
    else (amount <= @balance)
        @balance -= amount      

end

def transfer (sender, receiver, amount)
    puts "Enter your name  "
    sender = gets.chomp
    puts "Enter beneficiary's name"
    receiver = gets.chomp
    puts "Enter the amount "
    amount = gets.chomp

    sender.withdraw(amount)
    receiver.deposit(amount) #how to assign it  to specific account

end
end

end

ba= BankAccount.new("Nora", 500)

p ba.withdraw(700)
p ba.deposit(100)
p ba.balance()



class Bank < BankAccount 
    attr_accessor :name, :location, :accounts 
        def initialize(name, location , accounts)
        @name = name 
        @location = location
        accounts = []

    end
def creat_account (newAccount)
    newAccount = BankAccount.new
    accounts.push(newAccount)
end
def delete_account (name)
     name =  @owner
     accounts.pop(@owner)

end
def total_balance
    
end
def change_name(new_name)
    @name = new_name
  end
end