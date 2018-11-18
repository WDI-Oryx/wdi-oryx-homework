class Bank
    attr_accessor :name , :location, :accounts

    def initialize(name,location)
        p "this is a bank"

        @name = name 
        @location = location
        @accounts =  []
    end

    def create_account(name,balance)
        @accounts.push(BankAccount.new(name,balance))
    end
end

class BankAccount
    attr_accessor :name , :balance 

    def initialize(name , balance = 0)
        @name = name
        @balance = balance
    end 
end

b =Bank.new("Riyadh Bank","Riyadh",)
jafar_acount = BankAccount.new("Jafar",40000)
p jafar_acount
p b

