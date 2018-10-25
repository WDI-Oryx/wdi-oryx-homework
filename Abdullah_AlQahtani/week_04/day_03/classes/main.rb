class Bank
    attr_accessor :name , :balance
    def initialize(name)
        @balance = 0
        @name = name
    end

end

class BankAccount < Bank
    def deposit(amount)
        @balance = amount + @balance
        puts "#{@name} Balance: #{@balance}"
    end

    def withdraw(amount)
           if amount < @balance 
            remaining  = @balance -  amount
            puts " You just withdraw #{amount}"
            puts " Your Balance now is: #{remaining}"
           else
            puts " You want to withdraw: #{amount} and you have in your balance: #{@balance}"
           end
           if remaining <= 100
            puts " Low balance, please add funds."
           else
            puts " You are ok"
           end
    end

end

account = BankAccount.new("Falah")
account.deposit(300)
account.withdraw(100)

