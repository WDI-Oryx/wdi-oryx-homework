
require "pry"

class Bank 
    attr_accessor :name , :location , :accounts
    def initialize(name,location)
        @name = name
        @location = location
        @accounts = []
    end
    def make_account (name ,balance)
        @accounts.push(BankAccount.new(name,balance))
    end

end


class BankAccount
    attr_accessor :name , :balance 

    def initialize(name , balance = 0)
        @name = name
        @balance = balance
    end
    def  withdraw (take = 0)
        if take <= @balance
            @balance -= take
            puts "You withdraw #{take}" 
            if @balance < 100
                puts "low balance "
            end
        end
    end

    def deposit (give =0)
        @balance += give
        puts "You deposit #{give}"
    end
    def printAccount()
    puts "name : #{name} , balance : #{balance}"
        
        
    end

 
end

nameOfBank = Bank.new("SAB","Riyadh")
account_mansour=  nameOfBank.make_account("Mansour",345) 
account_ali = nameOfBank.make_account("Ali",300)
account_fahd = nameOfBank.make_account("Fahd",1000)


nameOfBank.accounts.each do |x|
    puts x.printAccount()
end


# binding.pry