
class Bank < BankAccounts
attr_accessor :name, :location, :accounts

def initialize(name, location, accounts)

@name = name
@location = location
@accounts = []
end 

def create_account
    p "Name: #{@name} Location: #{@location} Accounts #{@accounts} "
end 

def total_balance
end

end
bank = Bank.new ("Haya", "Riyadh", "54342187532")
bank.create_account()
bank.total_balance()


class BankAccounts 
    attr_accessor :owner, :balance
    def initialize(owner, balance)
        @owner = owner 
        @balance = balance
    end

    def withdraw 
    end 

    def deposite 
    end
end

account = BankAccounts.new 
account.withdraw()
account.deposit()
