# class Bank
#     attr_accessor :name , :balance
#     def initialize(name)
#         @balance = 0
#         @name = name
#     end

# end

# class BankAccount < Bank
#     def deposit(amount)
#         amount = amount + @balance
#         puts "#{@name} Balance: #{amount}"
#     end

#     def withdraw(amount)
#            if amount < @balance 
#             remaining  = @balance -  amount
#             puts " You just withdraw #{amount}"
#             puts " Your Balance now is: #{remaining}"
#            else
#             puts " You want to withdraw: #{amount} and you have in your balance: #{@balance}"
#            end
#            if remaining < 100
#             puts " Low balance, please add funds."
#            end
#     end

# end

# account = BankAccount.new("Falah")
# account.deposit(101)
# account.withdraw(100)

class Bank
    attr_accessor :owner, :account
   
    def initialize(name, balance = 0)
      @ownwer = name
      @balance = balance
      @account = []
    end
   
   
    def create_bank_account()
      puts "Enter your name"
      @owner = gets.chomp
      puts "Enter your balance"
      @balance = gets.chomp
      @account.push(@owner, @balance)
    end
   
    #   def total_balance
   
    #   end
   
    #   def delete_account
    #   end
   end
   
   bank = Bank.new("Razan")
   bank.create_bank_account()
   p @account

